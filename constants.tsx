
import { Post, Profile } from './types';

export const MY_PROFILE: Profile = {
  name: "Bao Hoang",
  title: "Software Engineer & Networking Specialist",
  bio: "Tôi là một kỹ sư phần mềm chuyên về phát triển backend với Java và các giải pháp giao tiếp thời gian thực bằng JavaScript. BBaoHG là nơi tôi ghi lại hành trình khám phá các tầng sâu của mạng máy tính và tối ưu hóa hệ thống.",
  skills: [
    { name: "Java (Spring Ecosystem, Concurrency)", level: 92 },
    { name: "JavaScript (Node.js, TypeScript)", level: 88 },
    { name: "Network Security (SSL/TLS, OAuth2)", level: 85 },
    { name: "Infrastructure (Docker, K8s, Nginx)", level: 80 },
    { name: "API Design (gRPC, REST, GraphQL)", level: 90 }
  ],
  courses: [
    { name: "Advanced Java Performance Tuning", provider: "Baeldung", year: "2023" },
    { name: "Cisco Certified Network Associate (CCNA)", provider: "Cisco", year: "2021" },
    { name: "Full Stack Development with React", provider: "Meta", year: "2022" }
  ],
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:contact@bbaohg.com"
  }
};

export const BLOG_POSTS: Post[] = [
  {
    id: 'java-oop-deep-dive',
    title: 'Đào sâu về 4 trụ cột OOP trong Java: Thực tế và Ứng dụng',
    excerpt: 'Không chỉ là lý thuyết suông, bài viết này sẽ phân tích cách áp dụng tính Đóng gói, Kế thừa, Đa hình và Trừu tượng trong các dự án thực tế quy mô lớn.',
    category: 'Java',
    tags: ['OOP', 'Core Java', 'Software Architecture'],
    date: '2024-03-20',
    readTime: '15 phút',
    featured: true,
    content: `
# Đào sâu về 4 trụ cột OOP trong Java

Lập trình hướng đối tượng (OOP) thường bị hiểu nhầm là chỉ xoay quanh việc tạo class. Thực tế, nó là một tư duy tổ chức mã nguồn giúp hệ thống linh hoạt và dễ mở rộng.

## 1. Tính Đóng Gói (Encapsulation) - Bảo mật trạng thái
Tính đóng gói không chỉ là việc đặt biến là \`private\` và tạo \`getter/setter\`. Mục tiêu thực sự là bảo vệ tính toàn vẹn của dữ liệu.

Ví dụ, nếu bạn có một lớp \`BankAccount\`, bạn không muốn ai đó thay đổi số dư trực tiếp. Thay vào đó, bạn cung cấp phương thức \`deposit()\` để kiểm tra tính hợp lệ trước khi cộng tiền.

\`\`\`java
public class BankAccount {
    private double balance;

    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
            System.out.println("Nạp tiền thành công: " + amount);
        } else {
            throw new IllegalArgumentException("Số tiền nạp phải lớn hơn 0");
        }
    }
}
\`\`\`

## 2. Tính Kế Thừa (Inheritance) - Tái sử dụng hay là "Cái bẫy"?
Kế thừa giúp tái sử dụng mã nguồn, nhưng nếu lạm dụng sẽ dẫn đến "mối liên kết chặt chẽ" (tight coupling). Trong Java, chúng ta nên ưu tiên "Composition over Inheritance" (Ưu tiên thành phần hơn kế thừa).

## 3. Tính Đa Hình (Polymorphism) - Sức mạnh của sự linh hoạt
Đa hình cho phép chúng ta xử lý các đối tượng khác nhau thông qua một giao diện chung. Điều này cực kỳ hữu ích trong việc xây dựng các plugin hoặc xử lý nhiều loại thanh toán (Credit Card, PayPal, Crypto) mà không cần thay đổi code xử lý chính.

## 4. Tính Trừu Tượng (Abstraction) - Tập trung vào "Cái gì", không phải "Làm thế nào"
Trừu tượng hóa giúp ẩn đi sự phức tạp của hệ thống. Hãy tưởng tượng bạn đang lái xe, bạn chỉ cần biết cách sử dụng vô lăng (Interface) mà không cần quan tâm động cơ bên trong hoạt động ra sao.

---
**Kết luận:** Nắm vững OOP giúp bạn viết code không chỉ chạy được, mà còn "sống khỏe" qua nhiều năm bảo trì.
    `
  },
  {
    id: 'js-async-event-loop',
    title: 'Giải mã Event Loop: Tại sao JavaScript nhanh dù chỉ có đơn luồng?',
    excerpt: 'Hiểu rõ cơ chế Microtasks, Macrotasks và cách JavaScript xử lý hàng ngàn request cùng lúc mà không bị block.',
    category: 'JavaScript',
    tags: ['Async', 'Performance', 'Engine'],
    date: '2024-03-25',
    readTime: '18 phút',
    featured: true,
    content: `
# Giải mã Event Loop trong JavaScript

JavaScript nổi tiếng là ngôn ngữ đơn luồng (Single-threaded). Vậy tại sao nó lại được dùng để xây dựng các hệ thống backend cực nhanh như Node.js? Câu trả lời nằm ở **Event Loop**.

## 1. Cấu trúc bộ nhớ
- **Call Stack:** Nơi lưu trữ các hàm đang thực thi. Theo cơ chế LIFO (Last In First Out).
- **Web APIs:** Được trình duyệt (hoặc C++ APIs trong Node) cung cấp để xử lý các tác vụ như \`setTimeout\`, \`fetch\`, DOM events.
- **Task Queue (Macrotasks):** Chứa các callback từ \`setTimeout\`, \`setInterval\`.
- **Microtask Queue:** Ưu tiên cao hơn Macrotasks. Chứa các callback từ \`Promise.then\`, \`process.nextTick\`.

## 2. Quy trình của Event Loop
1. Kiểm tra Call Stack. Nếu trống, chuyển sang bước 2.
2. Kiểm tra Microtask Queue. Thực thi **tất cả** các task có trong hàng đợi này.
3. Kiểm tra Macrotask Queue. Thực thi **một** task, sau đó quay lại bước 1.

## 3. Ví dụ kinh điển
Bạn đoán xem kết quả sẽ là gì?
\`\`\`javascript
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');
\`\`\`
Kết quả là: \`1, 4, 3, 2\`. Tại sao? Vì \`Promise\` vào Microtask Queue, còn \`setTimeout\` vào Macrotask Queue.

## 4. Ứng dụng thực tế
Khi làm việc với các tác vụ nặng (như xử lý ảnh), nếu bạn chạy nó trực tiếp trên main thread, giao diện sẽ bị "đơ". Hiểu Event Loop giúp bạn biết cách tách các tác vụ này ra (sử dụng Web Workers hoặc chia nhỏ tác vụ với \`setImmediate\`).

---
Nắm chắc Event Loop là bước ngoặt để từ một coder trở thành một Engineer thực thụ.
    `
  },
  {
    id: 'network-tcp-deep-dive',
    title: 'TCP Handshake và bài toán tối ưu hóa độ trễ mạng',
    excerpt: 'Tại sao kết nối mạng của bạn chậm? Tìm hiểu về quá trình bắt tay 3 bước, cửa sổ trượt (sliding window) và cách tối ưu hóa TCP.',
    category: 'Network',
    tags: ['Networking', 'TCP', 'Infrastructure'],
    date: '2024-04-01',
    readTime: '20 phút',
    featured: true,
    content: `
# TCP Handshake và Tối ưu hóa độ trễ

Trong lập trình mạng, TCP (Transmission Control Protocol) là "xương sống" của hầu hết các ứng dụng. Tuy nhiên, cái giá của sự tin cậy là **độ trễ (latency)**.

## 1. Quá trình bắt tay 3 bước (3-way Handshake)
Trước khi dữ liệu đầu tiên được gửi đi, Client và Server phải thực hiện:
1. **SYN:** Client gửi một yêu cầu kết nối.
2. **SYN-ACK:** Server phản hồi xác nhận.
3. **ACK:** Client xác nhận lại một lần nữa.

Quá trình này tốn mất 1.5 RTT (Round Trip Time). Nếu RTT của bạn là 100ms, bạn đã mất 150ms chỉ để "chào hỏi".

## 2. TCP Slow Start
TCP không gửi toàn bộ dữ liệu ngay lập tức. Nó bắt đầu với một lượng nhỏ (Congestion Window) và tăng dần nếu không thấy mất gói tin. Đây là lý do tại sao các file lớn ban đầu tải chậm và sau đó nhanh dần.

## 3. Cách tối ưu hóa
- **TCP Fast Open (TFO):** Cho phép gửi dữ liệu ngay trong gói SYN đầu tiên.
- **Keep-Alive:** Giữ kết nối mở để tránh phải bắt tay lại cho mỗi request.
- **QUIC / HTTP/3:** Sử dụng UDP thay vì TCP để giảm số bước bắt tay và giải quyết vấn đề Head-of-line blocking.

## 4. Tại sao lập trình viên cần biết điều này?
Khi bạn viết một API, nếu client phải thực hiện quá nhiều kết nối ngắn hạn, độ trễ sẽ tăng vọt. Hiểu về tầng Transport giúp bạn thiết kế kiến trúc hệ thống hiệu quả hơn, biết khi nào dùng gRPC qua HTTP/2 thay vì REST truyền thống.

---
Mạng máy tính không phải là "ma thuật", nó là một chuỗi các giao thức được tính toán kỹ lưỡng.
    `
  },
  {
    id: 'java-concurrency-models',
    title: 'Concurrency trong Java: Từ Thread truyền thống đến Virtual Threads',
    excerpt: 'Khám phá sự tiến hóa của việc xử lý song song trong Java và tại sao Virtual Threads (Project Loom) là cuộc cách mạng.',
    category: 'Java',
    tags: ['Concurrency', 'Java 21', 'Performance'],
    date: '2024-04-05',
    readTime: '22 phút',
    content: `
# Concurrency trong Java: Sự tiến hóa

Xử lý đa luồng luôn là một trong những phần khó nhất nhưng cũng thú vị nhất của Java.

## 1. Platform Threads (Truyền thống)
Mỗi luồng Java tương ứng với một luồng hệ điều hành (OS Thread). Điều này rất tốn kém tài nguyên (mất khoảng 1MB bộ nhớ cho mỗi stack). Bạn không thể tạo ra 1 triệu luồng như vậy.

## 2. Thread Pool (ExecutorService)
Để giải quyết vấn đề trên, chúng ta dùng Thread Pool. Tuy nhiên, nó vẫn bị giới hạn. Nếu một task phải chờ I/O (như gọi database), luồng đó sẽ bị block, gây lãng phí CPU.

## 3. Virtual Threads (Java 21+)
Đây là "game changer". Virtual Threads cực kỳ nhẹ (chỉ tốn vài KB bộ nhớ). Khi một Virtual Thread bị block bởi I/O, Java runtime sẽ tự động ngắt nó ra khỏi OS Thread và cho task khác vào chạy.

\`\`\`java
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    IntStream.range(0, 10_000).forEach(i -> {
        executor.submit(() -> {
            Thread.sleep(Duration.ofSeconds(1));
            return i;
        });
    });
}
\`\`\`
Đoạn code trên có thể chạy 10,000 task song song chỉ trong tích tắc mà không làm "treo" máy.

---
Kỷ nguyên mới của Java đã đến, nơi chúng ta có thể viết mã đồng bộ nhưng thực thi bất đồng bộ một cách cực kỳ hiệu quả.
    `
  }
];
