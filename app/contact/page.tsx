import React from "react";
import PageBanner from "../components/PageBanner";

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title={<><span data-lang="vi">Liên hệ</span><span data-lang="en">Contact Us</span></>}
        breadcrumbCurrent={<><span data-lang="vi">Liên hệ</span><span data-lang="en">Contact Us</span></>}
      />
      <div className="section contact-info-section section-padding-02">
        <div className="container">
          <div className="contact-info-wrap">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="single-contact-info text-center">
                  <div className="info-icon">
                    <img src="/assets/images/info-1.png" alt="" />
                  </div>
                  <div className="info-content">
                    <h5 className="title"><span data-lang="vi">Gọi cho chúng tôi</span><span data-lang="en">Give us a call</span></h5>
                    <p><a href="tel:+84983835686">+84 983 835 686</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-contact-info text-center">
                  <div className="info-icon">
                    <img src="/assets/images/info-2.png" alt="" />
                  </div>
                  <div className="info-content">
                    <h5 className="title"><span data-lang="vi">Gửi email cho chúng tôi</span><span data-lang="en">Drop us a line</span></h5>
                    <p>info@techwix-theme.com</p>
                    <p>mail@techwix-tech.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-contact-info text-center">
                  <div className="info-icon">
                    <img src="/assets/images/info-3.png" alt="" />
                  </div>
                  <div className="info-content">
                    <h5 className="title"><span data-lang="vi">Đến văn phòng chúng tôi</span><span data-lang="en">Visit our office</span></h5>
                    <p><span data-lang="vi">8B Ngõ 172 Đường Nguyễn Tuân, Thanh Xuân Trung, Thanh Xuân, Hà Nội, Việt Nam</span><span data-lang="en">8B Alley 172, Nguyen Tuan Street, Thanh Xuan Trung, Thanh Xuan, Hanoi, Vietnam</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section techwix-contact-section techwix-contact-section-02 techwix-contact-section-03 section-padding-02">
        <div className="container">
          <div className="contact-wrap">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="contact-form">
                  <div className="contact-form-wrap">
                    <div className="heading-wrap text-center">
                      <span className="sub-title"><span data-lang="vi">Yêu cầu báo giá</span><span data-lang="en">request a quote</span></span>
                      <h3 className="title"><span data-lang="vi">Chúng tôi có thể giúp gì cho bạn!</span><span data-lang="en">How May We Help You!</span></h3>
                    </div>
                    <form action="#">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="single-form">
                            <input type="text" placeholder="" data-placeholder-vi="Họ tên *" data-placeholder-en="Name *" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="single-form">
                            <input type="email" placeholder="" data-placeholder-vi="Email *" data-placeholder-en="Email *" />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="single-form">
                            <input type="text" placeholder="" data-placeholder-vi="Chủ đề *" data-placeholder-en="Subject *" />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="single-form">
                            <textarea placeholder="" data-placeholder-vi="Viết tin nhắn" data-placeholder-en="Write A Message"></textarea>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="form-btn">
                            <button className="btn" type="submit"><span data-lang="vi">Gửi tin nhắn</span><span data-lang="en">Send Message</span></button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section contact-map-section">
        <div className="contact-map-wrap">
          <iframe scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?q=New%20York%20University%20&t=m&z=10&output=embed&iwloc=near" title="New York University" aria-label="New York University" frameBorder={0}></iframe>
        </div>
      </div>
    </>
  );
}
