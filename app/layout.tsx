import Script from "next/script";
import React from "react";
import MenuHighlighter from "./components/MenuHighlighter";
import "./globals.css";

export const metadata = {
  title: "iVista Tech - Công ty Cổ phần iVista Tech",
  description: "iVista Tech Joint Stock Company - AI technology company focused on deploying computer vision, LLM, and data solutions for enterprises.",
  robots: "noindex, follow",
};

const layoutLinks = (
  <>
    <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon_1.png" />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function () {
            try {
              var t = localStorage.getItem('selectedTheme');
              if (t !== 'light' && t !== 'dark') {
                t = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
              }
              document.documentElement.setAttribute('data-theme', t);
            } catch (e) {}
          })();
        `,
      }}
    />
    <link rel="stylesheet" href="/assets/css/plugins/all.min.css" />
    <link rel="stylesheet" href="/assets/css/plugins/flaticon.css" />
    <link rel="stylesheet" href="/assets/css/plugins/bootstrap.min.css" />
    <link rel="stylesheet" href="/assets/css/plugins/swiper-bundle.min.css" />
    <link rel="stylesheet" href="/assets/css/plugins/aos.css" />
    <link rel="stylesheet" href="/assets/css/plugins/magnific-popup.css" />
    <link rel="stylesheet" href="/assets/css/style.css" />
    <style dangerouslySetInnerHTML={{ __html: `
      .header-language-switcher { display: flex; align-items: center; gap: 5px; margin-right: 15px; }
      .lang-btn { background: none; border: none; color: #333; cursor: pointer; font-size: 14px; font-weight: 500; padding: 5px 10px; transition: color 0.3s; }
      .lang-btn:hover { color: #007bff; }
      .lang-btn.active { color: #007bff; font-weight: 700; }
      .lang-hidden { display: none !important; }
      html[lang="en"] [data-lang="vi"]:not(.lang-btn) { display: none !important; }
      html[lang="vi"] [data-lang="en"]:not(.lang-btn) { display: none !important; }
      html { scroll-behavior: smooth; }
      .main-wrapper p,
      .main-wrapper .text,
      .about-content p,
      .about-content .title,
      .about-text p,
      .about-list-item p,
      .about-list-item-03 p,
      .service-content p,
      .choose-us-content p,
      .skill-left .text,
      .skill-right .text,
      .experience-text p,
      .testimonial-content p,
      .single-testimonial-02 .testimonial-content p,
      .blog-content .text,
      .single-blog .text { text-align: justify; }
    `}} />
  </>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="no-js" lang="vi" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {layoutLinks}
      </head>
      <body>
        <div className="main-wrapper">
          <MenuHighlighter />
          {/* Preloader */}
          <div id="preloader">
            <div className="preloader">
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Header (injected by include-layout.js) */}
          <div id="site-header"></div>

          {/* Offcanvas */}
          <div className="offcanvas offcanvas-start" id="offcanvasExample">
            <div className="offcanvas-header">
              <div className="offcanvas-logo">
                <a href="/"><img src="/assets/images/logo-white_1.png" alt="" /></a>
              </div>
              <button type="button" className="close-btn" data-bs-dismiss="offcanvas"><i className="flaticon-close"></i></button>
            </div>
            <div className="offcanvas-body">
              <div className="offcanvas-menu">
                <ul className="main-menu">
                  <li>
                    <a href="/" data-bs-dismiss="offcanvas"><span data-lang="vi">Trang chủ</span><span data-lang="en">Home</span></a>
                  </li>
                  <li>
                    <a href="/about" data-bs-dismiss="offcanvas"><span data-lang="vi">Giới thiệu</span><span data-lang="en">About</span></a>
                  </li>
                  <li>
                    <a href="/service" data-bs-dismiss="offcanvas"><span data-lang="vi">Dịch vụ</span><span data-lang="en">Services</span></a>
                  </li>
                  <li>
                    <a href="/products" data-bs-dismiss="offcanvas"><span data-lang="vi">Sản phẩm</span><span data-lang="en">Products</span></a>
                  </li>
                  <li>
                    <a href="/contact" data-bs-dismiss="offcanvas"><span data-lang="vi">Liên hệ</span><span data-lang="en">Contact</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {children}

          {/* Footer (injected by include-layout.js) */}
          <div id="site-footer"></div>

          {/* Back to top */}
          <div className="progress-wrap">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
          </div>
        </div>

        <Script src="/assets/js/vendor/jquery-1.12.4.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/vendor/modernizr-3.11.2.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/popper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/aos.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/back-to-top.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/appear.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        <Script src="/assets/js/include-layout.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
