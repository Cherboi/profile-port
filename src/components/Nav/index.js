import React from 'react';

function Nav() {
  const categories = [
    {
      name: "Portfolio",
      description:
        "A asortment of projects ranging from HTML to React",
    },
    { name: "Logo's", description: "Some logo's i've made" },
    { name: "Food", description: "Yeah I cook like Gordan Ramsey" },
    {
      name: "Cherboi Media",
      description: "Links to Youtube video's and Twitch vod's",
    },
  ];

  function categorySelected() {
    console.log("hello")
  }

  return (
    <header>
      <h2>
        <a href="/">
          <span role="img" aria-label="octopus">🐙</span> Cherboi
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About me
            </a>
          </li>
          <li>
            
          </li>
          {categories.map((category) => (
            <li
              className="mx-1"
              key={category.name}
            >
              <span onClick={categorySelected} >
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;