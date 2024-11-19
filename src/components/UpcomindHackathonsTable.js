import { UpcomingHackathonsBody, UpcomingHackathonsHead } from "./UpcomingHackathons";
const UpcomingHackathonsTable = () => {
    return (
        <div className="flex flex-wrap flex-col gap-5 py-5 border-2 border-green-200 p-4  ">
            <UpcomingHackathonsHead />
            <UpcomingHackathonsBody serialNumber="01" hackathonTitle="November Fest" regDate="20/10/2024" enterDate="30/10/2024" />
            <UpcomingHackathonsBody serialNumber="03" hackathonTitle="December Fest" regDate="20/10/2024" enterDate="30/10/2024" />

        </div>
    );
};
export default UpcomingHackathonsTable;