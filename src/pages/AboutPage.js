import { useEffect } from "react";
import { IoIosClock } from "react-icons/io";

function AboutPage(){
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return(
        <div className="h-screen text-slate-400 flex flex-col items-center justify-center font-semibold text-3xl gap-4 font-mono">
            <IoIosClock className="animate-ping"/>
            <p>About Page</p>
            <div>Upcoming soon...</div>
        </div>
    );
}

export default AboutPage;