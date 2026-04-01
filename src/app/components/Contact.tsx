import type { CSSProperties } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "../siteConfig";

const inquiryScopes = [
  "도입/구축 문의",
  "기술 제휴 및 협업 문의",
  "유지보수 및 운영 지원 문의",
  "공공 프로젝트 제안 문의",
];

const processSteps = [
  "문의 접수: 요구사항 및 일정 확인",
  "초기 검토: 적용 가능 범위/제약 검토",
  "회신 및 협의: 상세 범위, 일정, 비용 논의",
  "진행 확정: 담당자 배정 및 실행 계획 안내",
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

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 3500);
      })
      .catch((error) => console.error("Form transmission failed:", error));
  };

  const headerStyle = { "--page-image": "none" } as CSSProperties;

  return (
    <div className="spectral-page">
      <section className="spectral-page-header" style={headerStyle}>
        <div className="spectral-inner">
          <p className="spectral-kicker text-xs text-white/75 scroll-follow">Contact WETECH</p>
          <h1 className="spectral-title text-white scroll-follow scroll-delay-1">문의</h1>
          <p className="spectral-subtitle mx-auto mt-4 max-w-3xl text-sm sm:text-base scroll-follow scroll-delay-2">
            프로젝트 목적과 요구사항을 남겨주시면 담당자가 검토 후 회신드립니다.
          </p>
        </div>
      </section>

      <section className="spectral-section pt-0">
        <div className="spectral-wrapper style5 scroll-follow">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="scroll-follow">
              <header className="spectral-major">
                <h2>문의 범위</h2>
                <p>아래 항목 기준으로 접수되며, 상세 내용은 문의 메시지에 함께 남겨주세요.</p>
              </header>
              <dl className="spectral-tech-list">
                {inquiryScopes.map((scope, index) => (
                  <div key={scope} className={`spectral-tech-row scroll-follow scroll-delay-${Math.min(index, 3)}`}>
                    <dt>{`Scope 0${index + 1}`}</dt>
                    <dd>{scope}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="scroll-follow scroll-delay-1">
              <header className="spectral-major">
                <h2>처리 절차</h2>
                <p>접수 이후 기본 진행 흐름입니다.</p>
              </header>
              <dl className="spectral-tech-list">
                {processSteps.map((step, index) => (
                  <div key={step} className={`spectral-tech-row scroll-follow scroll-delay-${Math.min(index, 3)}`}>
                    <dt>{`Step 0${index + 1}`}</dt>
                    <dd>{step}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="spectral-section pt-0">
        <div className="spectral-wrapper style5 scroll-follow">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="scroll-follow">
              <header className="spectral-major">
                <h2>문의하기</h2>
                <p>담당자가 확인 가능한 연락처와 요청사항을 남겨주세요.</p>
              </header>
              <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="spectral-form-grid mt-5">
                <input type="hidden" name="form-name" value="contact" />
                <div className="spectral-field scroll-follow">
                  <label htmlFor="name">이름</label>
                  <input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="spectral-field scroll-follow scroll-delay-1">
                  <label htmlFor="email">이메일</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="spectral-field scroll-follow scroll-delay-2">
                  <label htmlFor="phone">연락처</label>
                  <input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="spectral-field scroll-follow scroll-delay-3">
                  <label htmlFor="message">문의 내용</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex items-center gap-3 scroll-follow scroll-delay-3">
                  <button type="submit" className="spectral-btn dark">
                    <Send className="mr-2 h-4 w-4" />
                    문의 전송
                  </button>
                  {submitted && <p className="text-sm text-[#2e3842]/70">문의가 접수되었습니다.</p>}
                </div>
              </form>
            </div>

            <div className="scroll-follow scroll-delay-1">
              <header className="spectral-major">
                <h2>연락처 정보</h2>
                <p>아래 채널로도 직접 문의하실 수 있습니다.</p>
              </header>
              <ul className="spectral-contact-info mt-5 text-sm text-[#2e3842]">
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
          </div>
        </div>
      </section>
    </div>
  );
}
