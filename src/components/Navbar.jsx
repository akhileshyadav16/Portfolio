
function Navbar(){
    return(
        <div className="text-slate-400 bg-gradient-to-r from-slate-900 to-slate-800 h-12 w-1/2 mx-auto shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 rounded-2xl py-2 ">
            <nav className="flex justify-around flex-nowrap">
                <div className="flex gap-4 lg:gap-16 md:gap-8">
                    <p>Home</p>
                    <p>About</p>
                    <p>Skills</p>
                    <p>Projects</p>
                </div>
                <div>
                    <button>Contact</button>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;