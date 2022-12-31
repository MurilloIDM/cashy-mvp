import React from "react";

import { User } from "../utils/user";

export const AccessContext = React.createContext(null);

export interface IUser {
  fullname: string;
  firstname: string;
  avatarId: string;
  lessonsCode: string[];
}

export interface IValueAccessContext {
  user: IUser;
  updateValueUser: () => Promise<void>;
}

export function AccessProvider({ children }) {
  const [user, setUser] = React.useState<IUser>({
    fullname: "",
    firstname: "",
    avatarId: "",
    lessonsCode: []
  });

  async function updateValueUser() {
    const userData = await User.getUser();

    if (!userData) return;

    setUser(userData);
  }

  return (
    <AccessContext.Provider value={{ user, updateValueUser }}>
      {children}
    </AccessContext.Provider>
  );
}