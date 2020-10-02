import React from "react";

const Lists = (props) => {
  const { fav } = props;
  return (
    <div className="container">
      <div className="row">
        {fav.map((item, index) => {
          return (
            <div className="item col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <div className="card">
                <img class="img" src={item.image} />
                <div class="card-description">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lists;
