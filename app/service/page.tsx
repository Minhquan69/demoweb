import React from "react";
import Link from "next/link";
import PageBanner from "../components/PageBanner";

const SERVICES = [
  { img: "ser-icon9.png", titleVi: "Nhận diện khuôn mặt", titleEn: "Face Recognition", pVi: "Nhận diện khuôn mặt từ video/hình ảnh cho kiểm soát ra vào và an ninh.", pEn: "Accurate face recognition from video and images for access control and security applications." },
  { img: "counter-3.png", titleVi: "Nhận dạng biển số xe", titleEn: "Plate Recognition", pVi: "Nhận dạng biển số xe cho bãi xe và giao thông thông minh.", pEn: "Automatic license plate recognition for parking and smart traffic management." },
  { img: "ser-icon10.png", titleVi: "Phát hiện hành vi bất thường", titleEn: "Abnormal Behavior Detection", pVi: "Phát hiện hành vi bất thường trong video giám sát, cảnh báo theo thời gian thực.", pEn: "Detect abnormal behavior in surveillance video with real-time safety alerts." },
  { img: "ser-icon12.png", titleVi: "Hệ thống giám sát an ninh tập trung", titleEn: "Centralized security surveillance system", pVi: "Quản lý nhiều camera, tích hợp AI phân tích và báo động.", pEn: "Centralized management and monitoring of multiple cameras with AI analysis and alerts." },
  { img: "counter-1.png", titleVi: "Hệ thống Bodycam", titleEn: "Bodycam system", pVi: "Camera đeo người + AI ghi hình và phân tích cho an ninh, thực thi pháp luật.", pEn: "Wearable camera solution with AI recording and analysis for security and law enforcement." },
  { img: "counter-2.png", titleVi: "Hệ thống AI phát hiện xâm nhập", titleEn: "AI intrusion detection system", pVi: "Phát hiện xâm nhập trái phép bằng AI, giảm báo động giả.", pEn: "AI-based intrusion detection to reduce false alarms and improve perimeter security." },
];

export default function ServicePage() {
  return (
    <>
      <PageBanner
        title={<><span data-lang="vi">Dịch vụ</span><span data-lang="en">Our Services</span></>}
        breadcrumbCurrent={<><span data-lang="vi">Dịch vụ</span><span data-lang="en">Services</span></>}
      />
      <div className="section techwix-choose-us-section techwix-choose-us-section-04 section-padding">
        <div className="container">
          <div className="choose-us-wrap">
            <div className="choose-us-content-wrap">
              <div className="row">
                {SERVICES.map((s, i) => (
                  <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                    <div className="choose-us-item-02">
                      <div className="choose-us-img">
                        <img src={`/assets/images/${s.img}`} alt="" />
                      </div>
                      <div className="choose-us-content">
                        <h3 className="title"><span data-lang="vi">{s.titleVi}</span><span data-lang="en">{s.titleEn}</span></h3>
                        <p><span data-lang="vi">{s.pVi}</span><span data-lang="en">{s.pEn}</span></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section techwix-cta-section-04 techwix-cta-section-06 techwix-cta-section-07">
        <div className="container">
          <div className="cta-wrap" style={{ backgroundImage: "url(/assets/images/bg/cta-bg5.jpg)" }}>
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="cta-left">
                  <div className="section-title">
                    <h2 className="title white"><span data-lang="vi">Liên hệ để được tư vấn thêm</span><span data-lang="en">To make requests for further information, contact us</span></h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cta-info text-center">
                  <div className="cta-icon">
                    <img src="/assets/images/cta-icon2.png" alt="" />
                  </div>
                  <div className="cta-text">
                    <p><span data-lang="vi">Gọi cho chúng tôi để được tư vấn</span><span data-lang="en">Call Us For Any inquiry</span></p>
                    <h3 className="number"><a href="tel:0983835686" className="text-white text-decoration-none">0983 835 686</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section bg-cover techwix-testimonial-section-02 techwix-testimonial-section-03 techwix-testimonial-section-05 section-padding" style={{ backgroundImage: "url(/assets/images/bg/testi-bg4.jpg)" }}>
        <div className="container">
          <div className="testimonial-wrap-02">
            <div className="section-title text-center">
              <h3 className="sub-title"><span data-lang="vi">Đánh giá</span><span data-lang="en">Testimonial</span></h3>
              <h2 className="title"><span data-lang="vi">Hơn 20k khách hàng hài lòng trên toàn cầu</span><span data-lang="en">20k+ satisfied clients worldwide</span></h2>
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
                          <p><span data-lang="vi">Đẩy nhanh đổi mới với đội ngũ công nghệ đẳng cấp. Vượt xa hơn với sự chuyên nghiệp và cam kết đồng hành cùng bạn.</span><span data-lang="en">Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee</span></p>
                          <span className="name">{name} </span>
                          <span className="designation"><span data-lang="vi"> / CEO, Harlond inc</span><span data-lang="en"> / CEO, Harlond inc</span></span>
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
                  <p><span data-lang="vi">Chúng tôi mang đến trải nghiệm khách hàng tốt nhất</span><span data-lang="en">We&apos;re Delivering the best customer Experience</span></p>
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
