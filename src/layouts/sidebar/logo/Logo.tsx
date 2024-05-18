import { blogName, blogNameSuffix, logo } from "../../../styles/sidebar.css";

const Logo: React.FC = () => {
  return (
    <div className={logo}>
      <span className={blogName}>jackson</span>
      <span className={blogNameSuffix}>log</span>
    </div>
  );
};

export default Logo;
