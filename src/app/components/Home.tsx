import { Link } from "react-router";
import { ArrowRight, CheckCircle, Zap, Shield, Cpu } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "빠른 성능",
      description: "최신 기술로 최적화된 빠른 응답 속도",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "안전한 보안",
      description: "엔터프라이즈급 보안 시스템",
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      title: "스마트 기능",
      description: "AI 기반의 지능형 기능 제공",
    },
  ];

  const benefits = [
    "업계 최고 수준의 성능",
    "24/7 고객 지원",
    "무료 소프트웨어 업데이트",
    "2년 보증 서비스",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-gray-900">
                혁신적인 기술로<br />
                <span className="text-blue-600">미래를 선도합니다</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                TechPro는 최첨단 기술과 디자인을 결합하여 일상을 더욱 편리하고 스마트하게 만드는 제품을 제공합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  제품 둘러보기
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  문의하기
                </Link>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758979792186-32a5da91f24d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwcHJvZHVjdHxlbnwxfHx8fDE3NzIxMTYwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="최신 기술 제품"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              왜 TechPro를 선택해야 할까요?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              우리의 제품은 최신 기술과 사용자 중심의 디자인으로 만들어졌습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1677157561132-4f9e282a1684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMG9mZmljZXxlbnwxfHx8fDE3NzIwMzkzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="노트북 오피스"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl mb-6 text-gray-900">
                프리미엄 서비스와 함께
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                TechPro 제품을 구매하시면 다양한 혜택을 받으실 수 있습니다.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center mt-8 text-blue-600 hover:text-blue-700"
              >
                더 알아보기
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl mb-6 text-white">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            TechPro의 혁신적인 제품으로 새로운 경험을 만나보세요.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            제품 보러가기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
