import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';

const Product = () => {
  const [activeSection, setActiveSection] = useState('Tracking');
  const [view, setView] = useState('employee'); 

  const sections = {
    company: {
      Tracking: ["Live Time and Salary", "Performance and Activities", "Attendance Tracking", "Live Chat","Live Location"],
      Management: ["Leave Management", "Holiday Management", "Notice Board Management", "Company Management", "Employee Management", "Approver Management", "Leave/ Missing Management"],
      Report: ["Payment Report", "Performance Report", "Payroll Report", "Attendance Report", "Activities Report"],
      EOTM: ["Automated and Customizable Selection","Real-Time performance Tracking","Engagement Dashboard","Digital Certificates and Badges", "Recoginiton Notification", "Engagement"],
      Language: ["Nepali", "English"]
    },
    employee: {
      Tracking: ["Live Time and Salary", "Performance and Activities", "Attendance Tracking", "Live Chat","Live Location"],
      Management: ["Leave Management", "Holiday Management", "Notice Board Management", "Company Management", "Employee Management", "Approver Management", "Leave/ Missing Management"],
      Report: ["Payment Report", "Performance Report", "Payroll Report", "Attendance Report", "Activities Report"],
      EOTM: ["Automated and Customizable Selection","Real-Time performance Tracking","Engagement Dashboard","Digital Certificates and Badges", "Recoginiton Notification", "Engagement"],
      Language: ["Nepali", "English"]
    }
  };

  const renderDetails = (items) => {
    return (
      <div className="flex-1 grid grid-cols-2 gap-8 pl-40">
        {items.map((item, index) => (
          <div key={index}>
            <Image src="/Vector.png" width={18} height={14} className="inline mr-2 text-blue-500" />
            <span className="text-base font-semibold">{item}</span>
            <p className="text-sm ml-6 text-gray-500">Gain control of your growth.</p>
          </div>
        ))}
      </div>
    );
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="absolute top-full w-[1177px] h-[450px] bg-white shadow-lg z-10 mt-2" style={{ right: '-460px' }}>
      <div className="w-max pt-9 mx-10">
        <div className="border p-2 border-solid rounded-3xl">
          <button
            className={`py-2 px-4 text-lg border-none rounded-2xl ${view === 'company' ? 'bg-[#E8FFF2]' : 'bg-white'}`}
            onClick={() => setView('company')}
          >
            Company
          </button>
          <button
            className={`py-2 px-5 text-lg border-none rounded-2xl ${view === 'employee' ? 'bg-[#E8FFF2]' : 'bg-white'}`}
            onClick={() => setView('employee')}
          >
            Employee
          </button>
        </div>
      </div>
      <div className="flex mr-24 ml-10 pt-8">
        <div className="flex w-max justify-between">
          <ul className="w-max">
            {Object.keys(sections[view]).map((key) => (
              <div className={`py-3 w-[266px] rounded-2xl ${activeSection === key ? 'text-blue-500 bg-[#F3F4F6]' : ''}`} key={key}>
                <li
                  className="flex items-center ml-4 text-lg cursor-pointer"
                  onMouseEnter={() => handleSectionChange(key)}
                >
                  {key}
                  <IoIosArrowDown className="ml-20" style={{ transform: "rotate(275deg)" }} />
                </li>
              </div>
            ))}
          </ul>
        </div>
        {renderDetails(sections[view][activeSection])}
      </div>
    </div>
  );
};

export default Product;

