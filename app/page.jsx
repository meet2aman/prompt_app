import Feed from "@components/Feed";

const Home = () => {
  return (
    <>
      <section className="flex-col w-full flex-center">
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="text-center sky_gradient">AI </span>
          <span className="pink_gradient text-center">powered </span>
          <span className="orange_gradient text-center">Prompts</span>
        </h1>
        <p className="desc text-center">
          Techodia is a open source AI prompting tool for modern world to
          discover, create and share reative prompts
        </p>
        <Feed />
      </section>
    </>
  );
};

export default Home;
