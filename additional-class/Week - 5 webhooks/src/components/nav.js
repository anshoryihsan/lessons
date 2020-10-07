import React from "react";
import Axios from "axios";
import { TextBlock } from "react-placeholder/lib/placeholders";

const Nav = () => {
  const [profileData, setProfileData] = React.useState("");
  React.useEffect(() => {
    Axios.get("http://zwallet-api.herokuapp.com/users/1")
      .then((res) => setProfileData(res.data.data[0]))
      .catch((err) => console.log(err));
  }, []);
  return (
    <nav className="navbar myNav navbar-dark">
      <div className="container">
        <div className="d-flex justify-content-start">
          <h2 className="mt-3 mb-3 ml-3" id="zwallet-icon-blue">
            Zwallet
          </h2>
        </div>
        <div className="d-flex justify-content-end">
          <img src="https://e-money-zwallet.netlify.app/components/profile1.svg" />
          <div className=" d-flex flex-column mr-3">
            <span id="profile-name" className="ml-3 mt-1">
              {profileData ? (
                profileData.name
              ) : (
                <TextBlock
                  rows={1}
                  style={{ width: 170, marginBottom: 10, height: 25 }}
                  color="#f0f0f0"
                />
              )}
            </span>
            <small id="profile-number" className="ml-3 mb-1">
              {profileData ? (
                profileData.email
              ) : (
                <TextBlock
                  rows={1}
                  style={{ width: 150, }}
                  color="#f0f0f0"
                />
              )}
            </small>
          </div>
          <img
            src="https://e-money-zwallet.netlify.app/components/bell.svg"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
