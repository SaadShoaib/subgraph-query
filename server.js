const express = require("express");
const fetch = require("node-fetch");
require("dotenv").config();
const path = require("path");

const app = express();
const PORT = 3000;
const API_KEY = process.env.API_KEY;
const GRAPHQL_ENDPOINT = `https://gateway-arbitrum.network.thegraph.com/api/${API_KEY}/subgraphs/id/Sxx812XgeKyzQPaBpR5YZWmGV5fZuBaPdh7DFhzSwiQ`; // Replace with the actual GraphQL endpoint for the subgraph

app.use(express.static(path.join(__dirname, "public")));

app.get("/query", async (req, res) => {
  try {
    const query = `{
        lidoConfigs(first: 5) {
          id
          insuranceFund
          oracle
          treasury
        }
        lidoTransfers(first: 5) {
          id
          from
          to
          value
        }
      }`;

    // Make a POST request to the endpoint
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({query}),
    });

    const data = await response.json();

    // Send the response back to the client
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({error: "Internal Server Error"});
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
