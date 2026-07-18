import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#f7f8fa]">
      <SignIn
        appearance={{
          layout: {
            logoPlacement: "none",
            helpPageUrl: undefined,
            privacyPageUrl: undefined,
            termsPageUrl: undefined,
          },
          variables: {
            colorPrimary: "#FAE27C", // hsYellow Accent Color
            colorBackground: "#ffffff",
            colorText: "#000000",
            colorTextSecondary: "#4b5563",
            borderRadius: "0.5rem",
          },
          elements: {
            card: "shadow-2xl border border-gray-100",
            formButtonPrimary: "bg-hsYellow text-black hover:bg-yellow-400 border-none transition-all font-bold text-sm",
            footer: "hidden", // Hide footer references to Clerk
          }
        }}
      />
    </div>
  );
}
