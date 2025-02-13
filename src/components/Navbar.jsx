function App() {
  return (
    <>
      <header className="bg-white border-b border-gray-200 light:bg-neutral-800 dark:border-neutral-700 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
        <nav className="relative max-w-[85rem] w-full md:flex md:items-center md:justify-between md:gap-3 mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between">
          <a
              className="flex-none font-semibold text-xl text-[#3563E9] focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Brand"
            >
              MORENT
            </a>
          </div>
            {/* Search Bar */}
          <div className="flex-grow max-w-lg mx-auto relative">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010 17.5a7.5 7.5 0 006.65-3.85z" />
            </svg>
            <input
              type="text"
              placeholder="Search something here"
              className="w-full pl-10 pr-4 py-2 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
            />
          </div>
          
          {/* Right-side icons */}
          <div className="flex items-center gap-4">
            <a href="#favorites">
              <svg className="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.84 4.61A5.5 5.5 0 0012 3.5a5.5 5.5 0 00-8.84 4.11c-.38 3.27 2.26 6.45 6.68 10.2a1 1 0 001.32 0c4.42-3.75 7.06-6.93 6.68-10.2z" />
              </svg>
            </a>
            <a href="#notifications">
              <svg className="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0" />
              </svg>
            </a>
            <a href="#settings">
              <svg className="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317a9.004 9.004 0 013.35 0m-7.962 1.328a9.004 9.004 0 00-1.517 1.517m14.478-1.517a9.004 9.004 0 011.517 1.517m-1.317 9.962a9.004 9.004 0 01-1.517 1.517m-9.962-1.317a9.004 9.004 0 001.517 1.517m1.317-14.478a9.004 9.004 0 011.517 1.517M3.75 9h16.5m-16.5 6h16.5" />
              </svg>
            </a>
            <a href="#profile">
              <svg className="w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A4.992 4.992 0 017 16h10a4.992 4.992 0 011.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}

export default App;
