import { Link } from "react-router";
import { Home, AlertCircle } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
          <AlertCircle className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-6xl sm:text-7xl mb-4 text-gray-900">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl mb-4 text-gray-700">
          페이지를 찾을 수 없습니다
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
