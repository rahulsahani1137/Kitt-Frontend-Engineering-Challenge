import React from 'react'
import { MdOutlineCircle } from "react-icons/md";
import { GoClock } from "react-icons/go";
import Image from 'next/image';

const FlightInfo = () => {
    return (
        <div className='flex'>
            <div className='w-1/2'>
                <div className='flex justify-start items-center gap-3'>
                    <MdOutlineCircle className='text-black size-4 mb-1' />
                    <div className='text-sm text-zinc-400 text-center'>Sat 28 Sept • 2:15</div>
                </div>
                <div className='h-14 w-fit border-l-2 border-black px-2 mx-[6px] py-1'>
                    <div className='text-base text-black ml-3 font-medium'>DXB • Dubai International Airport</div>
                </div>

                <div className='flex justify-start items-center gap-3 pt-1'>
                    <MdOutlineCircle className='text-black size-4 mb-1' />
                    <div className='text-sm text-zinc-400 text-center'>Sat 28 Sept • 2:15</div>
                </div>
                <div className='h-36 w-fit border-l-2 border-zinc-400 border-dashed px-2 mx-[6px] py-1'>
                    <div className='text-base text-black ml-3 font-medium '>RUH • King Khalid International Airport</div>
                    <div className='flex pl-8 items-center gap-2 ml-3 h-24'>
                        <GoClock className='size-4' />
                        <div className='text-zinc-400'>Layover 2h 25m</div>
                    </div>
                </div>

                <div className='flex justify-start items-center gap-3 pt-1'>
                    <MdOutlineCircle className='text-black size-4 mb-1' />
                    <div className='text-sm text-zinc-400 text-center'>Sat 28 Sept • 2:15</div>
                </div>
                <div className='h-14 w-fit border-l-2 border-black px-2 mx-[6px] py-1'>
                    <div className='text-base text-black ml-3 font-medium'>RUH • King Khalid International Airport</div>
                </div>
                <div className='flex justify-start items-center gap-3 pt-2'>
                    <MdOutlineCircle className='text-black size-4 mb-1' />
                    <div className='text-sm text-zinc-400 text-center'>Sat 28 Sept • 2:15</div>
                </div>
                <div className='h-14 w-fit px-2 mx-[6px] py-1'>
                    <div className='text-base text-black ml-3 font-medium'>CDG • Paris - Charles de Gualle Airport</div>
                </div>
            </div>

            <div className='w-1/2 flex flex-col justify-between py-10 items-end'>
                <div className='flex'>
                    <div className='border border-zinc-300 rounded-sm w-fit h-fit'>
                        <Image src="./lufthana2.svg" width={28} height={28} alt="" className='my-[10px] mx-1' />
                    </div>
                    <div className='px-4'>
                        <p>Saudi Arabian Airlines • SV553</p>
                        <p>Economy • A330</p>
                        <p>Flight time 3h 45m</p>
                    </div>
                </div>

                <div className='flex'>
                    <div className='border border-zinc-300 rounded-sm w-fit h-fit '>
                        <Image src="./lufthana2.svg" width={28} height={28} alt="" className='my-[10px] mx-1' />
                    </div>
                    <div className='px-4'>
                        <p>Saudi Arabian Airlines • SV553</p>
                        <p>Economy • A330</p>
                        <p>Flight time 3h 45m</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightInfo