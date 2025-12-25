# BBaoHG Blog 🚀

Chào mừng đến với **BBaoHG Blog** - Website cá nhân nơi mình chia sẻ về hành trình trở thành một Full Stack Software Engineer, các kiến thức lập trình (Java, C/C++, Network...) và sở thích cá nhân.

🔗 **Live Demo:** [https://hoangbao1265.github.io/BlogCaNhan/](https://hoangbao1265.github.io/BlogCaNhan/)

---

## ✨ Tính năng nổi bật

*   **Kiến trúc SSG (Server-Side Generation)**: Tối ưu SEO và tốc độ tải trang cực nhanh nhờ tạo sẵn HTML.
*   **Giao diện hiện đại**: Thiết kế Responsive, hỗ trợ **Dark Mode** 🌙/☀️.
*   **Blog Engine**: Viết bài bằng Markdown, highlight code tự động.
*   **Hiệu ứng mượt mà**: Sử dụng **Framer Motion** cho các hiệu ứng chuyển trang và cuộn.
*   **Portfolio & Certificates**: Trang giới thiệu bản thân và show các chứng chỉ với tính năng xem trước PDF (Modal Preview) tiện lợi.
*   **Dynamic Titles**: Tên tab trình duyệt thay đổi linh hoạt theo từng trang và bài viết.

## 🛠️ Công nghệ sử dụng

*   **Core**: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/) (SSR Mode).
*   **Architecture**: Static Site Generation (SSG).
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Lucide React](https://lucide.dev/) (Icons).
*   **Animations**: [Framer Motion](https://www.framer.com/motion/).
*   **Routing**: [React Router v7](https://reactrouter.com/).
*   **Deployment**: GitHub Pages.

## 📦 Cài đặt & Chạy cục bộ

1.  **Clone dự án**:
    ```bash
    git clone https://github.com/hoangbao1265/BlogCaNhan.git
    cd BlogCaNhan
    ```

2.  **Cài đặt dependencies**:
    ```bash
    npm install
    ```

3.  **Chạy server development**:
    ```bash
    npm run dev
    ```
    Truy cập `http://localhost:3000` để xem kết quả.

## 🚀 Deploy lên GitHub Pages

Dự án đã được cấu hình sẵn để deploy tự động (SSG Build). Chỉ cần chạy lệnh:

```bash
npm run deploy
```

Lệnh này sẽ tự động:
1. Build Client bundle.
2. Build Server bundle.
3. Prerender (Tạo file HTML tĩnh).
4. Đẩy thư mục `dist/static` lên nhánh `gh-pages`.

## 📂 Cấu trúc dự án

```
BlogCaNhan/
├── public/              # Static assets (images, PDFs...)
├── src/
│   ├── components/      # Common components
│   ├── pages/           # Page components
│   ├── constants.tsx    # Data (Blog posts, Profile info...)
│   ├── types.ts         # TypeScript interfaces
│   ├── entry-client.tsx # Client-side entry (Hydration)
│   ├── entry-server.tsx # Server-side entry (Rendering)
│   └── App.tsx          # Main App component
├── prerender.js         # Script tạo file HTML tĩnh
├── vite.config.ts       # Vite configuration
└── tailwind.config.js   # Tailwind configuration
```

---

© 2025 Author:**Bao Hoang**.
