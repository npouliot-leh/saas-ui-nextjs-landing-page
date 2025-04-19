import { posts } from '.velite'; // Import the processed posts data
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import siteConfig from '../../../../data/config'; // Assuming site config exists for metadata (using default import)
import { routing } from '../../../../src/i18n/routing'; // Import routing config

// Define the structure of the params object
interface PostPageProps {
  params: {
    locale: string; // Locale is part of the route
    slug: string;   // Slug is the dynamic part for the post
  };
}

// Function to generate static paths for all posts and locales
// This helps Next.js know which pages to pre-render at build time
export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
  const locales = routing.locales; // Get locales from routing config
  const params: PostPageProps['params'][] = [];

  posts.forEach((post) => {
    locales.forEach((locale) => {
      params.push({
        locale: locale,
        slug: post.slug,
      });
    });
  });

  return params;
}

// Function to generate metadata for the page (title, description, etc.)
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return {}; // Return empty metadata if post not found
  }

  return {
    title: post.title,
    // Add other metadata like description if available in your post frontmatter
    // description: post.description,
    openGraph: {
      title: post.title,
      // description: post.description,
      url: `${siteConfig.url}/${params.locale}/blog/${post.slug}`, // Construct the full URL
      type: 'article',
      publishedTime: post.date.toISOString(), // Use the post date as ISO string
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      // description: post.description,
    },
  };
}

// The main page component
export default function PostPage({ params }: PostPageProps) {
  // Find the post based on the slug from the URL params
  const post = posts.find((post) => post.slug === params.slug);

  // If no post is found with that slug, render the 404 page
  if (!post) {
    notFound();
  }

  // Render the post content
  // NOTE: This currently only renders title and date.
  // We need a component to render the actual MDX content.
  // Let's add a placeholder for now.
  return (
    <article className="prose dark:prose-invert mx-auto py-8">
      <h1>{post.title}</h1>
      <p className="text-muted-foreground">
        Published on: {new Date(post.date).toLocaleDateString(params.locale, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <hr className="my-4" />
      {/* Render the MDX content */}
      {post.content}
    </article>
  );
}
