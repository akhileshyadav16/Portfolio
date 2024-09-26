import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

function ContactPage(){
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return(
        <div className="h-fit text-slate-400 w-screen my-20">
            <div className="w-2/3 h-full mx-auto">
                <form className='flex flex-col gap-12 w-full mx-auto h-full py-10 px-20 shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 rounded-xl'>
                    <div className='flex flex-col md:flex-row gap-2 items-center'>
                        <label htmlfor="firstname" className="text-lg font-semibold">First Name : </label>
                        <input type="text" placeholder="   Enter first name" name="firstname" id="firstname " className=" flex-grow h-12 outline-none bg-slate-500 bg-opacity-20 mx-auto shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 rounded-xl w-11/12"/>
                    </div>
                    <div className='flex flex-col md:flex-row gap-2 items-center'>
                        <label htmlfor="lastname" className="text-lg font-semibold">Last Name : </label>
                        <input type="text" placeholder="Enter last name" name="lastname" id="lastname" className=" flex-grow h-12 outline-none bg-slate-500 bg-opacity-20 shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 rounded-xl"/>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <label htmlFor="email" className="text-lg font-semibold"> Email - id : </label>
                        <input type="email" placeholder="Enter email" name='email' id='email' className=" flex-grow h-12 outline-none bg-slate-500 bg-opacity-20 shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 rounded-xl"/>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 items-center'>
                        <label htmlfor="subject" className="text-lg font-semibold">Subject : </label>
                        <input type="text" placeholder="Enter subject" name="subject" id="subject" className="flex-grow h-12 outline-none bg-slate-500 bg-opacity-20 shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 rounded-xl"/>
                    </div>
                    <div className='flex flex-col md:flex-row gap-2'>
                        <label htmlfor="message" className="text-lg font-semibold">Message : </label>
                        <textarea type="text" placeholder="Enter your message" name="message" id="message"className="flex-grow h-48 outline-none bg-slate-500 bg-opacity-20 mx-auto shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 rounded-xl"/>
                    </div>
                    <button className="w-32 mx-auto text-lg font-semibold h-14 text-slate-400 rounded-lg shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 hover:text-slate-500 transition-colors duration-300">Send <IoIosSend className="inline h-8 w-8 my-auto" /></button>
                    
                </form>
            </div>
            
        </div>
    );
}

export default ContactPage;