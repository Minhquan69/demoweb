/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Cho phép HMR/WebSocket khi truy cập qua IP – server phải chạy với -H 0.0.0.0
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://localhost:3000/",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3000/",
    "http://172.29.48.1:3000",
    "http://172.29.48.1:3000/",
    "http://192.168.1.52:3000",
    "http://192.168.1.52:3000/",
    // IP khác trong mạng nội bộ (đổi theo IP máy bạn)
    "http://[::1]:3000",
    "http://[::1]:3000/",
  ],
};

export default nextConfig;

