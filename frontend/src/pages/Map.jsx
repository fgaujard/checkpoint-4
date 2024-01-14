import { useEffect } from "react";
import { Network } from "vis-network/standalone/esm/vis-network";
import "vis-network/styles/vis-network.css";

function Map() {
  useEffect(() => {
    // Sample data
    const nodes = [
      {
        id: "Development Tools",
        label: "Development Tools",
        category: "Development Tools",
      },
      {
        id: "Web Development",
        label: "Web Development",
        category: "Web Development",
      },
      {
        id: "Software Architecture",
        label: "Software Architecture",
        category: "Software Architecture",
      },
      { id: "CLI", label: "CLI", category: "Development Tools" },
      { id: "HTML", label: "HTML", category: "Web Development" },
      { id: "CSS", label: "CSS", category: "Web Development" },
      { id: "MVP", label: "MVP", category: "Software Architecture" },
      { id: "SEO", label: "SEO", category: "Marketing" },
      { id: "Hook", label: "Hook", category: "Software Development" },
      {
        id: "Middleware",
        label: "Middleware",
        category: "Software Architecture",
      },
      { id: "IDLE", label: "IDLE", category: "Software Operations" },
      {
        id: "Framework",
        label: "Framework",
        category: "Software Architecture",
      },
      { id: "Library", label: "Library", category: "Software Development" },
      { id: "MVC", label: "MVC", category: "Software Architecture" },
      { id: "Merise", label: "Merise", category: "Database Design" },
      { id: "MCD", label: "MCD", category: "Database Design" },
      { id: "MLD", label: "MLD", category: "Database Design" },
      { id: "MPD", label: "MPD", category: "Database Design" },
      { id: "API", label: "API", category: "API" },
      { id: "REST", label: "REST", category: "API" },
      { id: "CORS", label: "CORS", category: "API" },
      { id: "CRUD", label: "CRUD", category: "Development Process" },
      { id: "BREAD", label: "BREAD", category: "Development Process" },
      {
        id: "PascalCamelCase",
        label: "Pascal/Camel Case",
        category: "Coding Conventions",
      },
    ];

    const edges = [
      { from: "CLI", to: "Development Tools" },
      { from: "HTML", to: "Web Development" },
      { from: "CSS", to: "Web Development" },
      { from: "MVP", to: "Software Architecture" },
      { from: "SEO", to: "Marketing" },
      { from: "Hook", to: "Software Development" },
      { from: "Middleware", to: "Software Architecture" },
      { from: "IDLE", to: "Software Operations" },
      { from: "Framework", to: "Software Architecture" },
      { from: "Library", to: "Software Development" },
      { from: "MVC", to: "Software Architecture" },
      { from: "Merise", to: "Database Design" },
      { from: "MCD", to: "Database Design" },
      { from: "MLD", to: "Database Design" },
      { from: "MPD", to: "Database Design" },
      { from: "REST", to: "API" },
      { from: "CORS", to: "API" },
      { from: "CRUD", to: "Development Process" },
      { from: "BREAD", to: "Development Process" },
      { from: "PascalCamelCase", to: "Coding Conventions" },
    ];

    // Create a network
    const container = document.getElementById("network");
    const data = { nodes, edges };
    const options = {
      nodes: {
        shape: "box",
        color: {
          background: "lightblue",
          border: "blue",
        },
      },
      edges: {
        color: "gray",
      },
    };
    const network = new Network(container, data, options);

    return () => {
      // Cleanup when component unmounts
      network.destroy();
    };
  }, []); // Run only on component mount

  return (
    <div className="body-content" id="network" style={{ height: "780px" }} />
  );
}

export default Map;
