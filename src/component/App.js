import image from '../assets/ono.jpg';

export default function App() {
  return (
    <div>
      <nav className="mx-auto p-4 bg-amber-400">
        <div className="container mx-auto flex items-center justify-between">
          <a
            href="#"
            className="focus:outline-none focus-visible:ring-4 ring-white ring-offset-4 ring-offset-amber-400 rounded-sm lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-50 hover:opacity-75 transition-opacity"
          >
            <img src={image} className="w-48 md:w-64 lg:w-32" alt="logo" />
          </a>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      <header></header>
      <main></main>
      <section></section>
    </div>
  );
}
