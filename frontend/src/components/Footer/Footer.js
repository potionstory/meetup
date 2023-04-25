import { FooterStyled } from "./style";
import Link from "next/link";

export default function Footer() {
  return (
    <FooterStyled>
      <span className="copyright">
        Copyright &copy; 2023 <Link href="/">FE MEETUP.</Link> All rights reserved.
      </span>
    </FooterStyled>
  );
}
