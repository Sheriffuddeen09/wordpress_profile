import { Link } from "react-router-dom"
const Portfolio = () =>{

    return(
        <div className="bg-gray-50 w-full h-screen flex flex-col items-center justify-center mx-auto">
             <div className="flex-row flex items-center -translate-y-16 block sm:hidden">
                <p className=" sm:p-3 rounded-xl font-bold  p-1">Welcome to </p>
                <p className=" sm:p-3 rounded-xl font-bold sm:text-xl text-sm p-1 ">Odukoya Sheriff Olawale </p>
                <p className=" sm:p-3 p-1 rounded-xl font-bold ">portfolio</p>
            </div>
            <div className="bg-gray-50 rounded-xl clip sm:z-10 h-96 p-4 mt-2">
            <h1 className="font-bold sm:text-8xl text-4xl text-center mb-6 ">
                As
            </h1>
            <h1 className="font-bold sm:text-8xl text-4xl text-center  mb-6 ">
                Frontend Developer
            </h1>
            <h1 className="font-bold sm:text-8xl text-4xl text-center">
                Programmer
            </h1>
            <div className="flex-row flex items-center justify-center gap-4 sm:gap-10 sm:my-14 my-20">
                <p className="font-bold sm:text-xl text-sm">Click link to view Portfolio </p>
                <Link to={'/portfolio'}>
                <button className="border-2 border-blue-400 text-green-400 font-bold w-24 rounded-lg p-2">
                    View
                </button>
                </Link>
            </div>
            </div>
            <div className="hidden sm:block">
            <div className="flex flex-row relative -top-16 sm:gap-10">
                <p className="bg-green-200 sm:p-3 rounded-xl font-bold welcome p-1">Welcome to </p>
                <p className="bg-yellow-200 sm:p-3 rounded-xl font-bold sm:text-xl text-sm p-1 name">Odukoya Sheriff Olawale </p>
                <p className="bg-red-200 sm:p-3 p-1 rounded-xl font-bold main">Portfolio</p>
            </div>
            </div>
        </div>
    )
}

export default Portfolio