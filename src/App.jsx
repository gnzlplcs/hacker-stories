import React from "react";

const title = "React";

const welcome = {
  greeting: "Hey",
  title: "React",
};

const App = () => {
  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>

      <label htmlfor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
};

export default App;
