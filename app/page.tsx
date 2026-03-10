import Link from "next/link";
import { PRODUCTS } from "./data/products";
import { HOME_TEAM } from "./data/team";

export default function HomePage() {
  return (
    <>
      {/* Hero - Product Carousel */}
      <div id="hero" className="section techwix-hero-section-05">
        <div className="techwix-hero-wrap" style={{ backgroundImage: "url(/assets/images/bg/hero-bg5.jpg)" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="swiper-container hero-carousel-active" style={{ width: "100%" }}>
                <div className="swiper-wrapper">
                  {PRODUCTS.map((product) => (
                    <div key={product.slug} className="swiper-slide">
                      <div className="hero-slide-inner">
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <div className="hero-content">
                              <h2 className="title" data-aos="fade-up" data-aos-delay="800">
                                <span data-lang="vi">{product.titleVi}</span>
                                <span data-lang="en">{product.titleEn}</span>
                              </h2>
                              <p data-aos="fade-up" data-aos-delay="900">
                                <span data-lang="vi">{product.shortVi}</span>
                                <span data-lang="en">{product.shortEn}</span>
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="hero-images">
                              <div className="images">
                                {(((product as any).heroImgs as string[] | undefined) ?? [((product as any).heroImg ?? product.img) as string, product.img]).slice(0, 2).map((src, idx) => (
                                  <div key={`${product.slug}-${idx}`} className="image-item">
                                    <img src={`/assets/images/${src}`} alt={product.titleEn} />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hero-slide-cta text-center" data-aos="fade-up" data-aos-delay="1100">
                          <Link className="btn hero-cta-btn" href={`/product-details/${product.slug}`}>
                            <span data-lang="vi">Xem sản phẩm</span>
                            <span data-lang="en">View Product</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-button-prev hero-carousel-btn-prev" aria-label="Previous slide"></div>
                <div className="swiper-button-next hero-carousel-btn-next" aria-label="Next slide"></div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className="section techwix-about-section-05 section-padding">
        <div className="container">
          <div className="about-wrap">
            <div className="section-title text-center">
              <h3 className="sub-title"><span data-lang="vi">Về chúng tôi</span><span data-lang="en">About Us</span></h3>
              <h2 className="title"><span data-lang="vi">Công ty công nghệ AI tập trung vào triển khai giải pháp thị giác máy tính, LLM và dữ liệu cho doanh nghiệp.</span><span data-lang="en">AI technology company focused on deploying computer vision, LLM, and data solutions for enterprises.</span></h2>
            </div>
            <div className="about-content-wrap">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about-img-wrap">
                    <div className="about-img about-img-big">
                      <img src="/assets/images/about-big3.jpg" alt="" />
                    </div>
                    <div className="about-img about-img-sm">
                      <img src="/assets/images/about-sm3.jpg" alt="" />
                      <div className="shape-01"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-content">
                    <p className="title"><span data-lang="vi">Đội ngũ nghiên cứu và kỹ sư AI chuyên sâu, hiểu bài toán thực tế và hệ thống hiện hữu của doanh nghiệp.</span><span data-lang="en">Deep expertise in AI research and engineering, understanding real-world business challenges and existing systems.</span></p>
                    <p className="text"><span data-lang="vi">Chúng tôi đồng hành từ giai đoạn tư vấn chiến lược dữ liệu, thiết kế mô hình máy học, xây dựng hạ tầng đến tích hợp vào quy trình vận hành. Mục tiêu là biến AI thành năng lực cốt lõi, chứ không chỉ là thử nghiệm.</span><span data-lang="en">We partner from data strategy consulting, machine learning model design, infrastructure building to integration into operational workflows. Our goal is to make AI a core capability, not just experimentation.</span></p>
                    <div className="about-list-item-wrap">
                      <div className="about-list-item">
                        <div className="about-img">
                          <img src="/assets/images/about-icon1.png" alt="" />
                        </div>
                        <div className="about-text">
                          <h3 className="title"><span data-lang="vi">Computer Vision</span><span data-lang="en">Computer Vision</span></h3>
                          <p><span data-lang="vi">Nhận diện hình ảnh, video và hành vi để tự động hóa quy trình nghiệp vụ.</span><span data-lang="en">Image, video, and behavior recognition to automate business processes.</span></p>
                        </div>
                      </div>
                      <div className="about-list-item">
                        <div className="about-img">
                          <img src="/assets/images/about-icon2.png" alt="" />
                        </div>
                        <div className="about-text">
                          <h3 className="title"><span data-lang="vi">Dữ liệu &amp; Mô hình hóa</span><span data-lang="en">Data &amp; Modeling</span></h3>
                          <p><span data-lang="vi">Xây dựng pipeline dữ liệu, huấn luyện và tối ưu mô hình phục vụ vận hành lâu dài.</span><span data-lang="en">Building data pipelines, training and optimizing models for long-term operations.</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <Link className="btn" href="/about"><span data-lang="vi">Xem thêm</span><span data-lang="en">Read More</span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service */}
      <div id="services" className="section techwix-service-section-05">
        <div className="container">
          <div className="service-wrap section-padding-02">
            <div className="section-title text-center">
              <h3 className="sub-title"><span data-lang="vi">Dịch vụ của chúng tôi</span><span data-lang="en">Our Services</span></h3>
              <h2 className="title"><span data-lang="vi">Xây dựng mọi thứ bạn cần cho doanh nghiệp</span><span data-lang="en">Building everything you need for your business</span></h2>
            </div>
            <div className="service-content-wrap">
              <div className="row">
                <div className="col-xl-3 col-sm-6">
                  <div className="service-item-04">
                    <div className="service-img">
                      <img src="/assets/images/ser-icon13.png" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="title"><Link href="/service">Face Recognition</Link></h3>
                      <p><span data-lang="vi">Nhận diện khuôn mặt chính xác từ video và hình ảnh, ứng dụng cho kiểm soát ra vào và an ninh.</span><span data-lang="en">Accurate face recognition from video and images for access control and security applications.</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="service-item-04">
                    <div className="service-img">
                      <img src="/assets/images/ser-icon14.png" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="title"><Link href="/service">Plate Recognition</Link></h3>
                      <p><span data-lang="vi">Nhận dạng biển số xe tự động, tích hợp bãi xe và giao thông thông minh.</span><span data-lang="en">Automatic license plate recognition for parking and smart traffic management.</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="service-item-04">
                    <div className="service-img">
                      <img src="/assets/images/ser-icon15.png" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="title"><Link href="/service">Abnormal Behavior Detection</Link></h3>
                      <p><span data-lang="vi">Phát hiện hành vi bất thường trong video giám sát, cảnh báo an toàn theo thời gian thực.</span><span data-lang="en">Detect abnormal behavior in surveillance video with real-time safety alerts.</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="service-item-04">
                    <div className="service-img">
                      <img src="/assets/images/ser-icon16.png" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="title"><Link href="/service"><span data-lang="vi">Hệ thống giám sát an ninh tập trung</span><span data-lang="en">Centralized security surveillance system</span></Link></h3>
                      <p><span data-lang="vi">Quản lý và giám sát tập trung nhiều camera, tích hợp AI phân tích và báo động.</span><span data-lang="en">Centralized management and monitoring of multiple cameras with AI analysis and alerts.</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="service-item-04">
                    <div className="service-img">
                      <img src="/assets/images/ser-icon17.png" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="title"><Link href="/service"><span data-lang="vi">Hệ thống Bodycam</span><span data-lang="en">Bodycam system</span></Link></h3>
                      <p><span data-lang="vi">Giải pháp camera đeo người kết hợp AI ghi hình và phân tích phục vụ an ninh, thực thi pháp luật.</span><span data-lang="en">Wearable camera solution with AI recording and analysis for security and law enforcement.</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="service-item-04">
                    <div className="service-img">
                      <img src="/assets/images/ser-icon18.png" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="title"><Link href="/service"><span data-lang="vi">Hệ thống AI phát hiện xâm nhập</span><span data-lang="en">AI intrusion detection system</span></Link></h3>
                      <p><span data-lang="vi">Phát hiện xâm nhập trái phép bằng AI, giảm báo động giả và nâng cao an toàn khu vực.</span><span data-lang="en">AI-based intrusion detection to reduce false alarms and improve perimeter security.</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <Link className="btn" href="/service"><span data-lang="vi">Xem tất cả dịch vụ</span><span data-lang="en">View All Services</span></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Counter / Choose Us */}
      <div id="choose-us" className="section techwix-counter-section-03" style={{ backgroundImage: "url(/assets/images/bg/counter-bg.jpg)" }}>
        <div className="container">
          <div className="counter-wrap">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter-02 text-center">
                  <span><span className="counter">354</span>+</span>
                  <p>
                    <span data-lang="vi">Dự án hoàn thành</span>
                    <span data-lang="en">Completed Projects</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter-02 text-center">
                  <span><span className="counter">119</span>+</span>
                  <p>
                    <span data-lang="vi">Tự động hóa robot</span>
                    <span data-lang="en">Robotic Automation</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter-02 text-center">
                  <span><span className="counter">99</span>%</span>
                  <p>
                    <span data-lang="vi">Phân tích website</span>
                    <span data-lang="en">Web Site Analyse</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter-02 text-center">
                  <span><span className="counter">321</span>+</span>
                  <p>
                    <span data-lang="vi">Hỗ trợ khách hàng</span>
                    <span data-lang="en">Clients Supoort Done</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <Link className="btn" href="/choose-us"><span data-lang="vi">Tại sao chọn chúng tôi</span><span data-lang="en">Why Choose Us</span></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Choose Us Section */}
      <div className="section techwix-choose-us-section techwix-choose-us-section-03 section-padding">
        <div className="container">
          <div className="choose-us-wrap">
            <div className="section-title text-center">
              <h3 className="sub-title"><span data-lang="vi">LÝ DO CHỌN CHÚNG TÔI</span><span data-lang="en">REASON TO CHOOSE US</span></h3>
              <h2 className="title"><span data-lang="vi">Giải pháp công nghệ nổi bật cho doanh nghiệp</span><span data-lang="en">We provide truly prominent IT solutions.</span></h2>
            </div>
            <div className="choose-us-content-wrap">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="choose-us-item-02">
                    <div className="choose-us-img">
                      <img src="/assets/images/ser-icon9.png" alt="" />
                    </div>
                    <div className="choose-us-content">
                      <h3 className="title"><Link href="/choose-us"><span data-lang="vi">Công nghệ hạ tầng</span><span data-lang="en">Infrastructure technology</span></Link></h3>
                      <p><span data-lang="vi">Đẩy nhanh đổi mới với đội ngũ công nghệ đẳng cấp, đồng hành cùng bạn toàn diện.</span><span data-lang="en">Accelerate innovation with world-class tech teams. We&apos;ll match you to an entire.</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="choose-us-item-02">
                    <div className="choose-us-img">
                      <img src="/assets/images/counter-3.png" alt="" />
                    </div>
                    <div className="choose-us-content">
                      <h3 className="title"><Link href="/choose-us"><span data-lang="vi">Đội ngũ chuyên nghiệp</span><span data-lang="en">Highly professional team</span></Link></h3>
                      <p><span data-lang="vi">Đẩy nhanh đổi mới với đội ngũ công nghệ đẳng cấp, đồng hành cùng bạn toàn diện.</span><span data-lang="en">Accelerate innovation with world-class tech teams. We&apos;ll match you to an entire.</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="choose-us-item-02">
                    <div className="choose-us-img">
                      <img src="/assets/images/ser-icon10.png" alt="" />
                    </div>
                    <div className="choose-us-content">
                      <h3 className="title"><Link href="/choose-us"><span data-lang="vi">Quản lý bảo mật</span><span data-lang="en">Security management</span></Link></h3>
                      <p><span data-lang="vi">Đẩy nhanh đổi mới với đội ngũ công nghệ đẳng cấp, đồng hành cùng bạn toàn diện.</span><span data-lang="en">Accelerate innovation with world-class tech teams. We&apos;ll match you to an entire.</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="choose-us-item-02">
                    <div className="choose-us-img">
                      <img src="/assets/images/ser-icon12.png" alt="" />
                    </div>
                    <div className="choose-us-content">
                      <h3 className="title"><Link href="/choose-us"><span data-lang="vi">Máy tính để bàn</span><span data-lang="en">Desktop computing</span></Link></h3>
                      <p><span data-lang="vi">Đẩy nhanh đổi mới với đội ngũ công nghệ đẳng cấp, đồng hành cùng bạn toàn diện.</span><span data-lang="en">Accelerate innovation with world-class tech teams. We&apos;ll match you to an entire.</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <Link className="btn" href="/choose-us"><span data-lang="vi">Xem thêm lý do chọn chúng tôi</span><span data-lang="en">Why Choose Us</span></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Solution */}
      <div id="solutions" className="section techwix-solution-section section-padding">
        <div className="container">
          <div className="solution-wrap">
            <div className="section-title text-center">
              <h3 className="sub-title"><span data-lang="vi">Chúng tôi mang đến sự xuất sắc</span><span data-lang="en">We Deliver Excellence</span></h3>
              <h2 className="title"><span data-lang="vi">Giải pháp cho các bài toán AI phổ biến</span><span data-lang="en">Solutions To Common AI Problems</span></h2>
            </div>
            <div className="solution-content-wrap">
              <div className="row">
                <div className="col-lg-7">
                  <div className="solution-item solution-item-big">
                    <div className="solution-img">
                      <Link href="/service"><img src="/assets/images/solution-1.jpg" alt="" /></Link>
                    </div>
                    <div className="solution-content">
                      <div className="solution-title">
                        <h4 className="sub-title">Computer Vision</h4>
                        <h3 className="title"><Link href="/service"><span data-lang="vi">Thị giác máy tính: nhận diện hình ảnh, video và hành vi để tự động hóa quy trình nghiệp vụ.</span><span data-lang="en">Computer vision: image, video and behavior recognition to automate business processes.</span></Link></h3>
                      </div>
                      <a className="play-btn popup-video" href="https://www.youtube.com/embed/qjbZrnSsq1c?autoplay=1"><i className="fas fa-play"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="solution-item solution-item-sm">
                        <div className="solution-img">
                          <Link href="/service"><img src="/assets/images/solution-img2.jpg" alt="" /></Link>
                        </div>
                        <div className="solution-content">
                          <div className="solution-title">
                            <h4 className="sub-title">LLM &amp; AI Agents</h4>
                            <h3 className="title"><Link href="/service"><span data-lang="vi">Mô hình ngôn ngữ lớn và tác nhân AI cho chatbot, phân tích văn bản và tự động hóa tri thức.</span><span data-lang="en">Large language models and AI agents for chatbots, text analysis and knowledge automation.</span></Link></h3>
                          </div>
                          <a className="play-btn popup-video" href="https://www.youtube.com/embed/qjbZrnSsq1c?autoplay=1"><i className="fas fa-play"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="solution-item solution-item-sm">
                        <div className="solution-img">
                          <Link href="/service"><img src="/assets/images/solution-img3.jpg" alt="" /></Link>
                        </div>
                        <div className="solution-content">
                          <div className="solution-title">
                            <h4 className="sub-title"><span data-lang="vi">Nhận dạng giọng nói</span><span data-lang="en">Speech Recognition</span></h4>
                            <h3 className="title"><Link href="/service"><span data-lang="vi">Chuyển giọng nói thành văn bản và điều khiển bằng giọng nói cho ứng dụng doanh nghiệp.</span><span data-lang="en">Speech-to-text and voice control for enterprise applications.</span></Link></h3>
                          </div>
                          <a className="play-btn popup-video" href="https://www.youtube.com/embed/qjbZrnSsq1c?autoplay=1"><i className="fas fa-play"></i></a>
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

      {/* Testimonial */}
      <div id="testimonial" className="section bg-cover techwix-testimonial-section-02 techwix-testimonial-section-03 section-padding" style={{ backgroundImage: "url(/assets/images/bg/testi-bg4.jpg)" }}>
        <div className="container">
          <div className="testimonial-wrap-02">
            <div className="section-title text-center">
              <h3 className="sub-title"><span data-lang="vi">Đánh giá</span><span data-lang="en">Testimonial</span></h3>
              <h2 className="title"><span data-lang="vi">Hơn 20k khách hàng hài lòng trên toàn cầu</span><span data-lang="en">20k+ satisfied clients worldwide</span></h2>
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
                        <p><span data-lang="vi">Đẩy nhanh đổi mới với đội ngũ công nghệ đẳng cấp. Vượt xa hơn với sự chuyên nghiệp và cam kết đồng hành cùng bạn.</span><span data-lang="en">Accelerate innovation with world-class tech teams. Beyond more stoic this along goodness hey this this wow manatee.</span></p>
                        <span className="name">Mike Holder</span>
                        <span className="designation"><span data-lang="vi"> / iVista Tech</span><span data-lang="en"> / iVista Tech</span></span>
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
                        <p><span data-lang="vi">Đẩy nhanh đổi mới với đội ngũ công nghệ đẳng cấp. Vượt xa hơn với sự chuyên nghiệp và cam kết đồng hành cùng bạn.</span><span data-lang="en">Accelerate innovation with world-class tech teams. Beyond more stoic this along goodness hey this this wow manatee.</span></p>
                        <span className="name">Mike Fermalin</span>
                        <span className="designation"><span data-lang="vi"> / iVista Tech</span><span data-lang="en"> / iVista Tech</span></span>
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
                        <p><span data-lang="vi">Đẩy nhanh đổi mới với đội ngũ công nghệ đẳng cấp. Vượt xa hơn với sự chuyên nghiệp và cam kết đồng hành cùng bạn.</span><span data-lang="en">Accelerate innovation with world-class tech teams. Beyond more stoic this along goodness hey this this wow manatee.</span></p>
                        <span className="name">Mike Holder</span>
                        <span className="designation"><span data-lang="vi"> / iVista Tech</span><span data-lang="en"> / iVista Tech</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="text-center mt-5">
              <Link className="btn" href="/products"><span data-lang="vi">Xem Sản phẩm</span><span data-lang="en">View Products</span></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div id="team" className="section techwix-team-section techwix-team-section-03 section-padding">
        <div className="container">
          <div className="team-wrap">
            <div className="section-title text-center">
              <h3 className="sub-title">
                <span data-lang="vi">Đội ngũ</span>
                <span data-lang="en">Our Team</span>
              </h3>
              <h2 className="title">
                <span data-lang="vi">Gặp gỡ đội ngũ chuyên gia</span>
                <span data-lang="en">Meet Our Expert Team</span>
              </h2>
            </div>
            <div className="row">
              {HOME_TEAM.map((member, i) => (
                <div key={i} className="col-lg-3 col-sm-6">
                  <div className="single-team">
                    <div className="team-img">
                      <Link href="/team">
                        <img src={`/assets/images/team/members/${member.avatar}`} alt={member.name} />
                      </Link>
                    </div>
                    <div className="team-content">
                      <h3 className="name">
                        <Link href="/team">
                          {member.name.split(" ").length > 1 ? (
                            <>
                              {member.name.split(" ")[0]} <br /> {member.name.split(" ").slice(1).join(" ")}
                            </>
                          ) : (
                            member.name
                          )}
                        </Link>
                      </h3>
                      <span className="designation">
                        <span data-lang="vi">{member.degreeVi}</span>
                        <span data-lang="en">{member.degreeEn}</span>
                      </span>
                      <div className="team-social">
                        <ul className="social">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-5">
              <Link className="btn" href="/team">
                <span data-lang="vi">Xem toàn bộ đội ngũ</span>
                <span data-lang="en">View Full Team</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logo */}
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
                  <div className="swiper-slide single-brand">
                    <img src="/assets/images/brand/brand-2.png" alt="Brand" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div id="contact" className="section techwix-cta-section-03">
        <div className="container">
          <div className="cta-wrap" style={{ backgroundImage: "url(/assets/images/bg/cta-bg2.jpg)" }}>
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="cta-content">
                  <div className="section-title">
                    <h2 className="title white"><span data-lang="vi">Để yêu cầu thêm thông tin, vui lòng liên hệ với chúng tôi</span><span data-lang="en">To make requests for further information, contact us</span></h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cta-info text-center">
                  <div className="cta-icon">
                    <img src="/assets/images/cta-icon2.png" alt="" />
                  </div>
                  <p><span data-lang="vi">Gọi cho chúng tôi để được tư vấn</span><span data-lang="en">Call Us For Any inquiry</span></p>
                  <h3 className="number"><a href="tel:+84983835686" className="text-white text-decoration-none">+84 983 835 686</a></h3>
                  <Link className="btn mt-3" href="/contact"><span data-lang="vi">Liên hệ ngay</span><span data-lang="en">Contact Us</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
