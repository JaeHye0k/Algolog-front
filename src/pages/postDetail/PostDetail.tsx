import { useParams } from "react-router-dom";
import { fetchPost } from "../../api/post";
import { useEffect, useState } from "react";

const PostDetail: React.FC = () => {
    const { postId } = useParams();
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        async function getPost(postId: string) {
            const res = await fetchPost(postId);
            const data = await res.json();
            console.log(data);
            setContent(data);
        }

        if (postId) getPost(postId);
    }, []);
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default PostDetail;
