import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="home">
      <div class="container">
        <Link to="/blog/blog-posts">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://i.imgur.com/JOWn3HY.png"
                alt=""
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Blogging the proccess</h1>
              <p>
                Posts about the development of the site
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Posts;