import { Link } from "react-router";
import { AlertCircle, Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="spectral-page flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="spectral-wrapper style4 max-w-2xl text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <AlertCircle className="h-8 w-8" />
        </div>
        <h1 className="text-6xl font-bold tracking-[0.2em] text-white">404</h1>
        <p className="mt-4 text-sm tracking-[0.18em] text-white/70 uppercase">Page Not Found</p>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/80">
          요청하신 페이지를 찾을 수 없습니다. 메뉴에서 다른 페이지를 선택해 주세요.
        </p>
        <div className="mt-8">
          <Link to="/" className="spectral-btn">
            <Home className="mr-2 h-4 w-4" />
            홈으로 이동
          </Link>
        </div>
      </div>
    </div>
  );
}
