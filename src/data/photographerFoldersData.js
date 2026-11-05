// Dữ liệu 6 thư mục dự án Photographer
import { notTraStoryboardImages } from './notTraStoryboardData';
import { ngay2010StoryboardImages } from './ngay2010StoryboardData';
import { dailyStoryboardImages } from './dailyStoryboardData';
import { 
  hatDeCuoiImages,
  noelImages,
  longNhanDuaNonImages,
  tetImages,
  ngay2010DanLatImages,
  dailyDanLatImages,
  khongGianDanLatImages,
  trungThuDanLatImages
} from './danLatStoryboardData';

export const photographerFolders = [
  // ================= FOLDER 1: NỐT TRÀ =================
  {
    id: 'not-tra',
    number: '01',
    title: 'Nốt Trà',
    subtitle: 'Nốt Trà — Nốt Hương Đậm Vị',
    category: 'Brand Campaign',
    tags: ['PHOTOGRAPHER', 'NỐT TRÀ', '3 BỘ SƯU TẬP'],
    coverImage: '/not-tra-banner.png',
    previewImages: [
      '/not-tra-banner.png',
      '/projects/not-tra/DSC05573.jpg',
      ngay2010StoryboardImages[0]?.src || '/projects/not-tra/DSC05649.jpg'
    ],
    photoCount: notTraStoryboardImages.length + ngay2010StoryboardImages.length + dailyStoryboardImages.length, // 82 ảnh
    date: '2024',
    client: 'Nốt Trà',
    role: 'Lead Photographer & Retoucher',
    description: 'Chiến dịch nhiếp ảnh toàn diện cho Nốt Trà với 3 bộ sưu tập chính: Trung Thu truyền thống, Ngày 20/10 dịu dàng và Không gian Daily thường nhật.',
    brandBanner: '/not-tra-banner.png',
    isEmpty: false,
    albums: [
      {
        id: 'trung-thu',
        title: 'Trung Thu',
        badge: `${notTraStoryboardImages.length} ảnh`,
        description: 'Bộ ảnh Trung Thu mang âm hưởng truyền thống, ấm cúng và đầy cảm xúc.',
        images: notTraStoryboardImages
      },
      {
        id: 'ngay-2010',
        title: 'Ngày 20/10',
        badge: `${ngay2010StoryboardImages.length} ảnh`,
        description: 'Những khoảnh khắc dịu dàng và tinh tế nhân dịp Ngày Phụ Nữ Việt Nam 20/10.',
        images: ngay2010StoryboardImages
      },
      {
        id: 'daily',
        title: 'Daily',
        badge: `${dailyStoryboardImages.length} ảnh`,
        description: 'Góc quán bình yên, ly trà đậm vị và những góc ngồi tĩnh lặng thường nhật.',
        images: dailyStoryboardImages
      }
    ]
  },

  // ================= FOLDER 2: ĐAN LÁT (8 GALLERY ẢNH) =================
  {
    id: 'dan-lat',
    number: '02',
    title: 'Đan Lát Café',
    subtitle: 'Đan Lát Café — Thu Đầy Giỏ',
    category: 'Commercial & Video',
    tags: ['VIDEOGRAPHER', 'PHOTOGRAPHER', '8 BỘ SƯU TẬP'],
    coverImage: '/dan-lat-banner.png',
    previewImages: [
      '/dan-lat-banner.png',
      tetImages[0]?.src,
      hatDeCuoiImages[0]?.src
    ],
    photoCount: tetImages.length + hatDeCuoiImages.length + noelImages.length + longNhanDuaNonImages.length + ngay2010DanLatImages.length + dailyDanLatImages.length + khongGianDanLatImages.length + trungThuDanLatImages.length, // 220 ảnh
    date: '2024',
    client: 'Đan Lát Café',
    role: 'Videographer & Photographer',
    description: 'Dự án hình ảnh và thước phim chuyển động cho Đan Lát Café với 8 bộ sưu tập: Tết 2026, Hạt Dẻ Cười, Noel, Long Nhãn Dừa Non, Ngày 20/10, Daily, Không Gian và Trung Thu.',
    brandBanner: '/dan-lat-banner.png',
    videos: [
      {
        id: 'reel-1851457765488640',
        title: 'Đan Lát Reel 01',
        url: 'https://www.facebook.com/reel/1851457765488640',
        embedUrl: 'https://www.facebook.com/plugins/video.php?height=640&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1851457765488640%2F&show_text=false&width=360'
      },
      {
        id: 'reel-1225096119238051',
        title: 'Đan Lát Reel 02',
        url: 'https://www.facebook.com/reel/1225096119238051',
        embedUrl: 'https://www.facebook.com/plugins/video.php?height=640&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1225096119238051%2F&show_text=false&width=360'
      },
      {
        id: 'reel-814578961222061',
        title: 'Đan Lát Reel 03',
        url: 'https://www.facebook.com/reel/814578961222061',
        embedUrl: 'https://www.facebook.com/plugins/video.php?height=640&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F814578961222061%2F&show_text=false&width=360'
      },
      {
        id: 'reel-2261536621035255',
        title: 'Đan Lát Reel 04',
        url: 'https://www.facebook.com/reel/2261536621035255',
        embedUrl: 'https://www.facebook.com/plugins/video.php?height=640&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2261536621035255%2F&show_text=false&width=360'
      },
      {
        id: 'reel-746926064509161',
        title: 'Đan Lát Reel 05',
        url: 'https://www.facebook.com/reel/746926064509161',
        embedUrl: 'https://www.facebook.com/plugins/video.php?height=640&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F746926064509161%2F&show_text=false&width=360'
      }
    ],
    videoUrl: 'https://www.facebook.com/reel/1851457765488640',
    isEmpty: false,
    albums: [
      {
        id: 'tet-2026',
        title: 'Tết 2026',
        badge: `${tetImages.length} ảnh`,
        description: 'Sắc xuân rộn rã ngày Tết 2026 với hoa mai, câu đối đỏ và khay mứt tết truyền thống.',
        images: tetImages
      },
      {
        id: 'hat-de-cuoi',
        title: 'Hạt Dẻ Cười',
        badge: `${hatDeCuoiImages.length} ảnh`,
        description: 'Bộ ảnh thức uống Hạt Dẻ Cười đặc trưng với lớp bọt béo mịn và hương vị ấm áp.',
        images: hatDeCuoiImages
      },
      {
        id: 'noel',
        title: 'Noel',
        badge: `${noelImages.length} ảnh`,
        description: 'Không gian ấm áp mùa Giáng Sinh với ánh đèn vàng lung linh và cây thông trang trí.',
        images: noelImages
      },
      {
        id: 'long-nhan-dua-non',
        title: 'Long Nhãn Dừa Non',
        badge: `${longNhanDuaNonImages.length} ảnh`,
        description: 'Thức uống Long Nhãn Dừa Non tươi mát thanh lành từ nguyên liệu tự nhiên.',
        images: longNhanDuaNonImages
      },
      {
        id: 'ngay-2010',
        title: 'Ngày 20/10',
        badge: `${ngay2010DanLatImages.length} ảnh`,
        description: 'Những đóa hoa pastel dịu dàng và khoảnh khắc tri ân Ngày Phụ Nữ Việt Nam 20/10.',
        images: ngay2010DanLatImages
      },
      {
        id: 'daily',
        title: 'Daily',
        badge: `${dailyDanLatImages.length} ảnh`,
        description: 'Khoảnh khắc thường nhật, tách cà phê sáng và góc làm việc an yên tại quán.',
        images: dailyDanLatImages
      },
      {
        id: 'khong-gian',
        title: 'Không Gian',
        badge: `${khongGianDanLatImages.length} ảnh`,
        description: 'Kiến trúc mộc mạc, chất liệu đan mây tự nhiên và ánh sáng ngập tràn không gian quán.',
        images: khongGianDanLatImages
      },
      {
        id: 'trung-thu',
        title: 'Trung Thu',
        badge: `${trungThuDanLatImages.length} ảnh`,
        description: 'Đêm hội Trăng Rằm với lồng đèn rực rỡ và những tách trà ấm sum vầy.',
        images: trungThuDanLatImages
      }
    ]
  },

  // ================= FOLDER 3: TẠM THỜI ĐỂ TRỐNG =================
  {
    id: 'folder-03',
    number: '03',
    title: 'Folder 03',
    subtitle: 'Dự án sắp cập nhật',
    category: 'Đang cập nhật',
    tags: ['SẮP CẬP NHẬT', 'COMING SOON'],
    coverImage: null,
    photoCount: 'Trống',
    date: 'Upcoming',
    client: '—',
    role: 'Photographer',
    description: 'Thư mục dự án đang trong quá trình chuẩn bị hình ảnh và sẽ sớm được cập nhật.',
    isEmpty: true,
    albums: []
  },

  // ================= FOLDER 4: TẠM THỜI ĐỂ TRỐNG =================
  {
    id: 'folder-04',
    number: '04',
    title: 'Folder 04',
    subtitle: 'Dự án sắp cập nhật',
    category: 'Đang cập nhật',
    tags: ['SẮP CẬP NHẬT', 'COMING SOON'],
    coverImage: null,
    photoCount: 'Trống',
    date: 'Upcoming',
    client: '—',
    role: 'Photographer',
    description: 'Thư mục dự án đang trong quá trình chuẩn bị hình ảnh và sẽ sớm được cập nhật.',
    isEmpty: true,
    albums: []
  },

  // ================= FOLDER 5: TẠM THỜI ĐỂ TRỐNG =================
  {
    id: 'folder-05',
    number: '05',
    title: 'Folder 05',
    subtitle: 'Dự án sắp cập nhật',
    category: 'Đang cập nhật',
    tags: ['SẮP CẬP NHẬT', 'COMING SOON'],
    coverImage: null,
    photoCount: 'Trống',
    date: 'Upcoming',
    client: '—',
    role: 'Photographer',
    description: 'Thư mục dự án đang trong quá trình chuẩn bị hình ảnh và sẽ sớm được cập nhật.',
    isEmpty: true,
    albums: []
  },

  // ================= FOLDER 6: TẠM THỜI ĐỂ TRỐNG =================
  {
    id: 'folder-06',
    number: '06',
    title: 'Folder 06',
    subtitle: 'Dự án sắp cập nhật',
    category: 'Đang cập nhật',
    tags: ['SẮP CẬP NHẬT', 'COMING SOON'],
    coverImage: null,
    photoCount: 'Trống',
    date: 'Upcoming',
    client: '—',
    role: 'Photographer',
    description: 'Thư mục dự án đang trong quá trình chuẩn bị hình ảnh và sẽ sớm được cập nhật.',
    isEmpty: true,
    albums: []
  }
];
