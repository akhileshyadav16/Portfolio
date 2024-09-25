import { VscThreeBars } from "react-icons/vsc";
function Navbar(){
    return(
        <div className="text-slate-400 bg-gradient-to-r from-slate-900 to-slate-800 h-12 w-9/12 sm:w-1/2 mx-auto shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 rounded-2xl py-2 ">
            <nav className="flex justify-around flex-nowrap">
                <div className="flex gap-2 sm:gap-4 md:5 lg:gap-16 md:gap-8 px-4">
                    <p className="inline">Home</p>
                    <p className="invisible sm:visible inline">About</p>
                    <p className="invisible sm:visible inline">Skills</p>
                    <p className="invisible sm:visible inline">Projects</p>
                    <p className="">Contact</p>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;