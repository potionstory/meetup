import { JoinStyled } from "./style";
import { avatars, color } from "@/lib/const";
import { faDiceFive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "boring-avatars";
import { useEffect, useState } from "react";

export default function Join() {
  const [userAvatar, setUserAvatar] = useState(null);

  const setRandomAvatar = () => {
    setUserAvatar({
      name: avatars[Math.floor(Math.random() * 99)],
      colors: [color.orange, color.pink, color.blue, color.green].sort(() => Math.random() - 0.5),
    });
  };

  const onRandomAvatar = () => setRandomAvatar();

  useEffect(() => {
    setRandomAvatar();
  }, []);

  return (
    <JoinStyled>
      <div className="avatar-box">
        <span className="avatar">{userAvatar && <Avatar size="100%" name={userAvatar.name} variant="beam" colors={userAvatar.colors} />}</span>
        <button className="btn" type="button" onClick={onRandomAvatar}>
          <FontAwesomeIcon icon={faDiceFive} />
        </button>
      </div>
    </JoinStyled>
  );
}
