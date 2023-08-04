import Image from "next/image";

export default function Card({ title, poster, url, description }) {
  const openNewPage = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={() => openNewPage(url)}
      className="group flex cursor-pointer flex-col overflow-hidden rounded bg-slate-100 shadow-md ring-slate-400 transition duration-300 focus-within:ring-2 hover:ring-2"
    >
      <div className="aspect-video w-full overflow-hidden">
        <Image
          width={160}
          height={90}
          src={poster || "/images/placeholder.webp"}
          className="h-full w-full bg-slate-400 object-cover transition duration-300 group-hover:scale-105"
          alt={title}
        />
      </div>

      <div className="flex flex-col gap-2 px-4 pb-4 pt-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <a
          className="line-clamp-1 break-words text-sm text-cyan-700 underline outline-none"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {url}
        </a>
        <p className="text-xs text-slate-500">{description}</p>
      </div>
    </div>
  );
}
