import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
      <div className="h-[calc(100vh-13vh)] w-full flex justify-center flex-col">
          <div className="w-4/5 mx-auto items-center grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Text content */ }
              <div className="col-span-2">
                  <h1 data-aos="fade-left" className="text-2xl sm:text-4xl lg:text-5xl xl:text-7xl text-blue-950 font-bold">
                      Buy, Sell and collect NFTs
                  </h1>
                  <p data-aos="fade-right" data-aos-delay="200" className="text-sm md:text-[17px] text-gray-700 text-opacity-80 mt-4 font-medium">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ullam consequuntur tempore et distinctio ratione fugit mollitia, eos explicabo nesciunt fuga hic praesentium repudiandae, quia debitis sequi dolorem fugiat at?
                  </p>
                  <div className="flex items-center space-x-2 mt-10">
                      <button data-aos="zoom-in" data-aos-delay="400" className="w-36 rounded-full py-3 px-8 text-center bg-blue-900 font-semibold text-white transition-all hover:bg-blue-950">Upload</button>
                      <button data-aos="zoom-out" data-aos-delay="600" className="w-36 rounded-full py-3 px-8 text-center bg-rose-900 font-semibold text-white transition-all hover:bg-rose-950">Explore</button>
                  </div>
              </div>
              {/* Image content */}
              <div className="col-span-3">
                  <Image data-aos="fade-left" data-aos-delay="800" src="/images/hero2.png" alt='hero' width={700} height={700}/>
              </div>
          </div>
    </div>
  )
}

export default Hero