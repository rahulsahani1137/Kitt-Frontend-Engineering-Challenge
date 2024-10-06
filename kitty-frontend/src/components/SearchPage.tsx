import SearchBox from "./SearchBox"

const SearchPage = () => {
    return (
        <>
            {/* Dash background effect  */}
            <div className="absolute h-[200px] w-full -z-50 flex justify-stretch ">
                <div className="w-[379px] border-l-2 border-dashed"></div>
                <div className="w-[379px] border-x-2 border-dashed"></div>
                <div className="w-[379px] border-r-2 border-dashed"></div>
            </div>
            
            <section className='pt-32 flex flex-col items-center justify-center z-50'>

                <h1 className='text-4xl font-[family-name:var(--font-geist-sans)] tracking-tight text-center pb-8'>Good afternoon, Brian</h1>
                <div className='border border-zinc-200 rounded-lg px-9 py-8 shadow-md shadow-slate-100'>

                    <div className='flex bg-[#f5f7fa] mb-6 w-fit py-2 px-10 font-[500] rounded-lg items-center self-start tracking-wide'>Flights</div>
                    <SearchBox />
                </div>
            </section>
        </>
    )
}

export default SearchPage