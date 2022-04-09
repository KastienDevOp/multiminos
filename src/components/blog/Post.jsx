import React, { useEffect } from "react";
import { useParams } from "react-router";

function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  return (
    <div className="home">
      <div class="container">
        <h1 className="mt-5">Multimon Development Blog</h1>
        <h6 className="mb-5">For all the slimy little insiders</h6>
        <p>
          Well as can be seen from the site as it stands, this is a work in
          progress. I'm working on getting most of the basic functionality,
          and layout/styling up. I'm also going to be doing my best to keep
          everyone up to date with the latest features and updates as well as
          the latest progress on the project!
        </p>
      </div>
    </div>
  );
}

export default Post;