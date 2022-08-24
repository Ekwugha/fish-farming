import React from 'react';
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const HeaderTitle = ({ children }) => (
    <div className="text-capitalize text-light text-center mt-4">
        <div className="display-5 my-3 font"> { children } </div>
        <span className="mx-5 text-center">
           <Link to="/" className="nounderline text-secondary">Home</Link>

            {/* <FontAwesomeIcon className="mx-3" icon={faArrowRight}  size="sm"/> */}
            
            
            { children }
        </span>
    </div>
);


export default HeaderTitle;