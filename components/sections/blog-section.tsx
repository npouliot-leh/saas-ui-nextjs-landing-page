import { Box, Container, Heading, Text, VStack, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Section } from '#components/section';
import { useTranslations } from 'next-intl';
import { posts } from '../../.velite'; // Correct relative path to .velite output
import { Link } from '../../src/i18n/navigation'; // Correct relative path for Link
import { format } from 'date-fns'; // For formatting dates

export const BlogSection = () => {
  const t = useTranslations('BlogSection');

  // Sort posts by date, newest first (optional, Velite might handle this)
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Section id="blog">
      <Container maxW="container.lg"> {/* Adjusted width for blog list */}
        <Heading as="h2" size="xl" mb="8" textAlign="center">
          {t('title')}
        </Heading>
        {sortedPosts.length === 0 ? (
          <Text textAlign="center">{t('placeholder')}</Text>
        ) : (
          <VStack spacing={8} align="stretch">
            {sortedPosts.map((post) => (
              <LinkBox key={post.slug} as="article" p="5" borderWidth="1px" rounded="md">
                <Heading size="md" my="2">
                  <LinkOverlay as={Link} href={post.permalink}>
                    {post.title}
                  </LinkOverlay>
                </Heading>
                <Text fontSize="sm" color="gray.500" mb="2">
                  {format(new Date(post.date), 'PPP')} {/* Format date */}
                </Text>
                {/* Optionally display a snippet here later */}
                {/* <Text noOfLines={3}>{post.description || '...'}</Text> */}
              </LinkBox>
            ))}
          </VStack>
        )}
      </Container>
    </Section>
  )
}
