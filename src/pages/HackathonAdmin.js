import OldEvents from "../components/OldEvents";
import UpcomingEvents from "../components/UpcomingEvents";
import AddEvents from "../components/AddEvents";
const HackathonAdmin = () => {
    return (
        <div className="hackathonAdmin flex flex-wrap flex-col items-center justify-center bg-[#000] p-12  ">
            <div className="flex flex-wrap flex-col bg-[#000] text-white w-[1400px] p-8 border-4 [background:linear-gradient(90deg,black,theme(colors.slate.950)_50%,black)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.900/.48)_80%,theme(colors.green.500)_86%,theme(colors.green.300)_90%,theme(colors.green.500)_94%,theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border ">
                <div className="flex gap-10">
                    <UpcomingEvents />
                    <AddEvents />
                </div>
                <OldEvents />

            </div>
        </div>
    );
};
export default HackathonAdmin;