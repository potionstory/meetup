import { MainStyled } from "./style";
import MenuBox from "@/components/MenuBox";
import { color } from "@/lib/const";
import { faChildren, faDoorOpen, faGift, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menuArray = [
  {
    title: "intro",
    icon: faMessage,
    color: color.orange,
    url: "/intro",
  },
  {
    title: "member",
    icon: faChildren,
    color: color.green,
    url: "/member",
  },
  {
    title: "event",
    icon: faGift,
    color: color.pink,
    url: "/event",
  },
  {
    title: "join",
    icon: faDoorOpen,
    color: color.blue,
    url: "/join",
  },
];

export default function Main() {
  return (
    <MainStyled>
      <h2>
        <span className="icon">
          <FontAwesomeIcon icon={faMessage} />
        </span>
        FE MEETUP 2023
      </h2>
      <p className="description">
        코로나 이후 찾아온 첫번째 <b>정모</b>
        <br />
        OFFLINE에서 실제로 만날 수 있는 <b>기회</b>
        <br />
        다양한 음식과 이벤트로 다시 찾아온 풍성한 <b>시간</b>
      </p>
      <div className="menu">
        {menuArray.map((menu) => (
          <MenuBox key={menu.title} menu={menu} />
        ))}
      </div>
    </MainStyled>
  );
}
