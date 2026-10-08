
function Contact() {
  return (
    <>
      <div className=" max-w-150 h-140 mx-auto mt-10 shadow-[0px_0px_4px_gray] p-5">
          <h2 className="text-center text-4xl font-bold">Contact Us</h2>

          <div className="mt-5">
            <label htmlFor="">Name <span className="text-red-500">*</span> </label>
            <br />
            <input 
              className="border border-gray-300 w-full p-4"
              type="text" name="" id="" placeholder='Enter your name'/>
          </div>

          <div className="mt-5">
            <label htmlFor="">Phone <span className="text-red-500">*</span> </label>
            <br />
            <input 
              className="border border-gray-300 w-full p-4"
              type="text" name="" id="" placeholder='Enter your phone number'/>
          </div>

          <div className="mt-5">
            <label htmlFor="">Message <span className="text-red-500">*</span> </label>
            <br />
           <textarea 
            className="border border-gray-300 w-full h-32 p-4"
            name="" 
            id=""
            placeholder="type message here..."
            ></textarea>
          </div>
          <div  className="flex justify-end mt-4">
            <button className="bg-black text-white px-5 py-2 hover:rounded hover:bg-black/80 hover:cursor-pointer">Submit</button>
          </div>




      </div>
    </>
  )
}

export default Contact