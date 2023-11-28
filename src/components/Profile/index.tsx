export const Profile = () => {
  return (
    <section className="flex align-middle justify-center h-auto py-16 mt-8">
      <div className="flex items-center flex-col">
        <img
          src="https://avatars.githubusercontent.com/u/35975531?v=4"
          alt="face man"
          width={300}
          height={300}
          className="rounded-full overflow-hidden block"
        />
        <p className="text-2xl mt-4">Hello, I am Henrique Braga</p>
        <h2 className="w-4/5 text-4xl text-center mt-4">
          A Frontend developer, Specialised in Reactjs
        </h2>
      </div>
    </section>
  );
};
