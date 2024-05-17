import React from "react";
import { writeButton } from "../../../../styles/header.css";
import { useNavigate } from "react-router-dom";

const WriteButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button className={writeButton} onClick={() => navigate("/posting")}>
      새 글 작성
    </button>
  );
};

export default WriteButton;
