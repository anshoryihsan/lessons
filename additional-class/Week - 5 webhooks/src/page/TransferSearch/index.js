import React from "react";
import { Sidebar } from "../../components";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Loading } from "./Components";
const Content = (props) => {
  const [users, setUsers] = React.useState("");
  const [query, setQuery] = React.useState("");
  React.useEffect(() => {
    Axios({
      method: "get",
      url: `https://zwallet-api.herokuapp.com/${
        !query ? "users" : `transfer/search?q=${query}`
      }`,
    })
      .then((res) => setUsers(res.data.data))
      .catch((err) => console.log(err.message));
  }, [query]);
  return (
    <>
      <div class="col-lg-9 pl-3">
        <div class="p-4 bg-white side-nav-right shadow-sm">
          <div class="d-flex justify-content-between align-items-center">
            <div class="font-weight-bold">Search Receiver</div>
          </div>

          <div class="input-container-bordered my-2">
            <label class="d-flex w-100 align-items-center">
              <span class="i-search"></span>
              <input
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search receiver here"
                type="text"
                class="input-line"
              />
            </label>
          </div>
          {!users ? (
            <Loading />
          ) : (
            users.map((item, index) => {
              return (
                <div
                  onClick={() =>
                    props.history.push({
                      pathname: "/transfer/amount",
                      receiver: {
                        name: item.name,
                        phone: item.phone,
                        id: query ? item.user_id:item.id,
                      },
                    })
                  }
                  class="d-flex align-items-center justify-content-between shadow-sm rounded-14 pl-3 mt-2 py-3"
                >
                  {/* {index+1} */}
                  <div class="d-flex align-items-center">
                    <img src="/assets/images/1.png" height="56px" width="56px" />
                    <div class="pl-3">
                      <div class="font-weight-bold text-dark">{item.name}</div>
                      <div class="small text-dark">{`+62 ${item.phone}`}</div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
const TransferSearch = (props) => {
  return (
    <div className="bg-secondary">
      <section class="my-5 container">
        <div class="row">
          <Sidebar />
          <Content {...props} />
        </div>
      </section>
    </div>
  );
};

export default TransferSearch;
