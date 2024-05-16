import { sidebar } from "../../styles/sidebar.css.ts";
import BlogInfo from "./blogInfo/BlogInfo.tsx";
import Category from "./category/Category.tsx";
import Logo from "./logo/Logo.tsx";

const Sidebar: React.FC = () => {
  return (
    <div className={sidebar}>
      <Logo />
      <BlogInfo />
      <Category />
    </div>
  );
};

export default Sidebar;
