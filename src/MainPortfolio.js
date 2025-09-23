import update from './image/update.png'
import rental from './image/rental.png'
import doctor from './image/doctor.png'
import shortlist from './image/shortlist.png'
import uipic from './image/ui.png'
//import image from './image/image.png'
import { Link } from 'react-router-dom'

const MainPortfolio = () =>{


    return(
        <div>
            <p className='font-bold my-4 text-white text-2xl text-center'>Projects by Odukoya Sheriff Olawale</p>
        <div className='p-3 sm:grid-cols-2 gap-4 sm:gap-7 text-white sm:translate-x-0 sm:grid grid mx-auto items-center md:mx-0  lg:mx-40 sm:my-6 justify-items-center grid-cols-1'>
           
            {/*Rental Project  */}
            <div className='border-2 w-72 sm:w-96 sm:h-full sm:p-3 mb-4 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={rental} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <p className='mt-6 font-bold bg-[#17191c] p-2 shadow-md rounded-xl'>Rental website for renting and shipment of pets to various country. access to search for pets, order, tracking and check rent transaction and more. </p><br/>
                <span className='mt-10 text-blue-100 font-bold' style={{fontSize:'12px'}}>
                Tools: Javascript, Php and Sql</span>
                <div className='flex-wrap sm:flex-nowrap flex gap-3 items-center mb-3 sm:mt-10'>           
                <Link to={'https://projectrental.wuaze.com/'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-40 sm:w-40 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Wordpress Link
                </button>
                </Link>
                </div>

            </div>
       
            {/* Elementor */}
            <div className='border-2 w-72 sm:w-96 sm:h-full sm:p-3 mb-4 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={update} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <p className='mt-6 font-bold bg-[#17191c] p-2 shadow-md rounded-xl'>
                The Sunmukhi Project for Soap is a bookkeeping platform designed to support small businesses in managing their financial records efficiently. This project focuses on helping entrepreneurs track income, expenses, and overall business performance, providing a simple and effective solution for small-scale enterprises. </p><br/>
                <span className='mt-10 text-blue-100 font-bold' style={{fontSize:'12px'}}>Tools: Javascript, Html, Css and Elementor</span>
                <div className='flex-wrap sm:flex-nowrap flex gap-3 items-center mb-3 sm:mt-10'>            
    
                <Link to={'https://doctorprofile.wuaze.com/?i=3'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-40 sm:w-40 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Wordpress Link
                </button>
                </Link>
               </div>
               </div>

<div className='border-2 w-72 sm:w-96 sm:h-full sm:p-3 mb-4 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={doctor} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <p className='mt-6 font-bold bg-[#17191c] p-2 shadow-md rounded-xl'>
                website which is a future opportunity platform it is design as a project with animation and transform </p><br/>
                <span className='mt-10 text-blue-100 font-bold' style={{fontSize:'12px'}}>Tools: php, Javascript, Html, and Css </span>
                <div className='flex-wrap sm:flex-nowrap flex gap-3 items-center mb-3 sm:mt-10'>            
    
                <Link to={'https://irwebsite.wuaze.com/'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-40 sm:w-40 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Wordpress Link
                </button>
                </Link>
               </div>
               </div>
 <div className='border-2 w-72 sm:w-96 sm:h-full sm:p-3 mb-4 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={shortlist} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <p className='mt-6 font-bold bg-[#17191c] p-2 shadow-md rounded-xl'>SheriffProject is a slider page portfolio and carousel </p><br/>
                <span className='mt-10 text-blue-100 font-bold' style={{fontSize:'12px'}}>
                Tools: Javascript, Php and Sql</span>
                <div className='flex-wrap sm:flex-nowrap flex gap-3 items-center mb-3 sm:mt-10'>            
                <Link to={'https://hellobookaiproject.wuaze.com/'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-2 rounded-xl w-40 sm:w-40 sm:mt-0 mb-3 sm:mb-0 font-bold '>
                    Wordpress Link
                </button>
                </Link>
            </div>
        </div>
               

            {/* Ui Project */}
            <div className='border-2 w-72 sm:w-96 mb-4 mt-4 sm:h-full sm:p-3 border-blue-200 p-2 rounded-lg'>
                <img alt='imagepicture' src={uipic} className='w-72 sm:w-96 sm:h-96 h-60 rounded-xl' />
                <Link to={'https://ui-project.onrender.com'}>
                <button className='hover:bg-[#dedee0] border-2 border-blue-400 p-1 mt-8 rounded-xl w-32 mb-3 font-bold '>
                    Live
                </button>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default MainPortfolio