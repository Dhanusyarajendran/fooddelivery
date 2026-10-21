import React, { useState } from 'react';
import { FaDownload, FaPlay, FaSearch} from "react-icons/fa";
import { TiTimes } from "react-icons/ti";
import { bannerAssests } from '../../assets/Data';

const Banner = () => {
    
    const[searchQuery, setSearchQuery] = useState([]);
    const[showVideo, setShowVideo] = useState(false);


    const handleSearch = (e) =>{
      e.preventDefault();
      console.log("searching for ", searchQuery);
    }

    const { banner, orbitImages, video} = bannerAssests //for image part


  return (
    <>
    <div className='relative'> 
        <div className='relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white py-12 px-4 sm:px-8 relative overflow-hidden '>

            <div className='absolute inset-0 bg-gradient-to-r from-amber-900/20 to-amber-700/10 pointer-events-none'></div>

         {/*main content */}
          <div className='max-w-6xl mx-auto relative z-10 flex'> 
                
             <div className='flex flex-col md:flex-row gap-46'>

                    {/* Left Content */} 
                    <div className='flex-1 space-y-8 relative text-center md:text-left  '>
                <h1 className='text-1xl sm:text-3xl md:text-1xl lg:text-5xl font-bold font-serif leading-tight drop-shadow-md'>We're Here <br />
                    <span className='text-amber-400 bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text'>
                        For Food & Delivery
                        </span>
                </h1>


                <p className='text-lg md:text-lg lg:text-xl font-playfair italic sm:text-xl 
                text-amber-100 max-w-xl opacity-90 mx-auto md:mx-0'>
                    Best cooks and best delivery guys all at your service. Hot 
                    tasty food will reach you in 60 mins
                    </p>  


                    <form onSubmit={handleSearch} className='relative max-w-2xl mx-auto md:mx-0 group'>
                        <div className='relative flex items-center bg-amber-700/30 rounded-xl border-2 border-amber-500 shadow-2xl hover:bg-amber-400/50 transition-all duration-300'>
                            <div className='pl-6 pr-3 py-4'>
                                <FaSearch className='text-xl text-amber-400/80'/>
                            </div>
                            <input type='text' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder='Discover your next fav meal...
                            'className='w-full py-2  bg-transparent outline-none placehoder-amber-200/70 text-lg 
                            font-medium tracking-wide text-sm' /> 
                            <button type='submit' className='mr-3 px-6 py-2 bg-gradient-to-r from bg-amber-400 to bg-amber-300
                            rounded-lg font-semibold text-amber-900 hover:from-amber-300 hover:to-amber-200
                            transition-all duration-300 shadow-lg hover:shadow-amber-300/20'>Search</button>
                        </div>
                    </form>
                    <div className='flex flex-wrap gap-4 justify-center md:justify-start mt-6'>
                        <button className='group flex items-center gap-3 bg-amber-800/30 hover:bg-amber-800/50 px-5 py-2 rounded-xl duration-300 transition-all
                         border-2 border-amber-700/50 hover:border-amber-400 '>
                            <FaDownload className='text-xl text-amber-400 group-hover:animate-bounce'/>
                           <span className='text-lg'>Download App</span>
                        </button>


                        <button onClick={()=>setShowVideo(true)} className='group flex items-center gap-3 from bg-amber-400 to bg-amber-300 bg-gradient-to-r 
                        hover: from-amber-300 hover:to-amber-200 px-5 py-3 rounded-xl transition-all duration-300  shadow hover:shadow-amber-300/30
                        '>
                            <FaPlay className='text-xl text-amber-900' />
                            <span className='text-lg text-amber-900 font-semibold'>Watch Vedio</span>
                        </button>
                    </div>
</div>
              


                {/*Right Section */}
              
                  <div className='relative flex flex-1 items-center justify-center group mt-8 md:mt-0 min-h-[300px] sm:min-h-[400px]'>
                    {/* img */}
                    <div className='relative rounded-full p-1 bg-gradiant-to-br from-amber-700 via-amber-800 to-amber-400
                    shadow-2xl z-20 w-[270px] xs:w-[300px] h-[250px] xs:h-[300px] sm:h-[350px] mx-auto'>
                       <img src={banner} alt='Banner' className='rounded-full border-4 xs:border-8 border-amber-900
                       w-full object-cover object-bottom'/>
                       <div className='inset-0 absolute rounded-full bg-gradient-to-b from-transparent to-amber-900/40 mix-blend-medium' />
                    </div>
                </div>
                </div>


                {/* orbitimages */}
                {orbitImages.map((image, index) =>(
                   <div key={index} className={`absolute left-[65%] sm:left-[62%] top-1/3 -transalate-x-1/2 -transalate-y-1/2 
                   ${index === 0 ? 'orbit': `orbit-delay-${index * 5}`} w-[80px] xs:w-[100px] sm:w-[150px] h-[80px] xs:h-[100px] sm:h-[150px]   `}>

                    <img src={image} alt={`orbiting ${ index + 1 }`} className='w-full h-full rounded-full border border-amber-500/30
                    shadow-lg bg-amber-900/20 p-1 object-cover' />   
                   </div>
                ))}




                {/* show video modal */}
                {showVideo && (
                    <div className='fixed inset-0 flex items-center justify-center z-[10000] bg-black/90 backdrop-blur-lg p-4'>
                    <button onClick={()=>setShowVideo(false)}  aria-label="Close video" className='absolute top-6 right-6 text-amber-400 hover:text-amber-300 text-3xl' >
                    <TiTimes />
                    </button>

                    <div className='w-full max-w-4xl mx-auto'>
                        <video controls autoPlay className='w-full aspect-video object-contain rounded-lg shadow-2xl' >
                            <source src={video} type='video/mp4' />
                        </video>
                        </div>
                   
                   </div>
                   
                )}

                





                
       </div>                   
        </div>
        </div>  
          
          
            <div>

            </div>
         
  </>

  )  
}

export default Banner