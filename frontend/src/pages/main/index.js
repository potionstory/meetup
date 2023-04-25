import { MainStyled } from "./style";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <em>코로나</em> 이후 찾아온 첫번째 <b>정모</b>
        <br />
        <em>OFFLINE</em>에서 실제로 만날 수 있는 <b>기회</b>
        <br />
        다양한 <em>음식</em>과 <em>이벤트</em>로 다시 찾아온 풍성한 <b>시간</b>
      </p>
    </MainStyled>
  );
}
