export const AboutMe = () => {
  return (
    <>
      <div className="h-96 flex w-screen items-center justify-center">
        <div
          className="flex flex-col sm:p-0 text-center sm:text-left sm:flex-row gap-5"
          style={{ fontFamily: 'Ubuntu mono' }}
        >
          <div className="flex flex-col">
            <div className="text-3xl">Hey! I’m Varun</div>

            <div className="w-96">
              and I’m obsessed with creating products that people actually want
              to use—not just look at once and forget. Right now, I’m probably
              tinkering with a side project, fixing one last bug.
            </div>
          </div>

          <div className="flex justify-center sm:justify-start">
            <img
              src="https://avatars.githubusercontent.com/u/153203211"
              className="h-44 w-44 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};
