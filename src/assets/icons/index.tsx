import React from "react";

const Icons = {
    Sun: (props: React.SVGProps<SVGSVGElement>) => ( 
        <svg {...props} width="32" height="32" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0833 12C16.0833 13.7949 14.6282 15.25 12.8333 15.25C11.0383 15.25 9.58325 13.7949 9.58325 12C9.58325 10.2051 11.0383 8.75 12.8333 8.75C14.6282 8.75 16.0833 10.2051 16.0833 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.8333 2.75V4.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.0833 6.75L16.8992 7.93417" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.0833 12.0001L20.5833 12.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.0833 17.2501L16.8992 16.066" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.8333 19.75V21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.76739 16.0659L7.58325 17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.08325 12.0001L3.58325 12.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.7674 7.93423L7.58325 6.75003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    ),
    Moon: (props: React.SVGProps<SVGSVGElement>) => (       
        <svg {...props} width="32" height="32" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.75 15.0314C18.2575 15.1436 17.7459 15.2027 17.2209 15.2027C13.3082 15.2027 10.1361 11.9185 10.1361 7.86709C10.1361 6.75253 10.3761 5.69603 10.8057 4.75C7.62795 5.47387 5.25 8.40659 5.25 11.9143C5.25 15.9657 8.4221 19.25 12.3348 19.25C15.1711 19.25 17.6182 17.5242 18.75 15.0314Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    ),
    Telegram: (props: React.SVGProps<SVGSVGElement>) => (
            <svg {...props} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7083 13.625L15.8333 19.25L20.0833 4.75L5.58325 10L10.7083 13.625ZM10.7083 13.625L13.0833 11.75" stroke="#e0e0e0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
    ),
};

export default Icons;