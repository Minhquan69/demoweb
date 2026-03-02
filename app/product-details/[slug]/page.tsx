import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "../../components/PageBanner";
import { getProductDetail } from "../../data/productDetails";
import { PRODUCTS, getProductBySlug } from "../../data/products";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailsSlugPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const content = getProductDetail(slug);
  if (!product || !content) notFound();

  const currentIndex = PRODUCTS.findIndex((p) => p.slug === slug);
  const prevProduct = currentIndex > 0 ? PRODUCTS[currentIndex - 1] : null;
  const nextProduct = currentIndex >= 0 && currentIndex < PRODUCTS.length - 1 ? PRODUCTS[currentIndex + 1] : null;

  return (
    <>
      <PageBanner
        title={
          <>
            <span data-lang="vi">{content.titleVi}</span>
            <span data-lang="en">{content.titleEn}</span>
          </>
        }
        breadcrumbCurrent={
          <>
            <span data-lang="vi">{content.titleVi}</span>
            <span data-lang="en">{content.titleEn}</span>
          </>
        }
      />
      <div className="section blog-details-section section-padding-02">
        <div className="container">
          <div className="blog-details-wrap">
            <div className="row">
              <div className="col-xl-9 col-lg-9">
                <div className="blog-details-post">
                  <div className="single-blog-post single-blog">
                    <div className="blog-image">
                      <img src={`/assets/images/${content.heroImg}`} alt="" />
                    </div>
                    <div className="blog-content">
                      <h3 className="title">
                        <span data-lang="vi">{content.titleVi}</span>
                        <span data-lang="en">{content.titleEn}</span>
                      </h3>
                      <h4 className="h5 mt-3 mb-2">
                        <span data-lang="vi">{content.whatIsTitleVi}</span>
                        <span data-lang="en">{content.whatIsTitleEn}</span>
                      </h4>
                      <p className="text">
                        <span data-lang="vi">{content.whatIsTextVi}</span>
                        <span data-lang="en">{content.whatIsTextEn}</span>
                      </p>
                    </div>
                  </div>
                  <div className="blog-details-content">
                    <div className="blog-details-text">
                      <h4 className="mb-3">
                        <span data-lang="vi">{content.benefitsTitleVi}</span>
                        <span data-lang="en">{content.benefitsTitleEn}</span>
                      </h4>
                      {content.benefits.map((b, i) => (
                        <div key={i} className="mb-4">
                          <h5 className="text-primary mb-2">
                            <span data-lang="vi">{b.titleVi}</span>
                            <span data-lang="en">{b.titleEn}</span>
                          </h5>
                          <p>
                            <span data-lang="vi">{b.textVi}</span>
                            <span data-lang="en">{b.textEn}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                    {slug === "bodycam-smart-recorder" && (
                      <div className="blog-details-text">
                        {/* Bộ ảnh demo bodycam – minh họa sản phẩm thực tế (phần trên) */}
                        <div className="mb-4">
                          <img
                            src="/assets/images/Product/bodycam2.jpg"
                            alt="Các tư thế đeo bodycam trên vai và ngực"
                            className="img-fluid rounded mb-3"
                          />
                          <p className="mb-0">
                            <span data-lang="vi">
                              Bộ ảnh minh họa cho thấy bodycam có thể đeo linh hoạt ở vai, ngực hoặc phía trước áo, phản ánh đúng góc nhìn thực tế
                              của cán bộ ngoài hiện trường. Thiết kế dây đai và ngàm kẹp giúp thiết bị bám chắc ngay cả khi di chuyển nhanh, đồng thời
                              không làm vướng thao tác nghiệp vụ.
                            </span>
                            <span data-lang="en">
                              The demo photos show how the bodycam can be worn flexibly on the shoulder, chest, or front of the uniform, capturing a
                              realistic field-of-view. Straps and clips are designed to keep the device firmly in place even during rapid movement
                              without interfering with operational tasks.
                            </span>
                          </p>
                        </div>

                        <div className="mb-4">
                          <img
                            src="/assets/images/Product/bodycam3.jpg"
                            alt="Dock sạc và trạm nạp dữ liệu cho bodycam"
                            className="img-fluid rounded mb-3"
                          />
                          <p className="mb-0">
                            <span data-lang="vi">
                              Dock sạc minh họa cách đơn vị có thể bố trí khu vực tiếp nhận bodycam sau ca trực: cán bộ chỉ cần gắn thiết bị vào dock,
                              hệ thống sẽ lo phần sạc pin và đồng bộ dữ liệu lên server. Cách tổ chức này giúp quy trình bàn giao ca trực gọn gàng và
                              chuyên nghiệp hơn.
                            </span>
                            <span data-lang="en">
                              The charging dock photo demonstrates how units can set up a bodycam handover area at the end of each shift: officers
                              simply place devices into the dock while the system handles charging and synchronizing data to the server, making shift
                              handover cleaner and more professional.
                            </span>
                          </p>
                        </div>
                      </div>
                    )}
                    {content.productVideos && content.productVideos.length > 0 && (
                      <div className="blog-details-text">
                        <h4 className="mb-3">
                          <span data-lang="vi">Chức năng & Video sản phẩm</span>
                          <span data-lang="en">Features & product videos</span>
                        </h4>
                        <p className="mb-4 text-muted">
                          <span data-lang="vi">Giao diện app và video mô phỏng từng chức năng. Xem video xong đọc mô tả bên dưới.</span>
                          <span data-lang="en">App interface and demo video for each feature. Watch the video then read the description below.</span>
                        </p>
                        {content.productVideos.map((v, i) => (
                          <div key={i} className="mb-5">
                            <h5 className="mb-2 fw-semibold">
                              <span data-lang="vi">{v.labelVi}</span>
                              <span data-lang="en">{v.labelEn}</span>
                            </h5>
                            <video
                              src={`/assets/videos/products/${content.slug}/${encodeURIComponent(v.file)}`}
                              controls
                              playsInline
                              className="w-100 rounded mb-3"
                              style={{ maxHeight: "400px", background: "#000" }}
                            >
                              <span data-lang="vi">Trình duyệt không hỗ trợ video.</span>
                              <span data-lang="en">Your browser does not support the video tag.</span>
                            </video>
                            {content.applications[i] && (
                              <div className="ps-0">
                                <p className="mb-0">
                                  <span data-lang="vi">{content.applications[i].textVi}</span>
                                  <span data-lang="en">{content.applications[i].textEn}</span>
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="blog-details-text">
                      <h4 className="mb-3">
                        <span data-lang="vi">{content.equippedTitleVi}</span>
                        <span data-lang="en">{content.equippedTitleEn}</span>
                      </h4>
                      {(content.equippedIntroVi != null || content.equippedIntroEn != null) && (
                        <p className="mb-3">
                          <span data-lang="vi">{content.equippedIntroVi}</span>
                          <span data-lang="en">{content.equippedIntroEn}</span>
                        </p>
                      )}
                      {content.equippedProducts.map((p, i) => (
                        <div key={i} className="mb-4">
                          <h5 className="mb-2">
                            <span data-lang="vi">{p.titleVi}</span>
                            <span data-lang="en">{p.titleEn}</span>
                          </h5>
                          <p>
                            <span data-lang="vi">{p.textVi}</span>
                            <span data-lang="en">{p.textEn}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                    {slug === "bodycam-smart-recorder" && (
                      <div className="blog-details-text">
                        <div className="row g-4 align-items-start">
                          <div className="col-md-6">
                            <img
                              src="/assets/images/Product/bodycam4.jpg"
                              alt="Giao diện phần mềm quản lý video từ bodycam"
                              className="img-fluid rounded mb-3"
                            />
                            <p className="mb-0">
                              <span data-lang="vi">
                                Ảnh giao diện phần mềm cho thấy cán bộ có thể xem lại, lọc và đánh dấu các đoạn video quan trọng sau ca trực. Đây là
                                công cụ hỗ trợ quản lý, thanh tra và đào tạo nội bộ, chứ không phải là tính năng tách rời, giúp toàn bộ vòng đời dữ
                                liệu từ hiện trường đến trung tâm trở nên liền mạch.
                              </span>
                              <span data-lang="en">
                                The software interface screenshot illustrates how officers and managers can review, filter, and flag important clips
                                after a shift. It supports supervision, auditing, and internal training as part of a unified evidence workflow rather
                                than a standalone feature.
                              </span>
                            </p>
                          </div>
                          <div className="col-md-6">
                            <img
                              src="/assets/images/Product/bodycam5.jpg"
                              alt="Triển khai bodycam tại cơ quan nhà nước"
                              className="img-fluid rounded mb-3"
                            />
                            <p className="mb-0">
                              <span data-lang="vi">
                                Hình ảnh triển khai thực tế tại cơ quan nhà nước minh họa cách bodycam đi vào hoạt động trong môi trường công vụ. Qua
                                các dự án thí điểm, thiết bị đã giúp giảm số lượng khiếu nại liên quan đến xử lý tại hiện trường và cung cấp tư liệu
                                trực quan để cải tiến quy trình làm việc.
                              </span>
                              <span data-lang="en">
                                A real-world deployment photo at a public agency demonstrates how bodycams operate in official settings. Pilot projects
                                have shown fewer complaints about field handling and provided rich visual material for refining and improving work
                                procedures.
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="blog-details-text">
                      <h4 className="mb-3">
                        <span data-lang="vi">{content.resourcesTitleVi}</span>
                        <span data-lang="en">{content.resourcesTitleEn}</span>
                      </h4>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <ul className="list-unstyled">
                            {content.solutions.map((s, i) => (
                              <li key={i}>
                                <Link href={s.href}>
                                  <span data-lang="vi">{s.labelVi}</span>
                                  <span data-lang="en">{s.labelEn}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {content.downloads.length > 0 && (
                          <div className="col-md-6 mb-3">
                            <h6 className="text-uppercase text-muted mb-2">
                              <span data-lang="vi">Tải xuống</span>
                              <span data-lang="en">Downloads</span>
                            </h6>
                            <ul className="list-unstyled">
                              {content.downloads.map((d, i) => (
                                <li key={i}>
                                  <Link href={d.href}>
                                    <span data-lang="vi">{d.labelVi}</span>
                                    <span data-lang="en">{d.labelEn}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {content.videoLinks && content.videoLinks.length > 0 && content.videoLabelVi != null && (
                          <div className="col-md-6 mb-3">
                            <h6 className="text-uppercase text-muted mb-2">
                              <span data-lang="vi">{content.videoLabelVi}</span>
                              <span data-lang="en">{content.videoLabelEn}</span>
                            </h6>
                            <ul className="list-unstyled">
                              {content.videoLinks.map((v, i) => (
                                <li key={i}>
                                  <Link href={v.href}>
                                    <span data-lang="vi">{v.labelVi}</span>
                                    <span data-lang="en">{v.labelEn}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {content.newsLinks && content.newsLinks.length > 0 && content.newsLabelVi != null && (
                          <div className="col-md-6 mb-3">
                            <h6 className="text-uppercase text-muted mb-2">
                              <span data-lang="vi">{content.newsLabelVi}</span>
                              <span data-lang="en">{content.newsLabelEn}</span>
                            </h6>
                            <ul className="list-unstyled">
                              {content.newsLinks.map((n, i) => (
                                <li key={i}>
                                  <Link href={n.href}>
                                    <span data-lang="vi">{n.labelVi}</span>
                                    <span data-lang="en">{n.labelEn}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {content.blogLinks && content.blogLinks.length > 0 && content.blogLabelVi != null && (
                          <div className="col-md-6 mb-3">
                            <h6 className="text-uppercase text-muted mb-2">
                              <span data-lang="vi">{content.blogLabelVi}</span>
                              <span data-lang="en">{content.blogLabelEn}</span>
                            </h6>
                            <ul className="list-unstyled">
                              {content.blogLinks.map((b, i) => (
                                <li key={i}>
                                  <Link href={b.href}>
                                    <span data-lang="vi">{b.labelVi}</span>
                                    <span data-lang="en">{b.labelEn}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    {content.sampleVehicleInfo && content.sampleVehicleInfo.length > 0 && (
                      <div className="blog-details-text">
                        <h4 className="mb-3">
                          <span data-lang="vi">Thông tin chi tiết phương tiện</span>
                          <span data-lang="en">Vehicle details (recognition result)</span>
                        </h4>
                        <p className="mb-3 text-muted">
                          <span data-lang="vi">Khi tìm kiếm lịch sử nhận dạng, mỗi kết quả có thể xem các thông tin chi tiết sau:</span>
                          <span data-lang="en">When searching recognition history, each result can show the following details:</span>
                        </p>
                        <ul className="list-unstyled row g-2">
                          {content.sampleVehicleInfo.map((f, i) => (
                            <li key={i} className="col-md-6 col-lg-4">
                              <span data-lang="vi">• {f.labelVi}</span>
                              <span data-lang="en">• {f.labelEn}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="blog-quote">
                      <blockquote className="blockquote">
                        <p>
                          <span data-lang="vi">{content.contactTextVi}</span>
                          <span data-lang="en">{content.contactTextEn}</span>
                        </p>
                        <Link className="btn btn-primary mt-2" href="/contact">
                          <span data-lang="vi">{content.contactCtaVi}</span>
                          <span data-lang="en">{content.contactCtaEn}</span>
                        </Link>
                      </blockquote>
                    </div>
                    <div className="blog-details-text">
                      <h4 className="mb-3">
                        <span data-lang="vi">{content.exploreTitleVi}</span>
                        <span data-lang="en">{content.exploreTitleEn}</span>
                      </h4>
                      {content.exploreTechs.length > 0 ? (
                        content.exploreTechs.map((t, i) => (
                          <div key={i} className="mb-3">
                            <Link href={t.href} className="fw-semibold">
                              <span data-lang="vi">{t.titleVi}</span>
                              <span data-lang="en">{t.titleEn}</span>
                            </Link>
                            <p className="mb-0 small">
                              <span data-lang="vi">{t.textVi}</span>
                              <span data-lang="en">{t.textEn}</span>
                            </p>
                          </div>
                        ))
                      ) : (
                        <p className="text-muted mb-0">
                          <span data-lang="vi">Hiện tại đây là sản phẩm chính của chúng tôi. Liên hệ để biết thêm giải pháp khác.</span>
                          <span data-lang="en">This is our flagship product. Contact us for other solutions.</span>
                        </p>
                      )}
                    </div>
                    <div className="blog-details-tag-share">
                      <div className="blog-details-tag">
                        <div className="sidebar-widget">
                          <span className="label">
                            <span data-lang="vi">Thẻ:</span>
                            <span data-lang="en">Tags:</span>
                          </span>
                          <ul className="sidebar-tag">
                            <li><Link href="/products"><span data-lang="vi">An ninh</span><span data-lang="en">Security</span></Link></li>
                            <li><Link href="/products">AI</Link></li>
                            <li><Link href="/products"><span data-lang="vi">Giám sát</span><span data-lang="en">Surveillance</span></Link></li>
                          </ul>
                        </div>
                      </div>
                      <div className="blog-details-share">
                        <ul className="social-share">
                          <li><a className="share-facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a className="share-twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                          <li><a className="share-pinterest" href="#"><i className="fab fa-pinterest-p"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 text-xl-end text-lg-end">
                <div className="blog-sidebar">
                  <div className="sidebar-widget">
                    <div className="widget-title">
                      <h3 className="title"><span data-lang="vi">Danh mục</span><span data-lang="en">Categories</span></h3>
                    </div>
                    <ul className="category">
                      <li className="cate-item"><Link href="/products"><i className="flaticon-next"></i> <span data-lang="vi">Nhận diện</span><span data-lang="en">Recognition</span> <span className="post-count">2</span></Link></li>
                      <li className="cate-item"><Link href="/products"><i className="flaticon-next"></i> <span data-lang="vi">Giám sát</span><span data-lang="en">Surveillance</span> <span className="post-count">2</span></Link></li>
                      <li className="cate-item"><Link href="/products"><i className="flaticon-next"></i> <span data-lang="vi">An ninh</span><span data-lang="en">Security</span> <span className="post-count">2</span></Link></li>
                      <li className="cate-item"><Link href="/products"><i className="flaticon-next"></i> AI <span className="post-count">2</span></Link></li>
                    </ul>
                  </div>
                  <div className="sidebar-widget">
                    <div className="widget-title">
                      <h3 className="title"><span data-lang="vi">Thẻ</span><span data-lang="en">Tags</span></h3>
                    </div>
                    <ul className="sidebar-tag">
                      <li><Link href="/products"><span data-lang="vi">An ninh</span><span data-lang="en">Security</span></Link></li>
                      <li><Link href="/products">AI</Link></li>
                      <li><Link href="/products">Face Recognition</Link></li>
                      <li><Link href="/products"><span data-lang="vi">Giám sát</span><span data-lang="en">Surveillance</span></Link></li>
                      <li><Link href="/products">Bodycam</Link></li>
                      <li><Link href="/products"><span data-lang="vi">Công nghệ</span><span data-lang="en">Technology</span></Link></li>
                    </ul>
                  </div>
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
                  <p>
                    <span data-lang="vi">Chúng tôi mang đến trải nghiệm khách hàng tốt nhất</span>
                    <span data-lang="en">We&apos;re delivering the best customer experience</span>
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="cta-btn">
                  <Link className="btn btn-white" href="/contact">
                    <span data-lang="vi">Liên hệ</span>
                    <span data-lang="en">Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
