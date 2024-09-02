import React, { ChangeEvent, FormEvent, useState } from "react";
import {
    postingContainer,
    preview,
    posting,
    postingHeader,
    postingBody,
    postingFooter,
    title,
    buttonGroup,
} from "./Posting.css";
import { Link, useNavigate } from "react-router-dom";

const Posting: React.FC = () => {
    const navigate = useNavigate();
    const [titleData, setTitleData] = useState<string>("");
    const [contentData, setContentData] = useState<string>("content");
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const response = await fetch("/api/insertBoardData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: titleData,
                date: new Date(),
                content: contentData,
            }),
        });
        if (response.ok) navigate("/");
        else console.error("Failed to submit form");
    };
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setTitleData(newValue);
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
                <div className={postingBody}>본문</div>
                <div className={postingFooter}>
                    <Link to="/">나가기</Link>
                    <div className={buttonGroup}>
                        <button>미리보기</button>
                        <button>임시저장</button>
                        <button type="submit">작성하기</button>
                    </div>
                </div>
            </form>
            <div className={preview}>미리보기</div>
        </div>
    );
};

export default Posting;
