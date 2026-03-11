    "use strict";


    /*--
        preloader
    -----------------------------------*/
    (function () {
        function hidePreloader() {
            var el = document.getElementById('preloader');
            if (!el) return;
            // mimic old behavior: delay 500ms then fade out 500ms
            window.setTimeout(function () {
                // stop blocking clicks immediately
                el.style.pointerEvents = 'none';
                el.style.transition = 'opacity 500ms ease';
                el.style.opacity = '0';
                window.setTimeout(function () {
                    el.style.display = 'none';
                }, 520);
            }, 500);
        }

        if (document.readyState === 'complete') {
            hidePreloader();
        } else {
            window.addEventListener('load', hidePreloader);
        }

        // hard fallback: never let preloader block UI
        window.setTimeout(function () {
            var el = document.getElementById('preloader');
            if (!el) return;
            el.style.pointerEvents = 'none';
            el.style.opacity = '0';
            el.style.display = 'none';
        }, 3000);
    })();

    /*--
        Header Sticky
    -----------------------------------*/

    window.onscroll = function () {
        const left = document.getElementById("header");
        if (!left) return;
        if (window.pageYOffset > 50) {
            left.classList.add("sticky");
        } else {
            left.classList.remove("sticky");
        }
    };    

    
    /*--
        Menu parent Element Icon
    -----------------------------------*/
    const $subMenu = document.querySelectorAll('.sub-menu');
    $subMenu.forEach(function (subMenu) {
        const menuExpand = document.createElement('span')
        menuExpand.classList.add('menu-icon')
        // menuExpand.innerHTML = '+'
        subMenu.parentElement.insertBefore(menuExpand, subMenu)
        if (subMenu.classList.contains('mega-menu')) {
            subMenu.classList.remove('mega-menu')
            subMenu.querySelectorAll('ul').forEach(function (ul) {
                ul.classList.add('sub-menu')
                const menuExpand = document.createElement('span')
                menuExpand.classList.add('menu-icon')
                menuExpand.innerHTML = '+'
                ul.parentElement.insertBefore(menuExpand, ul)
            })
        }
    })

    /*--
        Search Js
    -----------------------------------*/
	var $searchWrap = $('.search-wrap');
	var $navSearch = $('.search-btn');
	var $searchClose = $('#search-close');

	$('.search-btn').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).addClass("open");
	});

	$('.search-close').on('click', function (e) {
		e.preventDefault();
		$searchWrap.animate({ opacity: 'toggle' }, 500);
		$navSearch.add($searchClose).removeClass("open");
	});

	function closeSearch() {
		$searchWrap.fadeOut(200);
		$navSearch.add($searchClose).removeClass("open");
	}

	$(document.body).on('click', function (e) {
		closeSearch();
	});

	$(".search-btn, .main-search-input").on('click', function (e) {
		e.stopPropagation();
	});

        
    /*--
        Mobile Menu 
    -----------------------------------*/

    /* Get Sibling */
    const getSiblings = function (elem) {
        const siblings = []
        let sibling = elem.parentNode.firstChild
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem) {
                siblings.push(sibling)
            }
            sibling = sibling.nextSibling
        }
        return siblings
    }

    /* Slide Up */
    const slideUp = (target, time) => {
        const duration = time ? time : 500;
        target.style.transitionProperty = 'height, margin, padding'
        target.style.transitionDuration = duration + 'ms'
        target.style.boxSizing = 'border-box'
        target.style.height = target.offsetHeight + 'px'
        target.offsetHeight
        target.style.overflow = 'hidden'
        target.style.height = 0
        window.setTimeout(() => {
            target.style.display = 'none'
            target.style.removeProperty('height')
            target.style.removeProperty('overflow')
            target.style.removeProperty('transition-duration')
            target.style.removeProperty('transition-property')
        }, duration)
    }

    /* Slide Down */
    const slideDown = (target, time) => {
        const duration = time ? time : 500;
        target.style.removeProperty('display')
        let display = window.getComputedStyle(target).display
        if (display === 'none') display = 'block'
        target.style.display = display
        const height = target.offsetHeight
        target.style.overflow = 'hidden'
        target.style.height = 0
        target.offsetHeight
        target.style.boxSizing = 'border-box'
        target.style.transitionProperty = 'height, margin, padding'
        target.style.transitionDuration = duration + 'ms'
        target.style.height = height + 'px'
        window.setTimeout(() => {
            target.style.removeProperty('height')
            target.style.removeProperty('overflow')
            target.style.removeProperty('transition-duration')
            target.style.removeProperty('transition-property')
        }, duration)
    }

    /* Slide Toggle */
    const slideToggle = (target, time) => {
        const duration = time ? time : 500;
        if (window.getComputedStyle(target).display === 'none') {
            return slideDown(target, duration)
        } else {
            return slideUp(target, duration)
        }
    }


    /*--
		Offcanvas/Collapseable Menu 
	-----------------------------------*/
    const offCanvasMenu = function (selector) {

        const $offCanvasNav = document.querySelector(selector),
            $subMenu = $offCanvasNav.querySelectorAll('.sub-menu');
        $subMenu.forEach(function (subMenu) {
            const menuExpand = document.createElement('span')
            menuExpand.classList.add('menu-expand')
            // menuExpand.innerHTML = '+'
            subMenu.parentElement.insertBefore(menuExpand, subMenu)
            if (subMenu.classList.contains('mega-menu')) {
                subMenu.classList.remove('mega-menu')
                subMenu.querySelectorAll('ul').forEach(function (ul) {
                    ul.classList.add('sub-menu')
                    const menuExpand = document.createElement('span')
                    menuExpand.classList.add('menu-expand')
                    menuExpand.innerHTML = '+'
                    ul.parentElement.insertBefore(menuExpand, ul)
                })
            }
        })

        $offCanvasNav.querySelectorAll('.menu-expand').forEach(function (item) {
            item.addEventListener('click', function (e) {
                e.preventDefault()
                const parent = this.parentElement
                if (parent.classList.contains('active')) {
                    parent.classList.remove('active');
                    parent.querySelectorAll('.sub-menu').forEach(function (subMenu) {
                        subMenu.parentElement.classList.remove('active');
                        slideUp(subMenu)
                    })
                } else {
                    parent.classList.add('active');
                    slideDown(this.nextElementSibling)
                    getSiblings(parent).forEach(function (item) {
                        item.classList.remove('active')
                        item.querySelectorAll('.sub-menu').forEach(function (subMenu) {
                            subMenu.parentElement.classList.remove('active');
                            slideUp(subMenu)
                        })
                    })
                }
            })
        })
    }
    offCanvasMenu('.offcanvas-menu');

  /*--
    magnificPopup video view - chuẩn hóa youtu.be / watch → embed rồi mở iframe
  -----------------------------------*/	
	function getYoutubeEmbedUrl(url) {
		if (!url) return '#';
		var id = null;
		// youtu.be/VIDEO_ID?si=...
		var m = url.match(/(?:youtu\.be\/)([a-zA-Z0-9_-]+)/);
		if (m) id = m[1];
		// youtube.com/watch?v=VIDEO_ID
		if (!id) { m = url.match(/(?:v=)([a-zA-Z0-9_-]+)/); if (m) id = m[1]; }
		if (!id) { m = url.match(/(?:embed\/)([a-zA-Z0-9_-]+)/); if (m) id = m[1]; }
		if (!id) return url;
		var origin = '';
		try { origin = '&origin=' + encodeURIComponent(window.location.origin); } catch (e) {}
		return 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&modestbranding=1&playsinline=1' + origin;
	}
	$('.popup-video').each(function() {
		this.href = getYoutubeEmbedUrl(this.href);
	});
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

    /*--
        Counter (SPA-safe): animate when visible
        Works for Home/About when navigating without full reload.
    -----------------------------------*/
    (function () {
        // Ensure we only initialize once (Next.js app can keep scripts across routes)
        try {
            if (window.__twxAnimateInit === true) return;
            window.__twxAnimateInit = true;
        } catch (e) {}

        function parseNumber(text) {
            if (text == null) return null;
            var t = String(text).trim().replace(/,/g, '');
            if (t === '') return null;
            var n = Number(t);
            return Number.isFinite(n) ? n : null;
        }

        function isVisible(el) {
            if (!el || !el.getBoundingClientRect) return false;
            var r = el.getBoundingClientRect();
            var vh = window.innerHeight || document.documentElement.clientHeight || 0;
            if (!vh) return true;
            // consider visible if at least 25% of element height is within viewport
            var h = Math.max(1, r.height || 1);
            var visiblePx = Math.min(r.bottom, vh) - Math.max(r.top, 0);
            return visiblePx / h >= 0.25;
        }

        function animateCounter(el) {
            if (!el || el.dataset.counterAnimated === '1') return;
            var target = el.dataset.counterTarget ? parseNumber(el.dataset.counterTarget) : parseNumber(el.textContent);
            if (target == null) return;

            el.dataset.counterAnimated = '1';
            el.dataset.counterTarget = String(target);
            var duration = 1500;
            var start = 0;
            var startTime = null;

            function step(ts) {
                if (startTime == null) startTime = ts;
                var p = Math.min(1, (ts - startTime) / duration);
                // easeOutCubic
                var eased = 1 - Math.pow(1 - p, 3);
                var val = Math.round(start + (target - start) * eased);
                el.textContent = String(val);
                if (p < 1) {
                    requestAnimationFrame(step);
                } else {
                    // đảm bảo luôn kết thúc đúng giá trị đích
                    el.textContent = String(target);
                }
            }

            el.textContent = '0';
            requestAnimationFrame(step);
        }

        function observeCounters(root) {
            var scope = root || document;
            var counters = scope.querySelectorAll ? scope.querySelectorAll('.counter') : [];
            if (!counters || counters.length === 0) return;

            // Nếu đã từng animate nhưng hiện đang là 0 trong khi có target, khôi phục về target
            counters.forEach(function (el) {
                if (el.dataset && el.dataset.counterAnimated === '1' && el.dataset.counterTarget) {
                    var current = parseNumber(el.textContent);
                    var target = parseNumber(el.dataset.counterTarget);
                    if (target != null && (current == null || current === 0)) {
                        el.textContent = String(target);
                    }
                }
            });

            // If already visible (e.g. direct navigation), animate immediately
            counters.forEach(function (el) {
                if (el.dataset.counterAnimated === '1') return;
                if (isVisible(el)) animateCounter(el);
            });

            // Use IntersectionObserver when available; otherwise fallback to scroll check
            if ('IntersectionObserver' in window) {
                var io = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            animateCounter(entry.target);
                            io.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.25 });

                counters.forEach(function (el) {
                    if (el.dataset.counterObserved === '1') return;
                    el.dataset.counterObserved = '1';
                    io.observe(el);
                });
            } else {
                var onScroll = function () {
                    var list = document.querySelectorAll('.counter');
                    for (var i = 0; i < list.length; i++) {
                        var el = list[i];
                        if (el.dataset.counterAnimated === '1') continue;
                        if (isVisible(el)) animateCounter(el);
                    }
                };
                window.addEventListener('scroll', onScroll, { passive: true });
                window.addEventListener('resize', onScroll);
                onScroll();
            }
        }

        function animateProgressLine(el) {
            if (!el || el.dataset.progressAnimated === '1') return;
            var w = el.getAttribute('data-width');
            if (w == null || w === '') return;
            el.dataset.progressAnimated = '1';

            // If not set, start from 0 for a visible "fill" animation
            if (!el.style.width || el.style.width === '0px') {
                el.style.width = '0%';
            }
            // allow layout flush
            window.setTimeout(function () {
                el.style.width = String(w) + '%';
            }, 30);
        }

        function observeProgressLines(root) {
            var scope = root || document;
            var lines = scope.querySelectorAll ? scope.querySelectorAll('.progress-line[data-width]') : [];
            if (!lines || lines.length === 0) return;

            // immediate if visible
            lines.forEach(function (el) {
                if (el.dataset.progressAnimated === '1') return;
                if (isVisible(el)) animateProgressLine(el);
            });

            if ('IntersectionObserver' in window) {
                var io = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            animateProgressLine(entry.target);
                            io.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.25 });

                lines.forEach(function (el) {
                    if (el.dataset.progressObserved === '1') return;
                    el.dataset.progressObserved = '1';
                    io.observe(el);
                });
            } else {
                var onScroll = function () {
                    var list = document.querySelectorAll('.progress-line[data-width]');
                    for (var i = 0; i < list.length; i++) {
                        var el = list[i];
                        if (el.dataset.progressAnimated === '1') continue;
                        if (isVisible(el)) animateProgressLine(el);
                    }
                };
                window.addEventListener('scroll', onScroll, { passive: true });
                window.addEventListener('resize', onScroll);
                onScroll();
            }
        }

        // initial
        observeCounters(document);
        observeProgressLines(document);

        function scheduleRescan() {
            window.setTimeout(function () { observeCounters(document); }, 50);
            window.setTimeout(function () { observeCounters(document); }, 250);
            window.setTimeout(function () { observeCounters(document); }, 800);
            window.setTimeout(function () { observeProgressLines(document); }, 50);
            window.setTimeout(function () { observeProgressLines(document); }, 250);
            window.setTimeout(function () { observeProgressLines(document); }, 800);

            // Re-init Swiper instances for new route DOM (Next.js client navigation)
            window.setTimeout(function () { if (window.__twxInitSwipers) window.__twxInitSwipers(); }, 50);
            window.setTimeout(function () { if (window.__twxInitSwipers) window.__twxInitSwipers(); }, 250);
        }

        // watch for client-side navigation / dynamic content
        if ('MutationObserver' in window) {
            var mo = new MutationObserver(function (mutations) {
                for (var i = 0; i < mutations.length; i++) {
                    var m = mutations[i];
                    if (m.addedNodes && m.addedNodes.length) {
                        for (var j = 0; j < m.addedNodes.length; j++) {
                            var node = m.addedNodes[j];
                            if (node && node.nodeType === 1) {
                                observeCounters(node);
                                observeProgressLines(node);
                            }
                        }
                    }
                }
            });
            mo.observe(document.body, { childList: true, subtree: true });
        }

        // also react to history navigation (Next.js client routing)
        try {
            window.addEventListener('popstate', scheduleRescan);
            window.addEventListener('hashchange', scheduleRescan);
            window.addEventListener('load', scheduleRescan);
            var _pushState = history.pushState;
            history.pushState = function () {
                _pushState.apply(this, arguments);
                scheduleRescan();
            };
            var _replaceState = history.replaceState;
            history.replaceState = function () {
                _replaceState.apply(this, arguments);
                scheduleRescan();
            };
        } catch (e) {}
    })();

  
 
    /*--
        Swiper (SPA-safe): init per page DOM
        Next.js App Router swaps page content without full reload, so we need to (re)init Swiper
        for containers that appear after navigation (/choose-us, /products, ...).
    -----------------------------------*/
    (function () {
        function initOne(el, options) {
            try {
                if (!el) return;
                // Swiper attaches instance to element as `el.swiper`
                if (el.swiper) return;
                // eslint-disable-next-line no-new
                new Swiper(el, options);
            } catch (e) { }
        }

        function initSwipers() {
            try {
                // Case study
                document.querySelectorAll('.case-study-active').forEach(function (el) {
                    var paginationEl = el.querySelector('.swiper-pagination');
                    initOne(el, {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        centeredSlides: true,
                        loop: true,
                        pagination: paginationEl ? { el: paginationEl, clickable: true } : undefined,
                        breakpoints: {
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            992: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }
                    });
                });

                // Testimonial 1
                document.querySelectorAll('.testimonial-active').forEach(function (el) {
                    initOne(el, { slidesPerView: 1, spaceBetween: 30, loop: true });
                });

                // Testimonial 2
                document.querySelectorAll('.testimonial-02-active').forEach(function (el) {
                    var paginationEl = el.querySelector('.swiper-pagination');
                    initOne(el, {
                        slidesPerView: 2,
                        spaceBetween: 130,
                        loop: true,
                        pagination: paginationEl ? { el: paginationEl, clickable: true } : undefined,
                        breakpoints: {
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 1, spaceBetween: 20 },
                            768: { slidesPerView: 1 },
                            992: { slidesPerView: 1 },
                            1400: { slidesPerView: 2 },
                        }
                    });
                });

                // Brand
                document.querySelectorAll('.brand-active .swiper-container').forEach(function (el) {
                    initOne(el, {
                        slidesPerView: 5,
                        spaceBetween: 30,
                        loop: true,
                        breakpoints: {
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 2, spaceBetween: 20 },
                            768: { slidesPerView: 3 },
                            992: { slidesPerView: 5 },
                        }
                    });
                });

                // Team
                document.querySelectorAll('.team-active').forEach(function (el) {
                    var paginationEl = el.querySelector('.swiper-pagination');
                    initOne(el, {
                        slidesPerView: 4,
                        loop: true,
                        pagination: paginationEl ? { el: paginationEl, clickable: true } : undefined,
                        breakpoints: {
                            0: { slidesPerView: 1 },
                            576: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            992: { slidesPerView: 4 },
                        }
                    });
                });

                // Hero carousel
                document.querySelectorAll('.hero-carousel-active').forEach(function (el) {
                    var paginationEl = el.querySelector('.swiper-pagination');
                    var nextEl = el.querySelector('.hero-carousel-btn-next');
                    var prevEl = el.querySelector('.hero-carousel-btn-prev');
                    initOne(el, {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        loop: true,
                        autoplay: { delay: 5000, disableOnInteraction: false },
                        pagination: paginationEl ? { el: paginationEl, clickable: true } : undefined,
                        navigation: (nextEl && prevEl) ? { nextEl: nextEl, prevEl: prevEl } : undefined,
                    });
                });
            } catch (e) { }
        }

        // expose + init now
        try { window.__twxInitSwipers = initSwipers; } catch (e) { }
        initSwipers();
    })();

    /*--
      Progress Bar
  -----------------------------------*/

    if($('.progress-line').length) {
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent+'%');
        }, {accY: 0});
    }



    /*--
        AOS
    -----------------------------------*/   
    AOS.init({
        duration: 1200,
        once: true,
    });




