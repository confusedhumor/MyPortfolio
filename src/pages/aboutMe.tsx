export const AboutMe = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center px-4 py-8 overflow-x-hidden">
        <div
          className="flex flex-col sm:flex-row text-center sm:text-left gap-5 max-w-4xl"
          style={{ fontFamily: 'Ubuntu mono' }}
        >
          <div className="flex flex-col">
            <div className="text-3xl sm:text-4xl">Hey! I’m Varun</div>

            <div className="w-full sm:w-96 mt-2 text-base">
              and I’m obsessed with creating products that people actually want
              to use—not just look at once and forget. Right now,<br />
              I’m probably tinkering with a side project, fixing one last bug.
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
