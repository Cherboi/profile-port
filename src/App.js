import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';

function App() {
  const [categories] = useState([
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
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Project></Project>
        <About></About>
      </main>
    </div>
  );
}

export default App;