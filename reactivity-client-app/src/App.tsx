import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { List } from "semantic-ui-react";
function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/Activities/").then((res) => {
      setActivities(res.data);
    });
  });

  return (
    <div>
      <List>
        {activities.map((activity) => {
          return <List.Item>"HEllo"</List.Item>;
        })}
      </List>
    </div>
  );
}

export default App;
