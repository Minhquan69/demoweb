import React from "react";
import Link from "next/link";
import PageBanner from "../components/PageBanner";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title={<><span data-lang="vi">Giới thiệu</span><span data-lang="en">About Us</span></>}
        breadcrumbCurrent={<><span data-lang="vi">Giới thiệu</span><span data-lang="en">About Us</span></>}
      />
      <div className="section techwix-about-section-07 section-padding">
        <div className="shape-1"></div>
        <div className="container">
          <div className="about-wrap">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-img-wrap">
                  <img className="shape-1" src="/assets/images/shape/about-shape2.png" alt="" />
                  <div className="about-img">
                    <img src="/assets/images/about-3.jpg" alt="" />
                  </div>
                  <div className="about-img about-img-2">
                    <img src="/assets/images/about-4.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content-wrap">
                  <div className="section-title">
                    <h3 className="sub-title">
                      <span data-lang="vi">Chúng tôi là ai</span>
                      <span data-lang="en">Who we are</span>
                    </h3>
                    <h2 className="title">
                      <span data-lang="vi">Dịch vụ thiết kế, quản lý và hỗ trợ IT được tùy chỉnh cho doanh nghiệp của bạn.</span>
                      <span data-lang="en">Highly Tailored IT Design, Management & Support Services.</span>
                    </h2>
                  </div>
                  <p className="text">
                    <span data-lang="vi">
                      Tăng tốc đổi mới với đội ngũ kỹ sư công nghệ hàng đầu. Chúng tôi đồng hành cùng bạn trong toàn bộ vòng đời giải pháp AI và phần mềm, từ tư vấn, triển khai đến vận hành lâu dài.
                    </span>
                    <span data-lang="en">
                      Accelerate innovation with world-class tech teams. We&apos;ll match you to the right solutions and long‑term operation for your AI and software initiatives.
                    </span>
                  </p>
                  <div className="about-list-03">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="about-list-item-03">
                          <h3 className="title">
                            <span data-lang="vi">Sứ mệnh của chúng tôi</span>
                            <span data-lang="en">Our Mission</span>
                          </h3>
                          <p>
                            <span data-lang="vi">Giúp doanh nghiệp ứng dụng AI và công nghệ để tối ưu vận hành, nâng cao giá trị và trải nghiệm khách hàng.</span>
                            <span data-lang="en">Help businesses apply AI and technology to optimize operations, increase value, and improve customer experience.</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="about-list-item-03">
                          <h3 className="title">
                            <span data-lang="vi">Giải pháp tùy chỉnh</span>
                            <span data-lang="en">Custom Solutions</span>
                          </h3>
                          <p>
                            <span data-lang="vi">Thiết kế và phát triển giải pháp theo nhu cầu riêng, linh hoạt tích hợp với hệ thống sẵn có.</span>
                            <span data-lang="en">Design and build solutions tailored to your needs, with flexible integration into existing systems.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section techwix-counter-section-03 techwix-counter-section-04">
        <div className="container">
          <div className="counter-wrap" style={{ backgroundImage: "url(/assets/images/bg/counter-bg2.jpg)" }}>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter-02 text-center">
                  <span>354+</span>
                    <p>
                      <span data-lang="vi">Dự án đã hoàn thành</span>
                      <span data-lang="en">Completed Projects</span>
                    </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter-02 text-center">
                  <span>119+</span>
                    <p>
                      <span data-lang="vi">Tự động hóa bằng robot</span>
                      <span data-lang="en">Robotic Automation</span>
                    </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter-02 text-center">
                  <span>99%</span>
                    <p>
                      <span data-lang="vi">Phân tích website</span>
                      <span data-lang="en">Website Analysis</span>
                    </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter-02 text-center">
                  <span>321+</span>
                    <p>
                      <span data-lang="vi">Phiên hỗ trợ khách hàng</span>
                      <span data-lang="en">Client Support Sessions</span>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section techwix-choose-us-section section-padding" style={{ backgroundImage: "url(/assets/images/bg/choose-us-bg3.jpg)" }}>
        <div className="container">
          <div className="choose-us-wrap">
            <div className="section-title text-center">
              <h3 className="sub-title">
                <span data-lang="vi">Lý do chọn chúng tôi</span>
                <span data-lang="en">REASON TO CHOOSE US</span>
              </h3>
              <h2 className="title">
                <span data-lang="vi">Chúng tôi cung cấp các giải pháp CNTT nổi bật, phù hợp với doanh nghiệp Việt Nam.</span>
                <span data-lang="en">We provide truly prominent IT solutions.</span>
              </h2>
            </div>
            <div className="choose-us-content-wrap">
              <div className="row">
                {[
                  { img: "ser-icon9.png", title: <>Infrustructure <br /> Technology</>, href: "/service" },
                  { img: "counter-3.png", title: "Highly professional team members", href: "/service" },
                  { img: "ser-icon10.png", title: <>Security <br /> Management</>, href: "/service" },
                  { img: "ser-icon12.png", title: <>Desktop <br /> Computing</>, href: "/service" },
                  { img: "counter-1.png", title: <>Infrustructure <br /> Technology</>, href: "/service" },
                  { img: "counter-2.png", title: "Ideas for high return investment", href: "/service" },
                  { img: "ser-icon21.png", title: <>Fully high IT <br /> Managment</>, href: "/service" },
                  { img: "ser-icon22.png", title: "Data secure & Managment", href: "/service" },
                ].map((item, i) => (
                  <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                    <div className="choose-us-item-02">
                      <div className="choose-us-img">
                        <img src={`/assets/images/${item.img}`} alt="" />
                      </div>
                      <div className="choose-us-content">
                        <h3 className="title">
                          <Link href={item.href}>
                            <span data-lang="vi">
                              {i === 0 && <>Hạ tầng &amp; công nghệ</>}
                              {i === 1 && <>Đội ngũ chuyên gia giàu kinh nghiệm</>}
                              {i === 2 && <>Quản lý bảo mật</>}
                              {i === 3 && <>Máy trạm &amp; thiết bị đầu cuối</>}
                              {i === 4 && <>Hạ tầng mở rộng</>}
                              {i === 5 && <>Ý tưởng đầu tư hiệu quả</>}
                              {i === 6 && <>Quản trị IT toàn diện</>}
                              {i === 7 && <>Bảo mật &amp; quản lý dữ liệu</>}
                            </span>
                            <span data-lang="en">{item.title}</span>
                          </Link>
                        </h3>
                        <p>
                          <span data-lang="vi">Đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số và ứng dụng AI vào thực tế.</span>
                          <span data-lang="en">We partner with your business on the journey of digital transformation and real-world AI adoption.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section techwix-skill-section-02 techwix-skill-section-03 section-padding">
        <div className="container">
          <div className="skill-wrap">
            <div className="row">
              <div className="col-lg-6">
                <div className="skill-left">
                  <div className="section-title">
                    <h2 className="title">
                      <span data-lang="vi">Chúng tôi chuẩn bị hạ tầng và giải pháp để bạn thành công bền vững</span>
                      <span data-lang="en">Preparing for your success, we provide truly prominent IT solutions</span>
                    </h2>
                  </div>
                  <div className="about-list">
                    <ul>
                      <li>
                        <span className="about-icon"><i className="fas fa-check"></i></span>
                        <span className="about-text">
                          <span data-lang="vi">Tập trung vào chất lượng kỹ thuật và độ tin cậy của hệ thống.</span>
                          <span data-lang="en">We always focus on technical excellence and system reliability.</span>
                        </span>
                      </li>
                      <li>
                        <span className="about-icon"><i className="fas fa-check"></i></span>
                        <span className="about-text">
                          <span data-lang="vi">Đồng hành cùng bạn với những ý tưởng mới và tinh thần đổi mới.</span>
                          <span data-lang="en">Wherever you&apos;re going, we bring ideas and excitement.</span>
                        </span>
                      </li>
                      <li>
                        <span className="about-icon"><i className="fas fa-check"></i></span>
                        <span className="about-text">
                          <span data-lang="vi">Là đối tác tư vấn, triển khai và vận hành cho thương hiệu của bạn.</span>
                          <span data-lang="en">We&apos;re consultants, guides, and partners for your brand.</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="about-author-info-wrap">
                    <div className="about-author">
                      <img src="/assets/images/sign.png" alt="" />
                      <h3 className="name">
                        <span data-lang="vi">Đại diện iVista Tech</span>
                        <span data-lang="en">iVista Tech Representative</span>
                      </h3>
                      <span className="designation">
                        <span data-lang="vi">Giám đốc điều hành</span>
                        <span data-lang="en">Chief Executive Officer</span>
                      </span>
                    </div>
                    <div className="about-info">
                      <p>
                        <span data-lang="vi">Gọi để được tư vấn </span>
                        <span data-lang="en">Call to ask any question </span>
                      </p>
                      <h3 className="number">0123-456-7890</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="skill-right">
                  <p className="text">
                    <span data-lang="vi">
                      Chúng tôi thiết kế kiến trúc cloud, hạ tầng, mạng và hệ thống dữ liệu phù hợp với nhu cầu thực tế của doanh nghiệp, đảm bảo khả năng mở rộng và vận hành ổn định.
                    </span>
                    <span data-lang="en">
                      We design cloud, infrastructure, network and data architectures around your real business needs, ensuring scalability and stable operations.
                    </span>
                  </p>
                  <div className="counter-bar">
                    {[
                      { title: "IT Managment", width: 80 },
                      { title: "Data Security", width: 95 },
                      { title: "Information Technology", width: 80 },
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
      <div className="section techwix-team-section techwix-team-section-02 section-padding" style={{ backgroundImage: "url(/assets/images/bg/team-bg1.jpg)" }}>
        <div className="container">
          <div className="team-wrap">
            <div className="section-title text-center">
              <h3 className="sub-title">Our expert team </h3>
              <h2 className="title white"> We have world expert team</h2>
            </div>
            <div className="team-content-wrap">
              <div className="swiper-container team-active">
                <div className="swiper-wrapper">
                  {["Andrew Max Fetcher", "Arnold human", "Mike Holder", "Joakim Ken"].map((name, i) => (
                    <div key={i} className="swiper-slide">
                      <div className="single-team">
                        <div className="team-img">
                          <Link href="/team"><img src={`/assets/images/team/team-${i + 1}.jpg`} alt="" /></Link>
                        </div>
                        <div className="team-content">
                          <h3 className="name"><Link href="/team">{name.replace(" ", " \n")}</Link></h3>
                          <span className="designation">iVista Tech</span>
                          <div className="team-social">
                            <ul className="social">
                              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                              <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                              <li><a href="#"><i className="fab fa-behance"></i></a></li>
                            </ul>
                          </div>
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
                          <img src={`/assets/images/testi-${i === 1 ? 4 : 3}.jpg`} alt="" />
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
      <div className="section techwix-cta-section-02 section-padding-02">
        <div className="container">
          <div className="cta-wrap" style={{ backgroundImage: "url(/assets/images/bg/cta-bg.jpg)" }}>
            <div className="row align-items-center">
              <div className="col-xl-9 col-lg-8">
                <div className="cta-content">
                  <div className="cta-icon">
                    <img src="/assets/images/cta-icon2.png" alt="" />
                  </div>
                  <p>We&apos;re Delivering the best customer Experience</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="cta-btn">
                  <a className="btn btn-white" href="tel:+84983835686">+84 983 835 686</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
