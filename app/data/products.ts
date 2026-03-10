export const PRODUCTS = [
  {
    slug: "intelligent-video-surveillance",
    titleVi: "Giám sát video thông minh & Trợ lý dự đoán mối đe dọa",
    titleEn: "Intelligent Video Surveillance & Threat Prediction Assistant",
    shortVi: "Giải pháp đăng kiểm (body cam): LiveView, xem lại video, xuất báo cáo, tìm kiếm lịch sử nhận dạng face/plate.",
    shortEn: "Vehicle inspection solution (body cam): LiveView, playback, export & reports, face/plate recognition history search.",
    img: "Product/dangkiem-1724071272803999041132.jpg",
    heroImgs: ["Product/dangkiem-1724071272803999041132.jpg", "Product/liveview_dangkiem.png"],
  },
  {
    slug: "bodycam-smart-recorder",
    titleVi: "Bodycam thông minh cho lực lượng hiện trường",
    titleEn: "Smart Bodycam for Field Forces",
    shortVi:
      "Camera đeo người chuẩn công vụ: ghi hình 4G/LTE, lưu trữ an toàn, livestream về trung tâm, tích hợp nhận dạng khuôn mặt/biển số và quản lý ca trực.",
    shortEn:
      "Duty-grade body-worn camera: 4G/LTE streaming, secure storage, live view to command center, face/plate recognition and shift management for field officers.",
    img: "Product/bodycam1.jpg",
    heroImg: "ser-icon17.png",
    heroImgs: ["Product/bodycam1.jpg", "Product/bodycam2.jpg"],
  },
  {
    slug: "ai-alignment",
    titleVi: "AI Alignment cho nhà máy",
    titleEn: "AI Alignment for Smart Factories",
    shortVi:
      "Giải pháp thị giác máy dùng AI để định vị chính xác điểm mark (fiducial) trên sản phẩm, cung cấp tọa độ X, Y, θ cho robot, CNC, máy in và hệ thống tự động trong nhà máy.",
    shortEn:
      "AI-powered vision solution for accurately locating fiducial marks on products, providing X, Y, θ coordinates to robots, CNC machines, printers, and other automation systems in the factory.",
    img: "Product/Alignment1.jpg",
    heroImgs: ["Product/Alignment1.jpg", "Product/Alignment2.jpg"],
  },
  {
    slug: "ai-visual-inspection",
    titleVi: "AI Visual Inspection - Kiểm tra ngoại quan tự động",
    titleEn: "AI Visual Inspection - Automated Quality Control",
    shortVi:
      "Giải pháp thị giác máy với AI để phát hiện lỗi ngoại quan theo thời gian thực, tự động loại sản phẩm lỗi khỏi dây chuyền, chuẩn hóa chất lượng và tối ưu hiệu suất sản xuất.",
    shortEn:
      "AI-powered vision solution for real-time surface defect detection, automatic rejection of defective products, quality standardization, and manufacturing optimization.",
    img: "Product/AIVisualInspection1.png",
    heroImgs: ["Product/AIVisualInspection1 - hero.png", "Product/Alignment3 - hero.png"],
  },
] as const;

export type ProductSlug = (typeof PRODUCTS)[number]["slug"];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
