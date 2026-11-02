// Dữ liệu 8 Gallery ảnh dự án: Đan Lát Café
// Hỗ trợ cả link Google Drive (qua Drive ID) hoặc file ảnh nội bộ (/projects/dan-lat/...)

const toDriveUrl = (id) => `https://lh3.googleusercontent.com/d/${id}`;

// 1. Gallery: Hạt Dẻ Cười
export const hatDeCuoiImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200',
    title: 'Hạt Dẻ Cười - 01',
    alt: 'Cận cảnh ly cà phê Hạt Dẻ Cười béo ngậy'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1200',
    title: 'Hạt Dẻ Cười - 02',
    alt: 'Lớp bọt sữa mịn và vụn hạt dẻ rang thơm lừng'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200',
    title: 'Hạt Dẻ Cười - 03',
    alt: 'Thưởng thức món mới bên khung cửa sổ ngập nắng'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200',
    title: 'Hạt Dẻ Cười - 04',
    alt: 'Hương vị mùa thu đông đậm đà từ Đan Lát'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=1200',
    title: 'Hạt Dẻ Cười - 05',
    alt: 'Góc chụp flatlay món Hạt Dẻ Cười'
  }
];

// 2. Gallery: Noel
export const noelImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=1200',
    title: 'Noel - 01',
    alt: 'Cây thông Noel ấm cúng tại góc quán Đan Lát'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=1200',
    title: 'Noel - 02',
    alt: 'Ánh đèn vàng lung linh mùa Giáng Sinh'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?q=80&w=1200',
    title: 'Noel - 03',
    alt: 'Chi tiết trang trí quả thông và chuông đồng'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?q=80&w=1200',
    title: 'Noel - 04',
    alt: 'Món nước phiên bản Giáng Sinh đặc biệt'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200',
    title: 'Noel - 05',
    alt: 'Không gian ấm áp sum vầy mùa đông'
  }
];

// 3. Gallery: Long Nhãn Dừa Non
export const longNhanDuaNonImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=1200',
    title: 'Long Nhãn Dừa Non - 01',
    alt: 'Ly trà Long Nhãn Dừa Non thanh mát ngọt dịu'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200',
    title: 'Long Nhãn Dừa Non - 02',
    alt: 'Cùi dừa non mềm mọng và long nhãn giòn ngọt'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1200',
    title: 'Long Nhãn Dừa Non - 03',
    alt: 'Màu nước óng ánh dưới ánh sáng ban mai'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=1200',
    title: 'Long Nhãn Dừa Non - 04',
    alt: 'Thức uống giải nhiệt yêu thích tại Đan Lát'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1570857502809-08184874388e?q=80&w=1200',
    title: 'Long Nhãn Dừa Non - 05',
    alt: 'Chi tiết nguyên liệu tự nhiên tinh tuyển'
  }
];

// 4. Gallery: Tết
export const tetImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1548625361-195fe5787e91?q=80&w=1200',
    title: 'Tết - 01',
    alt: 'Không gian ngập tràn sắc đỏ may mắn ngày Tết'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1512418490979-92798cec1380?q=80&w=1200',
    title: 'Tết - 02',
    alt: 'Góc câu đối đỏ và hoa mai vàng rực rỡ'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=1200',
    title: 'Tết - 03',
    alt: 'Món trà xuân chúc phúc đầu năm'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1200',
    title: 'Tết - 04',
    alt: 'Bao lì xì và khay mứt tết truyền thống'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200',
    title: 'Tết - 05',
    alt: 'Không khí du xuân rộn ràng tại Đan Lát Café'
  }
];

// 5. Gallery: Ngày 20/10
export const ngay2010DanLatImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200',
    title: 'Ngày 20/10 - 01',
    alt: 'Góc hoa tươi ngát hương tri ân Ngày Phụ Nữ'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200',
    title: 'Ngày 20/10 - 02',
    alt: 'Những đóa hoa pastel dịu dàng gửi tặng phái đẹp'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200',
    title: 'Ngày 20/10 - 03',
    alt: 'Nụ cười rạng rỡ của khách hàng trong ngày đặc biệt'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=1200',
    title: 'Ngày 20/10 - 04',
    alt: 'Món quà ngọt ngào và tách cà phê yêu thương'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1200',
    title: 'Ngày 20/10 - 05',
    alt: 'Khoảnh khắc sum vầy thân thương tại quán'
  }
];

// 6. Gallery: Daily
export const dailyDanLatImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200',
    title: 'Daily - 01',
    alt: 'Buổi sáng tĩnh lặng bên ly cà phê quen thuộc'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200',
    title: 'Daily - 02',
    alt: 'Barista chăm chút từng mẻ pha phin đậm vị'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200',
    title: 'Daily - 03',
    alt: 'Khách ngồi làm việc bên bàn gỗ mộc mạc'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=1200',
    title: 'Daily - 04',
    alt: 'Cuốn sách hay và góc ban công thoáng đãng'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200',
    title: 'Daily - 05',
    alt: 'Những cuộc trò chuyện thân tình buổi chiều'
  }
];

// 7. Gallery: Không Gian
export const khongGianDanLatImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200',
    title: 'Không Gian - 01',
    alt: 'Toàn cảnh không gian mang phong cách mộc tự nhiên'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1200',
    title: 'Không Gian - 02',
    alt: 'Chất liệu gỗ đan mây mộc mạc đặc trưng Đan Lát'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200',
    title: 'Không Gian - 03',
    alt: 'Ánh sáng tự nhiên tràn ngập qua khung kính lớn'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1200',
    title: 'Không Gian - 04',
    alt: 'Góc cây xanh tươi mát xua tan oi ả'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1200',
    title: 'Không Gian - 05',
    alt: 'Quầy bar pha chế mở thân thiện và tinh tế'
  }
];

// 8. Gallery: Trung Thu
export const trungThuDanLatImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200',
    title: 'Trung Thu - 01',
    alt: 'Đèn lồng truyền thống rực rỡ đêm hội Trăng Rằm'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1532767153582-b1a0e5145009?q=80&w=1200',
    title: 'Trung Thu - 02',
    alt: 'Chiếc lồng đèn ông sao chở tuổi thơ trở lại'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200',
    title: 'Trung Thu - 03',
    alt: 'Trà và bánh nướng trọn vẹn vị sum họp'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200',
    title: 'Trung Thu - 04',
    alt: 'Ánh trăng thu chiếu rọi qua tán cây quán'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?q=80&w=1200',
    title: 'Trung Thu - 05',
    alt: 'Góc check-in Trung Thu ấm áp tại Đan Lát Café'
  }
];

// Export tổng hợp để tương thích ngược nếu cần
export const danLatStoryboardImages = [
  ...hatDeCuoiImages,
  ...noelImages,
  ...longNhanDuaNonImages,
  ...tetImages,
  ...ngay2010DanLatImages,
  ...dailyDanLatImages,
  ...khongGianDanLatImages,
  ...trungThuDanLatImages
];
