import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { FaCircleArrowDown } from "react-icons/fa6";
import { useRef } from "react";

function ContactPage(){
    
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return(
        <div className="h-fit text-slate-400 w-screen my-20">
            <div className="w-full sm:w-2/3 h-full sm:mx-auto">
                <h2 className="w-full text-center font-serif font-semibold text-3xl sm:text-5xl my-5 whitespace-nowrap">Reach out to me</h2>
                <form className='flex flex-col gap-10 sm:gap-12 w-11/12 mx-auto h-full py-2 sm:py-10 sm:px-20 pr-2 shadow-[0_0_5px_rgba(100,116,139,0.3)] border-2 border-slate-500 rounded-xl'>
                    <div className='flex gap-2 w-full items-center'>
                        <label htmlfor="firstname" className="text-lg pl-1 font-semibold whitespace-nowrap">First Name:</label>
                        <input type="text" placeholder="Enter first name" name="firstname" id="firstname " className="flex-grow h-12 outline-none w-full bg-slate-500 bg-opacity-20 pl-4 shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 rounded-xl"/>
                    </div>
                    <div className='flex gap-2 w-full items-center'>
                        <label htmlfor="lastname" className="text-lg pl-1 font-semibold whitespace-nowrap">Last Name : </label>
                        <input type="text" placeholder="Enter last name" name="lastname" id="lastname" className=" flex-grow h-12 pl-4 outline-none bg-slate-500 w-full bg-opacity-20 shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 rounded-xl"/>
                    </div>
                    <div className="flex gap-4 items-center">
                        <label htmlFor="email" className="text-lg pl-1 font-semibold whitespace-nowrap"> Email - id : </label>
                        <input type="email" placeholder="Enter email" name='email' id='email' className=" flex-grow h-12 outline-none bg-slate-500 bg-opacity-20 pl-4 w-full shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 rounded-xl"/>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <label htmlfor="subject" className="text-lg pl-1 font-semibold whitespace-nowrap">Subject : </label>
                        <input type="text" placeholder="Enter subject" name="subject" id="subject" className="flex-grow h-12 outline-none bg-slate-500 bg-opacity-20 pl-4 w-full shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 rounded-xl"/>
                    </div>
                    <div className='flex gap-2'>
                        <label htmlfor="message" className="text-lg pl-1 font-semibold whitespace-nowrap">Message : </label>
                        <textarea type="text" placeholder="Enter your message" name="message" id="message"className="flex-grow h-48 outline-none bg-slate-500 bg-opacity-20 w-full pl-4 mx-auto shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 rounded-xl"/>
                    </div>
                    <button className="w-32 mx-auto text-lg font-semibold h-14 text-slate-400 rounded-lg shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 hover:text-slate-500 transition-colors duration-300">Send <IoIosSend className="inline h-8 w-8 my-auto" /></button>
                    
                </form>
                <h2 className="w-4/5 mx-auto text-center font-serif font-semibold text-2xl sm:text-3xl md:text-5xl mt-10 ">Let's connect through Social Media <FaCircleArrowDown className="mx-auto text-5xl mt-8 animate-bounce"/></h2>

            </div>
            
        </div>
    );
}

export default ContactPage;