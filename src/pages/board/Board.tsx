import ImageCard from "../../components/ImageCard/ImageCard";
import { cardContainer, boardBanner, boardTitle } from "./Board.css";
import { useParams } from "react-router-dom";

const Board: React.FC = () => {
    const { boardId } = useParams();

    return (
        <div>
            <div className={boardBanner}>
                <div className={boardTitle}>{boardId}</div>
            </div>
            <div className={cardContainer}>
                <ImageCard />
                <ImageCard />
                <ImageCard />
            </div>
        </div>
    );
};

export default Board;
