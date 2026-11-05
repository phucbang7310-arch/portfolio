// Dữ liệu 8 Gallery ảnh dự án: Tờ mờ Studio (TM STUDIO)
// Hỗ trợ cả link Google Drive (qua Drive ID) hoặc file ảnh nội bộ (/projects/to-mo-studio/...) hoặc Unsplash curated

export const toDriveUrl = (id) => `https://lh3.googleusercontent.com/d/${id}`;

// ================= 1. Gallery: Cá Nhân (Personal Portrait) =================
export const caNhanImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200',
    title: 'Cá Nhân - 01',
    alt: 'Tờ mờ Studio - Chân dung cá nhân nghệ thuật'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200',
    title: 'Cá Nhân - 02',
    alt: 'Tờ mờ Studio - Chân dung tự nhiên biểu cảm'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200',
    title: 'Cá Nhân - 03',
    alt: 'Tờ mờ Studio - Ánh sáng studio chân dung cá nhân'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200',
    title: 'Cá Nhân - 04',
    alt: 'Tờ mờ Studio - Chân dung cá nhân nam tính'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200',
    title: 'Cá Nhân - 05',
    alt: 'Tờ mờ Studio - Phong cách chân dung điện ảnh'
  }
];

// ================= 2. Gallery: Profile (Chân Dung Nghề Nghiệp & Thương Hiệu) =================
export const profileImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200',
    title: 'Profile - 01',
    alt: 'Tờ mờ Studio - Profile doanh nhân chuyên nghiệp'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200',
    title: 'Profile - 02',
    alt: 'Tờ mờ Studio - Chân dung profile thương hiệu cá nhân'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200',
    title: 'Profile - 03',
    alt: 'Tờ mờ Studio - Phong thái tự tin & hiện đại'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200',
    title: 'Profile - 04',
    alt: 'Tờ mờ Studio - Profile studio cao cấp'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200',
    title: 'Profile - 05',
    alt: 'Tờ mờ Studio - Hình ảnh profile đại diện ấn tượng'
  }
];

// ================= 3. Gallery: Couple (Ảnh Đôi & Tình Yêu) =================
export const coupleImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200',
    title: 'Couple - 01',
    alt: 'Tờ mờ Studio - Khoảnh khắc ngọt ngào của cặp đôi'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200',
    title: 'Couple - 02',
    alt: 'Tờ mờ Studio - Chuyện tình yêu lãng mạn'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1200',
    title: 'Couple - 03',
    alt: 'Tờ mờ Studio - Nụ cười hạnh phúc bên nhau'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=1200',
    title: 'Couple - 04',
    alt: 'Tờ mờ Studio - Buổi hẹn hò hoàng hôn'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200',
    title: 'Couple - 05',
    alt: 'Tờ mờ Studio - Tình cảm gắn kết tự nhiên'
  }
];

// ================= 4. Gallery: Cover Concept (Ý Tưởng Nghệ Thuật & Cover) =================
export const coverConceptImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200',
    title: 'Cover Concept - 01',
    alt: 'Tờ mờ Studio - Concept nghệ thuật phá cách'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200',
    title: 'Cover Concept - 02',
    alt: 'Tờ mờ Studio - Thời trang cover cá tính'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200',
    title: 'Cover Concept - 03',
    alt: 'Tờ mờ Studio - Concept màu sắc tương phản'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200',
    title: 'Cover Concept - 04',
    alt: 'Tờ mờ Studio - Chất nghệ thuật thị giác bay bổng'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200',
    title: 'Cover Concept - 05',
    alt: 'Tờ mờ Studio - Ánh sáng tạo hình ấn tượng'
  }
];

// ================= 5. Gallery: Đồ Án Sinh Viên (Student Graduation & Projects) =================
export const doAnSinhVienImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200',
    title: 'Đồ Án Sinh Viên - 01',
    alt: 'Tờ mờ Studio - Đồ án tốt nghiệp chuyên ngành thời trang'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200',
    title: 'Đồ Án Sinh Viên - 02',
    alt: 'Tờ mờ Studio - Bộ sưu tập thiết kế trẻ sáng tạo'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200',
    title: 'Đồ Án Sinh Viên - 03',
    alt: 'Tờ mờ Studio - Tác phẩm thị giác sinh viên'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1200',
    title: 'Đồ Án Sinh Viên - 04',
    alt: 'Tờ mờ Studio - Concept chụp đồ án chuyên nghiệp'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1200',
    title: 'Đồ Án Sinh Viên - 05',
    alt: 'Tờ mờ Studio - Hình ảnh hoàn thiện đồ án chất lượng cao'
  }
];

// ================= 6. Gallery: Sản Phẩm (Commercial Product Photography) =================
export const sanPhamImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200',
    title: 'Sản Phẩm - 01',
    alt: 'Tờ mờ Studio - Chụp sản phẩm thương mại đồng hồ cao cấp'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200',
    title: 'Sản Phẩm - 02',
    alt: 'Tờ mờ Studio - Chi tiết chất liệu và cấu trúc sản phẩm'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200',
    title: 'Sản Phẩm - 03',
    alt: 'Tờ mờ Studio - Ánh sáng tôn vinh thiết kế sản phẩm'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200',
    title: 'Sản Phẩm - 04',
    alt: 'Tờ mờ Studio - Sản phẩm thương mại phong cách năng động'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1200',
    title: 'Sản Phẩm - 05',
    alt: 'Tờ mờ Studio - Góc chụp flatlay thương mại'
  }
];

// ================= 7. Gallery: Sự Kiện (Event & Atmosphere) =================
export const suKienImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200',
    title: 'Sự Kiện - 01',
    alt: 'Tờ mờ Studio - Không khí trang trọng tại sự kiện'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200',
    title: 'Sự Kiện - 02',
    alt: 'Tờ mờ Studio - Khoảnh khắc bùng nổ năng lượng'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200',
    title: 'Sự Kiện - 03',
    alt: 'Tờ mờ Studio - Diễn giả và khách mời chuyên nghiệp'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200',
    title: 'Sự Kiện - 04',
    alt: 'Tờ mờ Studio - Ánh sáng sân khấu rực rỡ'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200',
    title: 'Sự Kiện - 05',
    alt: 'Tờ mờ Studio - Ghi lại trọn vẹn cảm xúc ngày hội tụ'
  }
];

// ================= 8. Gallery: PSC (Phóng Sự Cưới / Wedding Photojournalism) =================
export const pscImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200',
    title: 'PSC - 01',
    alt: 'Tờ mờ Studio - Lễ thành hôn thiêng liêng và trang trọng'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200',
    title: 'PSC - 02',
    alt: 'Tờ mờ Studio - Giọt nước mắt hạnh phúc của cô dâu chú rể'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200',
    title: 'PSC - 03',
    alt: 'Tờ mờ Studio - Nụ cười rạng rỡ của gia đình hai họ'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200',
    title: 'PSC - 04',
    alt: 'Tờ mờ Studio - Khoảnh khắc bước vào lễ đường đầy cảm xúc'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200',
    title: 'PSC - 05',
    alt: 'Tờ mờ Studio - Chiếc nhẫn cưới và lời thề nguyện trăm năm'
  }
];

// Export tổng hợp toàn bộ ảnh Tờ mờ Studio
export const toMoStudioStoryboardImages = [
  ...caNhanImages,
  ...profileImages,
  ...coupleImages,
  ...coverConceptImages,
  ...doAnSinhVienImages,
  ...sanPhamImages,
  ...suKienImages,
  ...pscImages,
];

