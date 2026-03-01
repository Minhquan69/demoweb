export const PRODUCTS = [
  {
    slug: "intelligent-video-surveillance",
    titleVi: "Giám sát video thông minh & Trợ lý dự đoán mối đe dọa",
    titleEn: "Intelligent Video Surveillance & Threat Prediction Assistant",
    shortVi: "Giải pháp đăng kiểm (body cam): LiveView, xem lại video, xuất báo cáo, tìm kiếm lịch sử nhận dạng face/plate.",
    shortEn: "Vehicle inspection solution (body cam): LiveView, playback, export & reports, face/plate recognition history search.",
    img: "blog-1.jpg",
  },
] as const;

export type ProductSlug = (typeof PRODUCTS)[number]["slug"];

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
