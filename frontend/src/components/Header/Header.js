import { HeaderStyled } from "./style";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderStyled>
      <h1>
        <Link href="/">
          <span className="icon">
            <FontAwesomeIcon icon={faMessage} />
          </span>
          FE Meetup
        </Link>
      </h1>
    </HeaderStyled>
  );
}
