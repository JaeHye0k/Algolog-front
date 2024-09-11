import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import {
    postingContainer,
    posting,
    postingHeader,
    postingFooter,
    title,
    buttonGroup,
} from "./Posting.css";
import { Link, useNavigate } from "react-router-dom";
import ToastEditor from "../../components/ToastEditor/ToastEditor";

const Posting: React.FC = () => {
    const navigate = useNavigate();
    const [titleData, setTitleData] = useState<string>("");
    const contentData = useRef<string>(" ");

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setTitleData(newValue);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const response = await fetch(`${import.meta.env.VITE_SERVER_ORIGIN}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                category_id: "algorithm",
                content: contentData.current,
                title: titleData,
            }),
        });
        if (response.ok) navigate("/");
        else console.error("Failed to submit form");
    };

    return (
        <div className={postingContainer}>
            <form className={posting} onSubmit={handleSubmit}>
                <div className={postingHeader}>
                    <input
                        className={title}
                        placeholder="제목을 입력하세요"
                        onChange={handleTitleChange}
                    ></input>
                    <div>태그</div>
                </div>
                <ToastEditor contentData={contentData} />
                <div className={postingFooter}>
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

export default Posting;
