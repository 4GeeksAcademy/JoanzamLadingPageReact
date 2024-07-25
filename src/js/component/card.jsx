import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = () => {
  return (
    <div className="container mx-3 p-3">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-3 mb-4 d-flex">
          <div className="card flex-fill" style={{ width: "18rem" }}>
            <img src={rigoImage} className="card-img-top" alt="Rigo Baby" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4 d-flex">
          <div className="card flex-fill" style={{ width: "18rem" }}>
            <img src={rigoImage} className="card-img-top" alt="Rigo Baby" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4 d-flex">
          <div className="card flex-fill" style={{ width: "18rem" }}>
            <img src={rigoImage} className="card-img-top" alt="Rigo Baby" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4 d-flex">
          <div className="card flex-fill" style={{ width: "18rem" }}>
            <img src={rigoImage} className="card-img-top" alt="Rigo Baby" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;