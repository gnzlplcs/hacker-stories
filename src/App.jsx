import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import List from "./List";
import useStorageState from "./useStorageState";

const initialStories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useStorageState("search", "React");

  const [stories, setStories] = useState(initialStories);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );
    setStories(newStories);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLocaleLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>My Hacker Stories</h1>
      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
        isFocused
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <hr />
      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </>
  );
};

export default App;
