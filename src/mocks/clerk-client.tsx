import React from "react";

export const ClerkProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const useUser = () => {
  return {
    isLoaded: true,
    isSignedIn: true,
    user: {
      id: "admin1",
      firstName: "Admin",
      lastName: "User",
      publicMetadata: {
        role: "admin"
      }
    }
  };
};

export const useSignIn = () => {
  return {
    isLoaded: true,
    signIn: {
      status: "complete",
      supportedFirstFactors: [],
      firstFactorVerification: null,
      nextStep: null,
      attemptSecondFactor: async () => ({ status: "complete" }),
    },
    setActive: async () => {}
  };
};

export const UserButton = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img
        src="/noAvatar.png"
        alt="Avatar"
        style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #ccc" }}
      />
    </div>
  );
};
