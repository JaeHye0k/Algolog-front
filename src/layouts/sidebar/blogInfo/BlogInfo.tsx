import { profile, blogInfo } from "../../../styles/sidebar.css";

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
      <div className={profile}>
        <div>프로필 사진</div>
        <div>활동중</div>
        <div>이름 영어</div>
        <div>이름 한글</div>
      </div>
      <div>
        <div>일일 방문자 수: {info.daliyVisitors} 명</div>
        <div>누적 방문자 수: {info.totalVisitors} 명</div>
        <div>포스팅 수: {info.postingNums}</div>
        <div>블로그 운영한지: {info.days}</div>
      </div>
    </div>
  );
};

export default BlogInfo;
