
export const OldHackathonsHead = () => {
    return (<div className="oldHackathonsHead flex flex-wrap gap-5  text-[15px] py-3 border border-white p-4">
        <div className="w-[40px] text-center font-bold text-green-600  ">Sno.</div>
        <div className="w-[280px] text-center font-bold text-green-600">Hackathon Title</div>
        <div className="w-[100px] text-center font-bold  text-green-600">Date</div>
        <div className="w-[100px] text-center font-bold text-green-600 ">Winner</div>
    </div>);
};

export const OldHackathonsBody = ({ serialNumber, hackathonTitle, Date, winnerTeam }) => {
    return (
        <div className="oldHackathonsBody flex flex-wrap gap-5 text-red text-[13px] border border-white p-4 ">
            <div className="upcomingHack-serialNumber w-[40px] text-center ">{serialNumber}</div>
            <div className="upcomingHack-title w-[280px] text-center">{hackathonTitle}</div>
            <div className="upcomingHack-regDate w-[100px] text-center">{Date}</div>
            <div className="upcomingHack-winner w-[100px] text-center">{winnerTeam}</div>
        </div>
    );
};