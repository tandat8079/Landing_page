export const navItems = [
  { label: "Câu chuyện", href: "#story" },
  { label: "Lưu trú", href: "#stay" },
  { label: "Gói nghỉ", href: "#offers" },
  { label: "Tiện nghi", href: "#amenities" },
  { label: "Vị trí", href: "#location" },
];

export const stats = [
  { value: "24", label: "biệt thự biệt lập" },
  { value: "800m", label: "trên mực nước biển" },
  { value: "4.9", label: "điểm trải nghiệm" },
];

export const experiences = [
  {
    number: "01",
    title: "Tắm rừng",
    text: "Thức dậy cùng làn sương, bước chậm dưới tán cây và lắng nghe nhịp thở của đại ngàn.",
  },
  {
    number: "02",
    title: "Trị liệu bản địa",
    text: "Thảo mộc vùng cao, kỹ thuật massage truyền thống và nghi thức chữa lành được cá nhân hóa.",
  },
  {
    number: "03",
    title: "Bếp theo mùa",
    text: "Nguyên liệu từ nông trại lân cận được kể lại qua thực đơn tinh giản, tươi mới mỗi ngày.",
  },
];

export const rooms = [
  {
    name: "Mountain Pool Villa",
    price: "6.800.000",
    meta: "02 khách · 85 m²",
    features: ["Hồ bơi riêng", "Bữa sáng tại villa", "Bồn tắm hướng núi"],
    image: "/images/suite.png",
  },
  {
    name: "Valley Family Villa",
    price: "9.600.000",
    meta: "04 khách · 130 m²",
    features: ["02 phòng ngủ", "Phòng khách riêng", "Quản gia theo yêu cầu"],
    image: "/images/hero-hotel.png",
  },
  {
    name: "Forest Hideaway",
    price: "5.200.000",
    meta: "02 khách · 68 m²",
    features: ["Ban công giữa rừng", "Trà chiều", "Phòng tắm đá tự nhiên"],
    image: "/images/spa.png",
  },
];

export const offers = [
  {
    tag: "Được yêu thích",
    title: "Chạm vào khoảng lặng",
    nights: "2 ngày · 1 đêm",
    price: "Từ 7.900.000 VNĐ",
    includes: [
      "Mountain Pool Villa",
      "Bữa tối theo mùa cho hai người",
      "Trị liệu thảo mộc 60 phút",
    ],
  },
  {
    tag: "Dành cho hai người",
    title: "Trốn về với nhau",
    nights: "3 ngày · 2 đêm",
    price: "Từ 15.800.000 VNĐ",
    includes: [
      "Trang trí villa riêng",
      "Bữa tối dưới tán cây",
      "Trải nghiệm tắm rừng có hướng dẫn",
    ],
  },
  {
    tag: "Gia đình",
    title: "Ký ức giữa đại ngàn",
    nights: "3 ngày · 2 đêm",
    price: "Từ 21.500.000 VNĐ",
    includes: [
      "Valley Family Villa",
      "Ba bữa mỗi ngày",
      "Hoạt động thiên nhiên cho trẻ nhỏ",
    ],
  },
];

export const amenities = [
  ["01", "Hồ bơi vô cực", "Mở cửa 06:00–20:00, nhìn trọn thung lũng."],
  ["02", "An Spa", "Trị liệu thảo mộc và kỹ thuật bản địa."],
  ["03", "Nhà hàng Mùa", "Ẩm thực theo mùa từ nông trại lân cận."],
  ["04", "Đưa đón riêng", "Xe riêng hai chiều từ Hà Nội và sân bay."],
  ["05", "Kết nối & tiện nghi", "Wi-Fi, điều hòa, minibar và dịch vụ phòng."],
  [
    "06",
    "Dành cho gia đình",
    "Cũi trẻ em, thực đơn riêng và hoạt động ngoài trời.",
  ],
];

export const reviews = [
  {
    quote:
      "Một nơi đủ yên để chúng tôi thực sự nghe lại tiếng nói của chính mình.",
    name: "Minh Anh & Quốc Bảo",
    stay: "Lưu trú tháng 05.2026",
  },
  {
    quote:
      "Không gian rất riêng tư, dịch vụ tinh tế và bữa tối là trải nghiệm đáng nhớ nhất.",
    name: "Hà My",
    stay: "Lưu trú tháng 04.2026",
  },
  {
    quote:
      "Các con được gần thiên nhiên, còn người lớn có một kỳ nghỉ đúng nghĩa.",
    name: "Gia đình Nguyễn",
    stay: "Lưu trú tháng 03.2026",
  },
];

export const faqs = [
  [
    "Giờ nhận và trả phòng?",
    "Nhận phòng từ 14:00, trả phòng trước 12:00. Nhận sớm hoặc trả muộn tùy tình trạng villa.",
  ],
  [
    "Giá phòng đã bao gồm những gì?",
    "Giá niêm yết gồm bữa sáng, minibar chào mừng, hoạt động tắm rừng buổi sáng và thuế phí.",
  ],
  [
    "Chính sách hủy phòng?",
    "Miễn phí hủy trước 7 ngày. Trong vòng 7 ngày, phí hủy bằng 50% tổng giá trị đặt phòng.",
  ],
  [
    "Khu nghỉ có xe đưa đón không?",
    "Có. Xe riêng từ Hà Nội mất khoảng 2 giờ 15 phút và cần được đặt trước ít nhất 24 giờ.",
  ],
  [
    "Trẻ em và thú cưng có được chào đón?",
    "Trẻ em được chào đón với thực đơn và tiện nghi riêng. Hiện khu nghỉ chưa nhận thú cưng.",
  ],
];
