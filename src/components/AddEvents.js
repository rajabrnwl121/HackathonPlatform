
const AddEvents = () => {
    return (
        <div className="border-4 border-[#393530] w-[300px] 
         h-[320px] p-4 flex flex-col gap-8 align-center justify-center rounded-lg ml-8 mt-1">
            <div className="text-center  w-10%  text-4xl font-bold">
                Organize A
                <div className="text-green-400" >Hackathon</div>
            </div>
            <div className="addHackBtn rounded-lg p-4 mx-8 mt-4 text-center
             text-[f5f5f5]d text-slate-200  uppercase font-semibold bg-[#0DB276] hover:bg-[#0aa46c]
              hover:text-[#efefef]  hover:cursor-pointer transition delay-100 text-sm">
                Add Hackathon
            </div>
        </div>
    );
};
export default AddEvents;
