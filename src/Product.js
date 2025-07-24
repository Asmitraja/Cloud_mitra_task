const data = [
  {icon :"https://www.cloudmitra.com/images/tally2.png", label: "Tally Hosting"},
  {icon :"https://www.cloudmitra.com/images/busy2.png", label:"Busy Hosting"},
 { icon :"https://www.cloudmitra.com/images/marg3.png", label:"Marg Hosting"},
  {icon :"https://www.cloudmitra.com/images/databackup2.png", label:"Backup Recovery"},
  {icon :"https://www.cloudmitra.com/images/taxsoftware1.png", label:"Tax Software Hosting"},
  {icon :"https://www.cloudmitra.com/images/industrywise1.png", label:"Cloud Solution"},
  {icon :"https://www.cloudmitra.com/images/email1.png",label:"Email Solution"},
  {icon :"https://www.cloudmitra.com/images/nvmeserver1.png",label:"NVMe Server"},
  { icon :"https://www.cloudmitra.com/images/bareserver1.png", label:"Bare Metal Server"}
];

const Product = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl flex justify-center font-bold p-4">
        Product & Services
      </h1>
      <h2 className="text-lg flex justify-center text-gray-600">
        Run your business smoothly and securely with our wide range of
      </h2>
      <h2 className="text-lg flex justify-center text-gray-600 mb-6">
        advanced enterprise solutions.
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div 
            key={index}  className="border rounded-lg shadow-lg p-4">
           <div className=" flex justify-center items-center" >
          
            <img
              src={item.icon}
              alt="product"
              className="w-40 h-40 object-contain"
            /> 
            </div>
            <h1 className=" flex justify-center font-bold">{item.label}</h1>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Product;
