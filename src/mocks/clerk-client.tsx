import React from "react";

export const ClerkProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const useUser = () => {
  // Default to Admin fallback
  let mockUser = {
    id: "admin1",
    role: "admin",
    firstName: "Admin",
    lastName: "User"
  };

  if (typeof window !== "undefined") {
    const match = document.cookie.match(/(^| )mock_user=([^;]+)/);
    if (match) {
      try {
        mockUser = JSON.parse(decodeURIComponent(match[2]));
      } catch (e) {
        console.error("Failed to parse mock_user cookie", e);
      }
    }
  }

  return {
    isLoaded: true,
    isSignedIn: true,
    user: {
      id: mockUser.id,
      firstName: mockUser.firstName,
      lastName: mockUser.lastName,
      publicMetadata: {
        role: mockUser.role
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
  // Optional: Read avatar image dynamically if any
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
