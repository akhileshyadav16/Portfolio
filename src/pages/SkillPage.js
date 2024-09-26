import { useEffect } from "react";

function SkillPage(){
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return(
        <div className="h-screen text-slate-400 flex flex-col items-center justify-center font-semibold text-3xl font-mono">
            <p>Skills Page</p>
            <div>Upcoming soon...</div>
        </div>
    );
};

export default SkillPage;