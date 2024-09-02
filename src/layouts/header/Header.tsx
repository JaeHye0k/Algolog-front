import { header } from "./Header.css.ts";
import DropdownMenu from "./dropdownMenu/DropdownMenu.tsx";
import IconMenu from "./iconMenu/IconMenu.tsx";

const Header: React.FC = () => {
    return (
        <div className={header}>
            <div></div>
            <DropdownMenu />
            <IconMenu />
        </div>
    );
};

export default Header;
