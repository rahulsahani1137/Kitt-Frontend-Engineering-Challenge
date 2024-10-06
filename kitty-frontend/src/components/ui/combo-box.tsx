"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { airports } from "@/lib/data"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { BiTargetLock } from "react-icons/bi"

type whereToText = {
    whereToText: string;
};

export function Combobox(props: whereToText) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between py-8"
                >
                    <div className="flex items-center justify-center gap-2 ">
                        <BiTargetLock className="text-zinc-400 size-5" />
                        {value
                            ? <span className="text-black">{airports.find((airports) => airports.city === value)?.city}</span>
                            : <span className="text-zinc-500">{props.whereToText}</span>}
                    </div>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search City..." />
                    <CommandList>
                        <CommandEmpty>No Locations found.</CommandEmpty>
                        <CommandGroup>
                            {airports.map((airports) => (
                                <CommandItem
                                    key={airports.city}
                                    value={airports.city}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === airports.city ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {airports.city}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
