// script.js
const DEFAULT_PRICE = 250000; // Giá mặc định cho tất cả sản phẩm
// Đặt giá mặc định cho tất cả sản phẩm
// Danh sách sản phẩm mẫu
const products = [
  {
    id: 1,
    name: "Lăng Chủ tịch Hồ Chí Minh – nơi yên nghỉ của Bác",
    description:
      'Không chỉ là nơi an nghỉ của vị cha già kính yêu, Lăng Bác là không gian văn hóa – lịch sử đặc biệt. Kiến trúc giản dị mà uy nghi, hòa quyện tinh thần phương Đông với phong cách Xô Viết, thể hiện sự tôn kính tuyệt đối với một con người vĩ đại. Hằng ngày, hàng ngàn lượt người xếp hàng thăm viếng – một minh chứng sống động cho lòng yêu nước và truyền thống "uống nước nhớ nguồn" của dân tộc Việt Nam.',
    price: DEFAULT_PRICE,
    image: "./src/assets/1.png",
  },
  {
    id: 2,
    name: "Tháp Rùa – Trái tim Hồ Gươm",
    description:
      "Giữa lòng Hồ Gươm, Tháp Rùa trầm mặc như một biểu tượng của Hà Nội ngàn năm văn hiến. Gắn liền với truyền thuyết vua Lê Lợi trả gươm báu cho Rùa thần, nơi đây là biểu trưng cho tinh thần yêu nước, lòng chính nghĩa và khát vọng hòa bình của dân tộc Việt. Qua thời gian, Tháp Rùa trở thành “trái tim” của thủ đô, nơi lưu giữ tâm thức người Việt về lịch sử và linh thiêng đất trời Thăng Long.",
    price: DEFAULT_PRICE,
    image: "./src/assets/5.png",
  },
  {
    id: 3,
    name: "Tháp Linh Quang – Biểu tượng Phật giáo Kinh Bắc",
    description:
      "Tọa lạc tại chùa Phật Tích – trung tâm Phật giáo lớn của Đại Việt, Tháp Linh Quang mang trong mình tinh thần từ bi, trí tuệ và sự hòa hợp giữa con người với thiên nhiên. Được xây dựng từ thế kỷ XI, tháp là minh chứng cho thời kỳ Phật giáo phát triển rực rỡ dưới triều Lý – khi đạo Phật không chỉ là tôn giáo mà còn là nền tảng văn hóa và tư tưởng quốc gia.",
    price: DEFAULT_PRICE,
    image: "./src/assets/3.png",
  },
  {
    id: 4,
    name: "Chùa Một Cột – Đóa sen giữa lòng Thủ đô",
    description:
      "Chùa Một Cột – hay Liên Hoa Đài – được xây dựng theo giấc mơ của vua Lý Thái Tông, với hình ảnh đức Phật Quan Âm ngồi trên đài sen. Ngôi chùa mang hình dáng một bông sen vươn lên từ mặt nước, biểu trưng cho sự thanh cao, thoát tục và khát vọng hướng thiện. Đây không chỉ là kiệt tác kiến trúc độc đáo mà còn là biểu tượng cho triết lý sống nhân ái, hài hòa của người Việt.",
    price: DEFAULT_PRICE,
    image: "./src/assets/2.png",
  },
  {
    id: 5,
    name: "Nhà Thờ lớn Hà Nội – Dấu ấn kiến trúc Gothic giữa phố cổ",
    description:
      "Được xây dựng từ cuối thế kỷ XIX, Nhà thờ Lớn là công trình kiến trúc Gothic tiêu biểu,mang âm hưởng của Nhà thờ Đức Bà Paris. Nhưng hơn thế, đây là nơi chứng kiến quá trìnhgiao thoa, tiếp biến giữa văn hóa phương Tây và truyền thống Việt Nam. Trong lòng HàNội cổ kính, Nhà thờ Lớn không chỉ là nơi sinh hoạt tôn giáo mà còn là điểm đến văn hóaquen thuộc của người dân Thủ đô và du khách thập phương.",
    price: DEFAULT_PRICE,
    image: "./src/assets/4.png",
  },
];

let index = 0;
let quantity = 1;
let totalItems = 0;

// DOM elements
const nameEl = document.querySelector(".name");
const descriptionEl = document.querySelector(".description");
const priceEl = document.querySelector(".price");
const imageEl = document.querySelector(".box img");
const quantityEl = document.getElementById("quantity-display");
const cartCountEl = document.getElementById("cart-count");

// Buttons
const nextBtn = document.getElementById("next-btn");
const beforeBtn = document.getElementById("before-btn");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const addToCartBtn = document.getElementById("add-cart-btn");

// Cập nhật thông tin sản phẩm
function renderProduct() {
  const product = products[index];
  nameEl.textContent = product.name;
  descriptionEl.textContent = product.description;
  priceEl.textContent = "Giá: " + product.price + " VNĐ";
  imageEl.src = product.image;
  imageEl.alt = product.name;
}

// Sự kiện điều hướng sản phẩm
function handleNext() {
  index = (index + 1) % products.length;
  renderProduct();
}

function handleBefore() {
  index = (index - 1 + products.length) % products.length;
  renderProduct();
}

// Sự kiện thay đổi số lượng
function addQuantity() {
  quantity++;
  quantityEl.textContent = `${quantity} pc`;
}

function minusQuantity() {
  if (quantity > 1) {
    quantity--;
    quantityEl.textContent = `${quantity} pc`;
  }
}

// Thêm vào giỏ hàng
function addToCart() {
  totalItems += quantity;
  cartCountEl.textContent = totalItems;
  alert("Đã thêm vào giỏ hàng!");
}

// Khởi tạo sau khi DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderProduct();
  quantityEl.textContent = `${quantity} pc`;
  cartCountEl.textContent = totalItems;

  nextBtn.addEventListener("click", handleNext);
  beforeBtn.addEventListener("click", handleBefore);
  addBtn.addEventListener("click", addQuantity);
  removeBtn.addEventListener("click", minusQuantity);
  addToCartBtn.addEventListener("click", addToCart);
});
