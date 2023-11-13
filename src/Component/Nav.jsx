import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to={"/html"}>기본 정보</Link>
      <Link to={"/css"}>자기소개</Link>
      <Link to={"/js"}>연혁</Link>
      <Link to={"/reactjs"}>비전</Link>
      <Link to={"/nodejs"}>작업물</Link>
    </nav>
  );
}

export default Nav;
