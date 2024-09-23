import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
      <div className="w-56 h-screen overflow-auto thin-scrollbar cursor-pointer bg-[#F7F7FA]">
            <p className="p-3 hover:text-blue-500">Personal</p>
            <div className="ms-5 space-y-2">
                <Link to="/home" className="block p-2  hover:text-blue-500">
                    Home
                </Link>
                <Link to="/profile" className="block p-2 hover:text-blue-500">
                    Profile
                </Link>
                <Link to="/meetings" className="block p-2  hover:text-blue-500">
                    Meetings
                </Link>
                <Link to="/webinars" className="block p-2  hover:text-blue-500">
                    Webinars
                </Link>
                <Link to="/personal-contacts" className="block p-2  hover:text-blue-500">
                    Personal Contacts
                </Link>
                <Link to="/personal-devices" className="block p-2  hover:text-blue-500">
                    Personal Devices
                </Link>
                <Link to="/whiteboards" className="block p-2  hover:text-blue-500">
                    Whiteboards
                </Link>
                <Link to="/notes" className="block p-2  hover:text-blue-500">
                    Notes
                </Link>
                <Link to="/docs" className="block p-2  hover:text-blue-500">
                    Docs
                </Link>
                <Link to="/recordings" className="block p-2  hover:text-blue-500">
                    Recordings
                </Link>
                <Link to="/meeting-summary" className="block p-2  hover:text-blue-500">
                    Meeting Summary
                </Link>
                <Link to="/clips" className="block p-2  hover:text-blue-500">
                    Clips
                </Link>
                <Link to="/scheduler" className="block p-2  hover:text-blue-500">
                    Scheduler
                </Link>
                <Link to="/settings" className="block p-2  hover:text-blue-500">
                    Setting
                </Link>
                <Link to="/data-privacy" className="block p-2  hover:text-blue-500">
                    Data & Privacy
                </Link>
                <Link to="/report" className="block p-2  hover:text-blue-500">
                    Report
                </Link>
            </div>
            <p className="p-3 hover:text-blue-500">Admin</p>
            <div className="ms-5 space-y-2">
                <Link to="/plans-and-billing" className="block p-2  hover:text-blue-500">
                    Plans and Billing
                </Link>
                <Link to="/user-management" className="block p-2  hover:text-blue-500">
                    User Management
                </Link>
                <Link to="/room-management" className="block p-2  hover:text-blue-500">
                    Room Management
                </Link>
                <Link to="/workspace-management" className="block p-2  hover:text-blue-500">
                    Workspace Management
                </Link>
                <Link to="/account-management" className="block p-2 hover:text-blue-500">
                    Account Management
                </Link>
                <Link to="/advanced" className="block p-2  hover:text-blue-500">
                    Advanced
                </Link>
            </div>
      </div>
    );
}
