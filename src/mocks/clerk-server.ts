import { cookies } from "next/headers";

export const auth = () => {
  const cookieStore = cookies();
  const mockUserStr = cookieStore.get("mock_user")?.value;
  if (mockUserStr) {
    try {
      const mockUser = JSON.parse(decodeURIComponent(mockUserStr));
      return {
        userId: mockUser.id,
        sessionClaims: {
          metadata: {
            role: mockUser.role
          }
        }
      };
    } catch (e) {}
  }
  
  // Default fallback if no cookie is set
  return {
    userId: "admin1",
    sessionClaims: {
      metadata: {
        role: "admin"
      }
    }
  };
};

export const currentUser = async () => {
  const cookieStore = cookies();
  const mockUserStr = cookieStore.get("mock_user")?.value;
  if (mockUserStr) {
    try {
      const mockUser = JSON.parse(decodeURIComponent(mockUserStr));
      return {
        id: mockUser.id,
        firstName: mockUser.firstName,
        lastName: mockUser.lastName,
        publicMetadata: {
          role: mockUser.role
        }
      };
    } catch (e) {}
  }

  // Default fallback if no cookie is set
  return {
    id: "admin1",
    firstName: "Admin",
    lastName: "User",
    publicMetadata: {
      role: "admin"
    }
  };
};

export const clerkClient = {
  users: {
    getUser: async (id: string) => {
      const role = id.startsWith("teacher")
        ? "teacher"
        : id.startsWith("student")
        ? "student"
        : id.startsWith("parent")
        ? "parent"
        : "admin";

      return {
        id,
        publicMetadata: { role },
        emailAddresses: [{ id: "eml_1", emailAddress: `${id}@example.com` }]
      };
    },
    createUser: async (params: any) => ({
      id: "mock_user_" + Math.random().toString(36).substr(2, 9),
      ...params
    }),
    updateUser: async (id: string, params: any) => ({
      id,
      ...params
    }),
    deleteUser: async (id: string) => ({
      id
    }),
    updateUserMetadata: async (id: string, params: any) => ({
      id,
      ...params
    }),
    getUserList: async (params: any) => ({
      data: [{ id: "admin1", emailAddresses: [{ emailAddress: "admin@example.com" }] }]
    })
  },
  emailAddresses: {
    updateEmailAddress: async (id: string, params: any) => ({
      id,
      ...params
    })
  }
};

export const clerkMiddleware = (handler: (auth: () => any, req: any) => Promise<any> | any) => {
  return async (req: any, event: any) => {
    // Mock auth function that reads cookies from the request object in middleware
    const mockAuth = () => {
      const match = req.cookies.get("mock_user")?.value;
      if (match) {
        try {
          const mockUser = JSON.parse(decodeURIComponent(match));
          return {
            userId: mockUser.id,
            sessionClaims: {
              metadata: {
                role: mockUser.role
              }
            }
          };
        } catch (e) {}
      }
      return {
        userId: "admin1",
        sessionClaims: {
          metadata: {
            role: "admin"
          }
        }
      };
    };

    return await handler(mockAuth, req);
  };
};

export const createRouteMatcher = (routes: string[]) => {
  return (req: any) => {
    const url = new URL(req.url);
    const path = url.pathname;
    return routes.some((route) => {
      // Convert standard clerk route matchers like '/student(.*)' into regular expressions
      const regexStr = route.replace(/\(\.\*\)/g, ".*");
      const regex = new RegExp(`^${regexStr}$`);
      return regex.test(path);
    });
  };
};
