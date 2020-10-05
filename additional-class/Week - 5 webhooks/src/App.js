import React, { useState } from "react";
import "./App.css";
import ShowResult from "./components/result";
import Axios from "axios";

const App = () => {
  const [description, setDescription] = useState("Deskripsi");
  const [valid, setValid] = useState("false");
  const [status, setStatus] = useState(200);
  const [posts, setPosts] = useState([]);
  const [onRefresh, setOnRefresh] = useState(false);
  const [notRefresh, setNotRefresh] = useState(false);

  let variable = {
    test: "testing variable",
  };

  React.useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));

    // Axios({
    //   method: "get",
    //   url: "https://jsonplaceholder.typicode.com/posts",
    // })
    //   .then((res) => {
    //     setPosts(res.data);
    //     console.log(res.data);
    //   })
    //   .catch((err) => console.log(err.message));
  }, [onRefresh]);
  return (
    <div style={{ padding: 15 }}>
      <p>React Hooks</p>
      <p>{description}</p>
      <p>{variable.test}</p>
      Title: <input onChange={(e) => setDescription(e.target.value)} />
      Deskripsi: <input onChange={(e) => (variable.test = e.target.value)} />
      <button onClick={() => setOnRefresh(!onRefresh)}>Refetch!</button>
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

export default App;
