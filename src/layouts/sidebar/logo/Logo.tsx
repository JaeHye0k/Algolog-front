import { blogName, blogNameSuffix, logo } from "./Logo.css";
import { useNavigate } from "react-router-dom";

const Logo: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={logo} onClick={() => navigate("/")}>
            <span className={blogName}>jackson</span>
            <span className={blogNameSuffix}>log</span>
        </div>
    );
};

export default Logo;
