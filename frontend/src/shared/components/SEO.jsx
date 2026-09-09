import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../config/siteConfig";

const SEO = ({
  title,
  description,
  canonical,
  image = "/images/logo/logo.webp",
  noIndex = false,
}) => {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;

  const canonicalUrl = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${siteConfig.url}${canonical}`
    : siteConfig.url;

  const imageUrl = image.startsWith("http")
    ? image
    : `${siteConfig.url}${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: siteConfig.name,

    description:
      description || siteConfig.description,

    url: siteConfig.url,

    areaServed: {
      "@type": "City",
      name: siteConfig.location.city,
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: siteConfig.location.country,
    },
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description || siteConfig.description}
      />

      <meta
        name="robots"
        content={
          noIndex
            ? "noindex,nofollow"
            : "index,follow,max-image-preview:large"
        }
      />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />

      <meta property="og:title" content={fullTitle} />

      <meta
        property="og:description"
        content={description || siteConfig.description}
      />

      <meta property="og:url" content={canonicalUrl} />

      <meta property="og:image" content={imageUrl} />

      <meta property="og:site_name" content={siteConfig.name} />

      <meta property="og:locale" content="en_IN" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={fullTitle} />

      <meta
        name="twitter:description"
        content={description || siteConfig.description}
      />

      <meta name="twitter:image" content={imageUrl} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;