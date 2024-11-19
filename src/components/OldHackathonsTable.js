import { OldHackathonsHead, OldHackathonsBody } from "./OldHackathons";
const UpcomingHackathonsTable = () => {
    return (
        <div className="flex flex-wrap flex-col gap-5 py-5 border-2 border-green-200 p-4 ">
            <OldHackathonsHead />
            <OldHackathonsBody serialNumber="01" hackathonTitle="November Fest" Date="30/10/2024" winnerTeam="bitbyte" />
            <OldHackathonsBody serialNumber="02" hackathonTitle="NovemberMid Fest" Date="30/10/2024" winnerTeam="HelloWorld" />
            <OldHackathonsBody serialNumber="03" hackathonTitle="December Fest" Date="30/10/2024" winnerTeam="bitbyte" />

        </div>
    );
};
export default UpcomingHackathonsTable;