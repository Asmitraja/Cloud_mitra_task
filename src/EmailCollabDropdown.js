import React from "react";


const EmailCollabDropdown = () => {
  const items = [
    { icon: "https://www.unixmen.com/wp-content/uploads/2015/04/Zimbra.png-1000x262-100-_014.png", label: "Zimbra Mail Server" },
    { icon: "https://img.icons8.com/color/512/google-logo.png", label: "Google Workspace" },
    { icon: "https://images.seeklogo.com/logo-png/21/2/microsoft-office-365-logo-png_seeklogo-216623.png", label: "Microsoft O365" },
  ];

  return (
    <div className="absolute mt-2 w-[260px] bg-white rounded-lg shadow-lg p-4 z-50">
      <div className="flex flex-col gap-4 text-sm font-medium text-gray-800">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 hover:text-blue-600 cursor-pointer">
            <img src={item.icon} alt={item.label} className="h-6 w-6" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailCollabDropdown;
