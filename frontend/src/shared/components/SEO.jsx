import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  canonical,
}) => {
  const siteName = "The Mountain Mile";

  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} | Car Rental & Taxi Service in Manali`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      {canonical && (
        <link
          rel="canonical"
          href={canonical}
        />
      )}

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content={siteName}
      />
    </Helmet>
  );
};

export default SEO;