# Brief ảnh background cho phần Slide (Hero)

Dùng tài liệu này khi thiết kế hoặc chọn ảnh nền cho hero slide để đảm bảo phù hợp màu và bố trí hiện tại.

---

## 1. Bố trí layout hiện tại

- **Trái (≈50% width):** Khối nội dung (headline, subline, sản phẩm/chips) trong một card bo góc, có gradient overlay.
- **Phải (≈50% width):** Hai ảnh sản phẩm xếp ngang (desktop).
- **Overlay phủ lên toàn slide:** Gradient từ **trái đậm → phải nhạt** (xem mục 3).
- **Bo góc:** Slide có `border-radius: 35px`, ảnh nền cần crop/thiết kế để không bị méo ở góc.

---

## 2. Màu sắc cần hòa hợp

| Mục đích | Màu | Ghi chú |
|----------|-----|--------|
| **Brand chính** | `#086ad8` | Dùng cho title, số thứ tự, nút, bullet active. Ảnh nền nên có tông tương hỗ (xanh dương, tím xanh, hoặc trung tính). |
| **Overlay tối (trái)** | `rgb(2, 6, 23)` = gần đen xanh | Gradient overlay dùng màu này với opacity khác nhau. Ảnh nền **bên trái** sẽ bị phủ đậm, nên ảnh có thể sáng/contrast cao ở trái vẫn đọc chữ được. |
| **Vùng phải** | Overlay nhạt (0.08–0.2 opacity) | **Bên phải** ảnh nền lộ nhiều hơn. Nên chọn ảnh có vùng sáng / điểm nhìn tập trung ở **bên phải hoặc giữa-phải** để hòa với ảnh sản phẩm. |
| **Chữ** | Trắng `#fff`, xanh `#086ad8` | Nền sau overlay cần đủ tối (đặc biệt bên trái) để chữ trắng và xanh nổi bật. |

**Gợi ý tông ảnh nền:**  
Xanh đêm, xanh navy, xanh lá tối, tím than, hoặc ảnh công nghệ/control room có nhiều tối và chấm sáng (màn hình, LED) — tránh ảnh quá sáng toàn bộ hoặc quá nhiều chi tiết sáng bên trái.

---

## 3. Gradient overlay (CSS) – ảnh sẽ bị phủ thế nào

Overlay hiện tại:

- **Góc:** 105deg (chéo từ trái trên xuống phải dưới).
- **Trái (0%):** `rgba(2, 6, 23, 0.65)` — vùng trái rất tối, ảnh chỉ lộ ~35%.
- **Giữa (45%):** `rgba(2, 6, 23, 0.35)` — ảnh lộ rõ hơn.
- **70%:** `rgba(2, 6, 23, 0.2)` — ảnh lộ nhiều.
- **Phải (100%):** `rgba(2, 6, 23, 0.08)` — ảnh gần như nguyên bản.

**Ý nghĩa với ảnh nền:**

- **Nửa trái ảnh:** Nên là vùng tối hoặc ít chi tiết quan trọng (sẽ bị phủ đậm).
- **Nửa phải ảnh:** Nên là vùng đẹp, có chi tiết hoặc ánh sáng (sẽ được thấy rõ).
- **Tránh:** Đặt nhân vật hoặc logo quan trọng ở góc trái trên (sẽ bị tối và khó thấy).

---

## 4. Kỹ thuật ảnh (kích thước, crop, chất lượng)

- **CSS dùng:** `background-size: cover`, `background-position: center center`.
- **Tỷ lệ khuyến nghị:** 1920×1080 (Full HD) hoặc 2560×1440. Tỷ lệ 16:9 an toàn cho desktop và tablet.
- **Crop:** Vì `cover` + `center`, phần **giữa** ảnh luôn hiển thị; **cạnh trái/phải** có thể bị cắt trên màn hẹp. Tránh đặt thông tin quan trọng sát mép trái/phải.
- **Safe zone nội dung:** Coi vùng **trái 40%** là vùng tối (cho chữ), **phải 60%** là vùng ảnh lộ nhiều (hòa với ảnh sản phẩm).
- **Định dạng:** JPG (chất lượng 80–90%) hoặc WebP để tối ưu dung lượng; độ phân giải đủ 1920px cạnh ngang.

---

## 5. Gợi ý chủ đề / concept ảnh

Phù hợp nội dung AI, giám sát, an ninh, Make in Vietnam:

1. **Control room / NOC:** Màn hình, bảng điều khiển, tông xanh/tím tối.
2. **Camera an ninh / CCTV:** Góc máy quay, màn hình giám sát, tông lạnh.
3. **Văn phòng / trụ sở hiện đại:** Góc rộng, ánh sáng nhẹ, tông trung tính hoặc xanh nhạt.
4. **Abstract / tech:** Hạt, sóng, đường kẻ, mesh tối với chấm sáng (blue/cyan).
5. **Thành phố / smart city về đêm:** Đường phố, đèn, tòa nhà, tông xanh đêm.

Tránh: ảnh quá sáng toàn bộ, mặt người quá lớn ở nửa trái, logo đối thủ hoặc bản quyền chưa rõ.

---

## 6. Cách đổi ảnh nền trong code

- **File ảnh:** Đặt trong `public/assets/images/bg/` (ví dụ: `hero-bg5.jpg` hoặc tên mới).
- **Đường dẫn:** Trong `app/page.tsx`, tìm đoạn:
  ```jsx
  style={{ backgroundImage: "url(/assets/images/bg/hero-bg5.jpg)" }}
  ```
  Đổi `hero-bg5.jpg` thành tên file ảnh mới (ví dụ `hero-bg6.jpg`).

Nếu muốn **mỗi slide một ảnh nền khác nhau**, có thể chuyển `backgroundImage` vào từng `swiper-slide` và dùng data từ `HERO_SLIDES` (ví dụ thêm field `bgImage` cho từng slide).

---

## 7. Checklist nhanh trước khi dùng ảnh

- [ ] Tỷ lệ ~16:9, độ phân giải ≥ 1920px cạnh ngang.
- [ ] Vùng **trái** ảnh tối hoặc ít chi tiết quan trọng (sẽ bị overlay đậm).
- [ ] Vùng **phải** ảnh đẹp, hòa với tông xanh/tím/trung tính.
- [ ] Tông màu hòa với #086ad8 và rgb(2,6,23).
- [ ] File đặt trong `public/assets/images/bg/` và cập nhật `backgroundImage` trong `app/page.tsx`.
