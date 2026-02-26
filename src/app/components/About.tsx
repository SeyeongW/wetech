import { Users, Target, Award, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "혁신",
      description: "끊임없는 연구개발로 업계를 선도하는 기술을 만듭니다.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "고객 중심",
      description: "고객의 목소리에 귀 기울이며 최상의 경험을 제공합니다.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "품질",
      description: "최고 수준의 품질 관리로 완벽한 제품을 만듭니다.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "성장",
      description: "지속 가능한 성장으로 더 나은 미래를 만들어갑니다.",
    },
  ];

  const milestones = [
    { year: "2015", event: "TechPro 설립" },
    { year: "2017", event: "첫 프리미엄 제품 라인 출시" },
    { year: "2019", event: "글로벌 시장 진출" },
    { year: "2021", event: "100만 고객 돌파" },
    { year: "2023", event: "AI 기술 통합 제품 출시" },
    { year: "2026", event: "지속가능 제품 라인 확대" },
  ];

  const stats = [
    { value: "100만+", label: "고객" },
    { value: "50+", label: "국가" },
    { value: "15+", label: "제품 라인" },
    { value: "98%", label: "만족도" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-gray-900">
            TechPro 이야기
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            2015년부터 우리는 기술과 디자인의 경계를 넘나들며 혁신적인 제품을 만들어왔습니다.
            고객의 삶을 더 풍요롭게 만드는 것이 우리의 사명입니다.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl mb-2 text-blue-600">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              우리의 가치
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              TechPro를 움직이는 핵심 가치들입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              우리의 여정
            </h2>
            <p className="text-lg text-gray-600">
              TechPro의 주요 이정표들을 소개합니다.
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl text-blue-600">{milestone.year}</span>
                </div>
                <div className="flex-grow border-l-2 border-blue-200 pl-8 pb-8">
                  <div className="relative">
                    <div className="absolute -left-[2.4rem] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <p className="text-lg text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl mb-6">
                열정적인 팀과 함께
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                TechPro는 다양한 배경의 전문가들이 모여 하나의 목표를 향해 나아가고 있습니다.
                우리는 서로를 존중하고, 협력하며, 함께 성장합니다.
              </p>
              <p className="text-lg text-blue-100">
                혁신적인 아이디어와 끊임없는 도전 정신으로 기술의 미래를 만들어가고 있습니다.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758979792186-32a5da91f24d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwcHJvZHVjdHxlbnwxfHx8fDE3NzIxMTYwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="TechPro 팀"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
