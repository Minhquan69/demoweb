import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "../../components/PageBanner";
import { getProductDetail } from "../../data/productDetails";
import { PRODUCTS, getProductBySlug } from "../../data/products";

type Props = { params: Promise<{ slug: string }> };

const VI_INTRO: Record<string, { title: string; text: string }> = {
  "intelligent-video-surveillance": {
    title: "Giải pháp là gì?",
    text:
      "Giải pháp Giám sát video thông minh & Trợ lý dự đoán mối đe dọa kết hợp body cam với AI phân tích video, phục vụ đăng kiểm và hiện trường. Hệ thống cung cấp LiveView theo dõi người và xe, xem lại video, xuất báo cáo và tìm kiếm lịch sử nhận dạng (khuôn mặt, biển số) theo ngày, camera và phương tiện.",
  },
};

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
              <div className="col-xl-8 col-lg-8">
                <div className="blog-details-post">
                  <div className="single-blog-post single-blog">
                    <div className="blog-image">
                      <img src={`/assets/images/blog/${content.heroImg}`} alt="" />
                    </div>
                    <div className="blog-content">
                      <h3 className="title">
                        <span data-lang="vi">{content.titleVi}</span>
                        <span data-lang="en">{content.titleEn}</span>
                      </h3>
                      <h4 className="h5 mt-3 mb-2">
                        <span data-lang="vi">{VI_INTRO[content.slug]?.title ?? content.whatIsTitle}</span>
                        <span data-lang="en">{content.whatIsTitle}</span>
                      </h4>
                      <p className="text">
                        <span data-lang="vi">{VI_INTRO[content.slug]?.text ?? content.whatIsText}</span>
                        <span data-lang="en">{content.whatIsText}</span>
                      </p>
                    </div>
                  </div>
                  <div className="blog-details-content">
                    <div className="blog-details-text">
                      <h4 className="mb-3">
                        <span data-lang="vi">Lợi ích của giải pháp</span>
                        <span data-lang="en">{content.benefitsTitle}</span>
                      </h4>
                      {content.benefits.map((b, i) => (
                        <div key={i} className="mb-4">
                          <h5 className="text-primary mb-2">{b.title}</h5>
                          <p>{b.text}</p>
                        </div>
                      ))}
                    </div>
                    {content.productVideos && content.productVideos.length > 0 && (
                      <div className="blog-details-text">
                        <h4 className="mb-3">
                          <span data-lang="vi">Video sản phẩm</span>
                          <span data-lang="en">Product videos</span>
                        </h4>
                        <p className="mb-3 text-muted">
                          <span data-lang="vi">Giao diện app và video mô phỏng các chức năng giải pháp.</span>
                          <span data-lang="en">App interface and demo videos for each feature.</span>
                        </p>
                        <div className="row g-3">
                          {content.productVideos.map((v, i) => (
                            <div key={i} className="col-12">
                              <p className="mb-1 fw-semibold">
                                <span data-lang="vi">{v.labelVi}</span>
                                <span data-lang="en">{v.labelEn}</span>
                              </p>
                              <video
                                src={`/assets/videos/products/${content.slug}/${encodeURIComponent(v.file)}`}
                                controls
                                playsInline
                                className="w-100 rounded"
                                style={{ maxHeight: "400px", background: "#000" }}
                              >
                                Trình duyệt không hỗ trợ video.
                              </video>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="blog-details-text">
                      <h4 className="mb-3">
                        <span data-lang="vi">Ứng dụng trong thực tế</span>
                        <span data-lang="en">{content.applicationsTitle}</span>
                      </h4>
                      <p className="mb-3">
                        <span data-lang="en">Our solutions are used in a variety of business and life scenarios. See a few examples below.</span>
                        <span data-lang="vi">Giải pháp được ứng dụng trong nhiều lĩnh vực. Dưới đây là một số ví dụ.</span>
                      </p>
                      {content.applications.map((a, i) => (
                        <div key={i} className="mb-4">
                          <h5 className="mb-2">{a.title}</h5>
                          <p>{a.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="blog-details-text">
                      <h4 className="mb-3">
                        <span data-lang="vi">Sản phẩm và thiết bị liên quan</span>
                        <span data-lang="en">{content.equippedTitle}</span>
                      </h4>
                      {content.equippedIntro && <p className="mb-3">{content.equippedIntro}</p>}
                      {content.equippedProducts.map((p, i) => (
                        <div key={i} className="mb-4">
                          <h5 className="mb-2">{p.title}</h5>
                          <p>{p.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="blog-details-text">
                      <h4 className="mb-3">
                        <span data-lang="vi">Tài nguyên tham khảo</span>
                        <span data-lang="en">{content.resourcesTitle}</span>
                      </h4>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <h6 className="text-uppercase text-muted mb-2">
                            <span data-lang="vi">Giải pháp</span>
                            <span data-lang="en">Solutions</span>
                          </h6>
                          <ul className="list-unstyled">
                            {content.solutions.map((s, i) => (
                              <li key={i}>
                                <Link href={s.href}>{s.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {content.downloads.length > 0 && (
                          <div className="col-md-6 mb-3">
                            <h6 className="text-uppercase text-muted mb-2">Downloads</h6>
                            <ul className="list-unstyled">
                              {content.downloads.map((d, i) => (
                                <li key={i}>
                                  <Link href={d.href}>{d.label}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {content.videoLinks && content.videoLinks.length > 0 && (
                          <div className="col-md-6 mb-3">
                            <h6 className="text-uppercase text-muted mb-2">{content.videoLabel}</h6>
                            <ul className="list-unstyled">
                              {content.videoLinks.map((v, i) => (
                                <li key={i}>
                                  <Link href={v.href}>{v.label}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {content.newsLinks && content.newsLinks.length > 0 && (
                          <div className="col-md-6 mb-3">
                            <h6 className="text-uppercase text-muted mb-2">{content.newsLabel}</h6>
                            <ul className="list-unstyled">
                              {content.newsLinks.map((n, i) => (
                                <li key={i}>
                                  <Link href={n.href}>{n.label}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {content.blogLinks && content.blogLinks.length > 0 && (
                          <div className="col-md-6 mb-3">
                            <h6 className="text-uppercase text-muted mb-2">{content.blogLabel}</h6>
                            <ul className="list-unstyled">
                              {content.blogLinks.map((b, i) => (
                                <li key={i}>
                                  <Link href={b.href}>{b.label}</Link>
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
                          <span data-lang="vi">Ví dụ thông tin chi tiết phương tiện</span>
                          <span data-lang="en">Sample vehicle details (recognition result)</span>
                        </h4>
                        <p className="mb-3 text-muted small">
                          <span data-lang="vi">Khi tìm kiếm lịch sử nhận dạng, mỗi kết quả có thể xem thông tin chi tiết như sau:</span>
                          <span data-lang="en">When searching recognition history, each result can show detailed vehicle information such as:</span>
                        </p>
                        <div className="table-responsive">
                          <table className="table table-bordered table-sm">
                            <tbody>
                              {content.sampleVehicleInfo.map((f, i) => (
                                <tr key={i}>
                                  <td className="text-nowrap fw-semibold" style={{ width: "40%" }}>
                                    <span data-lang="vi">{f.labelVi}</span>
                                    <span data-lang="en">{f.labelEn}</span>
                                  </td>
                                  <td>{f.value || "—"}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                    <div className="blog-quote">
                      <blockquote className="blockquote">
                        <p>
                          <span data-lang="vi">Đội ngũ iVista Tech luôn sẵn sàng hỗ trợ bạn lựa chọn giải pháp phù hợp.</span>
                          <span data-lang="en">{content.contactText}</span>
                        </p>
                        <Link className="btn btn-primary mt-2" href="/contact">
                          <span data-lang="vi">Liên hệ iVista Tech</span>
                          <span data-lang="en">{content.contactCta}</span>
                        </Link>
                      </blockquote>
                    </div>
                    <div className="blog-details-text">
                      <h4 className="mb-3">
                        <span data-lang="vi">Khám phá thêm công nghệ khác</span>
                        <span data-lang="en">{content.exploreTitle}</span>
                      </h4>
                      {content.exploreTechs.length > 0 ? (
                        content.exploreTechs.map((t, i) => (
                          <div key={i} className="mb-3">
                            <Link href={t.href} className="fw-semibold">
                              {t.title}
                            </Link>
                            <p className="mb-0 small">{t.text}</p>
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
                          <span className="label">Tags :</span>
                          <ul className="sidebar-tag">
                            <li><Link href="/products">Security</Link></li>
                            <li><Link href="/products">AI</Link></li>
                            <li><Link href="/products">Surveillance</Link></li>
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
              <div className="col-xl-3 col-lg-4">
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
                      <h3 className="title">Tags</h3>
                    </div>
                    <ul className="sidebar-tag">
                      <li><Link href="/products">Security</Link></li>
                      <li><Link href="/products">AI</Link></li>
                      <li><Link href="/products">Face Recognition</Link></li>
                      <li><Link href="/products">Surveillance</Link></li>
                      <li><Link href="/products">Bodycam</Link></li>
                      <li><Link href="/products">Technology</Link></li>
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
                  <p>We&apos;re Delivering the best customer Experience</p>
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
