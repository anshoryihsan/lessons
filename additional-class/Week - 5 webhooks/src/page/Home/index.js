import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

class Home extends React.Component {
  render() {
    console.log("props", this.props);

    const { history } = this.props
    return (
      <div style={{ padding: 15 }}>
        <p>Homies</p>
        <button onClick={() => history.push("/users")}>
          ke Users
        </button>
        <button onClick={() => history.goBack()}>Kembali</button>
        {/* <Link to="/users">
          <button>Ke Users</button>
        </Link> */}
      </div>
    );
  }
}
// const Home = (props) => {
//   let history = useHistory();
//   return (
// <div style={{ padding: 15 }}>
//   <p>Homies</p>
//   <button onClick={() => history.push("/users")}>ke Users</button>
// </div>
//   );
// };
export default Home;
