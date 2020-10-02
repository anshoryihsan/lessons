import React, { Component } from "react";
import { Lists, Users } from "./components";

const styles = {
  button: {
    backgroundColor: "#0f0",
  },
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "Tova Maulana Irvan",
      favoriteFilms: [
        { id: 1, title: "Back To the Future 2" },
        { id: 2, title: "Basketball" },
      ],
    };
  }
//   componentWillMount() {
//     console.log('willMount')
//     alert('willMount')
//   }
  componentDidMount() {
    console.log('didmount')
    // alert('didmount')
    
  }
  componentDidUpdate() {
    console.log("didUpdate");
    // alert("didUpdate");
  }
  render() {
    const changeName = (value) => {
      this.setState({ nama: value });
    };
    console.log('onRender')
    return (
      <>
        <div>halo: {this.state.nama}</div>
        <button
          style={styles.button}
          onClick={() => changeName("Laily Nurmila")}
        >
          Ubah Nama
        </button>
        <Lists fav={this.state.favoriteFilms} />
        <Users fav={this.state.favoriteFilms} />
      </>
    );
  }
}

export default Home;
