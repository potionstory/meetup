import { MenuBoxStyled } from "./style";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function MenuBox({ menu }) {
  const { title, icon, color, url } = menu;

  return (
    <MenuBoxStyled color={color}>
      <div className="menu-inner">
        <span className="menu-title">{title}</span>
        <span className="menu-icon">
          <FontAwesomeIcon icon={icon} />
        </span>
        <Link href={url} className="menu-link">
          details more
          <span class="link-icon">
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </Link>
      </div>
    </MenuBoxStyled>
  );
}
