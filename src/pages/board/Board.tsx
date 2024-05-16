import ImageCard from "../../components/ImageCard";
import { cardContainer } from "../../styles/board.css";
import { useParams } from "react-router-dom";

const Board: React.FC = () => {
  const { boardId } = useParams();

  return (
    <div>
      <div>{boardId}</div>
      <div className={cardContainer}>
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  );
};

export default Board;
