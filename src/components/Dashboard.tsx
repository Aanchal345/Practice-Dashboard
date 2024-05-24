import React from "react";
import StatisticsCard from "./StatisticsCard";
import HeatmapCard from "./HeatMap";
import { MoveDownRight, MoveUpLeft } from "lucide-react";

const Dashboard = () => {
  const [assessment, setAssessment] = React.useState<number | null>();

  const assessment1 = ["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4"];
  const assessment2 = ["Coding 1", "Coding 2", "Coding 3", "Coding 4"];
  const assessment3 = ["Case Study 1", "Case Study 2", "Case Study 3", "Case Study 4"];
  const assessment4 = ["Product TearDown 1", "Product TearDown 2", "Product TearDown 3", "Product TearDown 4"];
  const assessment5 = ["Interview 1", "Interview 2", "Interview 3", "Interview 4"];
  const assessment6 = ["Aptitude 1", "Aptitude 2", "Aptitude 3", "Aptitude 4"];

  return (
    <div className="bg-purple-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <section className="lg:col-span-2">
            <header className="mb-8">
              <p className="text-gray-600 text-3xl mb-0">Let's Rock! </p>
              <p className="mt-2 text-gray-400">
                {" "}
                Practice regularly to achieve perfection.
              </p>

              <input
                className="w-full h-12 mt-2 px-4 rounded-lg focus:ring-2 ring-purple-400 border-none focus:outline-none"
                type="text"
                placeholder="🔍 Search Problems"
              />
            </header>
            <h2 className="text-2xl font-bold mb-4">Exclusive Assessments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white shadow-lg rounded">
                <img
                  src="/mechanical.jpeg"
                  alt="Mechanical Engineering"
                  className="w-full h-49 object-cover mb-2"
                />
                <h3 className="text-lg font-bold mb-2 text-center">
                  Mechanical Engineering
                </h3>
                {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">Start Now</button> */}
              </div>
              <div className="bg-white shadow-lg rounded">
                <img
                  src="computerprogramming.jpeg"
                  alt="Case Study"
                  className="w-full h-49 object-cover mb-2"
                />
                <h3 className="text-lg font-bold mb-2 text-center">
                  Computer Programming
                </h3>
                {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">Start Now</button> */}
              </div>
              <div className="bg-white shadow-lg rounded">
                <img
                  src="financial.jpeg"
                  alt="Financial Analysis"
                  className="w-full h-49 object-cover mb-2"
                />
                <h3 className="text-lg font-bold mb-2 text-center">
                  Financial Analysis
                </h3>
                {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">Start Now</button> */}
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4 mt-8">All Assessments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white shadow-lg rounded p-4 flex flex-col items-start justify-between">
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col items-start justify-between">
                    <h3 className="text-lg font-semibold mb-2">Quizzes</h3>
                    <button type="button" className="text-white bg-purple-700 border-none hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-4 flex flex-row gap-5 items-center">
                      Start
                      {assessment === 1 ? (
                        <MoveUpLeft
                          size={20}
                          onClick={() => setAssessment(null)}
                          className="cursor-pointer"
                        />
                      ) : (
                        <MoveDownRight
                          size={20}
                          onClick={() => setAssessment(1)}
                          className="cursor-pointer"
                        />
                      )}
                    </button>
                  </div>
                  <img
                    src="placeholder1.jpeg"
                    alt="Placeholder"
                    className="w-[175px] h-[175px] object-cover"
                  />
                </div>
              </div>
              <div className="bg-white shadow-lg rounded p-4 flex flex-col items-start justify-between">
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col items-start justify-between">
                    <h3 className="text-lg font-semibold mb-2">Coding</h3>
                    <button type="button" className="text-white bg-purple-700 border-none hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-4 flex flex-row gap-5 items-center">
                      Start
                      {assessment === 2 ? (
                        <MoveUpLeft
                          size={20}
                          onClick={() => setAssessment(null)}
                          className="cursor-pointer"
                        />
                      ) : (
                        <MoveDownRight
                          size={20}
                          onClick={() => setAssessment(2)}
                          className="cursor-pointer"
                        />
                      )}
                    </button>
                  </div>
                  <img
                    src="placeholder2.jpg"
                    alt="Placeholder"
                    className="w-[175px] h-[175px] object-cover"
                  />
                </div>
              </div>
              {assessment === 1 && (
                <div className="col-span-1 sm:col-span-2 bg-white shadow-lg rounded my-5 p-4 flex flex-col items-start justify-between">
                  <div className="flex flex-col gap-3 w-full">
                    {assessment1.map((test, index) => (
                      <div
                        key={index}
                        className="bg-purple-100/75 rounded-lg shadow-md flex flex-row items-center justify-between w-full"
                      >
                        <h3 className="text-lg font-semibold pl-5">{test}</h3>
                        <button
                          type="button"
                          className="text-purple-800 hover:text-white bg-white border-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-5"
                        >
                          Start Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {assessment === 2 && (
                <div className="col-span-1 sm:col-span-2 bg-white shadow-lg rounded my-5 p-4 flex flex-col items-start justify-between">
                  <div className="flex flex-col gap-3 w-full">
                    {assessment2.map((test, index) => (
                      <div
                        key={index}
                        className="bg-purple-100/75 rounded-lg shadow-md flex flex-row items-center justify-between w-full"
                      >
                        <h3 className="text-lg font-semibold pl-5">{test}</h3>
                        <button
                          type="button"
                          className="text-purple-800 hover:text-white bg-white border-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-5"
                        >
                          Start Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="bg-white shadow-lg rounded p-4 mt-2 flex flex-col items-start justify-between">
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col items-start justify-between">
                    <h3 className="text-lg font-semibold mb-2">Case Study</h3>
                    <button type="button" className="text-white bg-purple-700 border-none hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-4 flex flex-row gap-5 items-center">
                      Start
                      {assessment === 3 ? (
                        <MoveUpLeft
                          size={20}
                          onClick={() => setAssessment(null)}
                          className="cursor-pointer"
                        />
                      ) : (
                        <MoveDownRight
                          size={20}
                          onClick={() => setAssessment(3)}
                          className="cursor-pointer"
                        />
                      )}
                    </button>
                  </div>
                  <img
                    src="placeholder3.jpeg"
                    alt="Placeholder"
                    className="w-[175px] h-[175px] object-cover"
                  />
                </div>
              </div>
              {assessment === 3 && (
                <div className="col-span-1 sm:col-span-2 bg-white shadow-lg rounded my-5 p-4 flex flex-col items-start justify-between">
                  <div className="flex flex-col gap-3 w-full">
                    {assessment3.map((test, index) => (
                      <div
                        key={index}
                        className="bg-purple-100/75 rounded-lg shadow-md flex flex-row items-center justify-between w-full"
                      >
                        <h3 className="text-lg font-semibold pl-5">{test}</h3>
                        <button
                          type="button"
                          className="text-purple-800 hover:text-white bg-white border-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-5"
                        >
                          Start Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="bg-white shadow-lg rounded p-4 mt-2 flex flex-col items-start justify-between">
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col items-start justify-between">
                    <h3 className="text-lg font-semibold mb-2">
                      Product TearDown
                    </h3>
                    <button type="button" className="text-white bg-purple-700 border-none hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-4 flex flex-row gap-5 items-center">
                      Start
                      {assessment === 4 ? (
                        <MoveUpLeft
                          size={20}
                          onClick={() => setAssessment(null)}
                          className="cursor-pointer"
                        />
                      ) : (
                        <MoveDownRight
                          size={20}
                          onClick={() => setAssessment(4)}
                          className="cursor-pointer"
                        />
                      )}
                    </button>
                  </div>
                  <img
                    src="placeholder4.jpg"
                    alt="Placeholder"
                    className="w-[175px] h-[175px] object-cover"
                  />
                </div>
              </div>
              {assessment === 4 && (
                <div className="col-span-1 sm:col-span-2 bg-white shadow-lg rounded my-5 p-4 flex flex-col items-start justify-between">
                  <div className="flex flex-col gap-3 w-full">
                    {assessment4.map((test, index) => (
                      <div
                        key={index}
                        className="bg-purple-100/75 rounded-lg shadow-md flex flex-row items-center justify-between w-full"
                      >
                        <h3 className="text-lg font-semibold pl-5">{test}</h3>
                        <button
                          type="button"
                          className="text-purple-800 hover:text-white bg-white border-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-5"
                        >
                          Start Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="bg-white shadow-lg rounded p-4 mt-2 flex flex-col items-start justify-between">
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col items-start justify-between">
                    <h3 className="text-lg font-semibold mb-2">Interviews</h3>
                    <button type="button" className="text-white bg-purple-700 border-none hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-4 flex flex-row gap-5 items-center">
                      Start
                      {assessment === 5 ? (
                        <MoveUpLeft
                          size={20}
                          onClick={() => setAssessment(null)}
                          className="cursor-pointer"
                        />
                      ) : (
                        <MoveDownRight
                          size={20}
                          onClick={() => setAssessment(5)}
                          className="cursor-pointer"
                        />
                      )}
                    </button>
                  </div>
                  <img
                    src="placeholder5.jpg"
                    alt="Placeholder"
                    className="w-[175px] h-[175px] object-cover"
                  />
                </div>
              </div>
              {assessment === 5 && (
                <div className="col-span-1 sm:col-span-2 bg-white shadow-lg rounded my-5 p-4 flex flex-col items-start justify-between">
                  <div className="flex flex-col gap-3 w-full">
                    {assessment5.map((test, index) => (
                      <div
                        key={index}
                        className="bg-purple-100/75 rounded-lg shadow-md flex flex-row items-center justify-between w-full"
                      >
                        <h3 className="text-lg font-semibold pl-5">{test}</h3>
                        <button
                          type="button"
                          className="text-purple-800 hover:text-white bg-white border-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-5"
                        >
                          Start Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="bg-white shadow-lg rounded p-4 mt-2 flex flex-col items-start justify-between">
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col items-start justify-between">
                    <h3 className="text-lg font-semibold mb-2">Aptitude</h3>
                    <button type="button" className="text-white bg-purple-700 border-none hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mt-4 flex flex-row gap-5 items-center">
                      Start
                      {assessment === 6 ? (
                        <MoveUpLeft
                          size={20}
                          onClick={() => setAssessment(null)}
                          className="cursor-pointer"
                        />
                      ) : (
                        <MoveDownRight
                          size={20}
                          onClick={() => setAssessment(6)}
                          className="cursor-pointer"
                        />
                      )}
                    </button>
                  </div>
                  <img
                    src="placeholder6.jpg"
                    alt="Placeholder"
                    className="w-[175px] h-[175px] object-cover"
                  />
                </div>
              </div>
              {assessment === 6 && (
                <div className="col-span-1 sm:col-span-2 bg-white shadow-lg rounded my-5 p-4 flex flex-col items-start justify-between">
                  <div className="flex flex-col gap-3 w-full">
                    {assessment6.map((test, index) => (
                      <div
                        key={index}
                        className="bg-purple-100/75 rounded-lg shadow-md flex flex-row items-center justify-between w-full"
                      >
                        <h3 className="text-lg font-semibold pl-5">{test}</h3>
                        <button
                          type="button"
                          className="text-purple-800 hover:text-white bg-white border-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-5"
                        >
                          Start Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Current Progress</h2>
            <StatisticsCard />
            <h2 className="text-2xl font-bold mb-4 mt-8">Activity Heatmap</h2>
            <HeatmapCard />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
