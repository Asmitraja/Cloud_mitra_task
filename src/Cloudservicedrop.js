import React from "react";

const CloudServicesDropdown = () => {
  return (
    <div className="absolute left-0 mt-2 w-[1000px] bg-white border shadow-lg p-6 z-50 ">
      <h2 className="text-xl font-bold text-blue-800 mb-4">Hosting and Cloud Services</h2>
      <div className="grid grid-cols-6 gap-4 mb-6 text-center text-sm font-semibold">
        <div className="space-y-1 p-3 text-center jus shadow-xl  bg-gray-100 hover:bg-blue-100" >
          
          <p>Google Cloud</p>
        </div>
        <div className="space-y-1 p-3 text-center  shadow-xl  bg-gray-100 hover:bg-blue-100">
          
          <p>AWS</p>
        </div>
        <div className="space-y-1 p-3 text-center shadow-xl  bg-gray-100 hover:bg-blue-100">
          
          <p>Azure</p>
        </div>
        <div className="space-y-1 p-3 text-center shadow-xl  bg-gray-100 hover:bg-blue-100">
          
          <p>Dedicated Server</p>
        </div>
        <div className="space-y-1 p-3 text-center shadow-xl bg-gray-100 hover:bg-blue-100">
        
          <p>VPS</p>
        </div>
        <div className="space-y-1 p-3 text-center shadow-xl bg-gray-100 hover:bg-blue-100">
          
          <p>WordPress </p>
        </div>
        <div className="space-y-1 p-3 text-center shadow-xl  bg-gray-100 hover:bg-blue-100">
   
          <p>Website Hosting</p>
        </div>
        <div className="space-y-1 p-3 text-center shadow-xl  bg-gray-100 hover:bg-blue-100">
         
          <p>Database Hosting</p>
        </div>
      </div>

    
      <h2 className="text-md font-bold text-blue-800 mb-3">Industrywise Use of Cloud Services</h2>
      <div className="grid grid-cols-6 gap-3 text-sm">
        {["Accounting", "Legal", "Tax", "Construction", "Retail", "Non Profit", "Education", "Healthcare", "Manufacturing", "Finance", "IT / ES"].map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 text-center py-2 rounded cursor-pointer hover:bg-blue-100"
          >  {item} </div>
        ))}
      </div>
    </div>
  );
};

export default CloudServicesDropdown;
