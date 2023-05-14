import { JoinStyled } from "./style";
import { avatars, color } from "@/lib/const";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "boring-avatars";
import { useEffect, useState } from "react";

const MINNICKLENGTH = 2;
const MAXNICKLENGTH = 8;

export default function Join() {
  const [userAvatar, setUserAvatar] = useState(null);
  const [nickname, setNickname] = useState("");
  const [isJoinActive, setIsJoinActive] = useState(false);

  const setRandomAvatar = () => {
    setUserAvatar({
      name: avatars[Math.floor(Math.random() * 99)],
      colors: [color.orange, color.pink, color.blue, color.green].sort(() => Math.random() - 0.5),
    });
  };

  const onRandomAvatar = () => setRandomAvatar();

  const onInputNickname = (e) => {
    setNickname(e.target.value.trim());
  };

  useEffect(() => {
    setRandomAvatar();
  }, []);

  useEffect(() => {
    if (nickname.length >= MINNICKLENGTH && nickname.length <= MAXNICKLENGTH) {
      setIsJoinActive(true);
    } else {
      setIsJoinActive(false);
    }
  }, [nickname.length]);

  return (
    <JoinStyled isJoinActive={isJoinActive}>
      <div className="avatar-box">
        <span className="avatar">{userAvatar && <Avatar size="100%" name={userAvatar.name} variant="beam" colors={userAvatar.colors} />}</span>
        <button className="avatar-btn" type="button" onClick={onRandomAvatar}>
          <FontAwesomeIcon icon={faQuestion} />
        </button>
      </div>
      <div className="join-box">
        <div className="nick">
          <input type="text" placeholder="NICKNAME" value={nickname} minLength={MINNICKLENGTH} maxLength={MAXNICKLENGTH} onChange={onInputNickname} />
          <span className="vaildate">
            {MINNICKLENGTH} to {MAXNICKLENGTH} charcter
          </span>
        </div>
        <button type="button" className="join-btn">
          join
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </JoinStyled>
  );
}
