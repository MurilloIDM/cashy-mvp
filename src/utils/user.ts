import * as SecureStore from "expo-secure-store";

import { IUser } from "../context/AccessContext";

export class User {

  static async getUser(): Promise<IUser | null> {
    const userJSON = await SecureStore.getItemAsync("user");

    if (typeof userJSON === "string") {
      return JSON.parse(userJSON);
    }

    return null;
  }

  static async setUser(user: IUser): Promise<void> {
    const userJSON = JSON.stringify(user);
    await SecureStore.setItemAsync("user", userJSON);
  }

}