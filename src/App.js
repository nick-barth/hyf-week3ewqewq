import React from "react";
import logo from "./logo.svg";
import "./App.css";

//componetns
import Profile from "./components/profile";

function App() {
  const links = [
    {
      name: "nick",
      lastName: "big boy",
      openNewWindow: true
    },
    {
      name: "guy",
      lastName: "dnska"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {links.map(profile => {
          return <Profile key={profile.id} profile={profile} />;
        })}
      </header>
    </div>
  );
}

export default App;
