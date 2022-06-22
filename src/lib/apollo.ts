import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o8q5ou14m001xrfxwva5e1/master",
  cache: new InMemoryCache()
});