import { Card, Input, Modal, ModalTrigger } from "@/src/components";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";

import { Site } from "@/src/models";
import path from "path";
import { redirect } from "next/navigation";
import { writeFile } from "fs/promises";

async function saveSite(formData: FormData) {
  "use server";

  const title = formData.get("title") as string;
  const url = formData.get("url") as string;
  const description = formData.get("description") as string;
  const poster = formData.get("poster") as File;

  if (!title || !url || !description || !poster) {
    return redirect("/");
  }

  const buffer = Buffer.from(await poster.arrayBuffer());
  const filename = `${Date.now()}_${poster.name
    .toLowerCase()
    .replaceAll(" ", "_")}`;

  try {
    await writeFile(
      path.join(process.cwd(), "public/images/" + filename),
      buffer
    );
    Site.create({ title, url, description, poster: `/images/${filename}` });
  } catch (error) {
    console.log("Error occured ", error);
  } finally {
    redirect("/");
  }
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
        <ModalTrigger id="create-site">
          <PlusIcon className="h-4 w-4" /> New Site
        </ModalTrigger>
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
          <Input id="title" label="Title" type="text" name="title" />
          <Input id="url" label="URL" type="url" name="url" />
          <Input
            id="poster"
            label="Poster"
            type="file"
            name="poster"
            accept="image/*"
          />
          <Input
            id="description"
            label="Description"
            type="textarea"
            name="description"
          />

          <div className="flex gap-4">
            <ModalTrigger
              id="create-site"
              className="flex-1 rounded bg-slate-600 hover:bg-slate-700"
            >
              Close
            </ModalTrigger>

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
