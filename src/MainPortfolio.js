import shipment from './image/shipment.png'
import indeed from './image/indeed.png'
import blogport from './image/blogpost.png'
import uipic from './image/ui.png'
import { Link } from 'react-router-dom'

const MainPortfolio = () =>{


    return(
        <div>
            <p className='font-bold my-4 text-2xl text-center'>Project by Odukoya Sheriff Olawale</p>
        <div className='p-3 sm:grid-cols-2 -translate-x-7 sm:translate-x-0 sm:grid grid mx-16 sm:mx-40 sm:my-6 justify-center grid-cols-1'>
            <div className='border-2 w-56 sm:w-96 sm:h-full sm:p-3 mb-4 border-green-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={indeed} className='w-56 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <Link to={'https://sheriff-job-portfolio.vercel.app/'}>
                <button className='border-2 border-blue-400 p-1 mt-8 rounded-xl w-20 font-bold '>
                    Live
                </button>
                </Link>
            </div>
            <div className='border-2 w-56 sm:w-96 sm:h-full sm:p-3 mb-4 border-green-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={shipment} className='w-56 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <Link to={'https://shipment-project-9xocyi219.vercel.app'}>
                <button className='border-2 border-blue-400 p-1 mt-8 rounded-xl w-20 font-bold '>
                    Live
                </button>
                </Link>
            </div>
            <div className='border-2 w-56 sm:w-96 mb-4 mt-4 sm:h-full sm:p-3 border-green-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={blogport} className='w-56 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <Link to={'https://project-po.onrender.com/'}>
                <button className='border-2 border-blue-400 p-1 mt-8 rounded-xl w-20 font-bold '>
                    Live
                </button>
                </Link>
            </div>
            <div className='border-2 w-56 sm:w-96 mb-4 mt-4 sm:h-full sm:p-3 border-green-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={blogport} className='w-56 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <Link to={'https://project-po.onrender.com/'}>
                <button className='border-2 border-blue-400 p-1 mt-8 rounded-xl w-20 font-bold '>
                    Live
                </button>
                </Link>
            </div>
            <div className='border-2 w-56 sm:w-96 mb-4 mt-4 sm:h-full sm:p-3 border-green-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={uipic} className='w-56 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <Link to={'https://ui-project.onrender.com'}>
                <button className='border-2 border-blue-400 p-1 mt-8 rounded-xl w-20 font-bold '>
                    Live
                </button>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default MainPortfolio