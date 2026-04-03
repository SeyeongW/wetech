import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "../siteConfig";

const inquiryScopes = [
  "도입 및 구축 제안",
  "기술 제휴 및 협업",
  "유지보수 및 운영 지원",
  "공공 프로젝트 협력",
];

export function Contact({ isStandalone = false }: { isStandalone?: boolean }) {
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
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => console.error("Form transmission failed:", error));
  };

  return (
    <div className={`w-full max-w-7xl mx-auto ${isStandalone ? 'pt-32 pb-24 px-6' : ''}`}>
      
      {/* Header (Only for standalone page) */}
      {isStandalone && (
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#0071e3] text-sm font-black tracking-[0.3em] uppercase">Contact Us</span>
          <h1 className="text-zinc-900 text-5xl md:text-7xl font-black tracking-tight">문의하기</h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            프로젝트 도입 상담 및 기술 지원을 위해 필요한 세부 내용을 남겨주세요.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        
        {/* Left: Contact Info & Scopes */}
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-zinc-900">문의 안내</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {inquiryScopes.map((scope, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#eaeaea] text-zinc-600 hover:border-[#0071e3]/30 hover:shadow-lg hover:shadow-[#0071e3]/5 transition-all">
                  <div className="w-8 h-8 rounded-full bg-[#0071e3]/10 flex items-center justify-center text-[#0071e3] text-xs font-bold">{idx + 1}</div>
                  <span className="font-semibold break-keep text-zinc-800">{scope}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t border-[#eaeaea]">
            <h3 className="text-lg font-bold text-[#0071e3] uppercase tracking-widest opacity-60">Connect Directly</h3>
            <ul className="space-y-4 text-zinc-800">
              <li className="flex items-center gap-4 group cursor-pointer hover:text-[#0071e3] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#0071e3]/5 flex items-center justify-center group-hover:bg-[#0071e3]/10 transition-colors">
                  <Phone className="w-5 h-5 text-[#0071e3]" />
                </div>
                <span className="text-lg font-bold">{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer hover:text-[#0071e3] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#0071e3]/5 flex items-center justify-center group-hover:bg-[#0071e3]/10 transition-colors">
                  <Mail className="w-5 h-5 text-[#0071e3]" />
                </div>
                <span className="text-lg font-bold">{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#0071e3]/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#0071e3]" />
                </div>
                <div className="text-sm font-medium leading-relaxed text-zinc-500">
                  {siteConfig.contact.address.line1} <br />
                  {siteConfig.contact.address.line2}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Modern Form Container */}
        <div className="lg:col-span-3">
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            onSubmit={handleSubmit} 
            className="relative p-8 md:p-12 rounded-[2.5rem] bg-white border border-[#eaeaea] shadow-2xl shadow-zinc-200/50 space-y-8 overflow-hidden"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            {/* Background ambient light - softer for light theme */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0071e3]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-[#0071e3] ml-1">이름 / 기업명</label>
                <input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-2xl px-5 py-4 text-zinc-900 focus:outline-none focus:border-[#0071e3] focus:bg-white transition-all placeholder:text-zinc-400"
                  placeholder="홍길동"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-[#0071e3] ml-1">이메일 주소</label>
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-2xl px-5 py-4 text-zinc-900 focus:outline-none focus:border-[#0071e3] focus:bg-white transition-all placeholder:text-zinc-400"
                  placeholder="contact@example.com"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-[#0071e3] ml-1">연락처</label>
              <input 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-2xl px-5 py-4 text-zinc-900 focus:outline-none focus:border-[#0071e3] focus:bg-white transition-all placeholder:text-zinc-400"
                placeholder="010-1234-5678"
              />
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-[#0071e3] ml-1">문의 내용</label>
              <textarea 
                id="message" 
                name="message" 
                rows={6} 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="w-full bg-[#f8f9fa] border border-[#f0f0f0] rounded-3xl px-5 py-4 text-zinc-900 focus:outline-none focus:border-[#0071e3] focus:bg-white transition-all resize-none placeholder:text-zinc-400"
                placeholder="구축하고자 하는 프로젝트의 상세 범위를 입력해 주세요."
              />
            </div>

            <div className="flex flex-col items-center gap-6 pt-4">
              <button 
                type="submit" 
                className="w-full sm:w-auto min-w-[240px] flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#0071e3] text-white font-black hover:bg-[#0077ed] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#0071e3]/40"
              >
                <Send className="w-5 h-5" />
                <span>데이터 전송 및 상담 요청</span>
              </button>
              
              {submitted && (
                <div className="animate-reveal-up text-[#28a745] font-black flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#28a745] animate-pulse"></div>
                  문의가 접수되었습니다. 담당자가 곧 회신해 드리겠습니다.
                </div>
              )}
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
