import Image from 'next/image'

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
        {/* HODI Logo - Image */}
        <div className="w-20 h-20 relative flex items-center justify-center">
          <Image
            src="/hodilogo.jpeg"
            alt="HODI Logo"
            width={80}
            height={80}
            className="w-20 h-20 object-contain"
            priority
          />
        </div>
        <h3 className="text-white text-4xl md:text-5xl font-bold uppercase">
          HODI
        </h3>
      </div>

      {/* Powered By Door VI */}
      <div className="flex items-center gap-2 text-white text-sm md:text-base">
        <span className="uppercase">Powered by</span>
        <span className="font-normal">Door VI</span>
      </div>
    </main>
  )
}

