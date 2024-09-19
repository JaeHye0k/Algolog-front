import { useParams } from "react-router-dom";
import { getPost } from "../../api/post";
import { useEffect, useState } from "react";

const PostDetail: React.FC = () => {
    const { postId } = useParams();
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        async function fetchPost(postId: string) {
            const res = await getPost(postId);
            const data = await res.json();
            console.log(data);
            setContent(data);
        }

        if (postId) fetchPost(postId);
    }, []);
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default PostDetail;
