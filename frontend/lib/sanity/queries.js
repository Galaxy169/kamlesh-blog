import { groq } from 'next-sanity';

// --- SITE SETTINGS ---
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    ...,
  }
`;

// --- SERVICES ---
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription,
    iconName,
    displayOrder
  }
`;

// --- WORK PROCESS ---
export const workProcessQuery = groq`
  *[_type == "workProcess"] | order(order asc) {
    _id,
    stepNumber,
    title,
    description,
    iconName,
    order
  }
`;

// --- CORE VALUES ---
export const coreValuesQuery = groq`
  *[_type == "coreValue"] | order(order asc) {
    _id,
    title,
    description,
    iconName,
    order
  }
`;

// --- DIFFERENTIATORS ---
export const differentiatorsQuery = groq`
  *[_type == "differentiator"] | order(order asc) {
    _id,
    challenge,
    approach,
    order
  }
`;

// --- BLOG POSTS ---
// Fetch latest 3 published posts for the homepage spotlight
export const latestPostsQuery = groq`
  *[_type == "post" && publishedAt <= now()] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    category,
    publishedAt,
    readTime,
    excerpt,
    mainImage
  }
`;

// Fetch all published posts for the blog listing page
export const allPostsQuery = groq`
  *[_type == "post" && publishedAt <= now()] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    publishedAt,
    readTime,
    excerpt,
    mainImage
  }
`;

// Fetch a single post by its slug for the individual article page
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    author,
    category,
    tags,
    publishedAt,
    readTime,
    excerpt,
    mainImage,
    body
  }
`;
