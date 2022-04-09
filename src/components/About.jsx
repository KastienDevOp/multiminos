import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://i.imgur.com/G3xlsl1.png"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              Multiminos is an attempt at bringing back all the greatness the Tetris with friends once was.
              It will be a slow proccess, but it will be worth it! In time there will be a lot of fun and game
              modes to play and obviously leaderboards (Because someone always has to be the best ;P). If you are
              interested in being a part of the development of this project, my contact information is in the contact
              page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;