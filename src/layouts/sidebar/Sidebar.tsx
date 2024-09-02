import { hrLine, sidebar } from "./Sidebar.css.ts";
import BlogInfo from "./blogInfo/BlogInfo.tsx";
import Category from "./category/Category.tsx";
import Logo from "./logo/Logo.tsx";

const Sidebar: React.FC = () => {
    return (
        <div className={sidebar}>
            <Logo />
            <BlogInfo />
            <hr className={hrLine} />
            <Category />
        </div>
    );
};

export default Sidebar;
