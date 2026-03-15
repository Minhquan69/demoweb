import React from "react";
import PageBanner from "../components/PageBanner";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  const officeMapUrl =
    "https://www.google.com/maps/search/?api=1&query=20.999644202677064%2C105.80320538518609";

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
                    <a href="tel:+84988478688" aria-label="Call us at 0988 478 688">
                      <img src="/assets/images/info-1.png" alt="" />
                    </a>
                  </div>
                  <div className="info-content">
                    <h5 className="title"><span data-lang="vi">Gọi cho chúng tôi</span><span data-lang="en">Give us a call</span></h5>
                    <p><a href="tel:+84988478688">0988 478 688</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-contact-info text-center">
                  <div className="info-icon">
                    <a href="mailto:ivistatech@gmail.com" aria-label="Email us at ivistatech@gmail.com">
                      <img src="/assets/images/info-2.png" alt="" />
                    </a>
                  </div>
                  <div className="info-content">
                    <h5 className="title"><span data-lang="vi">Gửi email cho chúng tôi</span><span data-lang="en">Drop us a line</span></h5>
                    <p><a href="mailto:ivistatech@gmail.com">ivistatech@gmail.com</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-contact-info text-center">
                  <div className="info-icon">
                    <a
                      href={officeMapUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open our office location in Google Maps"
                    >
                      <img src="/assets/images/info-3.png" alt="" />
                    </a>
                  </div>
                  <div className="info-content">
                    <h5 className="title"><span data-lang="vi">Đến văn phòng chúng tôi</span><span data-lang="en">Visit our office</span></h5>
                    <p>
                      <a
                        href={officeMapUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open our office location in Google Maps"
                      >
                        <span data-lang="vi">Tòa nhà EZ, 8B Ngõ 172 Đường Nguyễn Tuân, Thanh Xuân Trung, Thanh Xuân, Hà Nội, Việt Nam</span>
                        <span data-lang="en">EZ Building, 8B Alley 172, Nguyen Tuan Street, Thanh Xuan Trung, Thanh Xuan, Hanoi, Vietnam</span>
                      </a>
                    </p>
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
                      <span className="sub-title">
                        <span data-lang="vi">Liên hệ với chúng tôi</span>
                        <span data-lang="en">Contact us</span>
                      </span>
                      <h3 className="title"><span data-lang="vi">Chúng tôi có thể giúp gì cho bạn!</span><span data-lang="en">How May We Help You!</span></h3>
                    </div>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section contact-map-section">
        <div className="contact-map-wrap">
          <iframe
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232.8015730028195!2d105.80320538518609!3d20.999644202677064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acbd2fe80e37%3A0x1cba3dc65e97045f!2zWFJYMytWNzMsIFRoYW5oIFh1w6JuIFRydW5nLCBUaGFuaCBYdcOibiwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2sus!4v1772446359594!5m2!1sen!2sus"
            title="Tòa nhà EZ, 8B Ngõ 172 Đường Nguyễn Tuân, Thanh Xuân Trung, Thanh Xuân, Hà Nội, Việt Nam"
            aria-label="Tòa nhà EZ, 8B Ngõ 172 Đường Nguyễn Tuân, Thanh Xuân Trung, Thanh Xuân, Hà Nội, Việt Nam"
            frameBorder={0}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
