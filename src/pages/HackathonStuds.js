
import OldEvents from "../components/OldEvents";
import UpcomingEvents from "../components/UpcomingEvents";
const HackathonStuds = () => {
   return (
      <div className="hackathonStudents flex flex-wrap flex-col items-center justify-center bg-[#000]  ">
         <div className="flex flex-wrap flex-col bg-[#070a06] text-white w-[1400px] p-8 border-4 [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border ">
            <UpcomingEvents />
            <OldEvents />
         </div>
      </div>
   );
};
export default HackathonStuds;










// import UpcomingHackathonsTable from "../components/UpcomindHackathonsTable";
// import OldHackathonsTable from "../components/OldHackathonsTable";
//  <div className="flex flex-wrap flex-col m-6 max-w-[850px] ">
//                <p className="font-bold m-2 p-2 text-xl">Upcoming Events...</p>
//                <div className="upcomingHackathons ">
//                   <UpcomingHackathonsTable />
//                </div>
//             </div>
//             <div className="flex flex-wrap flex-col m-6 pt-4 max-w-[650px]">
//                <p className="font-bold m-2 p-2 text-xl">Old Events...</p>
//                <div className="oldHackathons">
//                <OldHackathonsTable />
//                </div>
//                </div>;