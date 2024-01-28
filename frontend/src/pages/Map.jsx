// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Network } from "vis-network/standalone/esm/vis-network";
import "vis-network/styles/vis-network.css";

import { usePagesContext } from "../contexts/PagesContext";

// import {useLoaderData} from "react-router-dom";

function Map() {
  const { setActiveButton } = usePagesContext();
  setActiveButton("/map");

  const [networkHeight, setNetworkHeight] = useState(window.innerHeight);
  // const allKeywordsList = useLoaderData()[0];
  // const categories = useLoaderData()[1];

  useEffect(() => {
    // Sample data
    const nodes = [
      { id: 0, label: "Web Development", group: 1 },
      { id: 1, label: "HTML", group: 1 },
      { id: 2, label: "CSS", group: 1 },
      { id: 3, label: "MVP", group: 1 },
      { id: 4, label: "Hook", group: 1 },
      { id: 5, label: "CORS", group: 1 },
      { id: 6, label: "Coding Conventions", group: 2 },
      { id: 7, label: "CRUD", group: 2 },
      { id: 8, label: "BREAD", group: 2 },
      { id: 9, label: "Pascale/Camel Case", group: 2 },
      { id: 10, label: "Software Development", group: 3 },
      { id: 11, label: "Framework", group: 3 },
      { id: 12, label: "Library", group: 3 },
      { id: 13, label: "Merise", group: 3 },
    ];

    // create some edges
    const edges = [
      { from: 1, to: 0 },
      { from: 2, to: 0 },
      { from: 3, to: 0 },
      { from: 4, to: 0 },
      { from: 5, to: 0 },
      { from: 7, to: 6 },
      { from: 8, to: 6 },
      { from: 9, to: 6 },
      { from: 11, to: 10 },
      { from: 12, to: 10 },
      { from: 13, to: 10 },
    ];

    // Create a network
    const container = document.getElementById("network");
    const data = { nodes, edges };
    const options = {
      nodes: {
        shape: "dot",
        size: 16,
        shadow: true,
        font: {
          color: "black",
        },
      },
      edges: {
        shadow: true,
      },
      interaction: {
        hover: true,
        tooltipDelay: 100, // Delay before prompt toolTip on hover (ms)
      },
      physics: {
        forceAtlas2Based: {
          gravitationalConstant: -26,
          centralGravity: 0.005,
          springLength: 200,
          springConstant: 0.25,
        },
        maxVelocity: 146,
        solver: "forceAtlas2Based",
        timestep: 0.35,
        stabilization: { iterations: 150 },
      },
    };

    const network = new Network(container, data, options);

    nodes.forEach((node) => {
      const nodeObject = network.body.nodes[node.id];
      nodeObject.setOptions({ title: `${node.label}` });
    });

    const updateNetworkHeight = () => {
      const windowHeight = window.innerHeight;
      setNetworkHeight(windowHeight);
    };

    updateNetworkHeight();

    window.addEventListener("resize", updateNetworkHeight);

    return () => {
      // Cleanup when component unmounts
      network.destroy();
    };
  }, []); // Run only on component mount

  return (
    <div
      className="body-content-map"
      id="network"
      style={{ height: `calc(${networkHeight}px - 48px)` }}
    />
  );
}

export default Map;
