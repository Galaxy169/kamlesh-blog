import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Ensure these environment variables are set in your .env.local file
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

// Helper function for generating Image URLs with only the asset reference data in your documents
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
