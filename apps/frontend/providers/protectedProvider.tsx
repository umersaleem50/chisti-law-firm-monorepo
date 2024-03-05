"use client";
import Loading_Spinner from "@/Components/Stateless/Loading_Spinner/Loading_Spinner";

import * as jose from "jose";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { CookiesProvider, useCookies } from "react-cookie";
function Protected({ children }: { children: any }) {
  const [jwtCookie] = useCookies(["jwt"]);
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();
  const verifyToken = async (token: any) => {
    try {
      const data = await jose.jwtVerify(
        token,
        new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRETKEY)
      );
      if (data.payload && data.protectedHeader) {
        setIsAuth(true);
        sessionStorage.setItem("account", JSON.stringify(data.payload));
      }
    } catch (error) {
      //   alert(error);
      router.push("/auth");
    }
  };
  useEffect(() => {
    verifyToken(jwtCookie.jwt);
  }, []);
  return (
    <CookiesProvider>
      {!isAuth ? <Loading_Spinner /> : children}
    </CookiesProvider>
  );
}

export default Protected;
