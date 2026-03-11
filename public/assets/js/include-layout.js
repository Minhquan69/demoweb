function loadFragment(targetId, url) {
    return fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Failed to load ' + url + ': ' + response.status);
            }
            return response.text();
        })
        .then(function (html) {
            var container = document.getElementById(targetId);
            if (container) {
                container.innerHTML = html;
            }
        });
}

function updateFormPlaceholders(lang) {
    document.querySelectorAll('input[data-placeholder-vi], textarea[data-placeholder-vi]').forEach(function (el) {
        var vi = el.getAttribute('data-placeholder-vi') || '';
        var en = el.getAttribute('data-placeholder-en') || vi;
        el.placeholder = lang === 'vi' ? vi : en;
    });
}

function applyLanguage(lang) {
    if (lang !== 'vi' && lang !== 'en') {
        lang = 'vi';
    }
    try {
        localStorage.setItem('selectedLang', lang);
    } catch (e) { }

    document.documentElement.setAttribute('lang', lang);

    var titles = {
        vi: 'Công ty Cổ phần iVista Tech',
        en: 'iVista Tech Joint Stock Company'
    };
    document.title = titles[lang] || titles.vi;

    var searchInput = document.querySelector('.main-search-input');
    if (searchInput) {
        searchInput.placeholder = lang === 'vi' ? 'Tìm kiếm...' : 'Search Your Keyword...';
    }

    // Update form placeholders based on language
    updateFormPlaceholders(lang);

    document.querySelectorAll('[data-lang]:not(.lang-btn)').forEach(function (el) {
        el.classList.add('lang-hidden');
    });

    document.querySelectorAll('[data-lang="' + lang + '"]:not(.lang-btn)').forEach(function (el) {
        el.classList.remove('lang-hidden');
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

function initLanguageSwitcher() {
    var savedLang;
    try {
        savedLang = localStorage.getItem('selectedLang') || 'vi';
    } catch (e) {
        savedLang = 'vi';
    }

    if (savedLang !== 'vi' && savedLang !== 'en') {
        savedLang = 'vi';
    }

    // Áp dụng ngay lần đầu
    applyLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var lang = this.getAttribute('data-lang');
            applyLanguage(lang);
        });
    });
}

function getInitialTheme() {
    try {
        var saved = localStorage.getItem('selectedTheme');
        if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) { }
    try {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
    } catch (e) { }
    return 'light';
}

function applyTheme(theme) {
    if (theme !== 'light' && theme !== 'dark') theme = 'light';
    try {
        localStorage.setItem('selectedTheme', theme);
    } catch (e) { }
    document.documentElement.setAttribute('data-theme', theme);

    document.querySelectorAll('.theme-btn').forEach(function (btn) {
        btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        btn.classList.toggle('is-dark', theme === 'dark');
    });

    // Swap logo variants based on theme:
    // light  -> use *_1 versions (logo_1, logo-white_1, logo-2_1, logo-3_1)
    // dark   -> use base versions without _1 suffix
    try {
        // Match all site logo variants under /assets/images/logo*
        var logoSelectors = [
            'img[src*=\"/assets/images/logo\"]'
        ];
        document.querySelectorAll(logoSelectors.join(',')).forEach(function (img) {
            var src = img.getAttribute('src') || '';
            if (!src) return;
            var hasSuffix = src.indexOf('_1.') !== -1;
            if (theme === 'dark') {
                if (hasSuffix) {
                    img.setAttribute('src', src.replace('_1.', '.'));
                }
            } else {
                if (!hasSuffix) {
                    img.setAttribute('src', src.replace(/(\.[a-zA-Z0-9]+)$/, '_1$1'));
                }
            }
        });
    } catch (e) { }
}

function initThemeToggle() {
    applyTheme(getInitialTheme());
    document.querySelectorAll('.theme-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var current = document.documentElement.getAttribute('data-theme') || 'light';
            applyTheme(current === 'dark' ? 'light' : 'dark');
        });
    });
}

function setActiveMenu() {
    function getLocationKey() {
        var path = window.location.pathname || '/';
        var hash = window.location.hash || '';

        if (path === '/' || path === '') {
            if (hash === '#about') return 'about';
            if (hash === '#services') return 'services';
            if (hash === '#solutions') return 'solutions';
            if (hash === '#contact') return 'contact';
            return 'home';
        }
        if (path === '/about') return 'about';
        if (path === '/service') return 'services';
        if (path === '/choose-us') return 'solutions';
        if (path === '/products' || path.indexOf('/product-details') === 0) return 'products';
        if (path === '/contact') return 'contact';
        return 'home';
    }

    function getLinkKey(href) {
        if (!href) return null;
        try {
            var u = new URL(href, window.location.origin);
            var path = u.pathname || '/';
            var hash = u.hash || '';

            if (path === '/' || path === '') {
                // Backward-compat: if user manually visits hash sections on Home
                if (hash === '#about') return 'about';
                if (hash === '#services') return 'services';
                if (hash === '#solutions') return 'solutions';
                if (hash === '#contact') return 'contact';
                return 'home';
            }
            if (path === '/about') return 'about';
            if (path === '/service') return 'services';
            if (path === '/choose-us') return 'solutions';
            if (path === '/products') return 'products';
            if (path === '/contact') return 'contact';
            return null;
        } catch (e) {
            return null;
        }
    }

    var currentKey = getLocationKey();

    ['.header-menu', '.offcanvas-menu'].forEach(function (selector) {
        var container = document.querySelector(selector);
        if (!container) return;
        var items = container.querySelectorAll('.main-menu li');
        items.forEach(function (li) {
            li.classList.remove('active-menu');
        });
        var links = container.querySelectorAll('.main-menu li > a');
        var matched = null;
        links.forEach(function (a) {
            var href = a.getAttribute('href') || '';
            var key = getLinkKey(href);
            if (!matched && key && key === currentKey) {
                matched = a.parentElement;
            }
        });
        if (matched) {
            matched.classList.add('active-menu');
        }
    });
}

// Expose để Next.js client component có thể gọi lại khi đổi route
if (typeof window !== 'undefined') {
    window.setActiveMenu = setActiveMenu;
}

function initLayout() {
    Promise.all([
        loadFragment('site-header', '/header.html'),
        loadFragment('site-footer', '/footer.html')
    ]).then(function () {
        initLanguageSwitcher();
        initThemeToggle();
        setActiveMenu();

        // Ensure offcanvas (mobile) menu links always navigate
        try {
            if (!window.__twxOffcanvasNavInit) {
                window.__twxOffcanvasNavInit = true;
                document.addEventListener('click', function (e) {
                    var t = e.target;
                    if (!t) return;
                    var a = t.closest ? t.closest('.offcanvas-menu .main-menu a') : null;
                    if (!a) return;
                    var href = a.getAttribute('href') || '';
                    if (!href || href === '#') return;

                    // Close offcanvas if open
                    try {
                        var offcanvasEl = document.getElementById('offcanvasExample');
                        if (offcanvasEl && window.bootstrap && window.bootstrap.Offcanvas) {
                            var inst = window.bootstrap.Offcanvas.getInstance(offcanvasEl);
                            if (inst) inst.hide();
                        }
                    } catch (e2) { }

                    e.preventDefault();
                    window.location.href = href;
                }, true);
            }
        } catch (e) { }
        // Khi Next.js chuyển trang (client-side), form có thể được render sau.
        // Quan sát DOM để cập nhật lại placeholder cho các field mới xuất hiện.
        try {
            var pending = null;
            var observer = new MutationObserver(function (mutations) {
                // Debounce + only react when inputs/textareas/selects are added
                var shouldRun = false;
                for (var i = 0; i < mutations.length; i++) {
                    var m = mutations[i];
                    if (!m.addedNodes || m.addedNodes.length === 0) continue;
                    for (var j = 0; j < m.addedNodes.length; j++) {
                        var n = m.addedNodes[j];
                        if (!n || n.nodeType !== 1) continue;
                        if (n.matches && (n.matches('input, textarea, select') || n.querySelector('input, textarea, select'))) {
                            shouldRun = true;
                            break;
                        }
                    }
                    if (shouldRun) break;
                }
                if (!shouldRun) return;
                if (pending) clearTimeout(pending);
                pending = setTimeout(function () {
                    pending = null;
                    var currentLang = document.documentElement.getAttribute('lang') || 'vi';
                    updateFormPlaceholders(currentLang);
                }, 120);
            });
            observer.observe(document.body, { childList: true, subtree: true });
        } catch (e) {
            // MutationObserver không khả dụng, bỏ qua.
        }
        // Cập nhật active-menu khi click menu hoặc đổi hash
        var allLinks = document.querySelectorAll('.header-menu .main-menu a, .offcanvas-menu .main-menu a');
        allLinks.forEach(function (a) {
            a.addEventListener('click', function () {
                setTimeout(setActiveMenu, 0);
            });
        });
        window.addEventListener('hashchange', function () {
            setActiveMenu();
        });
    }).catch(function (err) {
        console.error(err);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLayout);
} else {
    initLayout();
}
