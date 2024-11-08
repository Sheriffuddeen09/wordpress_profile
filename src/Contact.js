

const Contact = () =>{

    return(
        <div className="px-8 py-4 text-white">
            <h1 className="font-bold text-5xl ">Contact me</h1>
            <hr className="my-5"/>
            <div className="flex flex-row justify-between">
            <h1 className="text-2xl">Phone Call</h1>
            <a href="tel:07012554154"><button className="border-2 border-blue-400 p-2 rounded-xl font-bold">Call</button></a>
            </div> 
            <hr className="my-5" />
            <div className="flex flex-row justify-between">
            <h1 className="text-2xl">Email</h1>
            <a href="mailto:odukoyasheriff@gmail.com"><button className="border-2 border-blue-400 p-2 rounded-xl font-bold">send mail</button></a>
            </div> 
            <hr className="my-5" />
            <div className="flex flex-row justify-between">
            <h1 className="text-2xl">WhatsApp</h1>
            <a href="https://wa.link/y25p0v"><button className="border-2 border-blue-400 p-2 rounded-xl font-bold">07012554154</button></a>
            </div> 
            <hr className="my-5" />
            <div className="flex flex-row justify-between">
            <h1 className="text-2xl">Linkedin</h1>
            <a href="https://www.linkedin.com/in/odukoya-sheriffudeen-olawale-b6817b252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><button className="border-2 border-blue-400 p-2 rounded-xl font-bold">Profile Link</button></a>
            </div> 
            <hr className="my-5" />
        </div>
    )
}

export default Contact