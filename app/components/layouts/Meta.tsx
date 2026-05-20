import { SITE_DESCRIPTION, SITE_DOMAIN, SITE_TITLE, SITE_URL } from "@/const";

const Meta = () => {
  return (
    <>
      <meta name="description" content={SITE_DESCRIPTION} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={SITE_TITLE} />
      <meta property="og:description" content={SITE_DESCRIPTION} />
      <meta property="og:image" content={`${SITE_URL}images/ogp.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={SITE_DOMAIN} />
      <meta property="twitter:url" content={SITE_URL} />
      <meta name="twitter:title" content={SITE_TITLE} />
      <meta name="twitter:description" content={SITE_DESCRIPTION} />
      <meta name="twitter:image" content={`${SITE_URL}images/ogp.png`} />
    </>
  );
};

export default Meta;
