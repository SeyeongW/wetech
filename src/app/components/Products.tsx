import { ShoppingCart, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Products() {
  const products = [
    {
      id: 1,
      name: "프리미엄 헤드폰",
      category: "오디오",
      price: "299,000원",
      rating: 4.8,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1723961617032-ef69c454cb31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGVhZHBob25lc3xlbnwxfHx8fDE3NzIxMTI2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "탁월한 음질과 노이즈 캔슬링 기능",
    },
    {
      id: 2,
      name: "스마트워치 Pro",
      category: "웨어러블",
      price: "549,000원",
      rating: 4.9,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1719744755507-a4c856c57cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwZGV2aWNlfGVufDF8fHx8MTc3MjExNjAzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "건강 관리와 스마트 기능의 완벽한 조화",
    },
    {
      id: 3,
      name: "무선 이어버드",
      category: "오디오",
      price: "189,000원",
      rating: 4.7,
      reviews: 412,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MXx8fHwxNzcyMDk0NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "편안한 착용감과 뛰어난 배터리 성능",
    },
    {
      id: 4,
      name: "울트라북 15",
      category: "컴퓨터",
      price: "1,890,000원",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1677157561132-4f9e282a1684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMG9mZmljZXxlbnwxfHx8fDE3NzIwMzkzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "강력한 성능과 슬림한 디자인",
    },
    {
      id: 5,
      name: "스마트폰 X1",
      category: "모바일",
      price: "1,290,000원",
      rating: 4.8,
      reviews: 523,
      image: "https://images.unsplash.com/photo-1676173646307-d050e097d181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzIwOTIxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "혁신적인 카메라와 프로세서 탑재",
    },
    {
      id: 6,
      name: "태블릿 Air",
      category: "모바일",
      price: "890,000원",
      rating: 4.7,
      reviews: 298,
      image: "https://images.unsplash.com/photo-1758979792186-32a5da91f24d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwcHJvZHVjdHxlbnwxfHx8fDE3NzIxMTYwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "대화면 디스플레이와 멀티태스킹",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl mb-4 text-gray-900">
            우리의 제품
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            혁신적인 기술과 세련된 디자인이 만나 완성된 프리미엄 제품들을 만나보세요.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-700">
                      {product.rating}
                    </span>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.reviews} 리뷰)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-gray-900">
                    {product.price}
                  </span>
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    구매
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl mb-4 text-gray-900">
            제품에 대해 궁금하신가요?
          </h2>
          <p className="text-gray-600 mb-6">
            전문 상담사가 제품 선택을 도와드립니다.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            문의하기
          </a>
        </div>
      </div>
    </div>
  );
}
