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
                      {slug === "ai-alignment" && (
                        <div className="mb-4">
                          <video
                            src={`/assets/videos/products/${content.slug}/${encodeURIComponent("AI Aligment.mp4")}`}
                            controls
                            playsInline
                            className="w-100 rounded mb-3"
                          >
                            <span data-lang="vi">Trình duyệt không hỗ trợ video.</span>
                            <span data-lang="en">Your browser does not support the video tag.</span>
                          </video>
                          <p className="mb-0">
                            <span data-lang="vi">
                              Video minh họa toàn bộ quy trình hoạt động của hệ thống AI Alignment trong môi trường nhà máy tự động hóa hiện đại, từ
                              giai đoạn quét nhận dạng đến lắp ráp chính xác. Các linh kiện – từ chi tiết cơ khí đến vi mạch kích thước siêu nhỏ –
                              di chuyển trên dây chuyền với tốc độ cao, mỗi sản phẩm đều có các điểm mark (fiducial mark) được in trên bề mặt để xác
                              định vị trí chuẩn lắp ráp. Camera công nghiệp tốc độ cao quét từng sản phẩm khi đi qua; hệ thống AI thị giác máy phát
                              hiện chính xác các điểm mark, kể cả khi kích thước rất nhỏ hoặc có sai lệch nhẹ do rung động dây chuyền. Trên giao diện
                              giám sát, các dấu crosshair hiển thị vị trí mark cùng dữ liệu tọa độ X, Y và góc xoay θ được tính toán theo thời gian
                              thực. Với mỗi sản phẩm, hệ thống xác định sai lệch ΔX, ΔY và Δθ riêng biệt; robot pick-and-place sau đó nhận dữ liệu
                              hiệu chỉnh và tự động điều chỉnh vị trí thao tác, đảm bảo hai chi tiết được ghép khớp hoàn toàn. Video làm nổi bật khả
                              năng phát hiện mark siêu nhỏ với độ chính xác sub-pixel, xử lý tốc độ cao, tính toán hiệu chỉnh theo thời gian thực,
                              đồng bộ chính xác giữa camera, AI và robot, và sự khác biệt rõ ràng giữa trạng thái trước và sau alignment.
                            </span>
                          <span data-lang="en">
                              The video illustrates the complete AI Alignment workflow in a modern automated factory, from mark scanning to precise
                              assembly. Components – from mechanical parts to tiny ICs – move quickly along the line, each product carrying fiducial
                              marks that define the reference position. A high-speed industrial camera captures each product; the AI vision engine
                              accurately detects these marks even when they are very small or slightly shifted due to vibration. On the monitoring
                              interface, crosshairs show the detected mark positions along with real-time X, Y and θ coordinates. For every product,
                              the system computes its own ΔX, ΔY and Δθ and sends these corrections to the pick-and-place robot, which adjusts its
                              motion so that parts are aligned perfectly. The video highlights sub-pixel accuracy on tiny marks, high-speed processing,
                              real-time correction, tight synchronization between camera, AI, and robot, and the clear difference before and after
                              alignment.
                          </span>
                          </p>
                        </div>
                      )}
                      {slug === "ai-visual-inspection" && (
                        <div className="mb-4">
                          <video
                            src={`/assets/videos/products/AIVisualInspection/AI Visual Inspection1.mp4`}
                            controls
                            playsInline
                            className="w-100 rounded mb-3"
                          >
                            <span data-lang="vi">Trình duyệt không hỗ trợ video.</span>
                            <span data-lang="en">Your browser does not support the video tag.</span>
                          </video>
                          <p className="mb-0">
                            <span data-lang="vi">
                              Video minh họa giải pháp AI Visual Inspection trong hệ thống kiểm tra sản phẩm tự động. Camera công nghiệp thu nhận hình ảnh từng sản phẩm khi di chuyển trên băng chuyền tốc độ cao. Hệ thống AI thị giác máy phân tích hình ảnh theo thời gian thực, phát hiện các lỗi bề mặt như trầy xước, nứt vỡ, sai màu, loang màu, in mờ, sai ký tự hoặc thiếu linh kiện. Khi phát hiện lỗi, giao diện quản lý tự động đánh dấu PASS cho sản phẩm đạt chuẩn và FAIL cho sản phẩm lỗi. Hệ thống kích hoạt cơ cấu loại bỏ tự động, tách sản phẩm lỗi ra khỏi dây chuyền trong khi các sản phẩm đạt chuẩn tiếp tục di chuyển bình thường. Toàn bộ dữ liệu kiểm tra được lưu trữ, có thể truy xuất hình ảnh để kiểm chứng, và hiển thị trên dashboard thống kê để doanh nghiệp theo dõi tỷ lệ lỗi, phân tích nguyên nhân và tối ưu quy trình sản xuất.
                            </span>
                            <span data-lang="en">
                              The video demonstrates the AI Visual Inspection solution in an automated product quality control system. Industrial cameras capture images of each product as it moves on a high-speed conveyor. The AI vision system analyzes images in real time, detecting surface defects such as scratches, cracks, color variations, color bleeding, faded printing, character misalignment, or missing components. When defects are detected, the management interface automatically marks PASS for conforming products and FAIL for defective ones. The system activates an automatic rejection mechanism, removes defective products from the line while good products continue normally. All inspection data is stored and retrievable for verification, displayed on an analytics dashboard to help enterprises monitor defect rates, analyze root causes, and optimize production processes.
                            </span>
                          </p>
                        </div>
                      )}
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
                    {slug === "ai-alignment" && (
                      <div className="blog-details-text">
                        {/* Media demo AI Alignment – video/ảnh xen kẽ với các đoạn mô tả chung */}
                        <video
                          src={`/assets/videos/products/${content.slug}/Alignmentvd1.mp4`}
                          controls
                          playsInline
                          className="w-100 rounded mb-4"
                        >
                          <span data-lang="vi">Trình duyệt không hỗ trợ video.</span>
                          <span data-lang="en">Your browser does not support the video tag.</span>
                        </video>

                        <p className="mb-4">
                          <span data-lang="vi">
                            Video demo minh họa quy trình AI Alignment trên dây chuyền: camera chụp sản phẩm, mô-đun AI xử lý hình ảnh và tính toán
                            sai lệch, sau đó gửi tọa độ hiệu chỉnh cho hệ thống điều khiển.
                          </span>
                          <span data-lang="en">
                            The demo video shows the AI Alignment workflow on the line: the camera captures products, the AI module processes images and
                            computes deviation, then sends correction coordinates to the control system.
                          </span>
                        </p>

                        <img
                          src="/assets/images/Product/Alignment1.jpg"
                          alt="AI Alignment demo 1"
                          className="img-fluid rounded mb-4"
                        />

                        <p className="mb-4">
                          <span data-lang="vi">
                            Giải pháp được thiết kế như một cell thị giác máy độc lập nhưng dễ dàng tích hợp vào dây chuyền hiện hữu, cung cấp điểm
                            tham chiếu chính xác để robot, CNC hoặc máy in luôn thao tác đúng vị trí.
                          </span>
                          <span data-lang="en">
                            The solution is implemented as an independent vision cell that can be easily integrated into existing lines, providing
                            accurate reference points so robots, CNC machines, or printers always operate at the correct position.
                          </span>
                        </p>

                        <video
                          src={`/assets/videos/products/${content.slug}/Alignmentvd2.mp4`}
                          controls
                          playsInline
                          className="w-100 rounded mb-4"
                        >
                          <span data-lang="vi">Trình duyệt không hỗ trợ video.</span>
                          <span data-lang="en">Your browser does not support the video tag.</span>
                        </video>

                        <p className="mb-4">
                          <span data-lang="vi">
                            AI Alignment không chỉ tìm thấy mark mà còn tính toán ΔX, ΔY, Δθ theo thời gian thực, giúp hệ thống bù sai lệch mà không
                            cần dừng máy hoặc căn chỉnh thủ công.
                          </span>
                          <span data-lang="en">
                            AI Alignment not only finds the mark but also computes ΔX, ΔY, and Δθ in real time, allowing the system to compensate for
                            misalignment without stopping machines or performing manual adjustments.
                          </span>
                        </p>

                        <img
                          src="/assets/images/Product/Alignment2.jpg"
                          alt="AI Alignment demo 2"
                          className="img-fluid rounded mb-4"
                        />

                        <p className="mb-4">
                          <span data-lang="vi">
                            Giải pháp có thể triển khai cho nhiều loại sản phẩm khác nhau – từ bảng mạch điện tử, chi tiết cơ khí đến các cụm lắp ráp –
                            miễn là có vùng mark hoặc đặc trưng hình học đủ ổn định.
                          </span>
                          <span data-lang="en">
                            The solution can be deployed for many product types – from PCBs and mechanical parts to assembled modules – as long as
                            there is a stable mark region or geometric feature.
                          </span>
                        </p>

                        <img
                          src="/assets/images/Product/Alignment3.jpg"
                          alt="AI Alignment demo 3"
                          className="img-fluid rounded mb-4"
                        />

                        <p className="mb-4">
                          <span data-lang="vi">
                            Nhờ ứng dụng deep learning, hệ thống vẫn có thể nhận dạng và căn chỉnh chính xác ngay cả khi mark bị mờ nhẹ, có nhiễu bề
                            mặt hoặc thay đổi ánh sáng trong ca sản xuất.
                          </span>
                          <span data-lang="en">
                            By leveraging deep learning, the system can still recognize and align accurately even when marks are slightly faded, the
                            surface is noisy, or lighting conditions change during the shift.
                          </span>
                        </p>

                        <img
                          src="/assets/images/Product/Alignment4.jpg"
                          alt="AI Alignment demo 4"
                          className="img-fluid rounded mb-4"
                        />

                        <p className="mb-4">
                          <span data-lang="vi">
                            Giao diện giám sát cho phép kỹ sư cấu hình vùng quan tâm, ngưỡng sai số và theo dõi lịch sử vận hành, hỗ trợ bảo trì và tối
                            ưu dây chuyền về lâu dài.
                          </span>
                          <span data-lang="en">
                            A monitoring interface lets engineers configure regions of interest, error thresholds, and track operation history, helping
                            with maintenance and long-term line optimization.
                          </span>
                        </p>

                        <div className="row g-4 mb-4">
                          <div className="col-md-6">
                            <img
                              src="/assets/images/Product/Alignment5.jpg"
                              alt="AI Alignment demo 5"
                              className="img-fluid rounded"
                            />
                          </div>
                          <div className="col-md-6">
                            <img
                              src="/assets/images/Product/Alignment6.jpg"
                              alt="AI Alignment demo 6"
                              className="img-fluid rounded"
                            />
                          </div>
                        </div>

                        <p className="mb-0">
                          <span data-lang="vi">
                            Khi được triển khai trong nhà máy, AI Alignment giúp giảm sai lệch cơ học, hạn chế phế phẩm, giảm thời gian dừng máy do lỗi
                            căn chỉnh và tạo nền tảng dữ liệu cho các bài toán tự động hóa nâng cao khác.
                          </span>
                          <span data-lang="en">
                            Once deployed in the factory, AI Alignment helps reduce mechanical deviations, minimize scrap, shorten downtime caused by
                            alignment errors, and build a data foundation for more advanced automation scenarios.
                          </span>
                        </p>
                      </div>
                    )}
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
                    {slug === "ai-visual-inspection" && (
                      <div className="blog-details-text">
                        {/* Media demo AI Visual Inspection – ảnh xen kẽ với các đoạn mô tả */}
                        <div className="row g-4 mb-4">
                          <div className="col-md-6">
                            <img
                              src="/assets/images/Product/AIVisualInspection6.jpg"
                              alt="Pass & Fail Detection"
                              className="img-fluid rounded"
                            />
                          </div>
                          <div className="col-md-6">
                            <img
                              src="/assets/images/Product/AIVisualInspection5.jpg"
                              alt="Pass & Fail Detection"
                              className="img-fluid rounded"
                            />
                          </div>
                        </div>

                        <p className="mb-4">
                          <span data-lang="vi">
                            Hệ thống AI Visual Inspection tự động phát hiện và phân loại từng sản phẩm trên dây chuyền. Sản phẩm đạt chuẩn được đánh dấu PASS (màu xanh), sản phẩm lỗi được đánh dấu FAIL (màu đỏ). Dựa trên quyết định này, hệ thống tự động kích hoạt cơ cấu loại bỏ để tách sản phẩm lỗi ra khỏi dây chuyền.
                          </span>
                          <span data-lang="en">
                            The AI Visual Inspection system automatically detects and classifies each product on the line. Conforming products are marked PASS (green), defective ones marked FAIL (red). Based on this decision, the system automatically activates the rejection mechanism to remove defective products from the line.
                          </span>
                        </p>

                        <div className="row g-4 mb-4">
                          <div className="col-md-6">
                            <img
                              src="/assets/images/Product/AIVisualInspection1.png"
                              alt="System Overview"
                              className="img-fluid rounded mb-3"
                            />
                          </div>
                          <div className="col-md-6">
                            <img
                              src="/assets/images/Product/AIVisualInspection2.jpg"
                              alt="Production Line"
                              className="img-fluid rounded mb-3"
                            />
                          </div>
                        </div>

                        <p className="mb-4">
                          <span data-lang="vi">
                            Tổng quan hệ thống kiểm tra, từ dây chuyền sản xuất tới các camera công nghiệp và Edge AI processor. Hình ảnh cho thấy các sản phẩm đạt chuẩn tiếp tục di chuyển trên dây chuyền, trong khi sản phẩm lỗi được loại bỏ tự động tại vị trí kiểm tra.
                          </span>
                          <span data-lang="en">
                            System overview from production conveyor to industrial cameras and Edge AI processor. Images show conforming products continuing on the line while defective products are automatically rejected at the inspection station.
                          </span>
                        </p>

                        <img
                          src="/assets/images/Product/AIVisualInspection3.jpg"
                          alt="Defect Detection"
                          className="img-fluid rounded mb-4"
                        />

                        <p className="mb-4">
                          <span data-lang="vi">
                            Khả năng phát hiện lỗi chi tiết. Hệ thống AI nhận diện các khuyết tật bề mặt như trầy xước, nứt vỡ, sai màu, loang màu, in mờ, sai ký tự hoặc thiếu linh kiện. Mỗi lỗi được xác định vị trí chính xác trên sản phẩm để hỗ trợ phân tích nguyên nhân.
                          </span>
                          <span data-lang="en">
                            Detailed defect detection capability. The AI system identifies surface defects such as scratches, cracks, color mismatches, color bleeding, faded printing, character errors, or missing components. Each defect is precisely localized on the product for root cause analysis.
                          </span>
                        </p>

                        <img
                          src="/assets/images/Product/AIVisualInspection4.jpg"
                          alt="Automatic Rejection"
                          className="img-fluid rounded mb-4"
                        />

                        <p className="mb-4">
                          <span data-lang="vi">
                            Cơ cấu loại bỏ sản phẩm lỗi tự động. Khi AI phát hiện lỗi, tín hiệu được gửi tới PLC để kích hoạt các xylanh khí nén hoặc cơ cấu cơ khí khác, đẩy sản phẩm lỗi ra khỏi dây chuyền chính. Toàn bộ quá trình diễn ra tự động và nhanh chóng, không ảnh hưởng tới hiệu suất dây chuyền.
                          </span>
                          <span data-lang="en">
                            Automatic defective product rejection mechanism. When AI detects a defect, a signal is sent to the PLC to activate pneumatic cylinders or other mechanical systems, ejecting the defective product from the main line. The entire process is automatic and fast, without impacting line throughput.
                          </span>
                        </p>

                        <img
                          src="/assets/images/Product/AIVisualInspection7.jpg"
                          alt="Dashboard Analytics"
                          className="img-fluid rounded mb-4"
                        />

                        <p className="mb-4">
                          <span data-lang="vi">
                            Dashboard thống kê & phân tích lỗi. Giao diện web hiển thị dữ liệu kiểm tra theo thời gian thực, thống kê tỷ lệ lỗi theo loại, theo ca sản xuất, theo thời gian. Doanh nghiệp có thể truy xuất hình ảnh của sản phẩm lỗi để kiểm chứng độ chính xác, phân tích nguyên nhân và tối ưu quy trình.
                          </span>
                          <span data-lang="en">
                            Dashboard for statistics and defect analysis. The web interface displays real-time inspection data, defect rate statistics by type, production shift, and time. Enterprises can retrieve images of defective products for verification, analyze root causes, and optimize processes.
                          </span>
                        </p>

                        <img
                          src="/assets/images/Product/AIVisualInspection8.jpg"
                          alt="AI vs Manual Comparison"
                          className="img-fluid rounded mb-4"
                        />

                        <p className="mb-0">
                          <span data-lang="vi">
                            So sánh giữa kiểm tra bằng AI tự động và kiểm tra thủ công bằng con người. Kiểm tra AI đạt độ chính xác cao hơn, không chịu ảnh hưởng của mệt mỏi hay sai sót con người, và có thể xử lý tốc độ cao bằng với dây chuyền công nghiệp. Kiểm tra AI chuẩn hóa quy trình, giảm chi phí nhân công, và tăng độ tin cậy của sản phẩm đến khách hàng.
                          </span>
                          <span data-lang="en">
                            Comparison between AI automated inspection and manual human inspection. AI inspection achieves higher accuracy, is not affected by fatigue or human error, and processes at high speeds matching industrial conveyor rates. AI inspection standardizes procedures, reduces labor costs, and increases product reliability delivered to customers.
                          </span>
                        </p>
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
                        <Link className="btn btn-primary mt-2 d-block" href="/contact" style={{ width: 'fit-content', margin: '1rem 0' }}>
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
