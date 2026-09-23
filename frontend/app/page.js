import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WorkProcess from "@/components/sections/WorkProcess";
import About from "@/components/sections/About";
import Comparison from "@/components/sections/Comparison";
import CoreValues from "@/components/sections/CoreValues";
import ContactDetails from "@/components/sections/ContactDetails";
import BlogSpotlight from "@/components/sections/BlogSpotlight";

import { client } from "@/lib/sanity/client";
import { 
  siteSettingsQuery, 
  servicesQuery, 
  workProcessQuery, 
  differentiatorsQuery, 
  coreValuesQuery, 
  latestPostsQuery 
} from "@/lib/sanity/queries";

export default async function Home() {
  // Fetch all CMS data in parallel for fast loading
  const [
    siteSettings,
    services,
    workProcessSteps,
    differentiators,
    coreValues,
    latestPosts
  ] = await Promise.all([
    client.fetch(siteSettingsQuery),
    client.fetch(servicesQuery),
    client.fetch(workProcessQuery),
    client.fetch(differentiatorsQuery),
    client.fetch(coreValuesQuery),
    client.fetch(latestPostsQuery),
  ]);

  return (
    <>
      {/* We will start passing the fetched data as props to these components */}
      <Hero data={siteSettings} />
      <Services data={services} />
      <WorkProcess data={workProcessSteps} />
      <About data={siteSettings} />
      <Comparison data={differentiators} />
      <CoreValues data={coreValues} />
      <ContactDetails data={siteSettings} />
      <BlogSpotlight data={latestPosts} />
    </>
  );
}
