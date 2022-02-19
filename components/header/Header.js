import Link from "next/link";
import Image from "next/image";
import Nav from "../header/Nav";
import NavUl from "../header/NavUl";
import AnchorTag from "./AnchorTag";
import { useRouter } from "next/router";

export const Header = () => {
  const navList = [
    {
      label: "Projects",
      url: "/projects",
    },
    {
      label: "Info",
      url: "/info",
    },
  ];

  const router = useRouter();

  function getActivePath(inputPath = "") {
    return router.pathname === inputPath;
  }

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
          {navList.map(({ label, url }) => (
            <li key={url}>
              <Link href={url} passHref>
                <AnchorTag isActive={getActivePath(url)}>{label}</AnchorTag>
              </Link>
            </li>
          ))}
        </NavUl>
      </Nav>
    </>
  );
};
