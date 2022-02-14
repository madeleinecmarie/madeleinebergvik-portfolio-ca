import Link from "next/link";
import Image from "next/image";
import Nav from "../header/Nav";
import NavUl from "../header/NavUl";
import AnchorTag from "./AnchorTag";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <>
      <Nav>
        <Link href="/" passHref>
          <a>
            <Image
              src="/images/logo.png"
              width="100%"
              height="30px"
              alt="MB. logo"
              className="logo"
            ></Image>
          </a>
        </Link>
        <NavUl>
          <li>
            <Link href="/projects" passHref>
              <AnchorTag
                className={router.pathname === "/projects" ? "active" : ""}
              >
                Projects
              </AnchorTag>
            </Link>
          </li>
          <li>
            <Link href="/info" passHref>
              <AnchorTag
                className={router.pathname === "/info" ? "active" : ""}
              >
                Info
              </AnchorTag>
            </Link>
          </li>
        </NavUl>
      </Nav>
    </>
  );
};
