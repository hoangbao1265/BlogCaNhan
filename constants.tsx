
import { Post, Profile } from './types';

export const MY_PROFILE: Profile = {
  name: "Nguyễn Văn A",
  title: "Senior Software Engineer & Network Enthusiast",
  bio: "Tôi là một kỹ sư phần mềm với hơn 5 năm kinh nghiệm, chuyên sâu về hệ thống phân tán và lập trình mạng. Tôi đam mê việc tối ưu hóa hiệu năng hệ thống và chia sẻ kiến thức cộng đồng.",
  skills: [
    { name: "Java (Spring Boot, Multithreading)", level: 90 },
    { name: "JavaScript (React, Node.js)", level: 85 },
    { name: "Network Programming (TCP/IP, WebSocket)", level: 80 },
    { name: "Docker & Kubernetes", level: 75 },
    { name: "System Design", level: 80 }
  ],
  courses: [
    { name: "Java Professional Developer", provider: "Oracle", year: "2021" },
    { name: "Fullstack JavaScript Mastery", provider: "Udemy", year: "2022" },
    { name: "Network Security & Protocols", provider: "Cisco Networking Academy", year: "2020" }
  ],
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:contact@example.com"
  }
};

export const BLOG_POSTS: Post[] = [
  {
    id: 'java-oop-basic',
    title: 'Lập trình hướng đối tượng (OOP) trong Java',
    excerpt: 'Tìm hiểu 4 trụ cột chính của OOP: Đóng gói, Kế thừa, Đa hình và Trừu tượng trong Java.',
    category: 'Java',
    tags: ['OOP', 'Core Java'],
    date: '2024-03-20',
    readTime: '8 phút',
    featured: true,
    content: `
# Lập trình hướng đối tượng (OOP) trong Java

Lập trình hướng đối tượng (Object-Oriented Programming - OOP) là một mô hình lập trình dựa trên khái niệm về "đối tượng", có thể chứa dữ liệu và mã nguồn.

## 1. Tính Đóng Gói (Encapsulation)
Giúp che giấu các thông tin chi tiết bên trong đối tượng và chỉ để lộ ra những gì cần thiết thông qua các phương thức public (getters/setters).

\`\`\`java
public class Person {
    private String name;
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
\`\`\`

## 2. Tính Kế Thừa (Inheritance)
Cho phép một lớp mới kế thừa các thuộc tính và phương thức từ một lớp đã có.

## 3. Tính Đa Hình (Polymorphism)
Cho phép một đối tượng có thể thực hiện một hành động theo nhiều cách khác nhau.

## 4. Tính Trừu Tượng (Abstraction)
Tập trung vào những gì đối tượng làm thay vì cách nó làm điều đó thông qua Interface hoặc Abstract Class.
    `
  },
  {
    id: 'js-async-await',
    title: 'Xử lý bất đồng bộ với Promise và Async/Await',
    excerpt: 'Cách viết mã JavaScript bất đồng bộ một cách sạch sẽ và dễ hiểu hơn.',
    category: 'JavaScript',
    tags: ['ES6', 'Async'],
    date: '2024-03-18',
    readTime: '6 phút',
    featured: true,
    content: `
# Xử lý bất đồng bộ trong JavaScript

JavaScript là ngôn ngữ đơn luồng, nhưng nhờ Event Loop nó có thể xử lý các tác vụ I/O không chặn.

## Tại sao cần Async/Await?
Trước đây chúng ta dùng Callback dẫn đến tình trạng "Callback Hell". Sau đó Promise ra đời nhưng cú pháp \`.then()\` vẫn còn khá rườm rà khi lồng nhau.

\`\`\`javascript
async function fetchUserData() {
    try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Lỗi:", error);
    }
}
\`\`\`

Sử dụng \`async/await\` giúp mã nguồn trông giống như mã đồng bộ, dễ đọc và dễ bảo trì hơn rất nhiều.
    `
  },
  {
    id: 'network-tcp-ip',
    title: 'Hiểu về giao thức TCP/IP và mô hình OSI',
    excerpt: 'Cơ sở hạ tầng của Internet: Cách dữ liệu được truyền đi qua các tầng mạng.',
    category: 'Network',
    tags: ['TCP/IP', 'Networking'],
    date: '2024-03-15',
    readTime: '10 phút',
    featured: true,
    content: `
# Hiểu về giao thức TCP/IP

TCP/IP là bộ giao thức cho phép các máy tính kết nối và truyền thông với nhau trên toàn thế giới.

## 1. TCP (Transmission Control Protocol)
Đảm bảo dữ liệu được truyền đi chính xác, đúng thứ tự và không bị mất mát thông qua cơ chế bắt tay 3 bước (3-way handshake).

## 2. IP (Internet Protocol)
Xác định địa chỉ gửi và nhận của các gói tin trên mạng.

## Mô hình 4 tầng của TCP/IP:
1. **Application Layer**: HTTP, FTP, SMTP
2. **Transport Layer**: TCP, UDP
3. **Internet Layer**: IP, ICMP
4. **Network Access Layer**: Ethernet, Wi-Fi
    `
  },
  {
    id: 'java-collections',
    title: 'Làm chủ Java Collections Framework',
    excerpt: 'So sánh List, Set, Map và khi nào nên sử dụng loại nào cho hiệu quả.',
    category: 'Java',
    tags: ['Collections', 'Data Structures'],
    date: '2024-03-10',
    readTime: '7 phút',
    content: `
# Java Collections Framework

Collections Framework cung cấp một tập hợp các lớp và giao diện để lưu trữ và thao tác với các nhóm đối tượng.

- **List**: Cho phép trùng lặp, có thứ tự (ArrayList, LinkedList).
- **Set**: Không cho phép trùng lặp (HashSet, TreeSet).
- **Map**: Lưu trữ cặp Key-Value (HashMap, TreeMap).

\`\`\`java
List<String> list = new ArrayList<>();
list.add("Java");
list.add("JavaScript");

Map<Integer, String> map = new HashMap<>();
map.put(1, "Network");
\`\`\`
    `
  },
  {
    id: 'js-dom-manipulation',
    title: 'Thao tác DOM hiệu quả trong JavaScript thuần',
    excerpt: 'Kỹ thuật tương tác với giao diện người dùng mà không cần thư viện bên ngoài.',
    category: 'JavaScript',
    tags: ['DOM', 'Vanilla JS'],
    date: '2024-03-05',
    readTime: '5 phút',
    content: `
# Thao tác DOM với JavaScript

DOM (Document Object Model) là giao diện lập trình cho các tài liệu HTML.

## Lựa chọn phần tử
\`\`\`javascript
const element = document.querySelector('.my-class');
const btn = document.getElementById('submit-btn');
\`\`\`

## Lắng nghe sự kiện
\`\`\`javascript
btn.addEventListener('click', (e) => {
    console.log('Button clicked!');
    element.textContent = 'Updated content';
});
\`\`\`
    `
  },
  {
    id: 'network-http-https',
    title: 'Cơ chế hoạt động của HTTP và HTTPS',
    excerpt: 'Sự khác biệt giữa giao thức không bảo mật và bảo mật, cùng quá trình TLS Handshake.',
    category: 'Network',
    tags: ['HTTP', 'Security'],
    date: '2024-03-01',
    readTime: '9 phút',
    content: `
# HTTP vs HTTPS

HTTP (Hypertext Transfer Protocol) là nền tảng của World Wide Web. HTTPS là phiên bản bảo mật của nó.

## Tại sao cần HTTPS?
- **Mã hóa**: Ngăn chặn kẻ tấn công đọc nội dung.
- **Toàn vẹn**: Đảm bảo dữ liệu không bị thay đổi trên đường truyền.
- **Xác thực**: Đảm bảo bạn đang kết nối đúng website mong muốn.

HTTPS sử dụng TLS (Transport Layer Security) để thiết lập kết nối an toàn thông qua các chứng chỉ số (SSL Certificates).
    `
  },
  {
    id: 'java-multithreading',
    title: 'Đa luồng trong Java từ cơ bản đến nâng cao',
    excerpt: 'Xử lý song song với Thread, Runnable và Executor Service.',
    category: 'Java',
    tags: ['Multithreading', 'Concurrency'],
    date: '2024-02-25',
    readTime: '12 phút',
    content: `
# Đa luồng (Multithreading) trong Java

Lập trình đa luồng cho phép thực thi nhiều phần của chương trình cùng một lúc để tối đa hóa việc sử dụng CPU.

## Executor Service
Thay vì quản lý Thread thủ công, hãy sử dụng Thread Pool:

\`\`\`java
ExecutorService executor = Executors.newFixedThreadPool(10);
executor.execute(() -> {
    System.out.println("Tác vụ đang chạy trong luồng mới");
});
executor.shutdown();
\`\`\`
    `
  },
  {
    id: 'js-node-basics',
    title: 'Bắt đầu với Node.js cho lập trình mạng',
    excerpt: 'Xây dựng Server đơn giản với module HTTP và File System trong Node.js.',
    category: 'JavaScript',
    tags: ['Node.js', 'Backend'],
    date: '2024-02-20',
    readTime: '8 phút',
    content: `
# Node.js: JavaScript ở phía Server

Node.js là một môi trường thực thi JavaScript xây dựng trên engine V8 của Chrome.

## Tạo Web Server đơn giản
\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server đang chạy tại http://127.0.0.1:3000/');
});
\`\`\`
    `
  },
  {
    id: 'network-websocket',
    title: 'Giao tiếp thời gian thực với WebSocket',
    excerpt: 'Khi nào nên dùng WebSocket thay vì HTTP Polling cho các ứng dụng Real-time.',
    category: 'Network',
    tags: ['WebSocket', 'Real-time'],
    date: '2024-02-15',
    readTime: '7 phút',
    content: `
# WebSocket: Kết nối hai chiều

WebSocket cung cấp một kênh giao tiếp song công (full-duplex) qua một kết nối TCP duy nhất.

## Ưu điểm
- Độ trễ thấp.
- Ít tốn băng thông (overhead thấp hơn HTTP).
- Server có thể chủ động gửi dữ liệu tới Client.

Phù hợp cho: App chat, Bảng giá chứng khoán, Game online đa người chơi.
    `
  }
];
