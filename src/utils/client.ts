import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "pqhej1g2",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: false,
  token: process.env.REACT_APP_PUBLIC_SANITY_TOKEN,
});
