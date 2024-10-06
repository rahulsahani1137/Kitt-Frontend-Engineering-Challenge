import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button'
import SearchBox from './SearchBox'
import { FiSearch } from 'react-icons/fi'


const SearchAgain = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant={"outline"} className='rounded-3xl py-6 justify-start *:gap-4 '>
                        <span className='flex text-base font-normal items-center'>
                            CDG
                            <span className='text-zinc-400 text-base font-normal'>Paris Charles De Gu...</span>
                            <div className='h-6 border border-zinc-100'></div>
                            DXB
                            <span className='text-zinc-400 text-base font-normal'>Dubai International...</span>
                            <div className='h-6 border border-zinc-100'></div>
                            Jun 25 - Jul 2
                            <div className='h-6 border border-zinc-100'></div>
                            <div className='bg-[#E5EBEB] p-2 flex items-center rounded-full'>
                                <FiSearch className='size-4 text-[#003E39]' />
                            </div>
                        </span>
                    </Button>
                </SheetTrigger>
                <SheetContent side={"top"} className='h-[233px]'>
                    <SheetHeader>
                        <SheetDescription className='px-60 py-10 items-center justify-center flex'>
                            <SearchBox />
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default SearchAgain