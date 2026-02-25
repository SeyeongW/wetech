import "./globals.css";
import Shell from "./Shell";
import ClientEffects from "./ClientEffects";

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
    <html lang="ko">
      <body>
        <Shell>{children}</Shell>
        <ClientEffects />
      </body>
    </html>
  );
}