
const AddEvents = () => {
    return (
        <div className="border-2 border-green-200 text-greenish w-[300px] h-[320px] p-4 flex flex-col gap-8 align-center justify-center mt-8 ml-10 rounded-lg">
            <div className="text-3xl text-center text-green-600 ">Hi Admin<span className=" text-4xl"> !</span></div>
            <div className="text-xl text-center">Organise a new <span className="text-green-400 text-2xl" >Hackathon</span></div>
            <div className="addHackBtn rounded-lg p-4 mx-8 mt-4 text-center text-[f5f5f5]  uppercase font-bold bg-green-700 hover:bg-green-800 hover:text-[#efefef]  hover:cursor-pointer transition delay-100">Add Hackathon</div>
        </div>
    );
};
export default AddEvents;
