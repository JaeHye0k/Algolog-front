import { Link } from "react-router-dom";

const Menus: string[] = ["algorithm"];

const DropdownMenu: React.FC = () => {
  return (
    <ul>
      {Menus.map((menu, idx) => (
        <li key={idx}>
          <Link to={`./${menu}`}>{menu.toUpperCase()}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
