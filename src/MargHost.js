const MargHost =()=>{
    return(
        <div className="">
        <h2 className="text-lg font-bold mb-2 underline">MargHost</h2>
        {/* <h2 className="text-lg font-bold mb-2 underline">Busy Hosting</h2> */}
        <div className="flex space-x-4 mb-2">
          <button className="border px-4 py-2 rounded font-bold">
            <span className="text-blue-400 text-lg">Marg </span> Marg Standard Hosting
          </button>
          <button className="border px-4 py-2 rounded font-bold">
            <span className="text-blue-400 text-lg">Marg </span> Marg Enterprise Hosting
          </button>
        </div>
        <div className="text-red-500 cursor-pointer">Get Guided Demo →</div>
        <div className="flex justify-between items-center text-sm mt-4">
          <div className="text-pink-500 font-semibold border border-pink-500 px-3 py-1 rounded-full">
            FREE TRIAL - Get My Free Trial
          </div>
          <div className="text-gray-600 cursor-pointer">
            Summer Offers - Explore Now!
          </div>
          <div className="text-green-600 font-medium">
            Call Us At +91 725-299-9301
          </div>
        </div>
      </div>
    )
}
export default MargHost;