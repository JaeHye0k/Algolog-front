import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { avatar, iconmenu } from "../../../styles/header.css";
import WriteButton from "./writeButton/WriteButton";

const IconMenu: React.FC = () => {
  return (
    <div className={iconmenu}>
      <WriteButton />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <FontAwesomeIcon icon={faCommentDots} />
      <div className={avatar}></div>
    </div>
  );
};

export default IconMenu;
