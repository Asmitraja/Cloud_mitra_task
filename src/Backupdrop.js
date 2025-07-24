import React from "react";

const Backupdrop = () => {
  return (
    <div className="absolute left-0 mt-2 w-[1000px] bg-white border shadow-lg p-6 z-50">
               <h2 className="text-xl font-bold text-blue-800 mb-4">Backup & Security</h2>

      <div className="grid grid-cols-3 gap-6 text-sm font-semibold mb-6 ">
        <div className="flex items-center space-x-2 shadow-lg">
          {/* <img src="https://static.vecteezy.com/system/resources/previews/011/015/345/non_2x/security-concept-secure-information-3d-render-personal-data-free-png.png" alt="Image 365" className="h-16 w-16" /> */}
         <img src="https://static.vecteezy.com/system/resources/previews/011/015/345/non_2x/security-concept-secure-information-3d-render-personal-data-free-png.png" alt="SSL" className="h-16 w-16" />
          <span>IMAGE 365</span>
        </div>
    <div className="flex items-center space-x-2 shadow-lg">
          <img src="https://static.vecteezy.com/system/resources/previews/011/015/345/non_2x/security-concept-secure-information-3d-render-personal-data-free-png.png" alt="SSL" className="h-16 w-16" />
          <span>SSL Certificate</span>
  </div>
        
        
        <div className="flex items-center space-x-2 shadow-lg">
          <img src="https://static.vecteezy.com/system/resources/previews/011/015/345/non_2x/security-concept-secure-information-3d-render-personal-data-free-png.png" alt="Acronis" className="h-16 w-16" />
          <span>Acronis</span>
    </div>
        <div className="flex items-center space-x-2 shadow-lg">
          <img src="https://static.vecteezy.com/system/resources/previews/011/015/345/non_2x/security-concept-secure-information-3d-render-personal-data-free-png.png" alt="Veeam" className="h-16 w-16" />
      <span>VEEAM</span>
        </div>
        <div className="flex items-center space-x-2 shadow-lg">
          <img src="https://static.vecteezy.com/system/resources/previews/011/015/345/non_2x/security-concept-secure-information-3d-render-personal-data-free-png.png" alt="Leadchain Sense" className="h-16 w-16" />
    <span>Leadchain Sense</span>
        </div>
      </div>
                 <div className="grid grid-cols-4 gap-4 text-sm mt-4 text-gray-700">
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
          <img src="https://static.vecteezy.com/system/resources/previews/011/015/345/non_2x/security-concept-secure-information-3d-render-personal-data-free-png.png" className="h-5 w-5" alt="Offers" />
          <div>
         <p className="font-semibold">Exiting Offers</p>
       <p className="text-xs">Buy</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
          <img src="https://static.vecteezy.com/system/resources/previews/011/015/345/non_2x/security-concept-secure-information-3d-render-personal-data-free-png.png" className="h-5" alt="Bundled Apps" />
          <div>
            <p className="font-semibold">Get Bundled Apps</p>
       <p className="text-xs">Get Microsoft 365</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
          <img src="https://static.vecteezy.com/system/resources/previews/011/015/345/non_2x/security-concept-secure-information-3d-render-personal-data-free-png.png" className="h-5" alt="Chat" />
          <div>
            <p className="font-semibold">Have Questions</p>
            <p className="text-xs">Chat With Experts</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-green-600 font-medium cursor-pointer">
        
          <img src="https://static.vecteezy.com/system/resources/previews/011/015/345/non_2x/security-concept-secure-information-3d-render-personal-data-free-png.png" className="h-5" alt="Call" />
          <p>+91 725-299-9301</p>
       
        </div>
               </div>
    </div>
  );
};

export default Backupdrop;
