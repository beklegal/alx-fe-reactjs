import { createContext, useState } from "react";

// 1️⃣ Create the context
export const UserContext = createContext();

// 2️⃣ Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Guest", email: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
