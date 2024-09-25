
function Card(props){
    const name = props.name;
    const pic = props.pic;
    const desc = props.desc;
    return(
        <div className="flex flex-col gap-2 text-slate-400 h-96 shadow-[0_0_5px_rgba(100,116,139,0.3)] border border-slate-500 rounded-2xl">
            <img src={pic} alt='pici' className="w-11/12 h-1/2 mx-auto rounded-lg mt-2"/>
            <p className="text-xl font-semibold w-11/12 ml-4 text-slate-300">{name}</p>
            <p className="w-11/12 mx-auto">{desc}</p>
        </div>
    );
} 

export default Card;