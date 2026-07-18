import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#f7f8fa]">
      <div className="bg-white p-10 rounded-lg shadow-2xl border border-gray-100 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Registration Disabled</h1>
        <p className="text-sm text-gray-500 mb-6">
          Self-registration is disabled for security reasons. Please contact the school administration department to request an account.
        </p>
        <Link href="/sign-in">
          <span className="inline-block px-6 py-2 bg-hsPurple hover:bg-[#b5b4f8] text-black font-semibold rounded-md transition-all text-sm shadow-md cursor-pointer">
            Back to Login
          </span>
        </Link>
      </div>
    </div>
  );
}
