import UpcomingHackathonsTable from "../components/UpcomindHackathonsTable";
const UpcomingEvents = () => {
    return (
        <div className="flex flex-wrap flex-col m-6 max-w-[850px] ">
            <p className="font-bold m-2 p-2 text-xl text-green-500 ">Upcoming Events...</p>
            <div className="upcomingHackathons ">
                <UpcomingHackathonsTable />
            </div>
        </div>
    );
};
export default UpcomingEvents;