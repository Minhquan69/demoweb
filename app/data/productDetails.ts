import { ProductSlug } from "./products";

export type Benefit = { title: string; text: string };
export type Application = { title: string; text: string };
export type EquippedProduct = { title: string; text: string };
export type ResourceLink = { label: string; href: string };
export type ExploreTech = { title: string; href: string; text: string };
export type ProductVideo = { file: string; labelVi: string; labelEn: string };
export type SampleVehicleField = { labelVi: string; labelEn: string; value: string };

export type ProductDetailContent = {
  slug: ProductSlug;
  titleVi: string;
  titleEn: string;
  heroImg: string;
  whatIsTitle: string;
  whatIsText: string;
  benefitsTitle: string;
  benefits: Benefit[];
  applicationsTitle: string;
  applications: Application[];
  equippedTitle: string;
  equippedIntro?: string;
  equippedProducts: EquippedProduct[];
  resourcesTitle: string;
  solutions: ResourceLink[];
  downloads: ResourceLink[];
  productVideos?: ProductVideo[];
  /** Ví dụ thông tin chi tiết phương tiện khi tìm kiếm lịch sử nhận dạng */
  sampleVehicleInfo?: SampleVehicleField[];
  videoLabel?: string;
  videoLinks?: ResourceLink[];
  newsLabel?: string;
  newsLinks?: ResourceLink[];
  blogLabel?: string;
  blogLinks?: ResourceLink[];
  contactTitle: string;
  contactText: string;
  contactCta: string;
  exploreTitle: string;
  exploreTechs: ExploreTech[];
}

const INTELLIGENT_VIDEO_SURVEILLANCE: ProductDetailContent = {
  slug: "intelligent-video-surveillance",
  titleVi: "Giám sát video thông minh & Trợ lý dự đoán mối đe dọa",
  titleEn: "Intelligent Video Surveillance & Threat Prediction Assistant",
  heroImg: "Product/dangkiem-1724071272803999041132.jpg",
  whatIsTitle: "What is Intelligent Video Surveillance & Threat Prediction?",
  whatIsText:
    "Our solution combines body-worn cameras with AI-powered video analytics for vehicle inspection (đăng kiểm) and field operations. It delivers real-time LiveView of people and vehicles, instant playback, export of video and reports, and deep search over recognition history—by face, license plate, or both—with filters by date, time range, camera, and vehicle. The system helps inspectors and supervisors work smarter with accurate, traceable evidence and actionable insights.",
  benefitsTitle: "Lợi ích chính / Key benefits",
  benefits: [
    {
      title: "Real-time visibility",
      text: "LiveView lets you monitor people and vehicles as events happen. Inspectors see the same stream on mobile or desktop, so coordination and response are faster.",
    },
    {
      title: "Full evidence chain",
      text: "Record, review, and export video with linked reports. Every clip can be tied to a recognition event (face or plate), making audits and compliance straightforward.",
    },
    {
      title: "Powerful search",
      text: "Search recognition history by face, plate, or both. Filter by date, time range, camera, and vehicle. Statistics by camera and by vehicle help you spot patterns and prioritize follow-up.",
    },
    {
      title: "AI-driven accuracy",
      text: "Deep learning models for face and plate recognition reduce manual work and human error, so your team can focus on decisions instead of data entry.",
    },
  ],
  applicationsTitle: "Chức năng chính / Core features",
  applications: [
    {
      title: "LiveView – Theo dõi người và ô tô",
      text: "Xem trực tiếp luồng hình từ body cam hoặc camera hiện trường. Giao diện cho phép theo dõi đồng thời con người và phương tiện, hỗ trợ giám sát đăng kiểm và an ninh theo thời gian thực. LiveView supports real-time monitoring of both people and vehicles from body cams and fixed cameras, ideal for inspection and security operations.",
    },
    {
      title: "Xem lại video / Video playback",
      text: "Truy cập kho lưu trữ video, tìm theo thời gian và sự kiện, phát lại các đoạn clip liên quan đến nhận dạng khuôn mặt hoặc biển số. Giao diện thân thiện giúp tra cứu nhanh và xác minh bằng chứng. Browse recorded footage by time and event; play clips linked to face or plate recognition for quick verification and evidence review.",
    },
    {
      title: "Xuất video và báo cáo / Export video and reports",
      text: "Xuất các đoạn video đã chọn và báo cáo kèm theo (PDF hoặc file khác) để lưu trữ, chia sẻ nội bộ hoặc nộp cơ quan. Đảm bảo tính toàn vẹn và truy xuất nguồn gốc. Export selected clips and generate reports (e.g. PDF) for archiving, internal sharing, or submission to authorities, with full traceability.",
    },
    {
      title: "Tìm kiếm lịch sử nhận dạng / Search recognition history",
      text: "Tìm kiếm theo khuôn mặt, biển số xe, hoặc cả hai. Lọc theo ngày, khoảng thời gian cụ thể; thống kê theo từng camera và theo từng xe. Mỗi kết quả có thể xem thông tin chi tiết phương tiện (chủ sở hữu, địa chỉ, thông tin đăng ký, biển số, số khung, số máy, hãng, loại xe, màu sơn, thời gian khai báo, vị trí, v.v.) để phục vụ đăng kiểm và an ninh. Search by face, license plate, or both; filter by date and time range; view statistics by camera and by vehicle. Each result can show detailed vehicle and owner information for inspection and compliance.",
    },
  ],
  equippedTitle: "Hệ thống bao gồm / What the system includes",
  equippedIntro:
    "Giải pháp tích hợp camera đeo (body cam), phần mềm quản lý và AI nhận diện khuôn mặt cùng biển số, phù hợp cho đăng kiểm và các ứng dụng giám sát thông minh. The solution integrates body-worn cameras, management software, and AI for face and plate recognition, tailored for vehicle inspection and smart surveillance.",
  equippedProducts: [
    {
      title: "Body cam & camera",
      text: "Camera đeo và camera cố định ghi hình chất lượng cao, đồng bộ với nền tảng quản lý và nhận dạng AI. High-quality body-worn and fixed cameras, synced with the management platform and AI recognition.",
    },
    {
      title: "App & giao diện quản lý",
      text: "Ứng dụng di động và web để LiveView, xem lại, xuất báo cáo và tìm kiếm lịch sử nhận dạng. Mobile and web app for LiveView, playback, export, and recognition history search.",
    },
    {
      title: "AI nhận diện face & plate",
      text: "Mô hình deep learning nhận diện khuôn mặt và biển số xe; tìm kiếm và thống kê theo sự kiện, camera và phương tiện. Deep learning models for face and plate recognition; search and statistics by event, camera, and vehicle.",
    },
  ],
  resourcesTitle: "Tài nguyên / Resources",
  solutions: [{ label: "Giải pháp", href: "/#services" }, { label: "Sản phẩm", href: "/products" }],
  downloads: [],
  productVideos: [
    { file: "liveview.mp4", labelVi: "LiveView – Theo dõi người và ô tô", labelEn: "LiveView – Track people and vehicles" },
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
  contactTitle: "Bạn cần tư vấn?",
  contactText: "Đội ngũ chúng tôi sẵn sàng hỗ trợ bạn chọn giải pháp phù hợp.",
  contactCta: "Liên hệ",
  exploreTitle: "Khám phá thêm",
  exploreTechs: [],
};

export const PRODUCT_DETAILS: Record<ProductSlug, ProductDetailContent> = {
  "intelligent-video-surveillance": INTELLIGENT_VIDEO_SURVEILLANCE,
};

export function getProductDetail(slug: string): ProductDetailContent | undefined {
  return PRODUCT_DETAILS[slug as ProductSlug];
}
