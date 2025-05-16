import React from "react";

const Credits = () => {
  return (
    <section className="py-20 md:py-28 relative h-full -mb-12">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-neutral-950 z-0"></div>
      <div className="absolute w-full h-full opacity-10 z-0">
        <div className="absolute top-1/3 right-1/4 w-1/4 h-1/4 bg-rose-500 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1/4 h-1/4 bg-fuchsia-500 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900/60 to-black/60 backdrop-blur-md p-10 rounded-3xl border border-gray-800 shadow-[0_0_50px_rgba(59,130,246,0.1)] transform hover:scale-[1.01] transition-all duration-500">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Made with <span className="text-red-400">♥</span> by
              </h3>
            </div>
            <a
              href="https://www.ampcome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-5 rounded-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="../assets/ampcome.avif"
                  alt="Ampcome Logo"
                  className="h-12 w-auto relative z-10 object-contain"
                />
              </div>
            </a>
            <p className="text-gray-400">Crafted with precision and care</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credits;
