export default function Navbar()
{
    return(
        <diV>
            <div className="flex justify-between items-center p-3 shadow mt-2 cursor-pointer ">
                <img src="/Zoom_logo.svg"></img>
                <div className="text-[#666484] flex space-x-10 ">
                    <p className="ms-10  hover:text-blue-500">Products</p>
                    <p className=" hover:text-blue-500">Solutions</p>
                    <p className=" hover:text-blue-500">Resources</p>
                    <p className=" hover:text-blue-500">Plans&Pricing</p>
                </div>
                <div className="text-[#666484] flex justify-end space-x-5 ml-auto me-5">
                    <p className="ms-2  hover:text-blue-500 ">Schedule</p>
                    <p className=" hover:text-blue-500">Join</p>
                    <p className=" hover:text-blue-500">Host</p>
                    <p className=" hover:text-blue-500">Web App</p>
                    <img src="/N.jpg" width={30}></img>
                </div>
            </div>
        </diV>
    )
};