import { MainStyled } from "./style";
import { faChildren, faCode, faDoorOpen, faGift, faMessage } from "@fortawesome/free-solid-svg-icons";
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
        코로나 이후 찾아온 첫번째 <b>정모</b>
        <br />
        OFFLINE에서 실제로 만날 수 있는 <b>기회</b>
        <br />
        다양한 음식과 이벤트로 다시 찾아온 풍성한 <b>시간</b>
      </p>
      <div className="menu">
        <div className="menu-box">
          <div className="menu-inner">
            <button type="button">
              <span className="icon">
                <FontAwesomeIcon icon={faCode} />
              </span>
              <span class="name">intro</span>
            </button>
          </div>
        </div>
        <div className="menu-box">
          <div className="menu-inner">
            <button type="button">
              <span className="icon">
                <FontAwesomeIcon icon={faChildren} />
              </span>
              <span class="name">member</span>
            </button>
          </div>
        </div>
        <div className="menu-box">
          <div className="menu-inner">
            <button type="button">
              <span className="icon">
                <FontAwesomeIcon icon={faGift} />
              </span>
              <span class="name">event</span>
            </button>
          </div>
        </div>
        <div className="menu-box">
          <div className="menu-inner">
            <button type="button">
              <span className="icon">
                <FontAwesomeIcon icon={faDoorOpen} />
              </span>
              <span class="name">join</span>
            </button>
          </div>
        </div>
      </div>
    </MainStyled>
  );
}
