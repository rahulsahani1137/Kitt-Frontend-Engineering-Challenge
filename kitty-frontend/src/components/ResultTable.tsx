import React from 'react';
import FlightSelectInfo from './FlightSelectInfo';

import Image from "next/image";
import SearchResultCard from './SearchResultCard';

// import FlightSelectInfo from "./FlightSelectInfo";

const ResultTable = () => {
    return (
        <div className='flex flex-col gap-5'>
            <SearchResultCard />
            <SearchResultCard />
            <SearchResultCard />
        </div>
    );
};

export default ResultTable;
