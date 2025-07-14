import { Column, Flex, Heading, Text } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { baseURL } from "@/app/resources";
import { blog, person, newsletter } from "@/app/resources/content";

export async function generateMetadata() {
  const title = blog.title;
  const description = blog.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/blog`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog() {
  return (
    <Column maxWidth="s">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: blog.title,
            description: blog.description,
            url: `https://${baseURL}/blog`,
            image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {blog.title}
      </Heading>
      <Column fillWidth flex={1} gap="l" paddingY="l">
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          align="center"
        >
          🚧 Blog Coming Soon 🚧
        </Text>
        <Text
          variant="body-default-m"
          onBackground="neutral-medium"
          align="center"
        >
          I'm currently working on some exciting content for this blog. 
          I'll let you know when I write my first post!
        </Text>
        <Text
          variant="body-default-s"
          onBackground="neutral-weak"
          align="center"
        >
          Stay tuned for updates on web development, AI, and my latest projects.
        </Text>
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
