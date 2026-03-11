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

const AI_VISUAL_INSPECTION: ProductDetailContent = {
  slug: "ai-visual-inspection",
  titleVi: "AI Visual Inspection - Kiểm tra ngoại quan tự động",
  titleEn: "AI Visual Inspection - Automated Quality Control",
  heroImg: "Product/AIVisualInspection1.png",
  whatIsTitleVi: "Kiểm tra ngoại quan tự động bằng AI là gì?",
  whatIsTitleEn: "What is AI-Powered Automated Quality Inspection?",
  whatIsTextVi:
    "AI Visual Inspection là giải pháp kiểm tra ngoại quan sản phẩm bằng trí tuệ nhân tạo và thị giác máy. Giải pháp này được thiết kế để giải quyết vấn đề kiểm tra chất lượng tiêu tốn thời gian, nhân lực và kém chính xác trong các nhà máy sản xuất hiện đại. Hệ thống sử dụng camera công nghiệp độ phân giải cao, đồng bộ với dây chuyền tốc độ cao, để thu nhận hình ảnh từng sản phẩm tại vị trí kiểm tra chính xác. AI thị giác máy phân tích hình ảnh theo thời gian thực, tự động phát hiện các khuyết tật bề mặt như trầy xước, nứt vỡ, sai màu, loang màu, in mờ, sai ký tự hoặc thiếu linh kiện. Khi phát hiện lỗi, giao diện quản lý tự động đánh dấu PASS cho sản phẩm đạt chuẩn, FAIL cho sản phẩm lỗi, đồng thời gửi tín hiệu tới hệ thống PLC để kích hoạt cơ cấu loại bỏ tự động, tách sản phẩm lỗi ra khỏi dây chuyền. Sản phẩm đạt chuẩn tiếp tục di chuyển bình thường. Toàn bộ dữ liệu kiểm tra được lưu trữ có độ tin cậy cao, có thể truy xuất hình ảnh để kiểm chứng, và hiển thị trên dashboard thống kê theo thời gian thực, giúp doanh nghiệp theo dõi chất lượng, phân tích nguyên nhân lỗi và tối ưu quy trình sản xuất. AI Visual Inspection không chỉ tăng độ chính xác kiểm tra mà còn giảm đáng kể tỷ lệ lỗi lọt, hạ thấp chi phí nhân công, chuẩn hóa quy trình, và hướng tới nhà máy thông minh.",
  whatIsTextEn:
    "AI Visual Inspection is an automated quality control solution powered by artificial intelligence and machine vision technology. It addresses time-consuming, labor-intensive, and error-prone manual inspection in modern manufacturing factories. The system uses high-resolution industrial cameras synchronized with high-speed conveyors to capture images of each product at precise inspection stations. AI vision analysis processes images in real time, automatically detecting surface defects such as scratches, cracks, color mismatches, color bleeding, faded printing, character errors, or missing components. Upon defect detection, the management interface automatically marks PASS for conforming products and FAIL for defective ones, while sending a signal to the PLC system to activate an automatic rejection mechanism that removes defective products from the line. Conforming products continue normally. All inspection data is stored with high reliability, images can be retrieved for verification, and real-time statistics are displayed on a dashboard, helping enterprises monitor quality, analyze root causes, and optimize production processes. AI Visual Inspection not only increases inspection accuracy but also significantly reduces defect escape rate, lowers labor costs, standardizes procedures, and advances toward intelligent manufacturing.",
  benefitsTitleVi: "Lợi ích chính của AI Visual Inspection",
  benefitsTitleEn: "Key benefits of AI Visual Inspection",
  benefits: [
    {
      titleVi: "Độ chính xác vượt trội",
      titleEn: "Superior accuracy",
      textVi:
        "Phát hiện được cả những khuyết tật rất nhỏ mà mắt người khó nhận biết (dưới 0.5mm), bao gồm trầy xước siêu nhẹ, nứt micro, loang màu nhẹ, in mờ, sai ký tự, hoặc thiếu linh kiện. Độ chính xác không chịu ảnh hưởng của chất lượng ánh sáng hay tình trạng mệt mỏi của người kiểm tra.",
      textEn:
        "Detects even microscopic defects (under 0.5mm) that human eyes would miss, including hairline scratches, micro-cracks, subtle color variations, faded printing, character errors, or missing components. Accuracy is unaffected by lighting conditions or inspector fatigue.",
    },
    {
      titleVi: "Xử lý thời gian thực & hiệu suất cao",
      titleEn: "Real-time processing & high throughput",
      textVi:
        "Hoạt động ổn định trong môi trường dây chuyền tốc độ cao (lên tới 200 sản phẩm/phút). Thời gian xử lý mỗi sản phẩm thường dưới 100ms, cho phép kiểm tra không dừng máy. Kết quả được ra quyết định tức thì (PASS/FAIL) để kích hoạt cơ cấu loại bỏ mà không ảnh hưởng đến hiệu suất dây chuyền.",
      textEn:
        "Operates stably on high-speed production lines (up to 200 products/minute). Processing time per product is typically under 100ms, enabling non-stop inspection. Results are decided instantly (PASS/FAIL) to trigger rejection mechanisms without impacting line throughput.",
    },
    {
      titleVi: "Thích nghi nhanh chóng",
      titleEn: "Quick adaptation & flexibility",
      textVi:
        "Có thể huấn luyện lại hoặc điều chỉnh trong vài giờ khi thay đổi mẫu sản phẩm, loại lỗi cần phát hiện, hoặc tiêu chuẩn kiểm tra. Không cần thay đổi phần cứng (camera, ảnh sáng, xử lý), chỉ cần cập nhật mô hình AI. Hỗ trợ nhiều loại sản phẩm trên cùng một dây chuyền.",
      textEn:
        "Can be retrained or adjusted in hours when changing product models, defect types to detect, or inspection standards. No need to modify hardware (cameras, lighting, processing) – only AI models need updating. Supports multiple product types on the same line.",
    },
    {
      titleVi: "Phát hiện bất thường & ngoài dữ liệu",
      titleEn: "Anomaly & novelty detection",
      textVi:
        "Cơ chế anomaly detection giúp phát hiện các loại lỗi chưa từng xuất hiện trong dữ liệu huấn luyện, giảm rủi ro bỏ sót khuyết tật mới. Hữu ích khi xuất hiện lỗi do thay đổi nguyên liệu, mỏi máy móc, hoặc sai lệch quy trình.",
      textEn:
        "Anomaly detection identifies defects not seen in training data, reducing the risk of missing novel defects. Useful when new failure modes emerge due to material changes, machine wear, or process deviations.",
    },
    {
      titleVi: "Giảm chi phí nhân công & chuẩn hóa",
      titleEn: "Labor cost reduction & standardization",
      textVi:
        "Loại bỏ sự phụ thuộc vào kỹ năng hoặc kinh nghiệm của từng cán bộ kiểm tra. Quy trình kiểm tra chuẩn hóa dù thay đổi người vận hành. Giảm chi phí nhân công, đặc biệt trên dây chuyền tốc độ cao nơi kiểm tra thủ công không khả thi.",
      textEn:
        "Eliminates dependence on inspector skill or experience. Inspection procedures remain standardized regardless of personnel changes. Reduces labor costs, especially on high-speed lines where manual inspection is infeasible.",
    },
    {
      titleVi: "Dữ liệu toàn diện & truy xuất dễ",
      titleEn: "Comprehensive data & easy retrieval",
      textVi:
        "Mọi sản phẩm kiểm tra đều được lưu trữ hình ảnh, kết quả (PASS/FAIL), loại lỗi, vị trí lỗi, thời gian kiểm tra. Dữ liệu này hỗ trợ phân tích nguyên nhân, theo dõi xu hướng chất lượng, và tối ưu quy trình. Có thể truy xuất lại hình ảnh của bất kỳ sản phẩm nào để kiểm chứng độ chính xác hoặc xử lý khiếu nại khách hàng.",
      textEn:
        "Every inspected product is stored with images, results (PASS/FAIL), defect types, defect locations, and timestamps. This data supports root cause analysis, quality trend tracking, and process optimization. Any product's images can be retrieved for accuracy verification or customer complaint handling.",
    },
  ],
  applicationsTitleVi: "Bài toán thực tế & nguyên lý hoạt động",
  applicationsTitleEn: "Real-world challenges & operating principle",
  applications: [
    {
      titleVi: "Thách thức kiểm tra chất lượng trong sản xuất",
      titleEn: "Quality inspection challenges in manufacturing",
      textVi:
        "Trong dây chuyền sản xuất hiện đại, việc kiểm tra thủ công bằng mắt người gặp nhiều hạn chế:\n• Tốc độ: Khó theo kịp dây chuyền tốc độ cao (trên 100 sản phẩm/phút), dẫn đến kiểm tra không toàn diện hoặc tạo nút thắt.\n• Chính xác: Dễ bỏ sót khuyết tật nhỏ (dưới 0.5mm), đặc biệt khi mệt mỏi hoặc ánh sáng kém. Con người không thể duy trì mức độ chú ý như máy móc.\n• Độ chuẩn hóa: Sự khác biệt giữa các ca trực, nhân viên, hoặc thậm chí cùng một người ở thời gian khác nhau. Tiêu chuẩn PASS/FAIL có thể thay đổi theo chủ quan.\n• Chi phí: Cần nhiều cán bộ kiểm tra chuyên dụng, chi phí nhân công cao, đặc biệt trên dây chuyền 24/7. Tốc độ kiểm tra chậm làm giảm hiệu suất dây chuyền.",
      textEn:
        "Manual visual inspection in modern production lines faces many limitations:\n• Speed: Difficult to keep pace with high-speed lines (over 100 products/minute), resulting in incomplete inspection or bottlenecks.\n• Accuracy: Easy to miss small defects (under 0.5mm), especially when fatigued or under poor lighting. Humans cannot maintain machine-level attention.\n• Standardization: Inconsistencies between shifts, staff, or even the same person at different times. PASS/FAIL criteria may be subjective and vary.\n• Cost: Requires dedicated inspection personnel, high labor costs especially on 24/7 lines. Slow inspection speed reduces line throughput.",
    },
    {
      titleVi: "Nguyên lý & quy trình hoạt động",
      titleEn: "Operating principle & workflow",
      textVi:
        "AI Visual Inspection hoạt động theo quy trình sau:\n1. Thu nhận hình ảnh: Camera công nghiệp (global shutter, độ phân giải cao) được đồng bộ với PLC và dây chuyền. Khi sản phẩm đi qua vị trí kiểm tra, camera tự động chụp hình ảnh từ các góc nhất định (từ 1-4 góc tùy theo loại sản phẩm).\n2. Tiền xử lý: Hình ảnh được chuyển đổi về định dạng chuẩn (kích thước, định dạng màu), chuẩn hóa ánh sáng, và trích xuất các vùng quan tâm (ROI).\n3. Phân tích AI: Mô hình Deep Learning học từ hàng nghìn hình ảnh sản phẩm tốt và lỗi. Mô hình thực hiện:\n   - Classification: Quyết định PASS/FAIL cho toàn bộ sản phẩm.\n   - Detection: Xác định vị trí chính xác của các khuyết tật (tọa độ x, y, loại lỗi).\n   - Segmentation: Phân tách vùng lỗi khỏi phần tốt để tính toán diện tích, độ nghiêm trọng.\n   - Anomaly Detection: Phát hiện các loại lỗi bất thường chưa từng thấy.\n4. Ra quyết định & tác động: Kết quả PASS/FAIL được gửi tới PLC trong vòng dưới 50ms. Nếu FAIL, hệ thống gửi tín hiệu đến cơ cấu loại bỏ (xylanh khí nén, rôle từ, hoặc cơ cấu cơ khí khác) để đẩy sản phẩm lỗi ra khỏi dây chuyền. Sản phẩm PASS tiếp tục di chuyển.\n5. Lưu trữ & phân tích: Hình ảnh gốc, kết quả, thông tin lỗi (loại, vị trí, mức độ) được lưu vào cơ sở dữ liệu. Dashboard hiển thị thống kê theo thời gian, ca trực, loại lỗi, giúp nhập nhằng phân tích nguyên nhân và tối ưu quy trình.",
      textEn:
        "AI Visual Inspection operates through the following workflow:\n1. Image Capture: Industrial cameras (global shutter, high resolution) are synchronized with PLC and conveyor. When a product reaches the inspection station, cameras automatically capture images from defined angles (1-4 angles depending on product type).\n2. Preprocessing: Images are converted to standard formats (size, color space), lighting is normalized, and regions of interest (ROI) are extracted.\n3. AI Analysis: A Deep Learning model trained on thousands of good and defective product images performs:\n   - Classification: Decides PASS/FAIL for the entire product.\n   - Detection: Pinpoints exact defect locations (x, y coordinates, defect type).\n   - Segmentation: Isolates defect regions to calculate area and severity.\n   - Anomaly Detection: Flags unusual defects not seen before.\n4. Decision & Action: Results are sent to the PLC in under 50ms. If FAIL, the system signals the rejection mechanism (pneumatic cylinders, solenoid relays, or mechanical systems) to eject the defective product. PASS products continue normally.\n5. Storage & Analysis: Original images, results, and defect info are stored in the database. Real-time dashboards show statistics by time, shift, and defect type, enabling root cause analysis and process optimization.",
    },
    {
      titleVi: "Loại sản phẩm & lỗi có thể phát hiện",
      titleEn: "Product types & detectable defects",
      textVi:
        "AI Visual Inspection phù hợp cho:\n• Linh kiện điện tử (PCB, SMT): Phát hiện solder joints lỏng, vết焊 ngoài, chi tiết BGA lỗi, linh kiện bị bỏ quên, vị trí linh kiện sai, in lỗi.\n• Sản phẩm cơ khí chính xác: Phát hiện trầy xước bề mặt, vết vân, nứt, vết ăn mòn, lỗi gia công (góc cạnh không nhọn hoặc kém), kích thước ngoài công sai.\n• Nhựa ép & khuôn: Phát hiện lỗi báo (burr), độ bóng không đều, vết teo, độ dày không đạt, in lỗi, màu không đúng.\n• Bao bì & in ấn: Phát hiện in mờ, sai ký tự, trật vị in, chất lượng khúc giấy, lỗi cắt, in bộp.\n• Màn hình & thiết bị điện tử: Phát hiện pixel chết, vết bẩn, trầy mặt kính, lỗi backlight, in ấn bộ tề.",
      textEn:
        "AI Visual Inspection is suitable for:\n• Electronic components (PCB, SMT): Detects loose solder joints, solder splashes, faulty BGA, missing components, misplaced parts, printing errors.\n• Precision mechanical parts: Detects surface scratches, marks, cracks, corrosion, machining errors (poor edge finish), dimensional deviations.\n• Injection-molded plastics: Detects burrs, uneven finish, sink marks, thickness variations, print errors, color mismatches.\n• Packaging & printing: Detects faded printing, character errors, print misalignment, paper wrinkle defects, cutting errors, print bleed.\n• Displays & electronics: Detects dead pixels, smudges, screen scratches, backlight defects, misaligned printing.",
    },
    {
      titleVi: "Lợi ích & ROI cho doanh nghiệp",
      titleEn: "Business benefits & ROI",
      textVi:
        "• Giảm tỷ lệ lỗi lọt (defect escape rate): Từ 2-5% (kiểm tra thủ công) xuống 0.01-0.1% (AI), tùy loại sản phẩm.\n• Tăng hiệu suất dây chuyền: Kiểm tra không dừng, không tạo nút thắt, cho phép tăng tốc độ sản xuất hoặc giáp vào dây chuyền dài hơn.\n• Giảm chi phí nhân công: Loại bỏ 1-3 cán bộ kiểm tra per shift, giảm 30-50% chi phí kiểm tra, đặc biệt trên dây chuyền 24/7.\n• Chuẩn hóa & truy xuất: Tiêu chuẩn kiểm tra nhất quán, không chịu ảnh hưởng con người. Dữ liệu toàn diện hỗ trợ bảo hành và xử lý khiếu nại.\n• Tối ưu quy trình: Dữ liệu lỗi chi tiết giúp phát hiện xu hướng, phân tích nguyên nhân sâu, cải tiến quy trình sản xuất dài hạn.\n• Tăng uy tín thương hiệu: Giảm tỷ lệ sản phẩm lỗi đến khách hàng, tăng độ tin cậy và hài lòng.\nROI thường đạt trong 1-2 năm, sau đó lợi nhuận tăng liên tục.",
      textEn:
        "• Reduce defect escape rate: From 2-5% (manual inspection) to 0.01-0.1% (AI), depending on product type.\n• Increase line throughput: Non-stop inspection without bottlenecks, allows faster production or longer lines.\n• Cut labor costs: Eliminate 1-3 inspection personnel per shift, reduce inspection costs by 30-50%, especially on 24/7 lines.\n• Standardization & traceability: Consistent standards unaffected by human factors. Comprehensive data supports warranty and complaint handling.\n• Process optimization: Detailed defect data helps identify trends, perform root cause analysis, and drive long-term manufacturing improvements.\n• Enhance brand reputation: Fewer defective products reach customers, increasing reliability and satisfaction.\nROI typically achieved within 1-2 years, with continuous profit growth afterward.",
    },
  ],
  equippedTitleVi: "Kiến trúc & thành phần hệ thống",
  equippedTitleEn: "System architecture & components",
  equippedIntroVi:
    "AI Visual Inspection là hệ thống toàn diện, bao gồm phần cứng (camera, ảnh sáng, xử lý) và phần mềm (AI engine, dashboard). Có thể triển khai như station độc lập hoặc tích hợp trực tiếp vào dây chuyền, kết nối với PLC hiện có qua các giao thức công nghiệp tiêu chuẩn.",
  equippedIntroEn:
    "AI Visual Inspection is a comprehensive system including hardware (cameras, lighting, processing) and software (AI engine, dashboard). Can be deployed as a standalone station or integrated directly into production lines, interfacing with existing PLCs via standard industrial protocols.",
  equippedProducts: [
    {
      titleVi: "Hệ thống camera công nghiệp",
      titleEn: "Industrial camera system",
      textVi:
        "Global shutter cameras (5-50MP) với ống kính và bộ lọc quang học tối ưu cho từng loại sản phẩm. Đồng bộ PLC qua GPIO hoặc Ethernet trigger, chụp tại đúng thời điểm sản phẩm ở vị trí kiểm tra. Hỗ trợ chụp từ 1-4 góc.",
      textEn:
        "Global-shutter cameras (5-50MP) with lenses and optical filters optimized for each product type. PLC-synchronized via GPIO or Ethernet trigger to capture exactly when products are at the inspection station. Supports 1-4 angle captures.",
    },
    {
      titleVi: "Hệ thống chiếu sáng chuyên dụng",
      titleEn: "Dedicated lighting system",
      textVi:
        "Kết hợp đèn LED công nghiệp (vòng, nền, cạnh, backlighting) với bộ điều khiển sáng thế hệ mới. Thiết kế tối ưu phần trăm tương phản, giảm bóng đổ, khắc phục phản xạ. Tự động điều chỉnh cường độ theo thời gian để bù đắp suy giảm LED.",
      textEn:
        "Combines industrial LED lights (ring, backlight, side, backlighting) with modern illumination controllers. Optimizes contrast percentage, minimizes shadows, eliminates reflections. Auto-adjusts intensity over time to compensate for LED degradation.",
    },
    {
      titleVi: "AI Vision Engine & Deep Learning Models",
      titleEn: "AI Vision Engine & Deep Learning Models",
      textVi:
        "Mô-đun phần mềm AI chuyên biệt cho kiểm tra chất lượng. Mô hình deep learning (CNN, R-CNN, hoặc Transformer) được huấn luyện trên dữ liệu thực của từng dây chuyền. Thực hiện Classification, Detection, Segmentation, và Anomaly Detection. Có giao diện cấu hình dễ sử dụng để thiết lập ROI, threshold, loại lỗi cần phát hiện, và tùy chỉnh mô hình mà không cần viết code.",
      textEn:
        "Specialized AI software module for quality inspection. Deep learning models (CNN, R-CNN, or Transformer) trained on real production data for each line. Performs classification, detection, segmentation, and anomaly detection. User-friendly configuration interface for setting ROI, thresholds, defect types, and model customization without coding.",
    },
    {
      titleVi: "Bộ xử lý công nghiệp (Edge AI / IPC)",
      titleEn: "Industrial processor (Edge AI / IPC)",
      textVi:
        "GPU Edge AI hoặc Industrial PC chịu được môi trường nhà máy (nhiệt độ -10~40°C, độ ẩm 10-95%, bụi, rung). Xử lý hình ảnh và suy luận AI với độ trễ dưới 50ms. Kết nối PLC qua TCP/IP, Modbus TCP, OPC-UA, hoặc giao thức tùy chỉnh. Hỗ trợ lưu trữ dữ liệu cục bộ (SSD) và sao lưu to the cloud.",
      textEn:
        "GPU-based Edge AI or industrial-grade computer rated for factory environments (temperature -10~40°C, humidity 10-95%, dust, vibration). Processes images and runs AI inference with under 50ms latency. Connects to PLCs via TCP/IP, Modbus TCP, OPC-UA, or custom protocols. Supports local storage (SSD) and cloud backup.",
    },
    {
      titleVi: "Hệ thống loại bỏ tự động (Rejection)",
      titleEn: "Automatic rejection system",
      textVi:
        "Cơ cấu loại bỏ sản phẩm lỗi khỏi dây chuyền. Thường gồm: xylanh khí nén, solenoid valve, hoặc cơ cấu cơ khí đẩy sản phẩm sang khay chứa lỗi. Hoạt động dựa trên tín hiệu từ PLC. Phổ biến cho các dây chuyền tốc độ cao.",
      textEn:
        "System to eject defective products from the main line. Typically includes pneumatic cylinders, solenoid valves, or mechanical pusher mechanisms to divert products to a defect container. Operates on PLC signals. Common on high-speed lines.",
    },
    {
      titleVi: "Dashboard & ML Monitoring Platform",
      titleEn: "Dashboard & ML Monitoring Platform",
      textVi:
        "Giao diện web/mobile để giám sát thời gian thực, xem kết quả PASS/FAIL từng sản phẩm, truy xuất hình ảnh, và phân tích dữ liệu. Hiển thị:\n- Thống kê theo thời gian (hourly, daily, weekly, monthly)\n- Phân loại lỗi & biểu đồ xu hướng\n- Heatmap loại lỗi (vị trí & tần suất trên sản phẩm)\n- Cảnh báo khi tỷ lệ lỗi vượt ngưỡng\n- Export báo cáo (Excel, PDF)\n- Quản lý user & quyền truy cập.\nHỗ trợ on-premise, cloud (AWS, Azure), hoặc hybrid.",
      textEn:
        "Web/mobile interface for real-time monitoring, viewing PASS/FAIL results for each product, retrieving images, and analyzing data. Displays:\n- Time-series statistics (hourly, daily, weekly, monthly)\n- Defect categorization & trend charts\n- Heatmaps showing defect types by location and frequency\n- Alerts when defect rate exceeds thresholds\n- Report exports (Excel, PDF)\n- User management & access control.\nSupports on-premise, cloud (AWS, Azure), or hybrid deployment.",
    },
  ],
  resourcesTitleVi: "Tài nguyên & liên kết",
  resourcesTitleEn: "Resources & related links",
  solutions: [
    { labelVi: "Giải pháp kiểm tra chất lượng tự động", labelEn: "Automated quality inspection solutions", href: "/#services" },
    { labelVi: "Sản phẩm AI Visual Inspection", labelEn: "AI Visual Inspection product", href: "/products" },
  ],
  downloads: [],
  productVideos: [],
  sampleVehicleInfo: undefined,
  contactTitleVi: "Bạn cần demo AI Visual Inspection?",
  contactTitleEn: "Want an AI Visual Inspection demo?",
  contactTextVi: "Chúng tôi có thể mô phỏng trực tiếp bài toán kiểm tra chất lượng trên dây chuyền của bạn, hoặc demo trên bộ demo chuẩn của iVista Tech với các loại sản phẩm điển hình (PCB, cơ khí, nhựa, bao bì, điện tử).",
  contactCtaVi: "Liên hệ để xem demo",
  contactCtaEn: "Contact for demo",
  contactTextEn: "We can demonstrate AI Visual Inspection directly on your production line, or demo our standard inspection rig with typical product types (PCB, mechanical, plastic, packaging, electronics).",
  exploreTitleVi: "Khám phá thêm giải pháp AI & Automation khác",
  exploreTitleEn: "Explore other AI & automation solutions",
  exploreTechs: [
    {
      titleVi: "AI Alignment - Định vị điểm mark cho nhà máy",
      titleEn: "AI Alignment - Fiducial Alignment for Factories",
      href: "/product-details/ai-alignment",
      textVi: "Giải pháp AI thị giác máy để xác định vị trí chính xác các điểm mark trên sản phẩm, cung cấp tọa độ hiệu chỉnh (X, Y, θ) cho robot, CNC, máy in hoặc tự động hóa khác.",
      textEn: "AI vision solution for precise fiducial mark localization, providing correction coordinates (X, Y, θ) to robots, CNC machines, printers, and other automation systems.",
    },
    {
      titleVi: "Bodycam thông minh cho lực lượng hiện trường",
      titleEn: "Smart Bodycam for Field Forces",
      href: "/product-details/bodycam-smart-recorder",
      textVi: "Thiết bị camera đeo kết hợp AI nhận dạng khuôn mặt/biển số và quản lý bằng chứng số, phù hợp cho cảnh sát, đăng kiểm, thanh tra, lực lượng phản ứng nhanh.",
      textEn: "Body-worn camera with AI face/plate recognition and digital evidence management for police, inspectors, enforcement agencies, and field response teams.",
    },
  ],
};

export const PRODUCT_DETAILS: Record<ProductSlug, ProductDetailContent> = {
  "intelligent-video-surveillance": INTELLIGENT_VIDEO_SURVEILLANCE,
  "bodycam-smart-recorder": BODYCAM_SMART_RECORDER,
  "ai-alignment": AI_ALIGNMENT,
  "ai-visual-inspection": AI_VISUAL_INSPECTION,
};

export function getProductDetail(slug: string): ProductDetailContent | undefined {
  return PRODUCT_DETAILS[slug as ProductSlug];
}
