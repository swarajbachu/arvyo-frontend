'use client'

import React, {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

interface AuthContext {
  currentUser: User | null;
  loading: boolean;
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

  useEffect(() => {
    setLoading(true);
    const listen = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    setLoading(false);
    return () => listen();
  }, []);

  useEffect(() => {
    if (currentUser && (publicPages.includes(pathName))){
      toast("You're already logged in");
      toast('You can logout by clicking on "Logout" button');
      router.push("/");
    }
    if (!currentUser && !publicPages.includes(pathName)) {
      toast.error("You're not logged in");
      toast("Please login to continue");
      router.push("/login");
    }
    toast.dismiss();
  }, [currentUser, pathName, router]);

  const authValue: AuthContext = {
    currentUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
