# An Nhiên Mountain Retreat

Frontend demo landing page khách sạn được xây dựng bằng Next.js 15, React 19, TypeScript và GSAP ScrollTrigger.

## Khởi chạy

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`. Kiểm tra production bằng `npm run build`.

## Cấu trúc

- `app/`: layout, page và CSS theo từng nhóm chức năng.
- `components/sections/`: các section độc lập của landing page.
- `components/BookingManager.tsx`: quy trình đặt, xem và huỷ phòng.
- `data/site.ts`: phòng, gói nghỉ, tiện nghi, review và FAQ.
- `public/images/`: ảnh hero, suite, ẩm thực và spa.

## Nhật ký thực hiện

### 1. Bộ khung landing page

- Tạo header, hero, form ngày lưu trú, câu chuyện, phòng, trải nghiệm, ẩm thực, CTA và footer.
- Responsive desktop/tablet/mobile.
- GSAP ScrollTrigger cho parallax, reveal và hiệu ứng mở ảnh.
- Hỗ trợ `prefers-reduced-motion`.

### 2. Bổ sung nội dung chuyển đổi

- Thêm ba hạng villa và giá tham khảo.
- Thêm ba gói nghỉ, tiện nghi, review, vị trí, Google Maps và FAQ.
- Thêm validation ngày nhận/trả phòng.
- Thêm skip link, focus ring và trạng thái ARIA.
- Tạo thêm ảnh spa đồng nhất với phong cách bằng imagegen tích hợp.

### 3. Demo đặt và huỷ phòng

- Chọn villa, ngày lưu trú và số khách.
- Nhập họ tên, email, điện thoại và yêu cầu đặc biệt.
- Tính số đêm và tổng giá tự động.
- Tạo mã đặt phòng và lưu bằng `localStorage`.
- Nút “Đặt phòng của tôi” mở chi tiết booking.
- Xem trạng thái, phòng, khách, ngày, tổng tiền và ghi chú.
- Huỷ phòng qua bước xác nhận riêng.
- Đây là frontend demo: không có giao dịch, gửi email hoặc backend thật.

### 4. Hero slideshow tự động

- Hero luân phiên bốn ảnh: toàn cảnh, suite, ẩm thực và spa.
- Tự đổi ảnh sau mỗi 2 giây bằng crossfade và zoom nhẹ.
- Có nút ảnh trước, ảnh sau, số thứ tự và tạm dừng/phát.
- Autoplay tạm dừng khi hover/focus và bị vô hiệu hóa với `prefers-reduced-motion`.
- Ảnh ẩn dùng `aria-hidden`; ảnh hiện tại có alt text mô tả.

### 5. Validation thông tin khách

- Họ tên không được chứa chữ số và phải có ít nhất hai ký tự hợp lệ.
- Hỗ trợ tên tiếng Việt có dấu, khoảng trắng, dấu nháy và dấu gạch nối.
- Số điện thoại được chuẩn hoá bằng cách bỏ khoảng trắng/ký tự phân cách.
- Số sau chuẩn hoá phải đúng 10 chữ số và bắt đầu bằng `0`.
- Lỗi hiển thị ngay dưới trường, dùng `aria-invalid`, `aria-describedby` và tự focus trường sai đầu tiên.

## Lưu ý trước khi xuất bản

Tên, giá, rating, review, chính sách, địa chỉ và thông tin liên hệ đang là dữ liệu minh họa. Cần thay bằng dữ liệu khách sạn xác nhận và kết nối booking API thật trước khi production.
