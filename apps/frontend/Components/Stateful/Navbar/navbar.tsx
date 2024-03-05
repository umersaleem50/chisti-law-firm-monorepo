"use client";
import Image from "next/image";
import classes from "./navbar.module.scss";
import Link from "next/link";
import Button from "../../Button/Button";
import { handle_appointment_event } from "@/utils/handler/bookeEventHandler";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import * as jose from "jose";
type navlinks = {
  name: string;
  url: string;
};

interface IProps {
  onClickAppointment?: (e: React.MouseEvent) => void;
  onClickLogin?: (e: React.MouseEvent) => void;
}

export const NAV_LINKS: navlinks[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Service",
    url: "/services",
  },
  {
    name: "Case Management",
    url: "/",
  },
  {
    name: "Blogs",
    url: "/blogs",
  },
  {
    name: "All Lawyers",
    url: "/lawyers",
  },
];

const generateLinks = (arr: navlinks[]) => {
  return arr.map(({ url, name }, i: number) => {
    return (
      <li key={i}>
        <Link href={url} legacyBehavior>
          <a className={classes["nav__link"]}>{name}</a>
        </Link>
      </li>
    );
  });
};
const Navbar = ({}) => {
  const [element, setElement] = useState<HTMLElement>();
  const router = useRouter();
  const handle_login_button = () => {
    router.push("/auth");
  };

  const handle_dashboard_redirect = () => {
    router.push("/admin/appointments");
  };

  const [jwtCookie, setCookie] = useCookies(["jwt"]);
  const [isAuth, setIsAuth] = useState(false);
  const verifyToken = async (token: any) => {
    try {
      const data = await jose.jwtVerify(
        token,
        new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRETKEY)
      );
      if (data.payload && data.protectedHeader) {
        setIsAuth(true);
      }
    } catch (error) {
      //   alert(error);
      // router.push("/auth");
    }
  };

  const handle_logout = () => {
    setCookie("jwt", "");
    router.push("/auth");
  };

  useEffect(() => {
    verifyToken(jwtCookie.jwt);
  }, []);

  useEffect(() => {
    const appointmentElement = document.getElementById("appointment-id");
    if (appointmentElement) setElement(appointmentElement);
  }, [element]);
  return (
    <div className={classes["navbar"]}>
      <div className={classes["container"]}>
        <Image
          width={50}
          height={60}
          alt="logo"
          src={"/assets/logo.png"}
          style={{ objectFit: "cover" }}
        />
        <nav>
          <ul className={classes["nav"]}>{generateLinks(NAV_LINKS)}</ul>
        </nav>
        <div className={classes["container__buttons"]}>
          {!isAuth ? (
            <Button
              varient="primary"
              onClick={() => handle_appointment_event(element)}
              customClasses={[classes["btn--cta"]]}
            >
              Book Appointment
            </Button>
          ) : (
            <Button
              varient="outline"
              onClick={() => handle_dashboard_redirect()}
              customClasses={[classes["btn--cta"]]}
            >
              Dashboard
            </Button>
          )}
          {!isAuth ? (
            <Button
              varient="outline"
              onClick={handle_login_button}
              customClasses={[classes["btn--login"]]}
            >
              login
            </Button>
          ) : (
            <Button
              varient="primary"
              onClick={handle_logout}
              customClasses={[classes["btn--logout"]]}
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
