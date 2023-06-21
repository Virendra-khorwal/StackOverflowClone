import { Client, cacheExchange, fetchExchange } from "urql";
import { STEPZEN_API_KEY } from "react-native-dotenv";



const client = new Client({
  url: "https://saintlys.stepzen.net/api/stackoverflow/__graphql",
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      Authorization: `Apikey ${STEPZEN_API_KEY}`,
    },
  },
});

export default client;