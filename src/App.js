import image from './assets/ono.jpg';
import image2 from './assets/ono2.jpg';
import image3 from './assets/ono3.jpg';
import Navbar from './component/Navbar/Navbar';
import { useState } from 'react';

export default function App() {
  const [menuBar, setMenuBar] = useState(false);

  const openMenuBar = () => {
    setMenuBar(true);
  };

  const closeMenuBar = () => {
    setMenuBar(false);
  };
  return (
    <div className="w-full bg-white">
      <Navbar />
      {menuBar && (
        <div className=" bg-black text-white mb-5">
          <div className="fixed inset-0 w-full h-full bg-black z-50 overflow-y-auto">
            <div className="flex flex-col px-8 text-gray-500">
              <button onClick={closeMenuBar} className="text-red-500 mt-2">
                X
              </button>
              <div className="flex justify-between px-3 py-1 px-8 inline-block border border-gray-500 rounded-xl mt-6">
                <div>Search ...</div>
                <button className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <ul className="flex flex-col gap-6 p-5">
              <li>Home</li>
              <li>ABCs of KM</li>
              <li>Brain Power</li>
              <li>Systems & Complexity</li>
              <li>Analysis & Counterpoints</li>
              <li>News & Community</li>
              <li>Patron Showcase</li>
              <li>About us</li>
              <li>Patrons</li>
              <li>Subscribe</li>
              <li>Write for us</li>
              <li>Republishing guidelines</li>
              <li>Community standards</li>
              <li>Privacy statement</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
      <div className="xl:mx-40">
        <div className="flex justify-between p-5 lg:flex-col ">
          <button className="lg:hidden" onClick={openMenuBar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
              color="gray-200"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="md:flex-1 text-center md:text-left ml-3 lg:text-[50px]">
            Elvis Studios Practicing
          </div>
          <button className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
              color="red"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>
          <div className="hidden lg:block lg:bg-black lg:text-white lg:mb-5">
            <ul className="hidden lg:flex gap-6 p-5 justify-center">
              <li>ABCs of KM</li>
              <li>Brain Power</li>
              <li>Systems & Complexity</li>
              <li>Analysis & Counterpoints</li>
              <li>News & Community</li>
              <li>Patron Showcase</li>
            </ul>
          </div>
        </div>
        <div className="lg:flex">
          <div className="md:mx-5 bg-[#EDE9D0] p-3 lg:w-[60%] px-0">
            <div className="md:flex">
              <img
                src={image}
                alt="protagonist"
                className="w-40 h-40 mt-5 mx-auto rounded-full object-cover md:ml-5 justify-center"
              />

              <div className="md:flex-col">
                <h3 className="text-red-500 text-xl pt-5 md:pl-4 text-center md:text-left">
                  Elvis Onobhayedo
                </h3>
                <p className="p-5 text-xs  text-gray-800 text-center md:text-justify md:leading-relaxed md:pr-8">
                  Elvis Onobhayedo is a professional Software Developer and he
                  is the founder of Software Architecture, a technological
                  company that supports businesses in scaling appropriately to
                  serve their customers well and globally. how and why people
                  and social groups use, consume and produce knowledge.
                  Specialisations in knowledge audit and knowledge maps,
                  expertise transfer, knowledge management strategy development,
                  taxonomies, search and information architecture, digital
                  transformation. Author of Principles of Knowledge Auditing:
                  Foundations for Knowledge Management Implementation
                  (Cambridge, MA: MIT Press 2023); co-author The Knowledge
                  Manager's Handbook 2nd edition (London: Kogan Page 2020); and
                  Organising Knowledge: Taxonomies, Knowledge and Organisational
                  Effectiveness (Oxford: Chandos Elsevier 2007).
                </p>
                <div className="flex justify-center gap-2 pl-4 md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-5 pt-3 flex flex-col md:flex-row md:gap-4 md:mt-20">
              <div className="md:w-1/2">
                <img src={image2} className="w-full" />
              </div>
              <div className="md:w-1/2">
                <p className="text-red-500 text-lg font-bold ">
                  ISKO Singapore hybrid event: The role of KM in realising the
                  promise of generative AI with Stuart French
                </p>
              </div>
            </div>
            <div className="px-5 pt-3 flex flex-col md:flex-row md:gap-4 md:mt-20 ">
              <img src={image3} className="md:w-1/2" />

              <p className="text-red-500 text-lg font-bold md:w-1/2">
                Survey on ethics in knowledge management
              </p>
            </div>
          </div>
          <div className=" p-7 md:mx-5  bg-[#EDE9D0] lg:w-[35%] lg:h-[50%] ">
            <h3 className="w-fit bg-red-500 text-white font-bold px-2 py-1 mt-0">
              Our Purpose
            </h3>
            <ul className="list-disc list-inside leading-relaxed  text-xs space-y-3 mt-3">
              <li>
                Publishing concise, practically-oriented articles to inform
                managers and knowledge management (KM) practitioners about the
                findings of high-value research and real and specific case
                scenarios in KM and related disciplines such as communications,
                marketing, psychology, biology, sociology, and management.
              </li>

              <li>
                Leading and supporting actions and activities that encourage and
                facilitate the application of these research and case scenario
                findings in KM practice.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-10 px-5 mt-5 xl:pl-40">
        <div className="md:flex gap-6 mt-10">
          <div className="md:w-1/3">
            <div className="text-white pl-5 w-fit px-2 bg-black mb-4 font-bold ">
              Subscribe to Weekly Wrap
            </div>
            <div className=" flex p-2 gap-14 md:gap-2 border border-gray-600 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                color="#CCCCCC"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <p className=" text-[#CCCCCC] md:text-xs text-left ">
                Enter your Email Address
              </p>
            </div>
            <div className="text-white bg-[#D10602] text-center p-1">
              Subscribe
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="text-white pl-5 w-fit px-2 bg-black mb-4 font-bold mt-5 md:mt-0">
              Follow us
            </div>
            <div>
              <p className="text-left text-white text-xs">
                We build this city, we build this city on rock and roll
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className=" bg-black p-5 text-white  space-y-4 text-xs text-center md:text-left md:flex md:space-y-0 md:gap-2 md:p-8 md:pl-2 xl:pl-40">
        <p>© Copyright RealKM Cooperative Limited 2015-2026</p>
        <p>All Rights Reserved | Privacy Statement</p>
      </footer>
    </div>
  );
}
