import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import FlightInfo from './FlightInfo'


const FlightSelectInfo = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="custom_green" className='py-4 px-14'>
                        <span className='text-[16px] tracking-wider px-2'>Select</span>
                    </Button>
                </SheetTrigger>
                <SheetContent className='m-6 rounded-lg w-[659px] h-auto'>
                    <SheetHeader>
                        <SheetTitle className='text-2xl font-normal'>Flight details</SheetTitle>
                        <div className='py-3'>
                        <Separator orientation="horizontal"/>
                        </div>
                        <SheetDescription>
                            <FlightInfo />
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default FlightSelectInfo