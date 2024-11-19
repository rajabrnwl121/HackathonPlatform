import OldHackathonsTable from "../components/OldHackathonsTable";
const OldEvents = () => {
    return (
        <div className="flex flex-wrap flex-col m-6 pt-4 max-w-[650px]">
            <p className="font-bold m-2 p-2 text-xl  text-green-500 ">Old Events...</p>
            <div className="oldHackathons">
                <OldHackathonsTable />
            </div>
        </div>
    );
};
export default OldEvents;