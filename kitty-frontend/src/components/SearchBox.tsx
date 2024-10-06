import { FiSearch } from 'react-icons/fi'
import { LiaExchangeAltSolid } from 'react-icons/lia'
import { Combobox } from './ui/combo-box'
import { DatePicker } from './ui/date-picker'
import { Button } from './ui/button'
import Link from 'next/link'

const SearchBox = () => {
    return (
        <div>
            <div className='flex flex-col gap-6 w-fit'>
                <div className='flex justify-start items-center gap-6'>
                    <div className='flex gap-2 items-center'>
                        <Combobox whereToText='Where from?' />
                        <div className='px-4 py-[18px] h-fit bg-[#f5f7fa] rounded-full'>
                            <LiaExchangeAltSolid className='size-5' />
                        </div>
                        <Combobox whereToText='Where to?' />
                    </div>

                    <div className='flex justify-start gap-3 '>
                        <DatePicker placeholderText={'Departure'} />
                        <DatePicker placeholderText={'Return'} />
                    </div>
                </div>

                <div className='self-end'>
                    <Button variant="custom_green" className='py-6 px-6'>
                        <Link href="/flight-results" className='px-4 flex justify-center items-center'>
                            <FiSearch className='size-4' />
                            <span className='text-[16px] tracking-wider px-2'>Search flights</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SearchBox