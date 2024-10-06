import FlightSelectInfo from './FlightSelectInfo'
import Image from 'next/image'

const SearchResultCard = () => {
    return (
        <div className='w-full *:h-auto border border-zinc-300 flex rounded-lg hover:bg-zinc-50'>
            <div className='w-4/5 p-6 flex flex-col justify-between gap-4'>
                <div>
                    <span className='text-zinc-500 text-sm'>Thu 25 Jun</span>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex items-center w-96'>
                            <div className='border border-zinc-300 rounded-md'>
                                <Image src="./emirates.svg" alt="" height={77} width={33} className='m-1' />
                            </div>
                            <div className='flex flex-col px-4'>
                                <span className='text-zinc-400 text-sm'>Emirates • AT 4334</span>
                                <span className='text-lg tracking-tight'>9:45 AM - 11:45 AM</span>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-zinc-400 text-sm'>CDG - DXB</span>
                            <span className='text-lg'>2h 10min</span>
                        </div>
                        <div className='flex flex-col pt-5 w-32'>
                            <span className='text-lg'>Non stop</span>
                        </div>
                    </div>
                </div>

                <div>
                    <span className='text-zinc-500 text-sm'>Sat 2 Jul</span>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex items-center w-96'>
                            <div className='border border-zinc-300 rounded-md'>
                                <Image src="./lufthansa.svg" alt="" height={77} width={33} className='m-1' />
                            </div>
                            <div className='flex flex-col px-4'>
                                <span className='text-zinc-400 text-sm'>Lufthansa • AT 4334</span>
                                <span className='text-lg tracking-tight flex'>
                                    11:45 PM - 6:45 AM
                                    <div className='grid pt-[2px] pl-1'>
                                        <span className='text-xs tracking-wide text-red-800 font-medium'>+1 day</span>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-zinc-400 text-sm'>DXB - CDG</span>
                            <span className='text-lg'>2h 10min</span>
                        </div>
                        <div className='flex flex-col w-32'>
                            <span className='text-zinc-400 text-sm tracking-tighter'>6h 32m in Lisbon, P...</span>
                            <span className='text-lg'>Non stop</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-l border-zinc-300 flex justify-end items-end w-fit'>
                <div className='p-4'>
                    <p className='text-zinc-400 text-sm w-fit'>from</p>
                    <div className='flex flex-col gap-2'>
                        <span className='text-xl'>AED 2,456.90</span>
                        <FlightSelectInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultCard