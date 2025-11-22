export default function Home() {
  return (
    <main className="min-h-screen bg-[#2563eb] flex flex-col items-center justify-center p-8">
      {/* SCAN TO CALL ME */}
      <h1 className="text-white text-4xl md:text-5xl font-bold uppercase text-center mb-8">
        SCAN TO CALL ME
      </h1>

      {/* White Rectangle with Coming Soon */}
      <div className="bg-white rounded-2xl px-12 py-16 mb-8 w-full max-w-md">
        <p className="text-[#1e40af] text-2xl md:text-3xl font-normal text-center leading-relaxed">
          Website<br />
          Coming<br />
          Soon...
        </p>
      </div>

      {/* FREE VIDEO CALL */}
      <div className="text-center mb-8">
        <h2 className="text-white text-2xl md:text-3xl font-bold uppercase mb-2">
          FREE VIDEO CALL
        </h2>
        <div className="w-32 h-0.5 bg-white mx-auto mb-8"></div>
      </div>

      {/* HODI Logo and Brand */}
      <div className="flex items-center gap-4 mb-4">
        {/* HODI Logo - Knocking Hand */}
        <div className="w-20 h-20 bg-white rounded-full border-4 border-[#2563eb] flex items-center justify-center shadow-lg relative">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10"
          >
            {/* Hand in fist/knocking gesture - knuckles facing forward */}
            <path
              d="M22 10C24.2091 10 26 11.7909 26 14V16C26 16.5523 25.5523 17 25 17H19C18.4477 17 18 16.5523 18 16V14C18 11.7909 19.7909 10 22 10Z"
              fill="#2563eb"
            />
            {/* Wrist */}
            <path
              d="M19 17V21H25V17"
              fill="#2563eb"
            />
            {/* Impact lines radiating from knuckles */}
            <path
              d="M13 15L9 11M31 15L35 11M14 19L11 23M30 19L33 23"
              stroke="#2563eb"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h3 className="text-white text-4xl md:text-5xl font-bold uppercase">
          HODI
        </h3>
      </div>

      {/* Powered By DoorVi */}
      <div className="flex items-center gap-2 text-white text-sm md:text-base">
        <span className="uppercase">Powered by</span>
        <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
          <span className="text-[#2563eb] font-bold text-xs">D</span>
        </div>
        <span>
          <span className="font-normal">Door</span>
          <span className="font-bold">Vi</span>
        </span>
      </div>
    </main>
  )
}

