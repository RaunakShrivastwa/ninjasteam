const Banner = () => {
  return (
    <div className="my-2 py-4 px-6 w-full bg-gradient-to-r from-[#092342] lg:from-60% via-[#80666F] to-[#455181] rounded-md text-white">
      <div className="flex flex-col">
        <div className="flex text-3xl max-[500px]:text-2xl font-semibold my-2">
          Introducing Placement Cell
        </div>
        <div className="flex flex-row max-[500px]:flex-col items-center  max-[500px]:items-start my-1">
          <div className="flex font-semibold text-lg  max-[500px]:mb-2">
            by Coding Ninjas
          </div>
          <div className="flex bg-blue-600 font-medium p-1 mx-6  max-[500px]:mx-0">
            You are eligible for 14 new jobs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
