const AboutPage = () => {
  return (
    <>
      To work in a creative, innovative & challenging environment and help the organization to achieve its
      objective in the most efficient manner by applying my skills & thereby growing with the organization
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
