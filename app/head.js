// app/head.js or app/(route)/head.js
export default function Head() {
  return (
    <>
      <title>Made4Cloud LTD</title>
      <meta
        name="description"
        content="Leading CloudCraze solutions provider..."
      />
      <link rel="icon" href="/favicon.ico" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Made4Cloud LTD",
            url: "https://www.made4cloud.com",
            logo: "https://www.made4cloud.com/images/made4cloudLogo.png",
            sameAs: [
              "https://www.linkedin.com/company/made4cloud-ltd",
              "https://twitter.com/made4cloud", //to edit later on
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+33 977 217 620",
              contactType: "Customer Service",
            },
          }),
        }}
      />
    </>
  );
}
