import { Send } from "lucide-react";
export default function Hero() {
  return (
    <div className="flex min-h-[600px] w-full flex-col md:flex-row">
      {/* Left Section */}
      <div className="relative flex w-full items-center justify-center bg-[#FFD700] p-8 md:w-1/2">
        <div className="relative z-10 flex flex-col items-center space-y-8">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="relative h-12 w-12">
              <div className="absolute inset-0 rounded-full border-4 border-black">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-2xl font-bold">
                  ₿
                </span>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-wider text-black">
              DBSCOINS
            </h1>
          </div>

          {/* Telegram Handle */}
          <a href="#">
            <div className="flex items-center space-x-2 rounded-full border-2 border-black bg-[#FFD700] px-6 py-2">
              <Send className="h-6 w-6" />
              <span className="text-xl font-medium">@combocoins</span>
            </div>
          </a>
        </div>

        {/* Decorative Background */}
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 transform">
          <svg viewBox="0 0 200 200" className="h-full w-full opacity-20">
            <path
              fill="none"
              stroke="#87CEEB"
              strokeWidth="8"
              d="M 100,100 C 130,60 170,60 170,100 C 170,140 130,140 100,100 C 70,60 30,60 30,100 C 30,140 70,140 100,100"
            />
          </svg>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex w-full items-center justify-center bg-gradient-to-br from-purple-300 via-pink-200 to-pink-300 p-8 md:w-1/2">
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(45deg, #000 1px, transparent 1px), linear-gradient(-45deg, #000 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex max-w-lg flex-col items-center space-y-6 text-center">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl">
            Your Trusted Source for Premium Data Sets at Unmatched Prices
          </h2>
          <p className="text-xl text-gray-800">
            A diverse selection of data from various regions
          </p>
          <button className="rounded-md bg-[#87CEEB] px-8 py-3 text-lg font-semibold text-white transition-transform hover:scale-105">
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
}
