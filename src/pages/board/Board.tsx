import { useEffect, useState } from "react";
import ImageCard from "../../components/ImageCard/ImageCard";
import { cardContainer, boardBanner, boardTitle } from "./Board.css";
import { useParams } from "react-router-dom";
import { fetchAllPosts } from "../../api/post";
import { Post } from "../../types/post.type";

const Board: React.FC = () => {
    const { boardId } = useParams();
    const [posts, setPosts] = useState<Post[] | null>(null);
    useEffect(() => {
        async function fetchPosts() {
            const res = await fetchAllPosts();
            if (res.ok) {
                const data = await res.json();
                setPosts(data);
            } else console.error(`Error: ${res.status} ${res.statusText}`);
        }
        fetchPosts();
    }, []);

    return (
        <div>
            <div className={boardBanner}>
                <div className={boardTitle}>{boardId}</div>
            </div>
            <ul className={cardContainer}>
                {posts?.map((post: Post, idx) => (
                    <li key={idx}>
                        <ImageCard post={post} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Board;
