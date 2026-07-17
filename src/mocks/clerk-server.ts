export const auth = () => {
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
    getUser: async (id: string) => ({
      id,
      publicMetadata: { role: "admin" },
      emailAddresses: [{ id: "eml_1", emailAddress: "admin@example.com" }]
    }),
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

export const clerkMiddleware = (handler: any) => {
  return async (req: any, event: any) => {
    // Mock middleware: Let all requests pass through
    return;
  };
};

export const createRouteMatcher = (routes: string[]) => {
  return (req: any) => {
    // Return false so nothing gets blocked by the mock
    return false;
  };
};
