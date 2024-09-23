import { useParams } from 'react-router-dom';
export default function Body(){
    const { buttonclicked } = useParams();
    // const value = useParams();
    return(
        <div className="ms-6 mt-6 text-2xl font-semibold">
             <h1>{buttonclicked ? buttonclicked.charAt(0).toUpperCase() + buttonclicked.slice(1) : "Home"}</h1>
             {/* <h1>{value.buttonclicked ? value.buttonclicked.charAt(0).toUpperCase() + value.buttonclicked.slice(1) : "Home"}</h1> */}
        </div>
    )
};