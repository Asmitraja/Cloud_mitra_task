import React from "react";
import {  } from "react-icons/fa";

 const items = [
    { icon: "https://png.pngtree.com/png-clipart/20220226/ourmid/pngtree-about-our-company-interface-png-image_4399597.png", label: "About Us" },
    { icon: "https://www.pngplay.com/wp-content/uploads/7/Data-Center-PNG-Clipart-Background.png", label: "Data Centre" },
    { icon: "https://png.pngtree.com/element_our/png/20181217/online-platform-company-exchange-business-cooperation-png_286210.jpg", label: "Our Platform" },
    { icon: "https://static.vecteezy.com/system/resources/thumbnails/010/872/927/small_2x/3d-user-testimonial-icon-png.png", label: "Testimonials" },
    { icon: "https://png.pngtree.com/png-clipart/20220226/ourmid/pngtree-about-our-company-interface-png-image_4399597.png", label: "Why Cloudmitra" },
    { icon: "https://png.pngtree.com/png-clipart/20220226/ourmid/pngtree-about-our-company-interface-png-image_4399597.png", label: "Contact Us" },
    { icon: "https://png.pngtree.com/png-clipart/20220226/ourmid/pngtree-about-our-company-interface-png-image_4399597.png", label: "Cloudmitra Support" },
    { icon: "https://png.pngtree.com/png-clipart/20220226/ourmid/pngtree-about-our-company-interface-png-image_4399597.png", label: "FAQ" },
    { icon: "https://png.pngtree.com/png-clipart/20220226/ourmid/pngtree-about-our-company-interface-png-image_4399597.png", label: "Knowledgebase" },
  ];

const CompanyDropdown = () => {
 

  return (
    <div className="absolute right-0 mt-2 w-[300px] bg-white rounded-lg shadow-lg p-4 z-50">
      <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-800">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer">
            <img src={item.icon} alt={item.label} className="h-7 w-7" />
            <span>{item.label}</span>
          </div>
        ))}
        {/* {items.map((item , index)=>(
          <div key={index}> 
        <img src={item.icon} alt={item.label}/>
        <span>{item.label}</span>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default CompanyDropdown;
