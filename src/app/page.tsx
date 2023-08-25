import { Card, Modal } from "@/src/components";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Site } from "@/src/models";
import { redirect } from "next/navigation";

async function saveSite(formData: FormData) {
  "use server";

  const title = formData.get("title") as string;
  const url = formData.get("url") as string;
  const description = formData.get("description") as string;

  Site.create({ title, url, description });

  redirect("/");
}

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
        <label
          htmlFor="create-site"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-cyan-900 px-4 py-2 text-sm text-slate-300"
        >
          <span className="text-xl leading-none">+</span> New Site
        </label>
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

      <Modal id="create-site" title="Add New Site">
        <form className="flex flex-col gap-4" action={saveSite}>
          <div className="flex flex-col gap-1">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="rounded bg-slate-200 px-4 py-2 text-inherit outline-none ring-slate-400 transition duration-300 placeholder:text-slate-400 focus:ring-2"
              placeholder="Title"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="url">URL</label>
            <input
              type="url"
              name="url"
              id="url"
              className="rounded bg-slate-200 px-4 py-2 text-inherit outline-none ring-slate-400 transition duration-300 placeholder:text-slate-400 focus:ring-2"
              placeholder="URL"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="title">Description</label>
            <textarea
              name="description"
              id="description"
              rows={3}
              className="resize-none rounded bg-slate-200 px-4 py-2 text-inherit outline-none ring-slate-400 transition duration-300 placeholder:text-slate-400 focus:ring-2"
              placeholder="Description"
            ></textarea>
          </div>

          <div className="flex gap-4">
            <label
              htmlFor="create-site"
              className="flex-1 cursor-pointer rounded bg-slate-600 px-4 py-2 text-center text-sm text-white hover:bg-slate-700"
            >
              Close
            </label>

            <button
              type="submit"
              className="flex-1 cursor-pointer rounded bg-cyan-900 px-4 py-2 text-center text-sm text-white hover:bg-cyan-950"
            >
              Store
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
