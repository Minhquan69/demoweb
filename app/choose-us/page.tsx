import React from "react";
import Link from "next/link";
import PageBanner from "../components/PageBanner";

const CHOOSE_ITEMS = [
  { img: "ser-icon9.png", title: <>Infrustructure <br /> Technology</>, href: "/service" },
  { img: "counter-3.png", title: "Highly professional team members", href: "/service" },
  { img: "ser-icon10.png", title: <>Security <br /> Management</>, href: "/service" },
  { img: "ser-icon12.png", title: <>Desktop <br /> Computing</>, href: "/service" },
  { img: "counter-1.png", title: <>Infrustructure <br /> Technology</>, href: "/service" },
  { img: "counter-2.png", title: "Ideas for high return investment", href: "/service" },
  { img: "ser-icon21.png", title: <>Fully high IT <br /> Managment</>, href: "/service" },
  { img: "ser-icon22.png", title: "Data secure & Managment", href: "/service" },
];

export default function ChooseUsPage() {
  return (
    <>
      <PageBanner
        title={<><span data-lang="vi">Tại sao chọn chúng tôi</span><span data-lang="en">Why Choose Us</span></>}
        breadcrumbCurrent={<><span data-lang="vi">Tại sao chọn chúng tôi</span><span data-lang="en">Why Choose Us</span></>}
      />
      <div className="section techwix-choose-us-section techwix-choose-us-section-03 section-padding">
        <div className="container">
          <div className="choose-us-wrap">
            <div className="section-title text-center">
              <h3 className="sub-title">REASON TO CHOOSE US</h3>
              <h2 className="title">We provide truly prominent IT solutions.</h2>
            </div>
            <div className="choose-us-content-wrap">
              <div className="row">
                {CHOOSE_ITEMS.map((item, i) => (
                  <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                    <div className="choose-us-item-02">
                      <div className="choose-us-img">
                        <img src={`/assets/images/${item.img}`} alt="" />
                      </div>
                      <div className="choose-us-content">
                        <h3 className="title"><Link href={item.href}>{item.title}</Link></h3>
                        <p>Accelerate innovation with world-class tech teams We&apos;ll match you to an entire.</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section techwix-skill-section-02 section-padding" style={{ backgroundImage: "url(/assets/images/bg/skill-bg.jpg)" }}>
        <div className="container">
          <div className="skill-wrap">
            <div className="row">
              <div className="col-lg-6">
                <div className="skill-left">
                  <div className="section-title">
                    <h2 className="title">Preparing for your success, we provide truly prominent IT solutions</h2>
                  </div>
                  <div className="experience-wrap">
                    <div className="experience">
                      <h2 className="number">25</h2>
                      <span>Years of <br /> experience</span>
                    </div>
                    <div className="experience-text">
                      <p>Accelerate innovation with world-class tech teams We&apos;ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
                      <Link className="learn-more" href="/about">learn More About Us <i className="fas fa-long-arrow-alt-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="skill-right">
                  <div className="counter-bar">
                    {[
                      { title: "IT Managment", width: 80 },
                      { title: "Data Security", width: 95 },
                      { title: "Information Technology", width: 80 },
                      { title: "Technology Consultant", width: 90 },
                    ].map((s, i) => (
                      <div key={i} className="skill-item">
                        <span className="title">{s.title}</span>
                        <div className="skill-bar">
                          <div className="bar-inner">
                            <div className="bar progress-line color-1" data-width={s.width}>
                              <span className="skill-percent"><span className="counter">{s.width}</span>%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section techwix-cta-section-04 techwix-cta-section-06 section-padding" style={{ backgroundImage: "url(/assets/images/bg/cta-bg5.jpg)" }}>
        <div className="container">
          <div className="cta-wrap">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="cta-left">
                  <div className="section-title">
                    <h2 className="title white">To make requests for further information, contact us </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cta-info text-center">
                  <div className="cta-icon">
                    <img src="/assets/images/cta-icon2.png" alt="" />
                  </div>
                  <div className="cta-text">
                    <p>Call Us For Any inquiry</p>
                    <h3 className="number"><a href="tel:+84983835686" className="text-white text-decoration-none">+84 983 835 686</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section techwix-testimonial-section-02 techwix-testimonial-section-03 section-padding-02">
        <div className="container">
          <div className="testimonial-wrap-02">
            <div className="section-title text-center">
              <h3 className="sub-title">Testimonial</h3>
              <h2 className="title">20k+ satisfied clients worldwide</h2>
            </div>
            <div className="testimonial-content-wrap-02">
              <div className="swiper-container testimonial-02-active">
                <div className="swiper-wrapper">
                  {["Mike Holder", "Mike Fermalin", "Mike Holder"].map((name, i) => (
                    <div key={i} className="swiper-slide">
                      <div className="single-testimonial-02">
                        <div className="testimonial-thumb">
                          <img src={`/assets/images/testi-${i + 1}.jpg`} alt="" />
                        </div>
                        <div className="testimonial-content">
                          <img src="/assets/images/testi-icon.png" alt="" />
                          <p>Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee </p>
                          <span className="name">{name} </span>
                          <span className="designation"> / iVista Tech</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section techwix-brand-section techwix-brand-section-03">
        <div className="container">
          <div className="brand-wrapper text-center">
            <div className="brand-active">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {[1, 2, 3, 4, 5, 2].map((n, i) => (
                    <div key={i} className="swiper-slide single-brand">
                      <img src={`/assets/images/brand/brand-${n}.png`} alt="Brand" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
