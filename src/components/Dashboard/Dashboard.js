import React, { useState } from "react";
import Card from "../Card/Card";
import CardDetails from "../Card/CardDetails";
import Menu from "../Menu/Menu";
import "./Dashboard.css";

const Dashboard = () => {
  const clients = [
    {
      name: "Abdul Kean",
      location: "Highspeed Inc",
      image: "https://i.imgur.com/Mar23xK.png",
    },
    {
      name: "Angela Moss",
      location: "Highspeed Inc",
      image: "https://i.imgur.com/Mar23xK.png",
    },
    {
      name: "Afiff Skunder",
      location: "Highspeed Inc",
      image: "https://i.imgur.com/Mar23xK.png",
    },
    {
      name: "Abigail Smurt",
      location: "Highspeed Inc",
      image: "https://i.imgur.com/Mar23xK.png",
    },
    {
      name: "Bella Syuqr",
      location: "Highspeed Inc",
      image: "https://i.imgur.com/Mar23xK.png",
    },
    {
      name: "Benny Gacu",
      location: "Highspeed Inc",
      image: "https://i.imgur.com/Mar23xK.png",
    },
    {
      name: "Chloe Simatup..",
      location: "Highspeed Inc",
      image: "https://i.imgur.com/Mar23xK.png",
    },
    {
      name: "Denny Juan",
      location: "Highspeed Inc",
      image: "https://i.imgur.com/Mar23xK.png",
    },
    {
      name: "Franklin CS",
      location: "Highspeed Inc",
      image: "https://i.imgur.com/Mar23xK.png",
    },
    {
      name: "Fanny Saragih",
      location: "Highspeed Inc",
      image: "https://i.imgur.com/Mar23xK.png",
    },
    {
      name: "Hermanto",
      location: "Highspeed Inc",
      image: "https://i.imgur.com/Mar23xK.png",
    },
    {
      name: "Lulu Salam",
      location: "Highspeed Inc",
      image: "https://i.imgur.com/Mar23xK.png",
    },
  ];

  const [selected, setSelected] = useState(0);

  const selectCard = (index) => {
    console.log("CLICKED");
    console.log("FIRED", index);
    setSelected(index);
  };

  return (
    <div className="dashboard">
      <Menu />
      <div className="dashboard-clients">
        <div className="card-layout">
          {clients.map((client, index) => {
            return (
              <div onClick={() => selectCard(index)}>
                <Card
                  name={client.name}
                  location={client.location}
                  image={client.image}
                  index={index}
                  selected={selected}
                  key={client.name}
                />
              </div>
            );
          })}
          <div className="card-details-load">Load More</div>
        </div>
        <div className="dashboard-details">
          <CardDetails
            name={clients[selected].name}
            location={clients[selected].location}
            image={clients[selected].image}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
