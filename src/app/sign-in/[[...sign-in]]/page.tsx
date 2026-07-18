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
            colorPrimary: "#CFCEFF", // hsPurple Accent Color
            colorBackground: "#ffffff",
            colorText: "#000000",
            colorTextSecondary: "#4b5563",
            borderRadius: "0.5rem",
          },
          elements: {
            card: "shadow-2xl border border-gray-100",
            formButtonPrimary: "bg-hsPurple text-black hover:bg-[#b5b4f8] border-none transition-all font-bold text-sm",
            footer: "hidden", // Hide footer references to Clerk
            socialButtonsBlockButton: "hidden", // Hide social login buttons
            socialButtonsBlock: "hidden",
            socialButtons: "hidden",
            socialButtonsIconButton: "hidden",
            socialButtonsDivider: "hidden", // Hide "or" divider
            dividerRow: "hidden", // Hide divider line
            dividerText: "hidden", // Hide "or" text
          }
        }}
      />
    </div>
  );
}
