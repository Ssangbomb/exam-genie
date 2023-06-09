import { Link } from "react-router-dom";
import "../styles/TopMenu2.scss";

import logo from "../images/Exam-genie1.png";
import { FaHome, FaBookReader, FaChartLine, FaGithubAlt, FaPeopleArrows } from "react-icons/fa";

import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Auth0/login";
import LogoutButton from "../Auth0/logout";
import Profile from "../Auth0/profile";

const TopMenu2 = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="topNav">
      <div className="topNav-container">
        <img
          className="topNav-container--navigation--img"
          src={logo}
          alt="brand"
        />
        <div className="topNav-container--navigation">
          <Link to="/">
            <FaHome />
            Home
          </Link>
          <Link to="/about">
            <FaGithubAlt />
            About Us
          </Link>
          {isAuthenticated && (
            <>
              <Link to="/create">
                <FaBookReader />
                Test Exam
              </Link>
              <Link to="/game">
                <FaPeopleArrows />
                Player Challenge
              </Link>
              <Link to="/dashboard">
                <FaChartLine />
                Dashboard
              </Link>
            </>
          )}
        </div>

        <div class="navigation_login">
          <a class="Buttonlogin" href="/">
            <div id="profile">
              <Profile />
            </div>
            {isAuthenticated ? (
              <div class="logout">
                <LogoutButton />
              </div>
            ) : (
              <div class="logout">
                <LoginButton />
              </div>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

{
  /* {isAuthenticated ? <LogoutButton /> : <LoginButton />} */
}

export default TopMenu2;
