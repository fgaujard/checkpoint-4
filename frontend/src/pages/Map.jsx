// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { Network } from "vis-network/standalone/esm/vis-network";
import "vis-network/styles/vis-network.css";

import { usePagesContext } from "../contexts/PagesContext";

function Map() {
  const { allTips, user } = useLoaderData();
  if (!user.login) window.location.href = "/login";
  else {
    const { setActiveButton } = usePagesContext();
    setActiveButton("/map");

    const allKeywordsList = allTips[0];
    const categories = allTips[1];

    const [networkHeight, setNetworkHeight] = useState(window.innerHeight);

    useEffect(() => {
      // Sample data
      const nodeCategories = categories.map((category) => {
        return {
          id: category.id,
          label: category.name,
          group: category.id,
          title: `Catégorie : ${category.name}`,
        };
      });

      const nodeKeywords = allKeywordsList.map((keyword) => {
        return {
          id: categories.length + keyword.id,
          label: keyword.acronyme,
          group: keyword.category_id,
          title: keyword.description,
        };
      });

      const nodes = nodeCategories.concat(nodeKeywords);

      // create some edges
      const edges = allKeywordsList.map((keyword) => {
        return {
          from: categories.length + keyword.id,
          to: keyword.category_id,
        };
      });

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
          tooltipDelay: 50, // Delay before prompt toolTip on hover (ms)
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

      const updateNetworkHeight = () => {
        const windowHeight = window.innerHeight;
        setNetworkHeight(windowHeight);
      };

      updateNetworkHeight();

      window.addEventListener("resize", updateNetworkHeight);

      network.on("click", function handleCickNode(event) {
        const nodeId = event.nodes[0]; // Obtenez l'identifiant du nœud cliqué

        if (nodeId !== undefined) {
          const keywordNode = allKeywordsList.find(
            (keyword) => keyword.id + categories.length === nodeId
          );
          const keyName = keywordNode ? keywordNode.acronyme : undefined;
          if (keyName) {
            window.location.href = `/keywords/${keyName}`;
          }
        }
      });

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
}

export default Map;
