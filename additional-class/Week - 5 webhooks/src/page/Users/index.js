import React, { useState } from "react";
import ShowResult from "../../components/result";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Users = () => {
  const [description, setDescription] = useState("Deskripsi");
  const [valid, setValid] = useState("false");
  const [status, setStatus] = useState(200);
  const [posts, setPosts] = useState([]);
  const [onRefresh, setOnRefresh] = useState(false);
  const [notRefresh, setNotRefresh] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let history = useHistory();
  let variable = {
    test: "testing variable",
  };

  React.useEffect(() => {
    Axios.get("https://zwallet-api.herokuapp.com/users")
      .then((res) => {
        setPosts(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, [onRefresh]);

  const onSubmit = () => {
    // e.preventDefault()
    Axios.post("https://zwallet-api.herokuapp.com/users",{
      name: "Arungi Samudra",
      email: email,
      password: password,
      pin: "777",
      photo: "",
      phone: "",
      balance: 0,
      verified: 0,
    })
    .then((res) => {
      setOnRefresh(!onRefresh)
      alert('data Berhasil di Input')
    })
    .catch((err) => console.log(err.message));
  }
  return (
    <div style={{ padding: 15 }}>
      <button onClick={() => history.push("/")}>ke Home</button>
      {/* <button onClick={() => history.push("/")}>ke Home</button> */}
      <button onClick={() => history.goBack()}>Kembali</button>
      <p>React Hooks</p>
      <p>{description}</p>
      <p>{variable.test}</p>
      <form>
        Email: <input onChange={(e) => setEmail(e.target.value)} />
        Password: <input onChange={(e) => setPassword(e.target.value)} />

      </form>
      <button onClick={() => onSubmit()}>Refetch!</button>
      <button onClick={() => setNotRefresh(!notRefresh)}>Can't!</button>
      <ShowResult
        description={description}
        test={variable.test}
        valid={valid}
        status={status}
        data={posts}
      />
    </div>
  );
};

// class App extends React.Component {
//   state = {
//     description: "deskripsi",
//     valid: "valid",
//     status: "status 200",
//   };
//   render() {
//     return (
//       <div style={{ padding: 15 }}>
//         <p>React Hooks</p>
//         <p>{this.state.description}</p>
//         <input
//           onChange={(e) => this.setState({ description: e.target.value })}
//         />

//         <button>Check!</button>
//         <ShowResult
//           description={this.state.description}
//           valid={this.state.valid}
//           status={this.state.status}
//         />
//       </div>
//     );
//   }
// }
export default Users;
