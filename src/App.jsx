import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Card from "./components/Card";
import CardSkeleton from "./skeletons/Card";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="min-h-[100dvh] text-slate-950">
      <header className="container mx-auto flex flex-col justify-between gap-2 p-4 md:flex-row">
        <h1 className="text-center text-3xl font-semibold text-slate-900">
          Sitez
        </h1>
        <form className="flex items-center rounded bg-slate-200 ring-slate-600 transition focus-within:ring-2">
          <input
            type="text"
            className="flex-1 bg-transparent px-4 py-2 text-inherit outline-none placeholder:text-slate-400"
            placeholder="Search"
          />
          <button className="text-inherit">
            <MagnifyingGlassIcon className="me-4 h-4 w-4 text-inherit" />
          </button>
        </form>
      </header>
      <main className="container mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4 lg:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) =>
          isLoading ? (
            <CardSkeleton key={i} />
          ) : (
            <Card
              key={i}
              title={"Some site"}
              url={"https://some.site"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non molestias nesciunt vitae."
              }
            />
          )
        )}
      </main>
    </div>
  );
}
