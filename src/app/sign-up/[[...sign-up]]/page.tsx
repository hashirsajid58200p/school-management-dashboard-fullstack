import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#f7f8fa]">
      <SignUp />
    </div>
  );
}
