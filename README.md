# Joy Company Website

🌟 **Nơi tài năng toả sáng** - Website chính thức của công ty Joy

## Giới thiệu

Website công ty Joy được xây dựng với Next.js và Tailwind CSS, mang đến trải nghiệm người dùng hiện đại và chuyên nghiệp.

## Tính năng

- ✨ Thiết kế responsive, tương thích mọi thiết bị
- 🎨 Giao diện hiện đại với hiệu ứng động mượt mà
- 🚀 Tối ưu hiệu suất với Next.js
- 📱 Trải nghiệm người dùng tuyệt vời

## Cấu trúc trang

- **Trang chủ**: Giới thiệu tổng quan về công ty
- **Về chúng tôi**: Thông tin chi tiết về Joy Company
- **Dịch vụ**: Các dịch vụ mà công ty cung cấp
- **Văn hóa**: Môi trường làm việc và văn hóa công ty
- **Tuyển dụng**: Cơ hội nghề nghiệp tại Joy
- **Liên hệ**: Thông tin liên hệ và form gửi tin nhắn

## Công nghệ sử dụng

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React

## Cài đặt và chạy dự án

1. Clone repository:
```bash
git clone https://github.com/waveup-al/joy-company-website.git
cd joy-company-website
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở trình duyệt và truy cập `http://localhost:3000`

## Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build ứng dụng cho production
- `npm run start` - Chạy production server
- `npm run lint` - Kiểm tra code với ESLint

## Deployment

Website được tự động deploy lên GitHub Pages thông qua GitHub Actions:

1. **Tự động**: Mỗi khi push code lên branch `main`, GitHub Actions sẽ tự động build và deploy
2. **Thủ công**: Có thể trigger deployment thủ công từ tab Actions trên GitHub
3. **URL**: Website sẽ có sẵn tại `https://waveup-al.github.io/joy-company-website/`

### Cấu hình Deployment

- **GitHub Actions Workflow**: `.github/workflows/deploy.yml`
- **Static Export**: Sử dụng `output: 'export'` trong `next.config.js`
- **Base Path**: Cấu hình cho GitHub Pages với `/joy-company-website`
- **Image Optimization**: Tắt để tương thích với static export

### Yêu cầu

- Repository phải có GitHub Pages được bật
- Workflow permissions phải được cấu hình đúng
- Source được set thành "GitHub Actions"

## Đóng góp

Mọi đóng góp để cải thiện website đều được hoan nghênh. Vui lòng tạo issue hoặc pull request.

## Liên hệ

- **Email**: info@joycompany.com
- **Website**: [Joy Company](https://joy-company-website.vercel.app)

---

© 2024 Joy Company. All rights reserved.