import Link from "next/link";
import ResultTable from "./ResultTable"
import SearchAgain from "./SearchAgain"
import { Button } from "./ui/button";
import { Separator } from "./ui/separator"
import { RxCross2 } from "react-icons/rx";


const SearchResult = () => {
    return (
        <div className="pt-20 h-auto flex flex-col">
            <div className="flex justify-between items-center">
                <SearchAgain />
                <Link href="./">
                    <Button variant={"custom_outline"} className="rounded-full h-fit w-fit" >
                        <RxCross2 className="size-5 my-2" />
                    </Button>
                </Link>
            </div>
            <Separator orientation="horizontal" className="my-6" />
            <span className="text-lg py-5 text-zinc-500 tracking-wide">Showing 356 of 767 results</span>
            <ResultTable />
        </div>
    )
}

export default SearchResult