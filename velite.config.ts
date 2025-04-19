import { defineConfig, defineCollection, s } from 'velite';

// Define the schema for blog posts
const posts = defineCollection({
  name: 'Post', // Name of the collection
  pattern: 'posts/**/*.mdx', // Match all .mdx files in the posts directory
  schema: s
    .object({
      title: s.string(), // Expect a title string in frontmatter
      // Validate as string, then transform into a Date object
      date: s.string().transform((str) => new Date(str)),
      // Automatically compute the slug from the filename
      slug: s.path().transform((path) => path.replace(/^posts\//, '').replace(/\.mdx$/, '')),
      // Automatically extract the raw MDX content
      content: s.mdx(),
    })
    // Ensure posts are sorted by date descending
    .transform((data) => ({ ...data, permalink: `/blog/${data.slug}` })),
});

export default defineConfig({
  root: '.', // Root directory of the project
  output: {
    data: '.velite', // Directory for generated data cache
    assets: 'public/static', // Directory for static assets (if any)
    base: '/static/', // Base path for assets
    clean: true, // Clean output directories before building
  },
  collections: { posts }, // Register the posts collection
  mdx: {
    // MDX configuration options (optional)
    // remarkPlugins: [],
    // rehypePlugins: [],
  },
});
