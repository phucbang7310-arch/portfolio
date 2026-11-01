// Dữ liệu 6 thư mục dự án Photographer
import { notTraStoryboardImages } from './notTraStoryboardData';
import { ngay2010StoryboardImages } from './ngay2010StoryboardData';
import { dailyStoryboardImages } from './dailyStoryboardData';

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
    // Nốt Trà gồm 3 bộ sưu tập:
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

  // ================= FOLDER 2: ĐAN LÁT =================
  {
    id: 'dan-lat',
    number: '02',
    title: 'Đan Lát Café',
    subtitle: 'Đan Lát Café — Thu Đầy Giỏ',
    category: 'Commercial & Video',
    tags: ['VIDEOGRAPHER', 'PHOTOGRAPHER', 'ĐAN LÁT'],
    coverImage: '/dan-lat-banner.png',
    previewImages: [
      '/dan-lat-banner.png',
      '/projects/not-tra/DSC05649.jpg',
      '/projects/not-tra/DSC05678.jpg'
    ],
    photoCount: 'Video + Photos',
    date: '2024',
    client: 'Đan Lát Café',
    role: 'Videographer & Photographer',
    description: 'Dự án hình ảnh và thước phim chuyển động cho chiến dịch "Thu Đầy Giỏ", tôn vinh nét mộc mạc, gần gũi thiên nhiên của Đan Lát Café.',
    brandBanner: '/dan-lat-banner.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    isEmpty: false,
    albums: [
      {
        id: 'dan-lat-photo',
        title: 'Photographer',
        badge: `${notTraStoryboardImages.length} ảnh`,
        description: 'Bộ ảnh photoshoot ghi lại không gian và thức uống tại Đan Lát Café.',
        images: notTraStoryboardImages
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
