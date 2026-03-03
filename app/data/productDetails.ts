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
      textVi: "Xuất các đoạn video đã chọn và báo cáo kèm theo (Excel hoặc video) để lưu trữ, chia sẻ nội bộ hoặc nộp cơ quan. Đảm bảo tính toàn vẹn và truy xuất nguồn gốc.",
      textEn: "Export selected clips and generate reports (e.g. Excel or video) for archiving, internal sharing, or submission to authorities, with full traceability.",
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

const BODYCAM_SMART_RECORDER: ProductDetailContent = {
  slug: "bodycam-smart-recorder",
  titleVi: "Bodycam thông minh cho lực lượng hiện trường",
  titleEn: "Smart Bodycam for Field Forces",
  heroImg: "Product/bodycam1.jpg",
  whatIsTitleVi: "Bodycam thông minh là gì?",
  whatIsTitleEn: "What is the Smart Bodycam?",
  whatIsTextVi:
    "Bodycam thông minh của iVista Tech là dòng camera đeo người chuẩn công vụ, được thiết kế cho lực lượng hiện trường (cảnh sát, thanh tra, đăng kiểm, đội phản ứng nhanh...). Thiết bị hỗ trợ quay video độ phân giải cao, truyền hình ảnh thời gian thực qua 4G/LTE/Wi-Fi về trung tâm, lưu trữ an toàn trên thiết bị và server, đồng thời tích hợp AI để nhận dạng khuôn mặt, biển số và gắn kết với hồ sơ vụ việc. Hệ thống cho phép quản lý ca trực, phân quyền người dùng và truy xuất lịch sử đầy đủ, giúp minh bạch hóa tác nghiệp và nâng cao chất lượng phục vụ người dân.",
  whatIsTextEn:
    "iVista Tech Smart Bodycam is a duty-grade body-worn camera designed for field forces such as police, inspectors, vehicle examiners, and rapid response teams. It captures high-resolution video, streams live over 4G/LTE/Wi-Fi to the command center, stores evidence securely on-device and on the server, and integrates AI for face and license plate recognition linked to cases. The platform supports shift management, user access control, and complete history audit, improving transparency, accountability, and service quality.",
  benefitsTitleVi: "Lợi ích chính",
  benefitsTitleEn: "Key benefits",
  benefits: [
    {
      titleVi: "Tăng tính minh bạch và bảo vệ cán bộ",
      titleEn: "Increased transparency and officer protection",
      textVi:
        "Mọi tương tác giữa cán bộ và người dân được ghi lại dưới dạng video, âm thanh và vị trí. Đây là nguồn bằng chứng khách quan giúp bảo vệ cả hai bên khi có khiếu nại, tố cáo, đồng thời giảm xung đột do hiểu nhầm tại hiện trường.",
      textEn:
        "All interactions between officers and citizens are recorded with video, audio, and location. This provides objective evidence to protect both sides when complaints arise, and helps reduce conflicts caused by misunderstandings in the field.",
    },
    {
      titleVi: "Giám sát tập trung theo thời gian thực",
      titleEn: "Real-time centralized monitoring",
      textVi:
        "Trung tâm chỉ huy có thể xem trực tiếp nhiều camera đeo người trên cùng một màn hình, theo dõi vị trí từng tổ công tác, đưa ra chỉ đạo kịp thời khi có tình huống bất thường hoặc yêu cầu hỗ trợ.",
      textEn:
        "The command center can view multiple bodycams live on a single dashboard, track the location of each team, and provide timely instructions or backup when incidents occur.",
    },
    {
      titleVi: "Chuỗi bằng chứng số liền mạch",
      titleEn: "Seamless digital evidence chain",
      textVi:
        "Video, ảnh, ghi chú và metadata (thời gian, vị trí, đơn vị, ca trực) được lưu trữ đồng bộ, có nhật ký truy cập và chỉnh sửa. Điều này giúp cơ quan nhà nước dễ dàng tra cứu, tổng hợp báo cáo và đáp ứng yêu cầu thanh tra, kiểm tra.",
      textEn:
        "Video, images, notes, and metadata (time, location, unit, shift) are stored in a unified system with full access and modification logs. This makes it easier for public agencies to search, compile reports, and respond to audits or inspections.",
    },
    {
      titleVi: "Tối ưu chi phí vận hành và mở rộng",
      titleEn: "Optimized operational cost and scalability",
      textVi:
        "Hệ thống hỗ trợ triển khai theo nhiều mô hình: on-premise, cloud hoặc hybrid, dễ dàng mở rộng từ vài chục đến hàng nghìn thiết bị. Cơ quan nhà nước có thể tái sử dụng hạ tầng mạng sẵn có, giảm chi phí đầu tư ban đầu.",
      textEn:
        "The platform supports on-premise, cloud, or hybrid deployment models, and scales from dozens to thousands of devices. Public agencies can reuse existing network infrastructure and reduce upfront investment.",
    },
  ],
  applicationsTitleVi: "Tình huống sử dụng tiêu biểu",
  applicationsTitleEn: "Typical use cases",
  applications: [
    {
      titleVi: "Tuần tra, kiểm soát của lực lượng công an",
      titleEn: "Patrol and traffic enforcement",
      textVi:
        "Trang bị bodycam cho chiến sĩ công an khi tuần tra giao thông hoặc xử lý vi phạm trật tự đô thị. Hình ảnh hiện trường được ghi lại đầy đủ, giúp xử lý vi phạm minh bạch và giảm tranh chấp.",
      textEn:
        "Equip officers with bodycams during traffic patrol and urban order enforcement. Field footage is recorded end-to-end, leading to transparent handling of violations and fewer disputes.",
    },
    {
      titleVi: "Cán bộ đăng kiểm, thanh tra chuyên ngành",
      titleEn: "Vehicle inspection and sector inspectors",
      textVi:
        "Ghi lại toàn bộ quá trình kiểm tra phương tiện, hồ sơ và trao đổi với chủ xe. Dữ liệu được gắn với biển số, thời gian, địa điểm và đơn vị thực hiện, hỗ trợ hậu kiểm và thanh tra chuyên ngành.",
      textEn:
        "Record the entire vehicle inspection process, including documents and conversations with owners. Evidence is linked to license plates, time, location, and responsible unit, supporting post-inspection review and sector audits.",
    },
    {
      titleVi: "Lực lượng phản ứng nhanh và cứu hộ",
      titleEn: "Rapid response and rescue teams",
      textVi:
        "Truyền hình ảnh hiện trường theo thời gian thực về sở chỉ huy, giúp lãnh đạo đánh giá tình hình, phân bổ nguồn lực và phối hợp nhiều lực lượng trên cùng một khu vực.",
      textEn:
        "Stream live images from incident sites back to headquarters, allowing leaders to assess the situation, allocate resources, and coordinate multiple forces in the same area.",
    },
    {
      titleVi: "Triển khai tại một số cơ quan nhà nước",
      titleEn: "Deployment in public agencies",
      textVi:
        "Giải pháp bodycam đã được triển khai thí điểm tại một số cơ quan nhà nước ở Việt Nam như trung tâm đăng kiểm, đơn vị công an địa phương và lực lượng thanh tra chuyên ngành. Kết quả bước đầu cho thấy tỷ lệ khiếu nại giảm, thời gian xử lý vụ việc rút ngắn và mức độ hài lòng của người dân tăng lên.",
      textEn:
        "The bodycam solution has been piloted at several public agencies in Vietnam such as vehicle inspection centers, local police units, and specialized inspectorates. Early results show fewer complaints, faster case resolution, and higher citizen satisfaction.",
    },
  ],
  equippedTitleVi: "Bộ giải pháp bao gồm",
  equippedTitleEn: "What the solution includes",
  equippedIntroVi:
    "Bộ bodycam của iVista Tech không chỉ là phần cứng, mà là một giải pháp tổng thể từ thiết bị, phần mềm đến hạ tầng lưu trữ và quản trị người dùng.",
  equippedIntroEn:
    "The iVista Tech bodycam offering is not just hardware but a complete solution from devices to software, storage, and user management.",
  equippedProducts: [
    {
      titleVi: "Thiết bị bodycam chuẩn công vụ",
      titleEn: "Duty-grade bodycam device",
      textVi:
        "Camera đeo vai/ngực với cảm biến độ phân giải cao, góc rộng, hồng ngoại ban đêm, GPS, micro khử ồn, bộ nhớ trong và khe thẻ nhớ, pin dung lượng lớn đủ cho một ca trực.",
      textEn:
        "Shoulder/chest-mounted camera with high-resolution sensor, wide angle lens, night-vision IR, GPS, noise-cancelling microphone, internal storage and SD slot, and high-capacity battery for a full shift.",
    },
    {
      titleVi: "Dock sạc & trạm nạp dữ liệu",
      titleEn: "Charging & data upload dock",
      textVi:
        "Dock sạc nhiều khe cho phép sạc nóng và thay phiên liên tục: khi pin gần hết, thiết bị vẫn duy trì hoạt động thêm khoảng 3 phút để cán bộ hoàn tất thao tác. Mỗi bodycam sử dụng pin 500 mAh, hỗ trợ cả sạc nhanh tại chỗ lẫn gắn vào dock tập trung, và tự động đẩy dữ liệu lên server ngay khi có kết nối internet ổn định.",
      textEn:
        "The multi-bay charging dock supports hot charging and continuous rotation: when the battery is low, the device can keep recording for about 3 minutes so officers can safely finish their task. Each bodycam uses a 500 mAh battery, supporting both quick top-up in the field and centralized dock charging, and automatically pushes data to the server whenever a stable internet connection is available.",
    },
    {
      titleVi: "Phần mềm quản lý & cổng xem lại",
      titleEn: "Management software & review portal",
      textVi:
        "Giao diện web cho phép xem lại, tìm kiếm và chia sẻ video theo thời gian, đơn vị, người dùng hoặc loại vụ việc; phân quyền chi tiết theo vai trò (lãnh đạo, cán bộ, thanh tra...).",
      textEn:
        "Web interface to review, search, and share video by time, unit, user, or case type; fine-grained role-based access control for managers, officers, and auditors.",
    },
    {
      titleVi: "Tích hợp AI nhận dạng và bản đồ",
      titleEn: "AI recognition and mapping integration",
      textVi:
        "Kết hợp với nền tảng AI của iVista Tech để nhận dạng khuôn mặt, cơ thể người, vật thể và biển số xe, từ đó gắn kết sự kiện với đối tượng liên quan. Hệ thống cũng hiển thị tuyến tuần tra và vị trí thiết bị trên bản đồ số, giúp lãnh đạo nắm được bức tranh tổng thể tại hiện trường.",
      textEn:
        "Integrates with iVista Tech AI platform for face, full-body, object, and license plate recognition, linking events to the right people and assets. The system also visualizes patrol routes and device locations on a digital map, giving commanders a clear overview of what is happening in the field.",
    },
  ],
  resourcesTitleVi: "Tài nguyên",
  resourcesTitleEn: "Resources",
  solutions: [
    { labelVi: "Giải pháp giám sát video", labelEn: "Video surveillance solution", href: "/#services" },
    { labelVi: "Sản phẩm bodycam", labelEn: "Bodycam product", href: "/products" },
  ],
  downloads: [],
  productVideos: [],
  sampleVehicleInfo: undefined,
  contactTitleVi: "Bạn cần demo bodycam?",
  contactTitleEn: "Want a bodycam demo?",
  contactTextVi: "Đội ngũ chúng tôi sẵn sàng tổ chức demo và tư vấn triển khai cho đơn vị của bạn.",
  contactTextEn: "Our team is ready to run demos and advise on deployment for your organization.",
  contactCtaVi: "Đặt lịch demo",
  contactCtaEn: "Request a demo",
  exploreTitleVi: "Khám phá thêm các giải pháp liên quan",
  exploreTitleEn: "Explore related solutions",
  exploreTechs: [
    {
      titleVi: "Giám sát video thông minh & Trợ lý dự đoán mối đe dọa",
      titleEn: "Intelligent Video Surveillance & Threat Prediction Assistant",
      href: "/product-details/intelligent-video-surveillance",
      textVi: "Kết hợp bodycam với phân tích video AI nâng cao để giám sát tập trung, tìm kiếm lịch sử và cảnh báo sớm.",
      textEn: "Combine bodycams with advanced AI video analytics for centralized monitoring, history search, and early warnings.",
    },
  ],
};

const AI_ALIGNMENT: ProductDetailContent = {
  slug: "ai-alignment",
  titleVi: "AI Alignment – Định vị điểm mark cho nhà máy",
  titleEn: "AI Alignment – Fiducial Alignment for Factories",
  heroImg: "Product/Alignment1.jpg",
  whatIsTitleVi: "Tổng quan giải pháp AI Alignment",
  whatIsTitleEn: "AI Alignment solution overview",
  whatIsTextVi:
    "AI Alignment là giải pháp thị giác máy thông minh ứng dụng Trí tuệ nhân tạo (AI) để phát hiện và định vị chính xác điểm mark (fiducial mark) trên sản phẩm trong dây chuyền sản xuất tự động. Hệ thống tính toán sai lệch vị trí theo thời gian thực và cung cấp tọa độ hiệu chỉnh (X, Y, θ) cho robot, máy CNC, máy in hoặc các hệ thống tự động khác, giúp thao tác luôn chính xác và ổn định, ngay cả khi sản phẩm bị lệch, xoay hoặc môi trường có nhiều nhiễu.",
  whatIsTextEn:
    "AI Alignment is an intelligent machine vision solution that uses AI to detect and accurately locate fiducial marks on products in automated production lines. The system computes positional deviations in real time and provides correction coordinates (X, Y, θ) to robots, CNC machines, printers, and other automation systems, ensuring precise and stable operations even when products shift, rotate, or the environment is noisy.",
  benefitsTitleVi: "Tính năng & lợi ích nổi bật",
  benefitsTitleEn: "Key features & benefits",
  benefits: [
    {
      titleVi: "Định vị chính xác sub-pixel",
      titleEn: "Sub-pixel accurate alignment",
      textVi:
        "Mô hình AI và thuật toán nội suy sub-pixel cho phép xác định vị trí mark với sai số rất nhỏ; trong cấu hình phù hợp, sai số có thể đạt dưới 0.05 mm, đáp ứng yêu cầu của các dây chuyền điện tử, SMT và gia công chính xác.",
      textEn:
        "AI models and sub-pixel interpolation algorithms enable extremely precise mark localization. With the right configuration, errors can be below 0.05 mm, meeting the stringent requirements of electronics, SMT, and precision machining lines.",
    },
    {
      titleVi: "Xử lý thời gian thực cho dây chuyền tốc độ cao",
      titleEn: "Real-time processing for high-speed lines",
      textVi:
        "Thời gian xử lý mỗi khung hình thường dưới 50 ms, cho phép hệ thống theo kịp băng chuyền tốc độ cao mà không phải dừng máy hoặc giảm năng suất. Dữ liệu hiệu chỉnh được gửi ngay cho robot/PLC sau mỗi lần chụp.",
      textEn:
        "Per-frame processing latency is typically under 50 ms, allowing the system to keep up with high-speed conveyors without stopping machines or sacrificing throughput. Correction data is sent immediately to robots/PLCs after each image capture.",
    },
    {
      titleVi: "Ổn định trong môi trường công nghiệp thực tế",
      titleEn: "Robust in real industrial environments",
      textVi:
        "Giải pháp được thiết kế để hoạt động ổn định trong điều kiện có rung động, thay đổi ánh sáng, mark in mờ hoặc bề mặt phản sáng. Mô hình AI được huấn luyện trên dữ liệu thực tế sản xuất, giúp giảm nhạy cảm với nhiễu.",
      textEn:
        "The solution is engineered for stability under vibration, changing lighting, faint printed marks, or reflective surfaces. AI models are trained on real production data, making them less sensitive to noise and appearance variations.",
    },
    {
      titleVi: "Linh hoạt với nhiều loại sản phẩm và mark",
      titleEn: "Flexible across products and mark types",
      textVi:
        "Hệ thống hỗ trợ nhiều dạng mark (hình tròn, hình vuông, chữ thập, logo tùy chỉnh...) và cho phép cấu hình nhanh khi thay đổi model sản phẩm. Người dùng có thể thêm mẫu mới mà không phải thay đổi logic điều khiển phía sau.",
      textEn:
        "The system supports various mark types (circles, squares, crosses, custom logos, etc.) and can be reconfigured quickly when product models change. New templates can be added without modifying downstream control logic.",
    },
  ],
  applicationsTitleVi: "Bài toán & nguyên lý hoạt động",
  applicationsTitleEn: "Use cases & operating principle",
  applications: [
    {
      titleVi: "Bài toán alignment trong thực tế sản xuất",
      titleEn: "Alignment challenges in real production",
      textVi:
        "Trong dây chuyền công nghiệp, sản phẩm trên băng chuyền có thể bị lệch vị trí, xoay nhẹ do rung động cơ học và sai lệch tích lũy theo thời gian. Mark in trên bề mặt có thể mờ, phản sáng, trong khi hệ thống robot lại yêu cầu tọa độ chính xác gần như tuyệt đối để gắp linh kiện, lắp ráp, in mã hoặc gia công CNC. AI Alignment được xây dựng để bù lại những sai lệch này một cách thông minh.",
      textEn:
        "On industrial lines, products on conveyors may drift, rotate slightly due to vibration, and accumulate positional errors over time. Printed marks can fade or become reflective, while robots require near-perfect coordinates for picking, assembly, printing, or CNC machining. AI Alignment is designed to intelligently compensate for these deviations.",
    },
    {
      titleVi: "Nguyên lý hoạt động",
      titleEn: "Operating principle",
      textVi:
        "Camera công nghiệp (global shutter) chụp ảnh sản phẩm tại vị trí xác định. Mô hình AI phát hiện và định vị chính xác điểm mark ngay cả khi mark mờ, bị che một phần hoặc có nhiễu. Hệ thống tính toán ΔX, ΔY, Δθ giữa vị trí chuẩn và vị trí hiện tại, xây dựng ma trận biến đổi (Affine Transform hoặc Homography nếu cần), sau đó gửi tọa độ hiệu chỉnh đến robot/PLC/máy CNC để điều chỉnh thao tác theo thời gian thực.",
      textEn:
        "An industrial global-shutter camera captures the product at a defined station. The AI model detects and precisely localizes the mark even when it is faint, partially occluded, or noisy. The system computes ΔX, ΔY, and Δθ between the reference and current positions, builds a transform matrix (affine or homography when needed), then sends correction coordinates to robots/PLCs/CNC machines for real-time motion adjustment.",
    },
    {
      titleVi: "Kiến trúc hệ thống",
      titleEn: "System architecture",
      textVi:
        "Giải pháp gồm camera công nghiệp độ phân giải cao (global shutter, hỗ trợ trigger đồng bộ PLC), AI Vision Engine chạy trên bộ xử lý công nghiệp (Edge/IPC) để suy luận thời gian thực, và lớp tích hợp tự động hóa (TCP/IP, Modbus, OPC-UA) để kết nối với PLC, robot, máy in, máy CNC. Toàn bộ được thiết kế để lắp đặt gọn trong môi trường nhà máy hiện hữu.",
      textEn:
        "The solution consists of high-resolution industrial cameras (global shutter with PLC-synchronized trigger), an AI vision engine running on an industrial edge/IPC for real-time inference, and an automation integration layer (TCP/IP, Modbus, OPC-UA) connecting to PLCs, robots, printers, and CNC machines. The entire stack is designed to fit neatly into existing factory environments.",
    },
    {
      titleVi: "Ứng dụng tiêu biểu",
      titleEn: "Typical applications",
      textVi:
        "AI Alignment có thể áp dụng cho nhiều khâu: lắp ráp PCB/SMT, in mã QR/serial đúng vị trí, căn chỉnh phôi cho gia công CNC hoặc cắt laser, định vị chi tiết cơ khí trước khi dán tem, hàn, bắn vít hay lắp ráp tự động. Giải pháp cũng mở rộng được sang alignment 3D, multi-camera alignment và kết hợp kiểm tra ngoại quan bằng AI.",
      textEn:
        "AI Alignment can be applied in many steps: PCB/SMT assembly, accurate QR/serial code printing, aligning blanks for CNC machining or laser cutting, positioning mechanical parts before labeling, welding, screwing, or automatic assembly. The solution can be extended to 3D alignment, multi-camera alignment, and combined with AI-based visual inspection.",
    },
  ],
  equippedTitleVi: "Kiến trúc & thành phần hệ thống",
  equippedTitleEn: "System architecture & components",
  equippedIntroVi:
    "AI Alignment được triển khai như một mô-đun thị giác máy trong dây chuyền tự động, có thể tích hợp trực tiếp với hệ thống hiện tại thông qua PLC/robot hoặc hoạt động như một trạm độc lập.",
  equippedIntroEn:
    "AI Alignment is deployed as a vision module within the automation line, either integrated directly with existing PLC/robot systems or operating as an independent station.",
  equippedProducts: [
    {
      titleVi: "Camera công nghiệp",
      titleEn: "Industrial cameras",
      textVi:
        "Camera global shutter độ phân giải cao, ống kính phù hợp khoảng cách làm việc và kích thước sản phẩm; hỗ trợ trigger đồng bộ với PLC để chụp đúng thời điểm sản phẩm ở vị trí cần căn chỉnh.",
      textEn:
        "High-resolution global-shutter cameras with optics matched to working distance and product size, supporting PLC-synchronized triggering to capture exactly when the product reaches the alignment station.",
    },
    {
      titleVi: "AI Vision Engine",
      titleEn: "AI vision engine",
      textVi:
        "Mô-đun phần mềm dùng deep learning để phát hiện mark, định vị sub-pixel và theo dõi ổn định qua nhiều chu kỳ sản xuất. Có giao diện cấu hình để người dùng thiết lập mẫu mark, vùng quan tâm và thông số giới hạn.",
      textEn:
        "Software module using deep learning to detect marks, perform sub-pixel localization, and maintain stable tracking across many production cycles. A configuration UI lets users define mark templates, ROIs, and tolerance thresholds.",
    },
    {
      titleVi: "Bộ xử lý công nghiệp (Edge/IPC)",
      titleEn: "Industrial edge/IPC",
      textVi:
        "Thiết bị tính toán công nghiệp chịu được môi trường nhà máy, chạy mô hình AI theo thời gian thực và giao tiếp với PLC/robot qua TCP/IP, Modbus, OPC-UA hoặc giao thức tùy chỉnh.",
      textEn:
        "Rugged industrial computing unit that runs AI models in real time and communicates with PLCs/robots over TCP/IP, Modbus, OPC-UA, or custom protocols.",
    },
    {
      titleVi: "Lớp tích hợp tự động hóa",
      titleEn: "Automation integration layer",
      textVi:
        "Thư viện và dịch vụ tích hợp để gửi tọa độ hiệu chỉnh (X, Y, θ) đến robot arm, máy CNC, máy in hoặc các trạm tự động khác; hỗ trợ logging và giám sát trạng thái để dễ dàng bảo trì.",
      textEn:
        "Integration libraries and services to send correction coordinates (X, Y, θ) to robot arms, CNC machines, printers, and other stations, with logging and status monitoring for easier maintenance.",
    },
  ],
  resourcesTitleVi: "Tài nguyên & mở rộng",
  resourcesTitleEn: "Resources & extensions",
  solutions: [
    { labelVi: "Giải pháp AI cho nhà máy", labelEn: "AI solutions for factories", href: "/#services" },
    { labelVi: "Sản phẩm AI Alignment", labelEn: "AI Alignment product", href: "/products" },
  ],
  downloads: [],
  productVideos: [],
  sampleVehicleInfo: undefined,
  contactTitleVi: "Bạn muốn demo AI Alignment?",
  contactTitleEn: "Want an AI Alignment demo?",
  contactTextVi: "Chúng tôi có thể mô phỏng trực tiếp bài toán alignment trên dây chuyền của bạn hoặc trên bộ demo chuẩn của iVista Tech.",
  contactTextEn: "We can demonstrate the alignment use case directly on your line or on iVista Tech's standard demo rig.",
  contactCtaVi: "Liên hệ tư vấn",
  contactCtaEn: "Contact us",
  exploreTitleVi: "Khám phá thêm giải pháp AI khác",
  exploreTitleEn: "Explore other AI solutions",
  exploreTechs: [
    {
      titleVi: "Giám sát video thông minh & Trợ lý dự đoán mối đe dọa",
      titleEn: "Intelligent Video Surveillance & Threat Prediction Assistant",
      href: "/product-details/intelligent-video-surveillance",
      textVi: "Ứng dụng AI thị giác máy cho giám sát video, nhận dạng face/plate và tìm kiếm lịch sử trong môi trường đăng kiểm, an ninh.",
      textEn:
        "Apply AI computer vision to video surveillance, face/plate recognition, and history search in inspection and security environments.",
    },
    {
      titleVi: "Bodycam thông minh cho lực lượng hiện trường",
      titleEn: "Smart Bodycam for Field Forces",
      href: "/product-details/bodycam-smart-recorder",
      textVi: "Thiết bị bodycam kết hợp nền tảng AI và quản lý bằng chứng số, phù hợp cho lực lượng hiện trường và đăng kiểm.",
      textEn:
        "Body-worn camera solution with AI and digital evidence management, tailored for field forces and inspection scenarios.",
    },
  ],
};

export const PRODUCT_DETAILS: Record<ProductSlug, ProductDetailContent> = {
  "intelligent-video-surveillance": INTELLIGENT_VIDEO_SURVEILLANCE,
  "bodycam-smart-recorder": BODYCAM_SMART_RECORDER,
  "ai-alignment": AI_ALIGNMENT,
};

export function getProductDetail(slug: string): ProductDetailContent | undefined {
  return PRODUCT_DETAILS[slug as ProductSlug];
}
