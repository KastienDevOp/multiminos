import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://i.imgur.com/04jBaMO.png"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              Email: <a href="mailto:katareborn215@gmail.com"> KataReborn </a>
            </p>
            <p>
              Discord: <a href="https://discord.gg/6v8X6eUC8Q"> Multimino </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;