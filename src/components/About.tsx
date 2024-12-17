export default function About() {
  return (
    <div className="flex min-h-[500px] w-full flex-col md:flex-row">
      {/* Left Section */}
      <div className="relative flex w-full items-center justify-center bg-gradient-to-b from-purple-600 to-orange-200 p-8 md:w-1/2">
        <div className="relative z-10 flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="flex h-full w-full items-center justify-center">
                <img src="logo-tr.png" alt="" className="h-28" />
              </div>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-wider text-black">
              DBSCOINS
            </h2>
          </div>

          {/* Heading */}
          <h1 className="text-center text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Serving clients for over two years
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex w-full bg-black p-8 md:w-1/2">
        {/* Decorative Circles */}
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-purple-400 opacity-20"></div>
        <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-yellow-400 opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col space-y-8">
          {/* Info Icon */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400">
              <span className="text-xl font-bold text-black">i</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-2xl font-light leading-relaxed text-white md:text-3xl">
              Welcome to DBS coins, your premier destination for top-quality
              data sets at unbeatable prices. At DBS Combos, we understand the
              importance of reliable and affordable data solutions in today's
              market.
            </p>
            <p className="text-2xl font-light leading-relaxed text-white md:text-3xl">
              At DBS coins, our goal is to help you boost your hits with ease
              and efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
