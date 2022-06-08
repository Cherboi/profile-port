import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/large/run-buddy.jpg"

function Gallery(props) {
  const currentCategory = {
    name: "Projects",
    description:
      "Photo of html-react projects",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
        <img
          src={photo}
          alt="Project examples"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}
export default Gallery;