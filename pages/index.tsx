import Swither from '@components/ui/switcher';
import sanityClient from '../client';
import type { NextPage } from 'next';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import { RiShareBoxLine } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';
import imageUrlBuilder from '@sanity/image-url';
import { Portfolio } from '../types';
function urlFor(source: string) {
  return imageUrlBuilder(sanityClient).image(source);
}

const Home: NextPage<Portfolio> = ({ portfolios }) => {
  console.log(portfolios);
  return (
    <section className="md:p-8 font-SG bg-white text-gray-700 text-xl  transition duration-200 dark:bg-gray-600 dark:text-gray-200 ">
      <header>
        <nav className="flex justify-between md:w-1/2 p-4 mx-auto  rounded-lg align-baseline  ">
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
          <ul className="my-auto flex justify-around w-1/4 p-1">
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
            Find <span className="text-indigo-600">Portfolio</span> Inspiration
          </h1>
          <h2 className="font-normal text-2xl text-gray-500 dark:text-gray-200 my-4">
            A Selected collection of well desired portfolio websites, to get
            inspiration from when building your portfolio .
          </h2>
        </div>
      </header>
      <div className="px-8 py-4 mt-8 ">
        <div className="flex flex-wrap -mx-3 overflow-hidden justify-center content-center p-2">
          {portfolios.map((portfolio) => (
            <div
              className="mx-3 my-4 p-3 w-full overflow-hidden lg:w-[30%] rounded-lg ring-1 ring-indigo-300 shadow-md"
              key={portfolio._id}
            >
              <div className="rounded-md w-full h-[220px] relative ">
                <Image
                  src={urlFor(portfolio.siteImage.asset._ref).url()}
                  alt="patten"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>
              <div className="my-3 mx-3 flex justify-between">
                <h1 className="font-bold text-2xl  dark:text-gray-200 ">
                  {portfolio.title}
                </h1>
                <div className="flex justify-between w-[20%] my-auto text-2xl text-indigo-600">
                  <a
                    href={portfolio.websiteLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiShareBoxLine />
                  </a>
                  <a
                    href={portfolio.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiGithub />
                  </a>
                </div>
              </div>
              <div className="flex mx-3 flex-wrap">
                {portfolio.tools.map((tool) => (
                  <div
                    className="px-2 py-1 m-2 bg-gray-200 ring-1 ring-gray-400 rounded-lg dark:bg-gray-600 md:text-sm"
                    key={portfolio._id}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

export async function getStaticProps() {
  const portfolios: Array<object> = await sanityClient.fetch(
    `*[_type=="portfolio"]`
  );
  return {
    props: { portfolios: portfolios },
  };
}
