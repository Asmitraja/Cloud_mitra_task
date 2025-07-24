import  { useState } from "react";
import CloudServicesDropdown from "./Cloudservicedrop";
import Backupdrop from "./Backupdrop";
import MargHost from "./MargHost";
import TaxSoftwarehost from "./TaxSoftwareHost";
import Tellyhost from "./Tellyhost";
import JewelleryHost from "./JewelleryHost";
import CompanyDropdown from "./CompanyDropdown";
import EmailCollabDropdown from "./EmailCollabDropdown";
import { Link } from "react-router-dom";

const Menu = () => {
  const [showDropdown, setShowDropdown] = useState(false);
     const   [showCloudDropdown, setShowCloudDropdown] =    useState(false);
  const [showBackupDropdown, setShowBackupDropdown] =   useState(false);
    const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showEmailDropdown, setShowEmailDropdown] =  useState(false);

  return (
    <div className="relative w-full bg-white shadow-md">
             <div className="flex justify-between items-center px-6 py-4 text-sm">
            <Link to="/"> <img  className="w-12 ml-4  h-12 " src="https://www.cloudmitra.com/images/cloudmitralogo4.png" alt="cloudmitra"/> </Link> 
            <div className="flex space-x-6">

         
   <span className="cursor-pointer relative group p-2"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
       <span className="text-pink-600 font-medium">Application Hosting 🔽</span>
            {showDropdown && <DropdownMenu setShowDropdown={setShowDropdown} />}
          </span>

         
          <span
            className="cursor-pointer relative group p-2"
            onMouseEnter={() => setShowCloudDropdown(true)}
            onMouseLeave={() => setShowCloudDropdown(false)}
          >
            <span className="text-pink-600 font-medium">Cloud Services 🔽</span>
                {showCloudDropdown && <CloudServicesDropdown />}
          </span>

          <span
            className="cursor-pointer relative group p-2"
            onMouseEnter={() => setShowBackupDropdown(true)}
            onMouseLeave={() => setShowBackupDropdown(false)}
          >
               <span className="text-pink-600 font-medium">Backup & Security 🔽</span>
            {showBackupDropdown && <Backupdrop />}
          </span>

          <span
            className="cursor-pointer relative group p-2"
            onMouseEnter={() => setShowEmailDropdown(true)}
            onMouseLeave={() => setShowEmailDropdown(false)}
          >
            <span className="text-pink-600 font-medium">Email & Collaboration 🔽</span>
            {showEmailDropdown && <EmailCollabDropdown />}
                </span>

          <span
            className="cursor-pointer relative group p-2"
            onMouseEnter={() => setShowCompanyDropdown(true)}
            onMouseLeave={() => setShowCompanyDropdown(false)}
          >
            <span className="text-pink-600 font-medium">Company 🔽</span>
                  {showCompanyDropdown && <CompanyDropdown />}
          </span>
        </div>

       
        <div className="flex items-center space-x-4">
          <span className="text-red-500 font-semibold">Sales: +91 725-299-9301</span>
      <button className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Try for Free</button>
        <Link className="" to="/login"><span className=" bg-blue-600 text-white p-2 px-4 rounded-2xl m-4 cursor-pointer hover:scale-95"> Login</span> </Link>  
          {/* <Link className="linkstyle" to="/about">
              
            </Link> */}
           </div>
      </div>
    </div>
  );
};


   const DropdownMenu = ({ setShowDropdown }) => {
      const [activeItem, setActiveItem] = useState("Busy Hosting");

  const renderRightComponent = () => {
    switch (activeItem) {
      case "Tally Hosting":
        return <Tellyhost />;
         case "Marg Hosting":
        return <MargHost />;
      case "Tax Software Hosting":
     return <TaxSoftwarehost />;
      case "Jewellery Software":
          
      return <JewelleryHost />;
      default:
        return (
          <>
            <h2 className="text-lg font-bold mb-2 underline">Busy Hosting</h2>
            <div className="flex space-x-4 mb-2">
              <button className="border px-4 py-2 rounded font-bold">
                <span className="text-blue-400 text-lg">Busy </span> Busy Standard Hosting
              </button>
              <button className="border px-4 py-2 rounded font-bold">
                <span className="text-blue-400 text-lg">Busy </span> Busy Enterprise Hosting
              </button>
            </div>
            <div className="text-red-500 cursor-pointer">Get Guided Demo →</div>
            <div className="flex justify-between items-center text-sm mt-4">
              <div className="text-pink-500 font-semibold border border-pink-500 px-3 py-1 rounded-full">
                FREE TRIAL - Get My Free Trial
              </div>
              <div className="text-gray-600 cursor-pointer">Summer Offers - Explore Now!</div>
              <div className="text-green-600 font-medium">Call Us At +91 725-299-9301</div>
            </div>
          </>
        );
    }
  };

  return (
    <div
      className="absolute left-0 mt-2 w-[1000px] bg-white border shadow-lg p-6 grid gap-4 z-50"
        onMouseEnter={() => setShowDropdown(true)}
       onMouseLeave={() => setShowDropdown(false)}
    >
      <div className="flex">
      
        <div className="w-[250px] space-y-4 text-sm font-semibold">
          {["Busy Hosting", "Tally Hosting", "Marg Hosting", "Tax Software Hosting", "Jewellery Software"].map((item) => (
            <div key={item}
              onMouseEnter={() => setActiveItem(item)}
                className={`cursor-pointer text-pink-600 ${activeItem === item ? "font-bold underline" : ""}`}
            >
              {item}
            </div>
          ))}
        </div>

      
         <div className="ml-[200px] w-full"> {renderRightComponent()}</div>
      </div>
    </div>
  );
};

export default Menu;
