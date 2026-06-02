export default function SignupPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold text-black mb-2">회원가입</h1>
      <p className="text-black/60 text-sm mb-6">유명커튼블라인드 회원가입 (데모 페이지)</p>
      <form className="space-y-3">
        <input
          type="text"
          placeholder="아이디"
          className="w-full px-4 py-3 border border-black/15 rounded-lg"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full px-4 py-3 border border-black/15 rounded-lg"
        />
        <input
          type="email"
          placeholder="이메일"
          className="w-full px-4 py-3 border border-black/15 rounded-lg"
        />
        <button type="submit" className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light">
          가입하기
        </button>
      </form>
    </div>
  );
}
