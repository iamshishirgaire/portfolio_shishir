import { CheckCheck, Clock } from "lucide-react";
import { AnimatedTitle } from "./animated-sec";

const TimeLine = () => {
  return (
    <section id="contact-section" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid max-w-5xl items-center justify-center gap-8 px-4 text-center md:gap-12 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl xl:gap-16">
        <AnimatedTitle>
          <div className="space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Education
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Here is a brief overview of my academic journey.
            </p>
          </div>
        </AnimatedTitle>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-6">
            <span className="absolute p-1 flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <Clock></Clock>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Thapathali Engineering Campus{" "}
              <span
                className="bg-gray-100 text-primary
 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3"
              >
                Ongoing
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Bachelor in Electronics Engineering (2019 - present)
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex p-1 items-center justify-center w-6 h-6 bg-gray-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <CheckCheck></CheckCheck>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Morgan Int'l College
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Higher Secondary Education (2017 - 2019)
            </time>
          </li>
          <li className="ms-6">
            <span className="absolute p-1 flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <CheckCheck></CheckCheck>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              Sweta Sadan School
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              School Leaving Certificate (2014 - 2017)
            </time>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default TimeLine;
