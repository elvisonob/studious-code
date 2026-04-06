import image from '../assets/ono.jpg';
import image2 from '../assets/ono2.jpg';
import image3 from '../assets/ono3.jpg';

export default function App() {
  return (
    <div>
      <div className="bg-[#EDE9D0]">
        <div className="flex justify-between p-2 ">
          <button class="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
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
          <div>Elvis Studios Practicing</div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
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
        </div>
        <img
          src={image}
          alt="protagonist"
          className="w-40 h-40 mt-5 mx-auto rounded-full object-cover justify-center"
        />
        <h3 className="text-red-500 text-xl pt-5 text-center">
          Elvis Onobhayedo
        </h3>
        <p className="p-5 text-xs text-gray-800 text-center">
          Elvis Onobhayedo is a professional Software Developer and he is the
          founder of Software Architecture, a technological company that
          supports businesses in scaling appropriately to serve their customers
          well and globally. how and why people and social groups use, consume
          and produce knowledge. Specialisations in knowledge audit and
          knowledge maps, expertise transfer, knowledge management strategy
          development, taxonomies, search and information architecture, digital
          transformation. Author of Principles of Knowledge Auditing:
          Foundations for Knowledge Management Implementation (Cambridge, MA:
          MIT Press 2023); co-author The Knowledge Manager's Handbook 2nd
          edition (London: Kogan Page 2020); and Organising Knowledge:
          Taxonomies, Knowledge and Organisational Effectiveness (Oxford:
          Chandos Elsevier 2007).
        </p>
        <div className="flex justify-center gap-2">
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
        <div className="px-5 pt-3">
          <img src={image2} />
          <p className="text-red-500 text-lg font-bold">
            ISKO Singapore hybrid event: The role of KM in realising the promise
            of generative AI with Stuart French
          </p>
        </div>
        <div className="px-5 pt-3">
          <img src={image3} />
          <p className="text-red-500 text-lg font-bold">
            Survey on ethics in knowledge management
          </p>
        </div>
        <div className="px-5">
          <h3 className="w-fit bg-red-500 text-white font-bold px-2 py-1 mt-4">
            Our Purpose
          </h3>
          <ul className="list-disc pl-4 text-xs space-y-2 mt-3">
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
        <div className="bg-gray-900 p-5">
          <div className="text-white pl-5  border border-red-900 bg-red-500 ">
            Subscribe to Weekly Wrap
          </div>
          <div className="border-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
              color="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <p className="text-white">Enter your Email Address</p>
          </div>
          <div className="text-white bg-[#D10602] text-center p-3">
            Subscribe
          </div>
        </div>
      </div>
    </div>
  );
}
