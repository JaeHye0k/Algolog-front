import React, { FormEvent } from "react";
import {
  postingContainer,
  preview,
  posting,
  postingHeader,
  postingBody,
  postingFooter,
  title,
  buttonGroup,
} from "../../styles/posting.css";
import { Link, useNavigate } from "react-router-dom";

const Posting: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className={postingContainer}>
      <form className={posting} onSubmit={handleSubmit}>
        <div className={postingHeader}>
          <input className={title} placeholder="제목을 입력하세요"></input>
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
