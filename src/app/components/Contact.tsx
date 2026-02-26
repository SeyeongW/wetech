import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "../siteConfig";

export function Contact() {
  const addressFull = `${siteConfig.contact.address.line1} ${siteConfig.contact.address.line2}`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "전화",
      content: siteConfig.contact.phone,
      subContent: "평일 09:00 - 18:00",
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "이메일",
      content: siteConfig.contact.email,
      subContent: "24시간 이내 답변",
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "오시는 길",
      content: siteConfig.contact.address.line1,
      subContent: siteConfig.contact.address.line2,
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "운영 시간",
      content: "평일 09:00 - 18:00",
      subContent: "주말 및 공휴일 휴무",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl mb-4 text-gray-900">
            문의하기
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            궁금하신 점이나 제안사항이 있으시면 언제든지 연락주세요.
            최선을 다해 도와드리겠습니다.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg mb-2 text-gray-900">{info.title}</h3>
              <p className="text-gray-700 mb-1">{info.content}</p>
              <p className="text-sm text-gray-500">{info.subContent}</p>
            </div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl mb-6 text-gray-900">
              메시지 보내기
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                  전화번호
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="010-1234-5678"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-2 text-gray-700">
                  문의 유형 *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">선택해주세요</option>
                  <option value="product">제품 문의</option>
                  <option value="support">기술 지원</option>
                  <option value="partnership">파트너십</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  메시지 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="문의하실 내용을 입력해주세요"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                메시지 보내기
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 text-center">
                    메시지가 성공적으로 전송되었습니다!
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Map and Additional Info */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-6">
              <h2 className="text-2xl mb-4 text-gray-900">
                오시는 길
              </h2>
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                {/* Placeholder for map - In a real application, you would use Google Maps or similar */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                    <p>지도 위치</p>
                    <p className="text-sm">{addressFull}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong className="text-gray-900">지하철:</strong> 2호선 강남역 3번 출구 도보 5분
                </p>
                <p>
                  <strong className="text-gray-900">버스:</strong> 146, 341, 360, 740
                </p>
                <p>
                  <strong className="text-gray-900">주차:</strong> 건물 지하 주차장 이용 가능
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg mb-3 text-gray-900">
                빠른 답변이 필요하신가요?
              </h3>
              <p className="text-gray-700 mb-4">
                긴급한 문의사항이 있으시면 고객센터로 직접 전화주세요.
              </p>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                고객센터 전화하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
