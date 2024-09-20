import gold5 from "../../assets/gold5.png";
import { imageCard, thumbnail } from "./ImageCard.css";
import { useNavigate, useLocation } from "react-router-dom";

const ImageCard: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;

    return (
        <div className={imageCard} onClick={() => navigate(`${currentPath}/1`)}>
            <img src={gold5} className={thumbnail}></img>
            <div>
                <div>제목</div>
            </div>
        </div>
    );
};

export default ImageCard;
