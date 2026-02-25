import { Inter, Noto_Sans_KR } from 'next/font/google';
import "./globals.css";
import Shell from "./Shell";
import ClientEffects from "./ClientEffects";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSansKr = Noto_Sans_KR({ subsets: ['latin'], variable: '--font-noto-sans-kr' });

export const metadata = {
  title: "WETECH | Outdoor Smart Thermal Bench",
  description: "아웃도어 자동 온도조절 냉·온열벤치 기업 소개 사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSansKr.variable}`}>
      <body>
        <Shell>{children}</Shell>
        <ClientEffects />
      </body>
    </html>
  );
}