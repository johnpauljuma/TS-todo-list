import { createContext } from "react";
import { UserProps } from "../types/user.ts";
import { defaultUser } from "../constants/defaultUser";

export const UserContext = createContext<UserProps>({ user: defaultUser, setUser: () => {} });
