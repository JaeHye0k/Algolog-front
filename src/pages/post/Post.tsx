import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { postContainer, post, postHeader, postFooter, title, buttonGroup } from "./Post.css";
import { Link, useNavigate } from "react-router-dom";
import ToastEditor from "../../components/ToastEditor/ToastEditor";
import { postPost } from "../../api/post";

const Post: React.FC = () => {
    const navigate = useNavigate();
    const [titleData, setTitleData] = useState<string>("");
    const contentData = useRef<string>(" ");

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setTitleData(newValue);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const res = await postPost("category", contentData.current, titleData);
        if (res.ok) navigate("/");
        else console.error(`Error: ${res.status} ${res.statusText}`);
    };

    return (
        <div className={postContainer}>
            <form className={post} onSubmit={handleSubmit}>
                <div className={postHeader}>
                    <input
                        className={title}
                        placeholder="제목을 입력하세요"
                        onChange={handleTitleChange}
                    ></input>
                    <div>태그</div>
                </div>
                <ToastEditor contentData={contentData} />
                <div className={postFooter}>
                    <Link to="/">나가기</Link>
                    <div className={buttonGroup}>
                        <button>임시저장</button>
                        <button type="submit">작성하기</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Post;
