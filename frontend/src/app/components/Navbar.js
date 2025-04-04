import React from "react";
import Image from "next/image";
import image1 from '../../../public/Union2.png'
import image2 from '../../../public/Union1.png'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white border-b shadow-sm">

      <div className="flex items-center space-x-2">
        <div className="relative w-8 h-8">
          <Image src={image1} path alt="Logo Top" width={20} height={20} className="absolute top-2 left-[-2]"/>
          <Image src={image2}  alt="Logo Bottom" width={20} height={20} className="absolute top-[4] left-1"/>
        </div>

        <h1 className="text-xl font-bold text-black">TODO</h1>
      </div>
    </nav>
  );
};

export default Navbar;
