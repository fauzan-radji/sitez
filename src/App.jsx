import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Card } from "./Components";
import { Card as CardSkeleton } from "./Skeletons";
import { useFetch } from "./hooks";

export default function App() {
  // TODO: Error handling
  const { isLoading, data /*, error */ } = useFetch("sitez.json");

  return (
    <div className="min-h-[100dvh] bg-slate-50 text-slate-950">
      <header className="container mx-auto flex flex-col justify-between gap-2 p-4 md:flex-row">
        <h1 className="text-center text-3xl font-semibold text-slate-900">
          Sitez
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center rounded bg-slate-200 ring-slate-400 transition duration-300 focus-within:ring-2"
        >
          <input
            type="text"
            className="flex-1 bg-transparent px-4 py-2 text-inherit outline-none placeholder:text-slate-400"
            placeholder="Search"
          />
          <button className="text-inherit" tabIndex={-1}>
            <MagnifyingGlassIcon className="me-4 h-4 w-4 text-inherit" />
          </button>
        </form>
      </header>
      <main className="container mx-auto grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)
          : data.sites.map((site) => (
              <Card
                key={site.id}
                title={site.title}
                url={site.url}
                poster={site.poster}
                description={site.description}
              />
            ))}
      </main>
    </div>
  );
}
