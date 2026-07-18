import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#f7f8fa]">
      <SignIn />
    </div>
  );
}
