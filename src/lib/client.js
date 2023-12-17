import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: "uewhm6v9",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true, 
});
