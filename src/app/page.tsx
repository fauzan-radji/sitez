import { Card } from "@/src/components";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Site } from "@/src/models";

export default function Home() {
  const sites = Site.all();
  return (
    <>
      <header className="container mx-auto flex flex-col justify-between gap-2 p-4 md:flex-row">
        <h1 className="text-center text-3xl font-semibold text-slate-900">
          Sitez
        </h1>

        <form className="flex items-center rounded bg-slate-200 ring-slate-400 transition duration-300 focus-within:ring-2">
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

      <div className="container mx-auto flex items-center justify-center px-4 md:justify-start">
        <button className="flex items-center justify-center gap-2 rounded-md bg-cyan-900 px-4 py-2 text-sm text-slate-300">
          <span className="text-xl leading-none">+</span> New Site
        </button>
      </div>

      <main className="container mx-auto grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
        {sites.map((site) => (
          <Card
            key={site.id}
            title={site.title}
            poster={site.poster}
            url={site.url}
            description={site.description}
          />
        ))}
      </main>
    </>
  );
}
