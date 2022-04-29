import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Seto Korekiyo is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Seto Korekiyo, seto, ranganath, web developer portfolio, seto web developer, seto developer, mern stack, Seto Korekiyo portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Seto Korekiyo's Portfolio" />
      <meta
        property="og:description"
        content="Full Stack Developer, Seto Korekiyo's prortfolio"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Seto Korekiyo',
};
