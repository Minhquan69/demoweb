import { ProductSlug } from "./products";

export type Benefit = { titleVi: string; titleEn: string; textVi: string; textEn: string };
export type Application = { titleVi: string; titleEn: string; textVi: string; textEn: string };
export type EquippedProduct = { titleVi: string; titleEn: string; textVi: string; textEn: string };
export type ResourceLink = { labelVi: string; labelEn: string; href: string };
export type ExploreTech = { titleVi: string; titleEn: string; href: string; textVi: string; textEn: string };
export type ProductVideo = { file: string; labelVi: string; labelEn: string };
export type SampleVehicleField = { labelVi: string; labelEn: string; value: string };

export type ProductDetailContent = {
  slug: ProductSlug;
  titleVi: string;
  titleEn: string;
  heroImg: string;
  whatIsTitleVi: string;
  whatIsTitleEn: string;
  whatIsTextVi: string;
  whatIsTextEn: string;
  benefitsTitleVi: string;
  benefitsTitleEn: string;
  benefits: Benefit[];
  applicationsTitleVi: string;
  applicationsTitleEn: string;
  applications: Application[];
  equippedTitleVi: string;
  equippedTitleEn: string;
  equippedIntroVi?: string;
  equippedIntroEn?: string;
  equippedProducts: EquippedProduct[];
  resourcesTitleVi: string;
  resourcesTitleEn: string;
  solutions: ResourceLink[];
  downloads: ResourceLink[];
  productVideos?: ProductVideo[];
  sampleVehicleInfo?: SampleVehicleField[];
  videoLabelVi?: string;
  videoLabelEn?: string;
  videoLinks?: ResourceLink[];
  newsLabelVi?: string;
  newsLabelEn?: string;
  newsLinks?: ResourceLink[];
  blogLabelVi?: string;
  blogLabelEn?: string;
  blogLinks?: ResourceLink[];
  contactTitleVi: string;
  contactTitleEn: string;
  contactTextVi: string;
  contactTextEn: string;
  contactCtaVi: string;
  contactCtaEn: string;
  exploreTitleVi: string;
  exploreTitleEn: string;
  exploreTechs: ExploreTech[];
};

const INTELLIGENT_VIDEO_SURVEILLANCE: ProductDetailContent = {
  slug: "intelligent-video-surveillance",
  titleVi: "Giám sát video thông minh & Trợ lý dự đoán mối đe dọa",
  titleEn: "Intelligent Video Surveillance & Threat Prediction Assistant",
  heroImg: "Product/dangkiem-1724071272803999041132.jpg",
  whatIsTitleVi: "Giải pháp là gì?",
  whatIsTitleEn: "What is Intelligent Video Surveillance & Threat Prediction?",
  whatIsTextVi:
    "Giải pháp kết hợp body cam với AI phân tích video, phục vụ đăng kiểm và hiện trường. Hệ thống cung cấp LiveView theo dõi người và xe, xem lại video, xuất báo cáo và tìm kiếm lịch sử nhận dạng (khuôn mặt, biển số) theo ngày, camera và phương tiện.",
  whatIsTextEn:
    "Our solution combines body-worn cameras with AI-powered video analytics for vehicle inspection and field operations. It delivers real-time LiveView of people and vehicles, instant playback, export of video and reports, and deep search over recognition history—by face, license plate, or both—with filters by date, time range, camera, and vehicle. The system helps inspectors and supervisors work smarter with accurate, traceable evidence and actionable insights.",
  benefitsTitleVi: "Lợi ích chính",
  benefitsTitleEn: "Key benefits",
  benefits: [
    {
      titleVi: "Hiển thị theo thời gian thực",
      titleEn: "Real-time visibility",
      textVi: "LiveView cho phép theo dõi người và phương tiện khi sự kiện diễn ra. Cán bộ đăng kiểm xem cùng luồng trên di động hoặc máy tính, phối hợp và phản hồi nhanh hơn.",
      textEn: "LiveView lets you monitor people and vehicles as events happen. Inspectors see the same stream on mobile or desktop, so coordination and response are faster.",
    },
    {
      titleVi: "Chuỗi bằng chứng đầy đủ",
      titleEn: "Full evidence chain",
      textVi: "Ghi hình, xem lại và xuất video kèm báo cáo liên kết. Mỗi clip có thể gắn với sự kiện nhận dạng (khuôn mặt hoặc biển số), giúp kiểm toán và tuân thủ đơn giản.",
      textEn: "Record, review, and export video with linked reports. Every clip can be tied to a recognition event (face or plate), making audits and compliance straightforward.",
    },
    {
      titleVi: "Tìm kiếm mạnh mẽ",
      titleEn: "Powerful search",
      textVi: "Tìm kiếm lịch sử nhận dạng theo khuôn mặt, biển số hoặc cả hai. Lọc theo ngày, khoảng thời gian, camera và phương tiện. Thống kê theo camera và theo xe giúp phát hiện mẫu và ưu tiên xử lý.",
      textEn: "Search recognition history by face, plate, or both. Filter by date, time range, camera, and vehicle. Statistics by camera and by vehicle help you spot patterns and prioritize follow-up.",
    },
    {
      titleVi: "Độ chính xác nhờ AI",
      titleEn: "AI-driven accuracy",
      textVi: "Mô hình deep learning nhận dạng khuôn mặt và biển số giúp giảm công sức thủ công và sai sót, đội ngũ tập trung vào quyết định thay vì nhập liệu.",
      textEn: "Deep learning models for face and plate recognition reduce manual work and human error, so your team can focus on decisions instead of data entry.",
    },
  ],
  applicationsTitleVi: "Chức năng chính",
  applicationsTitleEn: "Core features",
  applications: [
    {
      titleVi: "LiveView – Theo dõi người và ô tô",
      titleEn: "LiveView – Track people and vehicles",
      textVi: "Xem trực tiếp luồng hình từ body cam hoặc camera hiện trường. Giao diện cho phép theo dõi đồng thời con người và phương tiện, hỗ trợ giám sát đăng kiểm và an ninh theo thời gian thực.",
      textEn: "LiveView supports real-time monitoring of both people and vehicles from body cams and fixed cameras, ideal for inspection and security operations.",
    },
    {
      titleVi: "Xem lại video",
      titleEn: "Video playback",
      textVi: "Truy cập kho lưu trữ video, tìm theo thời gian và sự kiện, phát lại các đoạn clip liên quan đến nhận dạng khuôn mặt hoặc biển số. Giao diện thân thiện giúp tra cứu nhanh và xác minh bằng chứng.",
      textEn: "Browse recorded footage by time and event; play clips linked to face or plate recognition for quick verification and evidence review.",
    },
    {
      titleVi: "Xuất video và báo cáo",
      titleEn: "Export video and reports",
      textVi: "Xuất các đoạn video đã chọn và báo cáo kèm theo (PDF hoặc file khác) để lưu trữ, chia sẻ nội bộ hoặc nộp cơ quan. Đảm bảo tính toàn vẹn và truy xuất nguồn gốc.",
      textEn: "Export selected clips and generate reports (e.g. PDF) for archiving, internal sharing, or submission to authorities, with full traceability.",
    },
    {
      titleVi: "Tìm kiếm lịch sử nhận dạng",
      titleEn: "Search recognition history",
      textVi: "Tìm kiếm theo khuôn mặt, biển số xe, hoặc cả hai. Lọc theo ngày, khoảng thời gian; thống kê theo từng camera và theo từng xe. Mỗi kết quả có thể xem thông tin chi tiết phương tiện (chủ sở hữu, địa chỉ, đăng ký, biển số, số khung, số máy, hãng, loại xe, màu sơn, thời gian khai báo, vị trí, v.v.) để phục vụ đăng kiểm và an ninh.",
      textEn: "Search by face, license plate, or both; filter by date and time range; view statistics by camera and by vehicle. Each result can show detailed vehicle and owner information for inspection and compliance.",
    },
  ],
  equippedTitleVi: "Hệ thống bao gồm",
  equippedTitleEn: "What the system includes",
  equippedIntroVi:
    "Giải pháp tích hợp camera đeo (body cam), phần mềm quản lý và AI nhận diện khuôn mặt cùng biển số, phù hợp cho đăng kiểm và các ứng dụng giám sát thông minh.",
  equippedIntroEn:
    "The solution integrates body-worn cameras, management software, and AI for face and plate recognition, tailored for vehicle inspection and smart surveillance.",
  equippedProducts: [
    {
      titleVi: "Body cam & camera",
      titleEn: "Body cam & camera",
      textVi: "Camera đeo và camera cố định ghi hình chất lượng cao, đồng bộ với nền tảng quản lý và nhận dạng AI.",
      textEn: "High-quality body-worn and fixed cameras, synced with the management platform and AI recognition.",
    },
    {
      titleVi: "App & giao diện quản lý",
      titleEn: "App & management interface",
      textVi: "Ứng dụng di động và web để LiveView, xem lại, xuất báo cáo và tìm kiếm lịch sử nhận dạng.",
      textEn: "Mobile and web app for LiveView, playback, export, and recognition history search.",
    },
    {
      titleVi: "AI nhận diện face & plate",
      titleEn: "AI face & plate recognition",
      textVi: "Mô hình deep learning nhận diện khuôn mặt và biển số xe; tìm kiếm và thống kê theo sự kiện, camera và phương tiện.",
      textEn: "Deep learning models for face and plate recognition; search and statistics by event, camera, and vehicle.",
    },
  ],
  resourcesTitleVi: "Tài nguyên",
  resourcesTitleEn: "Resources",
  solutions: [
    { labelVi: "Giải pháp", labelEn: "Solutions", href: "/#services" },
    { labelVi: "Sản phẩm", labelEn: "Products", href: "/products" },
  ],
  downloads: [],
  productVideos: [
    { file: "Liveview.mp4", labelVi: "LiveView – Theo dõi người và ô tô", labelEn: "LiveView – Track people and vehicles" },
    { file: "Xemlaivideo.mp4", labelVi: "Xem lại video", labelEn: "Video playback" },
    { file: "Xuatvideo&baocao.mp4", labelVi: "Xuất video và báo cáo", labelEn: "Export video and reports" },
    {
      file: "tklichsunhandang.mp4",
      labelVi: "Tìm kiếm lịch sử nhận dạng (face/plate, ngày, thời gian, thống kê theo cam và xe)",
      labelEn: "Search recognition history (face/plate, date, time, stats by camera and vehicle)",
    },
  ],
  sampleVehicleInfo: [
    { labelVi: "Chủ sở hữu phương tiện", labelEn: "Vehicle owner", value: "Không xác định" },
    { labelVi: "Địa chỉ", labelEn: "Address", value: "Không xác định" },
    { labelVi: "Thông tin đăng ký xe", labelEn: "Registration info", value: "Không xác định" },
    { labelVi: "Biển số xe", labelEn: "License plate", value: "61A89712" },
    { labelVi: "Số khung", labelEn: "Chassis number", value: "Không xác định" },
    { labelVi: "Số máy", labelEn: "Engine number", value: "Không xác định" },
    { labelVi: "Hãng sản xuất", labelEn: "Manufacturer", value: "Không xác định" },
    { labelVi: "Loại phương tiện", labelEn: "Vehicle type", value: "Không xác định" },
    { labelVi: "Màu sơn", labelEn: "Color", value: "Không xác định" },
    { labelVi: "Thời gian khai báo", labelEn: "Declaration time", value: "" },
    { labelVi: "Người khai báo", labelEn: "Declarant", value: "Không xác định" },
    { labelVi: "Vị trí phương tiện", labelEn: "Vehicle location", value: "Không xác định" },
    { labelVi: "Số điện thoại người khai báo", labelEn: "Declarant phone", value: "Không xác định" },
    { labelVi: "Vị trí phương tiện cuối cùng", labelEn: "Last known location", value: "Không xác định" },
    { labelVi: "Đơn vị tiếp nhận", labelEn: "Receiving unit", value: "Không xác định" },
    { labelVi: "Thông tin khác", labelEn: "Other info", value: "Nhận dạng" },
  ],
  contactTitleVi: "Bạn cần tư vấn?",
  contactTitleEn: "Need advice?",
  contactTextVi: "Đội ngũ chúng tôi sẵn sàng hỗ trợ bạn chọn giải pháp phù hợp.",
  contactTextEn: "Our team is ready to help you choose the right solution.",
  contactCtaVi: "Liên hệ",
  contactCtaEn: "Contact",
  exploreTitleVi: "Khám phá thêm",
  exploreTitleEn: "Explore more",
  exploreTechs: [],
};

export const PRODUCT_DETAILS: Record<ProductSlug, ProductDetailContent> = {
  "intelligent-video-surveillance": INTELLIGENT_VIDEO_SURVEILLANCE,
};

export function getProductDetail(slug: string): ProductDetailContent | undefined {
  return PRODUCT_DETAILS[slug as ProductSlug];
}
