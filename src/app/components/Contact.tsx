import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { siteConfig } from "../siteConfig";
import brochureUsage from "../../assets/smart-bench/brochure-usage.png";

const applications = [
  "공원 및 정원",
  "대중교통 대기 공간",
  "관광지 및 공공시설",
  "국립공원 및 보행 동선",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <div className="bg-[#f4f4f5] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <p className="font-display mb-3 text-sm tracking-[0.14em] text-slate-500">CONTACT</p>
          <h1 className="text-4xl sm:text-5xl">문의</h1>
          <p className="mt-5 max-w-4xl leading-relaxed text-slate-600">
            설치 대상 공간, 운영 시간, 기대 효과를 알려주시면 현장 조건에 맞춘 Smart Bench 구성안을 제안드립니다.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-10">
          <div className="group overflow-hidden rounded-2xl">
            <ImageWithFallback
              src={brochureUsage}
              alt="Smart Bench 카탈로그 활용 분야 페이지"
              className="h-full min-h-[420px] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div>
            <h2 className="text-3xl">활용 분야 및 인증 관점</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              공공공간 적용에 필요한 기본 자료 검토를 위해 카탈로그 기준 활용 분야와 인증 관련 정보를 함께 제공합니다.
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {applications.map((item) => (
                <li key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-2 lg:p-10">
          <div>
            <h2 className="text-2xl">문의하기</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-slate-700">
                  이름
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-slate-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-slate-700">
                  이메일
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-slate-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm text-slate-700">
                  연락처
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-slate-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-slate-700">
                  문의 내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2 focus:border-slate-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-black"
              >
                <Send className="mr-2 h-4 w-4" />
                문의 전송
              </button>
              {submitted && <p className="text-sm text-slate-600">문의가 접수되었습니다. 확인 후 연락드리겠습니다.</p>}
            </form>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl">연락처 정보</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {siteConfig.contact.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {siteConfig.contact.email}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4" />
                <span>
                  {siteConfig.contact.address.line1}
                  <br />
                  {siteConfig.contact.address.line2}
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
