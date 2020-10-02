import React, { Component } from "react";
import Axios from "axios";
import { Card, Form } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import './src/style.css'
class Transfer extends Component {
  state = {
    data: [],
    query: this.props.location.search || null,
    querySearch: this.props.location.search.slice(3) || null,
  };
  componentDidMount() {
    Axios.get(
      this.state.query
        ? `https://zwallet-api.herokuapp.com/transfer/search${this.state.query}`
        : "https://zwallet-api.herokuapp.com/transfer/"
    )
    // Axios.get(`https://zwallet-api.herokuapp.com/transfer/${this.state.query}`)
      .then((res) => {
        this.setState({ data: res.data.data });
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  render() {
    console.log(this.props, 'aha')
    return (
      <>
        <form method="get">
          <Form.Control
            value={this.state.querySearch}
            onChange={(e) => this.setState({ querySearch: e.target.value })}
            // onSubmit={()=> }
            placeholder="Search"
            name="q"
          />
        </form>
        {this.state.data.map((item, index) => {
          return (
            <Card style={{ padding: 15 }}>
              {item.name}
            </Card>
          );
        })}
      </>
    );
  }
}

export default Transfer;
