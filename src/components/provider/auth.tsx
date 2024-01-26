"use client";

import React, {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

interface AuthContext {
  currentUser: User | null;
  loading: boolean;
  userSignOut: () => void;
}

const AuthContext = createContext<AuthContext | undefined>(undefined);

const publicPages = ["/login", "/signup"];

export const useAuth = (): AuthContext => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const pathName = usePathname();
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setLoading(true);
    const listen = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        localStorage.setItem("user", "true");
      }else{
        localStorage.setItem("user", "false");
      }
    });
    setLoading(false);
    return () => listen();
  }, []);

  const userSignOut = async () => {
    try {
      toast.loading("Logging out...");
      await signOut(auth).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorMessage);
      });
      toast.success("Logged Out");
      localStorage.setItem("user", "false");
      router.push("/login");
    } catch (err) {
      console.log(err);
    }
    toast.dismiss();
  };

  // useEffect(() => {
  //   console.log(currentUser);

  //   const user = localStorage.getItem("user") === "true";

  //   console.log(
  //     user,
  //     publicPages.includes(pathName),
  //     pathName,
  //     localStorage.getItem("user")
  //   );

  //   if (user && publicPages.includes(pathName) && !redirect) {
  //     toast("You're already logged in", { duration: 2000 });
  //     router.push("/");
  //     setRedirect(true);
  //     return;
  //   }
  //   if (!user && !publicPages.includes(pathName) && !redirect) {
  //     setRedirect(true);

  //     toast("You're not logged in", { duration: 2000 });
  //     router.push("/login");
  //     return;
  //   }
  //   return () => {
  //     setRedirect(false);
  //   };
  // }, [pathName]);
  

  const authValue: AuthContext = {
    currentUser,
    loading,
    userSignOut,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
