'use client';

import React, { useEffect, useState } from 'react';
import { evaluate } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';

interface MdxRendererProps {
  content: string;
  // components?: Record<string, React.ComponentType<any>>;
}

// Define a type for the evaluated content component
type MdxContentComponent = React.ComponentType<any>;

export function MdxRenderer({ content }: MdxRendererProps) {
  const [ContentComponent, setContentComponent] = useState<MdxContentComponent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; // Flag to prevent state update on unmounted component

    const evaluateMdx = async () => {
      try {
        // Evaluate the MDX content string into a component
        // Pass runtime options explicitly, casting to 'any' to bypass strict TS checks for now
        const { default: evaluatedComponent } = await evaluate(content, {
          ...(runtime as any),
          // If this works, we might need to refine the types later
        });

        if (isMounted) {
          setContentComponent(() => evaluatedComponent); // Store the component function
          setError(null);
        }
      } catch (err) {
        console.error("Error evaluating MDX:", err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : String(err));
          setContentComponent(null);
        }
      }
    };

    evaluateMdx();

    return () => {
      isMounted = false; // Cleanup function to set flag
    };
  }, [content]); // Re-run effect if content changes

  if (error) {
    return <div style={{ color: 'red' }}>Error rendering content: {error}</div>;
  }

  if (!ContentComponent) {
    // Optional: Add a loading state
    return <div>Loading content...</div>;
  }

  // Render the evaluated component
  return <ContentComponent />;
}

export default MdxRenderer;
