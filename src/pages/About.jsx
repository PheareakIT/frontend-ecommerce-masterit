import imgAbout from '../assets/images/about.jpg'

function About() {
  return (
    <div className="w-full h-160 flex justify-center items-center">
      <div className="max-[80%] max-w-360 m-auto flex flex-col gap-8 p-2 md:flex md:flex-row">

        <div className="w-full md:w-[50%]">
          <div className="">
            <img src={imgAbout} alt="" className="rounded-3xl size-full"/>
          </div>
        </div>

        <div className=" w-full md:w-[50%]">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem minus modi ipsum placeat molestiae ipsa perspiciatis! Recusandae minus magni tempora officiis porro culpa, quas iste possimus eius odit. Facere nostrum corrupti pariatur eligendi excepturi dolorem minus autem reiciendis sequi architecto a illo hic temporibus voluptatibus, similique enim dignissimos deserunt cupiditate!</p>

        </div>

      </div>
    </div>
  )
}

export default About