/**
 * Sync assets from parent Techwix folder to next-app/public/assets
 * Run from next-app: node sync-assets.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "assets");
const DEST = path.join(__dirname, "public", "assets");

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn("Not found:", src);
    return;
  }
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const name of fs.readdirSync(src)) {
      copyRecursive(path.join(src, name), path.join(dest, name));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

if (!fs.existsSync(SRC)) {
  console.error("Source directory not found:", SRC);
  process.exit(1);
}

console.log("Syncing", SRC, "->", DEST);
copyRecursive(SRC, DEST);

// Overwrite include-layout.js with root-relative URLs for Next
const includeLayoutNext = `function loadFragment(targetId, url) {
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

function applyLanguage(lang) {
    if (lang !== 'vi' && lang !== 'en') {
        lang = 'en';
    }
    try {
        localStorage.setItem('selectedLang', lang);
    } catch (e) { }

    document.documentElement.setAttribute('lang', lang);

    var titles = {
        vi: 'CÔNG TY TNHH DT VÀ PT PM SÁNG TẠO VIỆT NAM',
        en: 'VIETNAM CREATIVE SOFTWARE & INVESTMENT CO., LTD'
    };
    document.title = titles[lang] || titles.en;

    var searchInput = document.querySelector('.main-search-input');
    if (searchInput) {
        searchInput.placeholder = lang === 'vi' ? 'Tìm kiếm...' : 'Search Your Keyword...';
    }

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
        savedLang = localStorage.getItem('selectedLang') || 'en';
    } catch (e) {
        savedLang = 'en';
    }

    if (savedLang !== 'vi' && savedLang !== 'en') {
        savedLang = 'en';
    }

    applyLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var lang = this.getAttribute('data-lang');
            applyLanguage(lang);
        });
    });
}

function initLayout() {
    Promise.all([
        loadFragment('site-header', '/header.html'),
        loadFragment('site-footer', '/footer.html')
    ]).then(function () {
        initLanguageSwitcher();
    }).catch(function (err) {
        console.error(err);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLayout);
} else {
    initLayout();
}
`;

const includePath = path.join(DEST, "js", "include-layout.js");
if (fs.existsSync(path.dirname(includePath))) {
  fs.writeFileSync(includePath, includeLayoutNext, "utf8");
  console.log("Updated public/assets/js/include-layout.js for Next.js");
}

console.log("Done. Run npm run dev and open http://localhost:3000");
