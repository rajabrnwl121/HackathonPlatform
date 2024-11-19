
export const UpcomingHackathonsHead = () => {
    return (<div className="upcomingHackHead flex flex-wrap gap-5  text-[15px] py-3 border border-white p-4">
        <div className="w-[40px] text-center font-bold text-green-600 ">Sno.</div>
        <div className="w-[280px] text-center font-bold text-green-600">Hackathon Title</div>
        <div className="w-[100px] text-center font-bold text-green-600 ">Reg Date</div>
        <div className="w-[100px] text-center font-bold text-green-600 ">Enter Date</div>
        <div className="w-[80px] text-center font-bold text-green-600 ">Register</div>
        <div className="w-[80px] text-center font-bold  text-green-600">Enter</div>
    </div>);
};

export const UpcomingHackathonsBody = ({ serialNumber, hackathonTitle, regDate, enterDate }) => {
    return (
        <div className="upcomingHackBody flex flex-wrap gap-5 text-red text-[13px] border border-white p-4 ">
            <div className="upcomingHack-serialNumber w-[40px] text-center ">{serialNumber}</div>
            <div className="upcomingHack-title w-[280px] text-center">{hackathonTitle}</div>
            <div className="upcomingHack-regDate w-[100px] text-center">{regDate}</div>
            <div className="upcomingHack-enterDate w-[100px] text-center">{enterDate}</div>
            <div className="upcomingHack-register w-[80px] text-center text-blue-700 underline hover:cursor-pointer hover:bg-[#fff]">register &rarr;</div>
            <div className="upcomingHack-Enter w-[80px] text-center text-blue-700 underline hover:cursor-pointer hover:bg-[#fff]">Enter &rarr;</div>
        </div>
    );
};