import { useParams } from "react-router-dom";

const PostDetail: React.FC = () => {
  const { postId } = useParams();

  return <div>{postId}</div>;
};

export default PostDetail;
