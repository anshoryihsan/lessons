import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
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
      data: [
        {
          id: 1,
          title: "Indahnya Pemandangan",
          description: "Gambar pegunungan 1",
          image:
            "https://cdn.pixabay.com/photo/2020/08/25/00/48/mountains-5515324__340.jpg",
        },
        {
          id: 2,
          title: "Banyak orang-orang",
          description: "Gambar pegunungan 2",
          image:
            "https://cdn.pixabay.com/photo/2020/08/25/00/48/mountains-5515324__340.jpg",
        },
      ],
      show: false,
    };
  }
  //   componentWillMount() {
  //     console.log('willMount')
  //     alert('willMount')
  //   }
  componentDidMount() {
    console.log("didmount");
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
    const closeModal = () => {
      this.setState({ show: false });
    };
    console.log("onRender");
    return (
      <>
        <div>halo: {this.state.nama}</div>
        <Button onClick={() => this.setState({ show: true })}>
          Show Modal
        </Button>
        <button
          style={styles.button}
          onClick={() => changeName("Laily Nurmila")}
        >
          Ubah Nama
        </button>
        <Lists fav={this.state.data} />

        <Modal show={this.state.show} onHide={() => closeModal()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => closeModal()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => closeModal()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Home;
