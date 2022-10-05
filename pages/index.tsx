import Swither from '@components/ui/switcher';
import type { NextPage } from 'next';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

const Home: NextPage = () => {
  return (
    <section className="md:p-8 font-SG bg-gray-50 text-gray-600 text-xl h-screen transition duration-200 dark:bg-gray-600 dark:text-gray-200">
      <header>
        <nav className="flex justify-between md:w-1/2 w-4/5 p-4 mx-auto bg-gray-100 ring-2 ring-gray-200 rounded-lg align-baseline dark:bg-gray-700 dark:ring-gray-800  ">
          <Link href="/" passHref>
            <a className="flex  p-1">
              <div className="w-10 h-10 rounded-full ring-2 ring-gray-300  shadow-sm ">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                >
                  <title>Infolio</title>
                  <mask
                    id="mask__beam"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                  >
                    <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                  </mask>
                  <g mask="url(#mask__beam)">
                    <rect width="36" height="36" fill="#405059"></rect>
                    <rect
                      x="0"
                      y="0"
                      width="36"
                      height="36"
                      transform="translate(6 -2) rotate(116 18 18) scale(1.2)"
                      fill="#4f46e5"
                      rx="6"
                    ></rect>
                    <g transform="translate(4 -4) rotate(6 18 18)">
                      <path
                        d="M15 21c2 1 4 1 6 0"
                        stroke="#FFFFFF"
                        fill="none"
                        stroke-linecap="round"
                      ></path>
                      <rect
                        x="13"
                        y="14"
                        width="1.5"
                        height="2"
                        rx="1"
                        stroke="none"
                        fill="#FFFFFF"
                      ></rect>
                      <rect
                        x="21"
                        y="14"
                        width="1.5"
                        height="2"
                        rx="1"
                        stroke="none"
                        fill="#FFFFFF"
                      ></rect>
                    </g>
                  </g>
                </svg>
              </div>
              <span className="my-auto mx-2 font-lexend font-semibold text-2xl ">
                Infolio
              </span>
            </a>
          </Link>
          <ul className="my-auto flex justify-around w-1/5 p-1">
            <li className="flex my-auto">
              <Swither />
            </li>
            <li className="flex my-auto">
              <a>
                <AiFillGithub className=" w-8 h-8 cursor-pointer " />
              </a>
            </li>
          </ul>
        </nav>
        <div className="my-4 mt-16 text-center w-3/5 mx-auto">
          <h1 className="font-lexend font-semibold text-5xl">
            Find Portfolio Inspiration
          </h1>
          <h2 className="font-normal text-2xl text-gray-500 dark:text-gray-200 my-4">
            A Selected collection of well desired portfolio websites to get
            inspiration for building you next portfolio .
          </h2>
        </div>
      </header>
    </section>
  );
};

export default Home;
