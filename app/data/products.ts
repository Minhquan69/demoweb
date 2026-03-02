export const PRODUCTS = [
  {
    slug: "intelligent-video-surveillance",
    titleVi: "Giám sát video thông minh & Trợ lý dự đoán mối đe dọa",
    titleEn: "Intelligent Video Surveillance & Threat Prediction Assistant",
    shortVi: "Giải pháp đăng kiểm (body cam): LiveView, xem lại video, xuất báo cáo, tìm kiếm lịch sử nhận dạng face/plate.",
    shortEn: "Vehicle inspection solution (body cam): LiveView, playback, export & reports, face/plate recognition history search.",
    img: "Product/dangkiem-1724071272803999041132.jpg",
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
  },
] as const;

export type ProductSlug = (typeof PRODUCTS)[number]["slug"];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
