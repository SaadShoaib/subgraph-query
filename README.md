I queried the [Lido](https://thegraph.com/explorer/subgraphs/Sxx812XgeKyzQPaBpR5YZWmGV5fZuBaPdh7DFhzSwiQ?v=0&view=Overview&chain=arbitrum-one) subgraph in this code. The returned data is displayed on the browser in the form of a table. You'll have to first create API key from [The Graph Studio](https://thegraph.com/studio/). 
Then put that API key in a .env file and name it "API_KEY"

**Step 1**
After cloning the repo, install the node modules with  
`npm i`

**Step 2**
Create an API key from the [The Graph Studio](https://thegraph.com/studio/). and put it in an .env file.

**Step 3**
Run 
`node server.js`

You can modify the query in server.js file. Detailed instructions on how to query a subgraph are available on [The Graph Website](https://thegraph.com/docs/en/querying/querying-the-graph/#querying-from-your-app).
