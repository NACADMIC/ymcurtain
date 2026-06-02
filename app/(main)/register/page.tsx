import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-2xl font-semibold text-black mb-2">회원가입</h1>
      <p className="text-black/60 text-sm mb-8">유명커튼블라인드 회원가입 (Phase 2에서 NextAuth 연동)</p>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="이메일"
          className="w-full px-4 py-3 border border-black/15 rounded focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full px-4 py-3 border border-black/15 rounded focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
        />
        <input
          type="text"
          placeholder="이름"
          className="w-full px-4 py-3 border border-black/15 rounded focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
        />
        <button
          type="submit"
          className="w-full py-3 bg-black text-white font-medium rounded hover:bg-black/90"
        >
          가입하기
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-black/60">
        이미 계정이 있으신가요? <Link href="/login" className="text-primary hover:underline">로그인</Link>
      </p>
    </div>
  );
}
