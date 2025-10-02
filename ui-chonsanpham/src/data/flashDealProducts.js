// Danh sách sản phẩm săn deal giờ vàng mẫu
const flashDealProducts = [
  {
    id: 1,
    name: 'Tai nghe Bluetooth TWS',
  image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  flashPrice: 79000,
  oldPrice: 199000,
  dealSeconds: 600, // 10 phút
  stock: 12
  },
  {
    id: 2,
    name: 'Sạc dự phòng 10.000mAh',
  image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
  flashPrice: 99000,
  oldPrice: 250000,
  dealSeconds: 420, // 7 phút
  stock: 8
  },
  {
    id: 3,
    name: 'Bình giữ nhiệt Lock&Lock',
  image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  flashPrice: 59000,
  oldPrice: 150000,
  dealSeconds: 300, // 5 phút
  stock: 15
  },
  {
    id: 4,
    name: 'Kem chống nắng Anessa',
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  flashPrice: 129000,
  oldPrice: 350000,
  dealSeconds: 900, // 15 phút
  stock: 5
  },
  {
    id: 5,
    name: 'Sữa rửa mặt Senka',
  image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=400&q=80',
  flashPrice: 49000,
  oldPrice: 99000,
  dealSeconds: 180, // 3 phút
  stock: 20
  }
];

export default flashDealProducts;
