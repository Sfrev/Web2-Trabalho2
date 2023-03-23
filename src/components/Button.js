import { Link } from "react-router-dom";

export function Button({label, link, action, type}) {

    const buttonClasses = "antialiased inline-block px-6 py-2.5 text-black bg-green-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3";

    if(typeof(action) === 'string') {
        action = () => {}
    }

    if(link) {
        return <Link to={link} className={buttonClasses}>{label}</Link>
    } else if(action) {
        return <button onClick={action} className={buttonClasses} data-mdb-ripple="true"
        data-mdb-ripple-color="light" type={type}>{label}</button>
    } else {
        throw new Error('Button must have either link or action property defined');
    }
}