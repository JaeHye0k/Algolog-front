import {
    blogInfo,
    profileBox,
    avatarBox,
    avatarImage,
    nameEnglish,
    nameKorean,
    infoContainer,
    nameContainer,
} from "./BlogInfo.css";
import avatar from "../../../assets/avatar.png";

interface Info {
    daliyVisitors: number;
    totalVisitors: number;
    postingNums: number;
    days: number;
}

const BlogInfo: React.FC = () => {
    const info: Info = {
        daliyVisitors: 1234,
        totalVisitors: 12345,
        postingNums: 12,
        days: 345,
    };
    return (
        <div className={blogInfo}>
            <div className={profileBox}>
                <div className={avatarBox}>
                    <img src={avatar} alt="프로필" className={avatarImage} />
                </div>
                <div className={nameContainer}>
                    <div className={nameEnglish}>jackson</div>
                    <div className={nameKorean}>잭슨</div>
                </div>
            </div>
            <div className={infoContainer}>
                <div>일일 방문자 수: {info.daliyVisitors} 명</div>
                <div>누적 방문자 수: {info.totalVisitors} 명</div>
                <div>포스팅 수: {info.postingNums} 개</div>
                <div>블로그 운영한지: {info.days} 일</div>
            </div>
        </div>
    );
};

export default BlogInfo;
