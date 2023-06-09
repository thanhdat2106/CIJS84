import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="alert alert-primary" role="alert">
            <Link className="text-decoration-none" to="/lesson9">
              {" "}
              Lesson 9
            </Link>
          </div>
        </div>
        <div class="col">
          <div class="alert alert-secondary" role="alert">
            <Link className="text-decoration-none" to="/countNumber">
              {" "}
              Count Number
            </Link>
          </div>
        </div>
        <div class="col">
          <div class="alert alert-success" role="alert">
            <Link className="text-decoration-none" to="/trafficLight">
              {" "}
              Traffic Light
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
