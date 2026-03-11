import React from "react";
import Link from "next/link";
import PageBanner from "../components/PageBanner";

const CHOOSE_ITEMS = [
  {
    img: "ser-icon9.png",
    titleVi: <>Công nghệ hạ tầng</>,
    titleEn: <>Infrastructure <br /> Technology</>,
    href: "/service",
  },
  {
    img: "counter-3.png",
    titleVi: "Đội ngũ chuyên nghiệp",
    titleEn: "Highly professional team members",
    href: "/service",
  },
  {
    img: "ser-icon10.png",
    titleVi: <>Quản lý <br /> bảo mật</>,
    titleEn: <>Security <br /> Management</>,
    href: "/service",
  },
  {
    img: "ser-icon12.png",
    titleVi: <>Giải pháp <br /> máy tính</>,
    titleEn: <>Desktop <br /> Computing</>,
    href: "/service",
  },
  {
    img: "counter-1.png",
    titleVi: <>Tư vấn <br /> hạ tầng</>,
    titleEn: <>Infrastructure <br /> Consulting</>,
    href: "/service",
  },
  {
    img: "counter-2.png",
    titleVi: "Tối ưu đầu tư hiệu quả",
    titleEn: "Ideas for high return investment",
    href: "/service",
  },
  {
    img: "ser-icon21.png",
    titleVi: <>Quản trị CNTT <br /> toàn diện</>,
    titleEn: <>Fully high IT <br /> Management</>,
    href: "/service",
  },
  {
    img: "ser-icon22.png",
    titleVi: "Bảo mật & quản trị dữ liệu",
    titleEn: "Data security & management",
    href: "/service",
  },
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
              <h3 className="sub-title">
                <span data-lang="vi">LÝ DO CHỌN CHÚNG TÔI</span>
                <span data-lang="en">REASON TO CHOOSE US</span>
              </h3>
              <h2 className="title">
                <span data-lang="vi">Chúng tôi cung cấp giải pháp CNTT nổi bật cho doanh nghiệp.</span>
                <span data-lang="en">We provide truly prominent IT solutions.</span>
              </h2>
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
                        <h3 className="title">
                          <Link href={item.href}>
                            <span data-lang="vi">{item.titleVi}</span>
                            <span data-lang="en">{item.titleEn}</span>
                          </Link>
                        </h3>
                        <p>
                          <span data-lang="vi">
                            Đẩy nhanh đổi mới với đội ngũ công nghệ đẳng cấp, đồng hành cùng bạn toàn diện.
                          </span>
                          <span data-lang="en">
                            Accelerate innovation with world-class tech teams. We&apos;ll match you to an entire remote team.
                          </span>
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
      <div className="section techwix-skill-section-02 section-padding" style={{ backgroundImage: "url(/assets/images/bg/skill-bg.jpg)" }}>
        <div className="container">
          <div className="skill-wrap">
            <div className="row">
              <div className="col-lg-6">
                <div className="skill-left">
                  <div className="section-title">
                    <h2 className="title">
                      <span data-lang="vi">Chuẩn bị cho thành công của bạn, chúng tôi mang đến giải pháp CNTT nổi bật.</span>
                      <span data-lang="en">Preparing for your success, we provide truly prominent IT solutions.</span>
                    </h2>
                  </div>
                  <div className="experience-wrap">
                    <div className="experience">
                      <h2 className="number">25</h2>
                      <span>
                        <span data-lang="vi">Năm <br /> kinh nghiệm</span>
                        <span data-lang="en">Years of <br /> experience</span>
                      </span>
                    </div>
                    <div className="experience-text">
                      <p>
                        <span data-lang="vi">
                          Đẩy nhanh đổi mới với đội ngũ công nghệ đẳng cấp. Chúng tôi đồng hành từ tư vấn, triển khai đến vận hành, đáp ứng nhu cầu
                          phát triển phần mềm và chuyển đổi số của doanh nghiệp.
                        </span>
                        <span data-lang="en">
                          Accelerate innovation with world-class tech teams. We&apos;ll match you to an entire remote team of incredible talent for all
                          your software development needs.
                        </span>
                      </p>
                      <Link className="learn-more" href="/about">
                        <span data-lang="vi">Tìm hiểu thêm về chúng tôi</span>
                        <span data-lang="en">Learn more about us</span> <i className="fas fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="skill-right">
                  <div className="counter-bar">
                    {[
                      { titleVi: "Quản trị CNTT", titleEn: "IT Management", width: 80 },
                      { titleVi: "Bảo mật dữ liệu", titleEn: "Data Security", width: 95 },
                      { titleVi: "Công nghệ thông tin", titleEn: "Information Technology", width: 80 },
                      { titleVi: "Tư vấn công nghệ", titleEn: "Technology Consulting", width: 90 },
                    ].map((s, i) => (
                      <div key={i} className="skill-item">
                        <span className="title">
                          <span data-lang="vi">{s.titleVi}</span>
                          <span data-lang="en">{s.titleEn}</span>
                        </span>
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
                    <h2 className="title white">
                      <span data-lang="vi">Cần thêm thông tin? Hãy liên hệ với chúng tôi.</span>
                      <span data-lang="en">To make requests for further information, contact us.</span>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cta-info text-center">
                  <div className="cta-icon">
                    <img src="/assets/images/cta-icon2.png" alt="" />
                  </div>
                  <div className="cta-text">
                    <p>
                      <span data-lang="vi">Gọi cho chúng tôi để được tư vấn</span>
                      <span data-lang="en">Call us for any inquiry</span>
                    </p>
                    <h3 className="number"><a href="tel:+84983835686" className="text-white text-decoration-none">+84 983 835 686</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial (match Home) */}
      <div
        id="testimonial"
        className="section bg-cover techwix-testimonial-section-02 techwix-testimonial-section-03 section-padding"
        style={{ backgroundImage: "url(/assets/images/bg/testi-bg4.jpg)" }}
      >
        <div className="container">
          <div className="testimonial-wrap-02">
            <div className="section-title text-center">
              <h3 className="sub-title">
                <span data-lang="vi">Cảm nhận khách hàng</span>
                <span data-lang="en">Testimonial</span>
              </h3>
              <h2 className="title">
                <span data-lang="vi">20k+ khách hàng hài lòng trên toàn cầu</span>
                <span data-lang="en">20k+ satisfied clients worldwide</span>
              </h2>
            </div>
            <div className="testimonial-content-wrap-02">
              <div className="swiper-container testimonial-02-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="single-testimonial-02">
                      <div className="testimonial-thumb">
                        <img src="/assets/images/testi-3.jpg" alt="" />
                      </div>
                      <div className="testimonial-content">
                        <img src="/assets/images/testi-icon.png" alt="" />
                        <p>
                          <span data-lang="vi">
                            Đẩy nhanh đổi mới với đội ngũ công nghệ đẳng cấp. Vượt xa hơn với sự chuyên nghiệp và cam kết đồng hành cùng bạn.
                          </span>
                          <span data-lang="en">
                            Accelerate innovation with world-class tech teams. Beyond more stoic this along goodness hey this this wow manatee.
                          </span>
                        </p>
                        <span className="name">Mike Holder</span>
                        <span className="designation">
                          <span data-lang="vi"> / iVista Tech</span>
                          <span data-lang="en"> / iVista Tech</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-testimonial-02">
                      <div className="testimonial-thumb">
                        <img src="/assets/images/testi-4.jpg" alt="" />
                      </div>
                      <div className="testimonial-content">
                        <img src="/assets/images/testi-icon.png" alt="" />
                        <p>
                          <span data-lang="vi">
                            Đẩy nhanh đổi mới với đội ngũ công nghệ đẳng cấp. Vượt xa hơn với sự chuyên nghiệp và cam kết đồng hành cùng bạn.
                          </span>
                          <span data-lang="en">
                            Accelerate innovation with world-class tech teams. Beyond more stoic this along goodness hey this this wow manatee.
                          </span>
                        </p>
                        <span className="name">Mike Fermalin</span>
                        <span className="designation">
                          <span data-lang="vi"> / iVista Tech</span>
                          <span data-lang="en"> / iVista Tech</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-testimonial-02">
                      <div className="testimonial-thumb">
                        <img src="/assets/images/testi-3.jpg" alt="" />
                      </div>
                      <div className="testimonial-content">
                        <img src="/assets/images/testi-icon.png" alt="" />
                        <p>
                          <span data-lang="vi">
                            Đẩy nhanh đổi mới với đội ngũ công nghệ đẳng cấp. Vượt xa hơn với sự chuyên nghiệp và cam kết đồng hành cùng bạn.
                          </span>
                          <span data-lang="en">
                            Accelerate innovation with world-class tech teams. Beyond more stoic this along goodness hey this this wow manatee.
                          </span>
                        </p>
                        <span className="name">Mike Holder</span>
                        <span className="designation">
                          <span data-lang="vi"> / iVista Tech</span>
                          <span data-lang="en"> / iVista Tech</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brand Logo (match Home) */}
      <div className="section techwix-brand-section techwix-brand-section-03 techwix-brand-section-04 section-padding">
        <div className="container">
          <div className="brand-wrapper text-center">
            <div className="brand-active">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide single-brand">
                    <img src="/assets/images/brand/brand-1.png" alt="Brand" />
                  </div>
                  <div className="swiper-slide single-brand">
                    <img src="/assets/images/brand/brand-2.png" alt="Brand" />
                  </div>
                  <div className="swiper-slide single-brand">
                    <img src="/assets/images/brand/brand-3.png" alt="Brand" />
                  </div>
                  <div className="swiper-slide single-brand">
                    <img src="/assets/images/brand/brand-4.png" alt="Brand" />
                  </div>
                  <div className="swiper-slide single-brand">
                    <img src="/assets/images/brand/brand-5.png" alt="Brand" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
