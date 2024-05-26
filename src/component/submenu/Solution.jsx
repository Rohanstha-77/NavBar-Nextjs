import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';

const Solution = () => {
  const [activeMenu, setActiveMenu] = useState('Industry');

  const menus = {
    Industry: ["Restaurants", "Small Company", "Real Estate", "Manufacturing", "IT Company", "Multiple Company", "Healthcare", "Education"],
    Workplace: ["Remote", "On-Field", "Office"],
    Role: ["HR Manager", "CEO", "Employee"],
  };

  const renderMenuItems = (items) => (
    <div className="flex-1 grid grid-cols-3 gap-8 pl-40">
      {items.map((item, index) => (
        <div key={index}>
          <Image src="/Vector.png" width={18} height={14} className="inline mr-2 text-blue-500" />
          <span className='text-lg'>{item}</span>
          <p className="text-sm ml-6 text-gray-500">Gain control of your growth.</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="absolute top-full w-[1177px] h-[450px] bg-white shadow-lg z-10 mt-2" style={{ right: '-565px' }}>
      <div className="flex mr-24 ml-10 pt-8">
        <ul className="w-1/4">
          {Object.keys(menus).map((menu) => (
            <div className={`py-3 w-[266px] rounded-2xl ${activeMenu === menu ? 'text-blue-500 bg-[#F3F4F6]' : ''}`}>
              <li
              key={menu}
              className={`flex items-center cursor-pointer  ml-4`}
              onMouseEnter={() => setActiveMenu(menu)}
              >
                {menu}
              <IoIosArrowDown className="inline ml-20" style={{ transform: "rotate(275deg)" }} />
              </li>
            </div>
          ))}
        </ul>
        {renderMenuItems(menus[activeMenu])}
      </div>
    </div>
  );
};

export default Solution;
