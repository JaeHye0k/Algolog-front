import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.tsx";
import AppLayout from "../layouts/AppLayout.tsx";
import NotFound from "../pages/notFound/NotFound.tsx";
import Board from "../pages/board/Board.tsx";
import PostDetail from "../pages/postDetail/PostDetail.tsx";
import Post from "../pages/post/Post.tsx";

const Routing: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path=":boardId">
                        <Route index element={<Board />} />
                        <Route path=":postId" element={<PostDetail />} />
                    </Route>
                </Route>
                <Route path="/post" element={<Post />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
