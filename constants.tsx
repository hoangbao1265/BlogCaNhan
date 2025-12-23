
import { Post, Profile } from './types';

export const MY_PROFILE: Profile = {
  name: "Bao Hoang",
  title: "Full Stack Software Engineer",
  bio: "Tôi là một kỹ sư phần mềm với niềm đam mê sâu sắc về cả Web Development (Java, React) và System Programming (C/C++). BBaoHG là nơi tôi chia sẻ kiến thức từ xây dựng giao diện người dùng đến tối ưu hóa hệ thống backend.",
  skills: [
    "C/C++",
    "JavaScript",
    "Java",
    "React",
    "HTML & CSS",
    "Git/Github"
  ],
  courses: [
    {
      name: "Introduction to Cybersecurity",
      provider: "Cisco",
      year: "2025",
      image: `${import.meta.env.BASE_URL}images/introduction-to-cybersecurity.png`,
      pdf: `${import.meta.env.BASE_URL}images/I2CSUpdate20251223-33-zuabsk.pdf`
    },
    {
      name: "JavaScript Essentials 1",
      provider: "Cisco",
      year: "2025",
      image: `${import.meta.env.BASE_URL}images/javascript-essentials-1.png`,
      pdf: `${import.meta.env.BASE_URL}images/JavaScriptEssentials1Update20251118-33-73cwwq.pdf`
    },
    {
      name: "JavaScript Essentials 2",
      provider: "Cisco",
      year: "2025",
      image: `${import.meta.env.BASE_URL}images/javascript-essentials-2.png`,
      pdf: `${import.meta.env.BASE_URL}images/JavaScriptEssentials2Update20251126-31-7irat5.pdf`
    },
    {
      name: "Networking Basics",
      provider: "Cisco",
      year: "2025",
      image: `${import.meta.env.BASE_URL}images/networking-basics.png`,
      pdf: `${import.meta.env.BASE_URL}images/NetworkingBasicsUpdate20251118-31-qscqx6.pdf`
    }
  ],
  social: {
    github: "https://github.com/hoangbao1265",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:contact@bbaohg.com"
  },
  hobbies: [
    { name: "Đọc truyện", description: "Khám phá các thế giới giả tưởng qua các trang chữ." },
    { name: "Gaming", description: "Yêu thích các tựa game chiến thuật và nhập vai cốt truyện sâu sắc." },
    { name: "Tech Blogging", description: "Chia sẻ kiến thức về lập trình và công nghệ mới." },
    { name: "Photography", description: "Ghi lại những khoảnh khắc đời thường qua ống kính máy ảnh." }
  ]
};

export const BLOG_POSTS: Post[] = [
  {
    id: 'js-es6-plus-overview',
    title: 'ES6+ trong JavaScript: Những tính năng bạn nhất định phải biết',
    excerpt: 'Arrow function, let/const, destructuring, spread, module... Tất cả những gì bạn cần để viết JavaScript hiện đại.',
    category: 'JavaScript',
    tags: ['ES6', 'Modern JS', 'Syntax'],
    date: '2024-05-01',
    readTime: '22 phút',
    content: `
# ES6+ trong JavaScript: Viết code hiện đại, gọn và dễ hiểu

ES6 (và các phiên bản sau) đã thay đổi hoàn toàn cách chúng ta viết JavaScript. Nếu bạn vẫn còn quen với \`var\`, function truyền thống mọi nơi, đã đến lúc nâng cấp.

## 1. let / const thay cho var

- \`let\`: biến có thể gán lại, phạm vi theo block.
- \`const\`: không cho gán lại tham chiếu (nhưng object/array bên trong vẫn có thể mutate).

\`\`\`javascript
let count = 0;
const PI = 3.14;
\`\`\`

## 2. Arrow function

Arrow function giúp code ngắn hơn và \`this\` không bị binding kỳ quặc:

\`\`\`javascript
const nums = [1, 2, 3];
const squared = nums.map(n => n * 2);
\`\`\`

## 3. Destructuring & Spread

\`\`\`javascript
const user = { name: 'Bao', age: 25, city: 'Hanoi' };

const { name, age } = user;
const userWithRole = { ...user, role: 'admin' };
\`\`\`

## 4. Module import/export

\`\`\`javascript
// math.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from './math.js';
console.log(add(1, 2));
\`\`\`

---
ES6+ là nền tảng để bạn hiểu các framework hiện đại như React, Vue, Node.js. Hiểu vững phần này giúp bạn đọc code open-source dễ dàng hơn rất nhiều.
    `
  },
  {
    id: 'js-dom-manipulation-basics',
    title: 'DOM Manipulation cơ bản: Hiểu trình duyệt trước khi dùng framework',
    excerpt: 'querySelector, event listener, classList, tạo và xoá node – những viên gạch đầu tiên để hiểu cách hoạt động của UI trên web.',
    category: 'JavaScript',
    tags: ['DOM', 'Browser', 'Frontend'],
    date: '2024-05-10',
    readTime: '20 phút',
    content: `
# DOM Manipulation cơ bản: Nắm nền tảng trước khi dùng React

DOM (Document Object Model) là cách trình duyệt biểu diễn cấu trúc HTML dưới dạng object. Mọi framework frontend cuối cùng cũng chỉ thao tác lên DOM.

## 1. Chọn phần tử

\`\`\`javascript
const title = document.querySelector('h1');
const items = document.querySelectorAll('.item');
\`\`\`

## 2. Thêm event listener

\`\`\`javascript
const button = document.querySelector('#btn');
button.addEventListener('click', () => {
  console.log('Clicked!');
});
\`\`\`

## 3. Thay đổi nội dung & class

\`\`\`javascript
title.textContent = 'Xin chào';
title.classList.add('text-red-500');
\`\`\`

---
Nắm được DOM giúp bạn debug UI dễ hơn, hiểu vì sao React/Vanilla JS phải tối ưu render như vậy và không còn “sợ” khi phải code thuần mà không dùng framework.
    `
  },
  {
    id: 'nodejs-intro-backend',
    title: 'Giới thiệu Node.js: Viết backend bằng JavaScript',
    excerpt: 'Hiểu kiến trúc event-driven, non-blocking I/O của Node.js và viết một HTTP server đơn giản.',
    category: 'JavaScript',
    tags: ['Node.js', 'Backend', 'Server'],
    date: '2024-05-15',
    readTime: '26 phút',
    content: `
# Giới thiệu Node.js: Backend với JavaScript

Node.js cho phép bạn dùng JavaScript để viết backend, tận dụng mô hình event-driven, non-blocking I/O.

## 1. Node.js khác gì trình duyệt?

- Không có DOM, window, document.
- Có module hệ thống: \`fs\`, \`http\`, \`net\`, ...
- Chạy trên V8 nhưng thêm một lớp C++ để xử lý I/O hiệu quả.

## 2. Tạo HTTP server đơn giản

\`\`\`javascript
import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
\`\`\`

## 3. Express – Framework phổ biến

\`\`\`javascript
import express from 'express';

const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(3000, () => {
  console.log('Express server on http://localhost:3000');
});
\`\`\`

---
Node.js là nền tảng tuyệt vời để xây dựng API, real-time application (WebSocket), microservices và nhiều hơn thế nữa – tất cả chỉ với JavaScript.
    `
  },
  {
    id: 'js-async-await-guide',
    title: 'Async/Await trong JavaScript: Viết code bất đồng bộ như đồng bộ',
    excerpt: 'Từ callback hell, Promise đến async/await, cách xử lý try/catch và tối ưu luồng bất đồng bộ.',
    category: 'JavaScript',
    tags: ['Async', 'Promise', 'Async/Await'],
    date: '2024-05-05',
    readTime: '24 phút',
    content: `
# Async/Await trong JavaScript: Bất đồng bộ nhưng dễ đọc

Async/Await là lớp “đường” bọc bên ngoài Promise, cho phép bạn viết code bất đồng bộ trông giống như code đồng bộ.

## 1. Vấn đề với callback hell

\`\`\`javascript
getUser(id, function (user) {
  getOrders(user, function (orders) {
    getOrderDetails(orders[0], function (details) {
      console.log(details);
    });
  });
});
\`\`\`

## 2. Promise cải thiện như thế nào?

\`\`\`javascript
getUser(id)
  .then(user => getOrders(user))
  .then(orders => getOrderDetails(orders[0]))
  .then(details => console.log(details))
  .catch(console.error);
\`\`\`

## 3. Async/Await – phiên bản dễ đọc nhất

\`\`\`javascript
async function showFirstOrderDetails(id) {
  try {
    const user = await getUser(id);
    const orders = await getOrders(user);
    const details = await getOrderDetails(orders[0]);
    console.log(details);
  } catch (err) {
    console.error(err);
  }
}
\`\`\`

## 4. Chạy song song với Promise.all

\`\`\`javascript
async function loadPage() {
  const [user, settings] = await Promise.all([
    fetchUser(),
    fetchSettings()
  ]);

  console.log(user, settings);
}
\`\`\`

---
Hiểu Async/Await là chìa khóa để làm việc với API, thao tác I/O và các thao tác bất đồng bộ khác một cách rõ ràng, ít bug hơn.
    `
  },
  {
    id: 'java-collections-deep-dive',
    title: 'Hiểu sâu Java Collections: List, Set, Map và cách chọn cấu trúc phù hợp',
    excerpt: 'Không chỉ là ArrayList hay HashMap, bài viết này giúp bạn hiểu đặc tính, độ phức tạp và cách chọn đúng Collection cho từng bài toán.',
    category: 'Java',
    tags: ['Collections', 'Data Structures', 'Performance'],
    date: '2024-04-10',
    readTime: '25 phút',
    content: `
# Java Collections: Chọn đúng cấu trúc dữ liệu cho bài toán của bạn

Rất nhiều dự án Java chậm không phải vì thuật toán quá phức tạp, mà vì **chọn sai Collection**. Ví dụ: dùng \`List\` để kiểm tra tồn tại phần tử thay vì \`Set\`, hoặc dùng \`HashMap\` nơi cần giữ thứ tự phần tử.

## 1. List – Khi bạn cần danh sách có thứ tự

- \`ArrayList\`: lưu trữ liên tiếp trong bộ nhớ, truy cập theo index O(1), thêm/xoá giữa danh sách O(n).
- \`LinkedList\`: mỗi phần tử là một node liên kết, thêm/xoá ở đầu/cuối O(1), nhưng truy cập index O(n).

Trong hầu hết trường hợp, \`ArrayList\` là lựa chọn mặc định:

\`\`\`java
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
System.out.println(names.get(0)); // Alice
\`\`\`

Bạn chỉ nên dùng \`LinkedList\` khi thực sự cần rất nhiều thao tác chèn/xóa ở giữa danh sách và ít truy cập ngẫu nhiên.

## 2. Set – Khi bạn cần giá trị duy nhất và kiểm tra tồn tại nhanh

- \`HashSet\`: không đảm bảo thứ tự, kiểm tra tồn tại O(1) trung bình.
- \`LinkedHashSet\`: giữ thứ tự chèn phần tử.
- \`TreeSet\`: giữ phần tử luôn được sắp xếp (dựa trên \`Comparable\` hoặc \`Comparator\`).

Ví dụ kiểm tra trùng email nhanh chóng:

\`\`\`java
Set<String> emails = new HashSet<>();
if (!emails.add("user@example.com")) {
    System.out.println("Email đã tồn tại");
}
\`\`\`

## 3. Map – Khi bạn cần ánh xạ key → value

- \`HashMap\`: nhanh, không có thứ tự.
- \`LinkedHashMap\`: lưu thứ tự chèn, tiện cho cache đơn giản.
- \`TreeMap\`: duy trì key được sắp xếp.

Ví dụ dùng \`LinkedHashMap\` cho LRU cache mini:

\`\`\`java
Map<String, String> cache = new LinkedHashMap<>(16, 0.75f, true) {
    @Override
    protected boolean removeEldestEntry(Map.Entry<String, String> eldest) {
        return size() > 100;
    }
};
\`\`\`

## 4. Một số best practice quan trọng

- Luôn dùng interface (\`List\`, \`Set\`, \`Map\`) ở khai báo biến, chỉ dùng class cụ thể ở bên phải dấu \`new\`.
- Tránh \`Vector\` và \`Hashtable\` trong code mới – đây là legacy, đã có lựa chọn tốt hơn.
- Cẩn thận với \`ConcurrentHashMap\`: rất hữu ích trong môi trường multi-thread, nhưng đừng lạm dụng nơi không cần thiết.

---
Hiểu rõ Collections giúp bạn viết code vừa dễ đọc, vừa có hiệu năng tốt mà không cần tối ưu sớm bằng những kỹ thuật phức tạp.
    `
  },
  {
    id: 'java-multithreading-basics',
    title: 'Multithreading trong Java: Từ Thread cơ bản đến ExecutorService',
    excerpt: 'Giải thích rõ ràng cách tạo và quản lý luồng trong Java, những lỗi thường gặp và cách tránh deadlock, race condition.',
    category: 'Java',
    tags: ['Multithreading', 'Concurrency', 'ExecutorService'],
    date: '2024-04-15',
    readTime: '30 phút',
    content: `
# Multithreading trong Java: Từ Thread cơ bản đến ExecutorService

Multithreading cho phép chương trình tận dụng tốt hơn tài nguyên CPU, nhưng cũng mang lại nhiều rủi ro: deadlock, race condition, starvation...

## 1. Tạo Thread theo cách truyền thống

Có hai cách phổ biến:

1. Kế thừa từ \`Thread\`.
2. Implement interface \`Runnable\` hoặc \`Callable\`.

\`\`\`java
class MyTask implements Runnable {
    @Override
    public void run() {
        System.out.println("Running in " + Thread.currentThread().getName());
    }
}

public class Main {
    public static void main(String[] args) {
        Thread t = new Thread(new MyTask());
        t.start();
    }
}
\`\`\`

## 2. Vấn đề với việc tạo quá nhiều Thread

Mỗi Thread truyền thống tốn nhiều bộ nhớ và chi phí context switch cao. Nếu bạn tạo hàng ngàn Thread cùng lúc, hệ thống sẽ trở nên rất chậm dù CPU chưa dùng hết.

## 3. ExecutorService – Quản lý Thread đúng cách

Thay vì tự tạo và hủy Thread, hãy sử dụng \`ExecutorService\` để tái sử dụng Thread:

\`\`\`java
ExecutorService executor = Executors.newFixedThreadPool(4);

for (int i = 0; i < 10; i++) {
    int index = i;
    executor.submit(() -> {
        System.out.println("Task " + index + " in " + Thread.currentThread().getName());
    });
}

executor.shutdown();
\`\`\`

## 4. Một chút về đồng bộ hóa (synchronization)

Khi nhiều Thread cùng truy cập và ghi dữ liệu chung, bạn cần cơ chế đồng bộ:

- \`synchronized\`
- \`Lock\` (ReentrantLock)
- Các cấu trúc an toàn luồng như \`ConcurrentHashMap\`, \`BlockingQueue\`...

Ví dụ đơn giản với \`synchronized\`:

\`\`\`java
public class Counter {
    private int value = 0;

    public synchronized void increment() {
        value++;
    }

    public synchronized int get() {
        return value;
    }
}
\`\`\`

---
Bước đầu nắm Multithreading là hiểu cách tạo Thread, dùng ExecutorService hợp lý và bảo vệ dữ liệu chia sẻ bằng các cơ chế đồng bộ hóa phù hợp.
    `
  },
  {
    id: 'js-async-event-loop',
    title: 'Giải mã Event Loop: Tại sao JavaScript nhanh dù chỉ có đơn luồng?',
    excerpt: 'Hiểu rõ cơ chế Microtasks, Macrotasks và cách JavaScript xử lý hàng ngàn request cùng lúc mà không bị block.',
    category: 'JavaScript',
    tags: ['Async', 'Performance', 'Engine'],
    date: '2024-03-25',
    readTime: '25 phút',
    featured: true,
    content: `
# Giải mã Event Loop trong JavaScript

JavaScript nổi tiếng là ngôn ngữ đơn luồng (Single-threaded). Vậy tại sao nó lại được dùng để xây dựng các hệ thống backend cực nhanh như Node.js? Câu trả lời nằm ở **Event Loop**.

Thay vì tạo hàng nghìn thread như trong nhiều ngôn ngữ khác, JavaScript tận dụng cơ chế non-blocking I/O và hàng đợi sự kiện để mô phỏng khả năng xử lý đồng thời trên một luồng duy nhất.

## 1. Cấu trúc bộ nhớ

- **Call Stack:** Nơi lưu trữ các hàm đang thực thi. Theo cơ chế LIFO (Last In First Out).
- **Web APIs:** Được trình duyệt (hoặc C++ APIs trong Node) cung cấp để xử lý các tác vụ như \`setTimeout\`, \`fetch\`, DOM events.
- **Task Queue (Macrotasks):** Chứa các callback từ \`setTimeout\`, \`setInterval\`.
- **Microtask Queue:** Ưu tiên cao hơn Macrotasks. Chứa các callback từ \`Promise.then\`, \`process.nextTick\`.

## 2. Quy trình của Event Loop

1. Kiểm tra Call Stack. Nếu trống, chuyển sang bước 2.
2. Kiểm tra Microtask Queue. Thực thi **tất cả** các task có trong hàng đợi này.
3. Kiểm tra Macrotask Queue. Thực thi **một** task, sau đó quay lại bước 1.

Điểm quan trọng: **Microtask luôn được ưu tiên hơn Macrotask**. Điều này giải thích nhiều “câu đố” liên quan đến thứ tự log khi kết hợp Promise và setTimeout.

## 3. Ví dụ kinh điển

Bạn đoán xem kết quả sẽ là gì?

\`\`\`javascript
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');
\`\`\`

Kết quả là: \`1, 4, 3, 2\`. Tại sao? Vì \`Promise\` vào Microtask Queue, còn \`setTimeout\` vào Macrotask Queue.

## 4. Ứng dụng thực tế trong UI và backend

Khi làm việc với các tác vụ nặng (như xử lý ảnh), nếu bạn chạy nó trực tiếp trên main thread, giao diện sẽ bị "đơ". Hiểu Event Loop giúp bạn biết cách tách các tác vụ này ra (sử dụng Web Workers hoặc chia nhỏ tác vụ với \`setImmediate\`).

Trong frontend, bạn có thể chia nhỏ một vòng lặp lớn thành nhiều batch nhỏ và dùng \`setTimeout(..., 0)\` hoặc \`requestIdleCallback\` để nhường quyền chạy cho browser giữa các batch, tránh chặn render.

Trong Node.js, việc hiểu rõ Event Loop giúp bạn:

- Không block thread bằng các hàm sync như \`fs.readFileSync\` trong luồng xử lý request.
- Thiết kế API không bị “callback hell” bằng cách dùng Promise/async-await nhưng vẫn tôn trọng bản chất async.

## 5. Một ví dụ phức tạp hơn

Hãy xem đoạn code sau và tự suy nghĩ thứ tự log:

\`\`\`javascript
console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('C');
    return Promise.resolve();
  })
  .then(() => {
    console.log('D');
  });

console.log('E');
\`\`\`

Thứ tự đúng là: \`A, E, C, D, B\`. Hai \`then\` liên tiếp vẫn nằm trong Microtask Queue và được chạy liền nhau trước khi Event Loop quay lại xử lý Macrotask.

## 6. Kết nối với performance thực tế

Khi debug performance, bạn sẽ thấy trong Performance tab của DevTools có các phase như "scripting", "rendering", "painting". Rất nhiều vấn đề không nằm ở chỗ "JS chậm" mà là do ta **block event loop** quá lâu.

- Tránh vòng lặp nặng trong 1 tick.
- Ưu tiên I/O async.
- Tận dụng Web Worker khi xử lý CPU bound (ví dụ: encode video, xử lý ảnh).

---
Nắm chắc Event Loop là bước ngoặt để từ một coder trở thành một Engineer thực thụ, biết cách đọc stack trace, hiểu timeline và tối ưu ứng dụng trên cả frontend lẫn backend.
    `
  },
  {
    id: 'java-socket-programming-intro',
    title: 'Lập trình Socket trong Java: Xây dựng TCP server & client đơn giản',
    excerpt: 'Hướng dẫn cơ bản để hiểu cách Java giao tiếp qua TCP socket, xây dựng server & client gửi nhận dữ liệu dạng text.',
    category: 'Java',
    tags: ['Socket', 'Networking', 'TCP'],
    date: '2024-04-20',
    readTime: '25 phút',
    content: `
# Lập trình Socket trong Java: TCP Server & Client

Socket Programming giúp ứng dụng của bạn giao tiếp trực tiếp qua mạng bằng TCP/UDP. Trong bài viết này, chúng ta tập trung vào TCP – giao thức tin cậy, có cơ chế kiểm soát thứ tự gói tin.

## 1. Khái niệm nhanh

- **ServerSocket**: lắng nghe kết nối từ client trên một cổng (port) cụ thể.
- **Socket**: đại diện cho kết nối hai chiều giữa client và server.

## 2. Viết một TCP server đơn giản

\`\`\`java
public class SimpleTcpServer {
    public static void main(String[] args) throws IOException {
        try (ServerSocket serverSocket = new ServerSocket(9999)) {
            System.out.println("Server listening on port 9999...");

            while (true) {
                Socket client = serverSocket.accept();
                System.out.println("Client connected: " + client.getInetAddress());

                try (BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));
                     PrintWriter out = new PrintWriter(client.getOutputStream(), true)) {

                    String line;
                    while ((line = in.readLine()) != null) {
                        System.out.println("Received: " + line);
                        out.println("Echo: " + line);
                    }
                }
            }
        }
    }
}
\`\`\`

## 3. Viết một TCP client tương ứng

\`\`\`java
public class SimpleTcpClient {
    public static void main(String[] args) throws IOException {
        try (Socket socket = new Socket("localhost", 9999);
             BufferedReader console = new BufferedReader(new InputStreamReader(System.in));
             BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true)) {

            String line;
            while ((line = console.readLine()) != null) {
                out.println(line);
                System.out.println(in.readLine());
            }
        }
    }
}
\`\`\`

## 4. Mở rộng: xử lý nhiều client

Một server thực tế cần xử lý nhiều client đồng thời, thường dùng Thread hoặc ExecutorService để mỗi client chạy trên một luồng riêng.

---
Socket Programming là bước đệm tuyệt vời để hiểu sâu hơn về HTTP server, WebSocket và các framework mạng cấp cao trong Java.
    `
  },
  {
    id: 'java-oop-deep-dive',
    title: 'Đào sâu về 4 trụ cột OOP trong Java: Thực tế và Ứng dụng',
    excerpt: 'Không chỉ là lý thuyết suông, bài viết này sẽ phân tích cách áp dụng tính Đóng gói, Kế thừa, Đa hình và Trừu tượng trong các dự án thực tế quy mô lớn.',
    category: 'Java',
    tags: ['OOP', 'Core Java', 'Software Architecture'],
    date: '2024-03-20',
    readTime: '20 phút',
    featured: true,
    content: `
# Đào sâu về 4 trụ cột OOP trong Java

Lập trình hướng đối tượng (OOP) thường bị hiểu nhầm là chỉ xoay quanh việc tạo class. Thực tế, nó là một tư duy tổ chức mã nguồn giúp hệ thống linh hoạt và dễ mở rộng.

Nếu bạn chỉ dừng ở mức “biết dùng class” thì code vẫn chạy được, nhưng rất khó mở rộng, khó test và dễ “vỡ trận” khi yêu cầu nghiệp vụ thay đổi. Mục tiêu của bài viết này là đưa bạn từ mức “biết OOP” sang mức “dùng OOP một cách có chiến lược”.

## 1. Tính Đóng Gói (Encapsulation) - Bảo mật trạng thái

Tính đóng gói không chỉ là việc đặt biến là \`private\` và tạo \`getter/setter\`. Mục tiêu thực sự là bảo vệ tính toàn vẹn của dữ liệu, và ép mọi tương tác phải đi qua một “cổng” có kiểm soát.

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

Trong các hệ thống lớn, tính đóng gói còn liên quan đến **module boundaries**: bạn quyết định những gì được public trong package, những gì bị ẩn đi. Điều này giúp đội ngũ dễ thay đổi implement bên trong mà không phá vỡ code của module khác.

## 2. Tính Kế Thừa (Inheritance) - Tái sử dụng hay là "Cái bẫy"?

Kế thừa giúp tái sử dụng mã nguồn, nhưng nếu lạm dụng sẽ dẫn đến "mối liên kết chặt chẽ" (tight coupling). Trong Java, chúng ta nên ưu tiên "Composition over Inheritance" (Ưu tiên thành phần hơn kế thừa).

Ví dụ, thay vì tạo một class \`LoggingList extends ArrayList\`, bạn có thể bọc (wrap) một \`List\` bên trong một class riêng, và chỉ expose những hành vi cần thiết. Cách này giảm rủi ro khi JDK thay đổi implement nội bộ của \`ArrayList\`.

### Khi nào nên dùng kế thừa?

- Khi bạn thực sự có mối quan hệ "is-a" (là một loại của).
- Khi class cha được thiết kế để mở rộng (có \`protected\`, template method, hoặc là một abstract base class).
- Khi bạn kiểm soát được cả class cha và class con (trong cùng dự án, cùng team).

## 3. Tính Đa Hình (Polymorphism) - Sức mạnh của sự linh hoạt

Đa hình cho phép chúng ta xử lý các đối tượng khác nhau thông qua một giao diện chung. Điều này cực kỳ hữu ích trong việc xây dựng các plugin hoặc xử lý nhiều loại thanh toán (Credit Card, PayPal, Crypto) mà không cần thay đổi code xử lý chính.

Ví dụ, bạn có thể định nghĩa một interface \`PaymentMethod\` với phương thức \`pay()\`. Mọi phương thức thanh toán (VNPay, Momo, Stripe,...) chỉ cần implement interface này, còn luồng checkout chính chỉ biết gọi \`paymentMethod.pay()\`.

Điều này giúp hệ thống dễ dàng mở rộng: thêm phương thức thanh toán mới mà không chạm vào logic core, tránh vi phạm Open/Closed Principle.

## 4. Tính Trừu Tượng (Abstraction) - Tập trung vào "Cái gì", không phải "Làm thế nào"

Trừu tượng hóa giúp ẩn đi sự phức tạp của hệ thống. Hãy tưởng tượng bạn đang lái xe, bạn chỉ cần biết cách sử dụng vô lăng (Interface) mà không cần quan tâm động cơ bên trong hoạt động ra sao.

Trong thực tế, abstraction thể hiện qua:

- Interface và abstract class.
- Các service layer che giấu repository/DAO bên dưới.
- Các SDK/API client che giấu chi tiết giao tiếp mạng.

Một thiết kế tốt thường bắt đầu bằng việc đặt ra các abstraction hợp lý, sau đó mới đi vào implement cụ thể.

## 5. Áp dụng OOP trong kiến trúc thực tế

Trong các ứng dụng enterprise, 4 trụ cột OOP không đứng riêng lẻ mà kết hợp với các pattern như:

- **Strategy Pattern:** tận dụng đa hình để hoán đổi thuật toán runtime.
- **Template Method:** trừu tượng hóa skeleton của thuật toán và cho phép subclass override từng bước nhỏ.
- **Decorator:** dùng composition để mở rộng hành vi mà không cần kế thừa.

Khi áp dụng đúng, hệ thống sẽ:

- Dễ đọc hơn: business logic được đặt đúng nơi, ít “if/else rừng rậm”.
- Dễ test hơn: có thể mock interface để test từng phần.
- Dễ mở rộng hơn: thêm tính năng bằng cách thêm class mới thay vì sửa class cũ.

---
**Kết luận:** Nắm vững OOP giúp bạn viết code không chỉ chạy được, mà còn "sống khỏe" qua nhiều năm bảo trì và thay đổi yêu cầu nghiệp vụ.
    `
  },
  {
    id: 'network-tcp-deep-dive',
    title: 'TCP Handshake và bài toán tối ưu hóa độ trễ mạng',
    excerpt: 'Tại sao kết nối mạng của bạn chậm? Tìm hiểu về quá trình bắt tay 3 bước, cửa sổ trượt (sliding window) và cách tối ưu hóa TCP.',
    category: 'Network',
    tags: ['Networking', 'TCP', 'Infrastructure'],
    date: '2024-04-01',
    readTime: '28 phút',
    featured: true,
    content: `
# TCP Handshake và Tối ưu hóa độ trễ

Trong lập trình mạng, TCP (Transmission Control Protocol) là "xương sống" của hầu hết các ứng dụng. Tuy nhiên, cái giá của sự tin cậy là **độ trễ (latency)**.

Nếu không hiểu rõ cách TCP hoạt động, bạn rất dễ đánh giá sai nguyên nhân khiến hệ thống chậm: đôi khi vấn đề không nằm ở code backend mà nằm ở số lượng round-trip mà bạn bắt client phải thực hiện.

## 1. Quá trình bắt tay 3 bước (3-way Handshake)

Trước khi dữ liệu đầu tiên được gửi đi, Client và Server phải thực hiện:

1. **SYN:** Client gửi một yêu cầu kết nối.
2. **SYN-ACK:** Server phản hồi xác nhận.
3. **ACK:** Client xác nhận lại một lần nữa.

Quá trình này tốn mất 1.5 RTT (Round Trip Time). Nếu RTT của bạn là 100ms, bạn đã mất 150ms chỉ để "chào hỏi".

## 2. TCP Slow Start

TCP không gửi toàn bộ dữ liệu ngay lập tức. Nó bắt đầu với một lượng nhỏ (Congestion Window) và tăng dần nếu không thấy mất gói tin. Đây là lý do tại sao các file lớn ban đầu tải chậm và sau đó nhanh dần.

Điều này cực kỳ quan trọng khi bạn thiết kế hệ thống phân phối file, CDN hoặc streaming: kích thước gói đầu tiên, pattern truyền dữ liệu và độ ổn định của đường truyền đều ảnh hưởng đến trải nghiệm người dùng.

## 3. Cách tối ưu hóa trong thực tế

- **TCP Fast Open (TFO):** Cho phép gửi dữ liệu ngay trong gói SYN đầu tiên.
- **Keep-Alive:** Giữ kết nối mở để tránh phải bắt tay lại cho mỗi request.
- **QUIC / HTTP/3:** Sử dụng UDP thay vì TCP để giảm số bước bắt tay và giải quyết vấn đề Head-of-line blocking.

Ngoài ra, các hệ thống phân tán hiện đại còn tối ưu:

- **Nagle's Algorithm:** Gom nhiều gói nhỏ thành một gói lớn để giảm overhead.
- **Window Scaling:** Cho phép cửa sổ trượt lớn hơn trên các đường truyền có băng thông cao.

## 4. Tại sao lập trình viên cần biết điều này?

Khi bạn viết một API, nếu client phải thực hiện quá nhiều kết nối ngắn hạn, độ trễ sẽ tăng vọt. Hiểu về tầng Transport giúp bạn thiết kế kiến trúc hệ thống hiệu quả hơn, biết khi nào dùng gRPC qua HTTP/2 thay vì REST truyền thống.

### 4.1 Ví dụ kiến trúc

Giả sử bạn có một frontend gọi 5 API khác nhau để render một dashboard. Nếu mỗi request tạo một kết nối TCP mới, tổng thời gian RTT sẽ đội lên rất nhiều.

Giải pháp:

- Gộp nhiều request thành một API tổng hợp (backend for frontend).
- Tận dụng HTTP/2 multiplexing để chia sẻ kết nối.
- Dùng connection pool ở backend để giữ kết nối tới database/downstream service.

## 5. Những sai lầm hay gặp

- Đặt timeout quá ngắn mà không hiểu latency tối thiểu của đường truyền.
- Không bật keep-alive trên load balancer / reverse proxy.
- Để mặc default kernel config mà không tinh chỉnh cho workload cụ thể (web realtime, batch, streaming,...).

---
Mạng máy tính không phải là "ma thuật", nó là một chuỗi các giao thức được tính toán kỹ lưỡng. Hiểu rõ TCP giúp bạn nói chuyện với team infra, SRE ở "cùng ngôn ngữ", và thiết kế hệ thống từ code tới hạ tầng một cách nhất quán.
    `
  },
  {
    id: 'java-concurrency-models',
    title: 'Concurrency trong Java: Từ Thread truyền thống đến Virtual Threads',
    excerpt: 'Khám phá sự tiến hóa của việc xử lý song song trong Java và tại sao Virtual Threads (Project Loom) là cuộc cách mạng.',
    category: 'Java',
    tags: ['Concurrency', 'Java 21', 'Performance'],
    date: '2024-04-05',
    readTime: '30 phút',
    content: `
# Concurrency trong Java: Sự tiến hóa

Xử lý đa luồng luôn là một trong những phần khó nhất nhưng cũng thú vị nhất của Java. Nếu không nắm rõ mô hình concurrency, bạn rất dễ tạo ra những bug “ma” khó reproduce, hoặc lãng phí tài nguyên máy chủ.

## 1. Platform Threads (Truyền thống)

Mỗi luồng Java tương ứng với một luồng hệ điều hành (OS Thread). Điều này rất tốn kém tài nguyên (mất khoảng 1MB bộ nhớ cho mỗi stack). Bạn không thể tạo ra 1 triệu luồng như vậy.

Platform Threads phù hợp với các ứng dụng desktop, hoặc server với số lượng kết nối vừa phải. Nhưng khi bước vào thế giới microservices, hàng chục nghìn kết nối đồng thời là chuyện bình thường.

## 2. Thread Pool (ExecutorService)

Để giải quyết vấn đề trên, chúng ta dùng Thread Pool. Tuy nhiên, nó vẫn bị giới hạn. Nếu một task phải chờ I/O (như gọi database), luồng đó sẽ bị block, gây lãng phí CPU.

Một ví dụ đơn giản về Thread Pool:

\`\`\`java
ExecutorService executor = Executors.newFixedThreadPool(10);

for (int i = 0; i < 100; i++) {
    int index = i;
    executor.submit(() -> {
        System.out.println("Task " + index + " running on " + Thread.currentThread().getName());
    });
}

executor.shutdown();
\`\`\`

Thread Pool phù hợp cho các tác vụ CPU bound hoặc số lượng task không quá khổng lồ. Nhưng khi bạn cần xử lý hàng chục nghìn kết nối I/O đồng thời, mô hình này bắt đầu lộ hạn chế.

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

## 4. Khi nào nên dùng Virtual Threads?

- Khi bạn xây dựng server xử lý rất nhiều request I/O bound (HTTP, database, message queue,...).
- Khi bạn muốn giữ style code đồng bộ (blocking) nhưng vẫn đạt hiệu năng như async non-blocking.
- Khi bạn đang migrate từ code multi-threading cũ sang mô hình mới mà không muốn viết lại toàn bộ theo phong cách reactive.

## 5. Kết nối với kiến trúc tổng thể

Virtual Threads không thay thế mọi thứ, nhưng nó mở ra cách tiếp cận mới:

- Dùng Virtual Threads cho tầng service / controller.
- Dùng thread pool/bare threads cho các tác vụ cần kiểm soát chặt tài nguyên.
- Kết hợp với structured concurrency để quản lý vòng đời task rõ ràng hơn.

---
Kỷ nguyên mới của Java đã đến, nơi chúng ta có thể viết mã đồng bộ nhưng thực thi bất đồng bộ một cách cực kỳ hiệu quả. Hiểu rõ các mô hình concurrency giúp bạn chọn đúng công cụ cho từng bài toán và khai thác tối đa sức mạnh của JVM.
    `
  }
];
