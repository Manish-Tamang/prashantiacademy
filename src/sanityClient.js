// sanityClient.js
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: "uewhm6v9",
  dataset: "production",
  useCdn: true, // or false, based on your requirements
});

export default client;
