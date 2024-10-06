import SearchPage from "@/components/SearchPage";

export default function Home() {
  return (
    <div className="grid grid-rows-1 items-start justify-items-center px-auto h-full">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <SearchPage />
      </main>
    </div>
  );
}
