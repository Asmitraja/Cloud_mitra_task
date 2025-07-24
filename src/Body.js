
import { CheckCircle2 } from "lucide-react";
import Menu from "./Menu";

const features = [
       "Robust infrastructure with high uptime guarantees",
  "Advanced security measures protect your data",
    "Support team available 24/7",
       "Affordable Solutions for Everyone",
  "High Performance infrastructure",
   "Management Made Easy for Everyone"
] ;

const Body = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-20 lg:px-32 flex flex-col lg:flex-row items-center justify-between">
      
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose <span className="text-blue-600">Cloudmitra</span> ?</h2>
            <p className="text-gray-700 mb-6">
          Choosing Cloudmitra for your cloud server and application hosting
          needs means partnering with a trusted provider dedicated to your
          success. We offer robust, scalable solutions that ensure your
          applications run smoothly and efficiently, backed by a 99.9% uptime
          guarantee.
            </p>
         <p className="text-gray-700 mb-6">
          Choosing Cloudmitra for your cloud server and application hosting
          needs means partnering with a trusted provider dedicated to your
          success. We offer robust, scalable solutions that ensure your
          applications run smoothly and efficiently, backed by a 99.9% uptime
          guarantee.
        </p>
        <p className="text-gray-700 mb-6">
          Our state-of-the-art security measures protect your data with advanced
          encryption and regular backups, giving you peace of mind. Our expert
          support team is available 24/7 to assist you whenever needed. With
          flexible pricing, Cloudmitra is ideal for all business sizes.
            </p>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
             {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-2 bg-gray-50 border border-gray-200 p-3 rounded-lg"
            >
              <CheckCircle2 className="text-green-500 mt-1" />
              <span className="text-sm text-gray-800 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img src="https://www.cloudmitra.com/images/services/service1.png" alt="Cloudmitra illustration" className="w-full h-[600px]"/>
      </div>
          </div>
  );
};

  export default Body;
