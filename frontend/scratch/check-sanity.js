const { createClient } = require('@sanity/client');

const client1 = createClient({
  projectId: 'xlhdc8j2',
  dataset: 'prod',
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function run() {
  const docs = await client1.fetch('*[]');
  console.log("Total Documents in production:", docs.length);
}

run().catch(console.error);
