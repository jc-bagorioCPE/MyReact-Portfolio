import React from 'react';

const Footer = () => {
  return (
      <footer className="w-full bg-gray-800 text-white text-center py-8">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-[#FF914D]">Let’s Connect</h3>
          <p className="text-gray-300">
            You can reach me at{" "}
            <a
              href="mailto:jc.bagorio515@gmail.com"
              className="text-[#FF914D] underline hover:text-orange-300 transition"
            >
              jc.bagorio515@gmail.com
            </a>{" "}
            or call me at{" "}
            <span className="text-[#FF914D] hover:text-orange-300 transition">
              0969-478-7554
            </span>.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            &copy; {new Date().getFullYear()} JC's Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
  );
};

export default Footer;
