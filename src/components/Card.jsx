import PropTypes from "prop-types";

export default function Card({ title, poster, url, description }) {
  return (
    <div className="group flex cursor-pointer flex-col overflow-hidden rounded bg-slate-100 shadow-md transition duration-300 hover:bg-slate-200">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={poster || "/images/placeholder.webp"}
          className="h-full w-full bg-slate-400 object-cover transition duration-300 group-hover:scale-125"
          alt={title}
        />
      </div>

      <div className="flex flex-col gap-2 px-4 py-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <a
          className="line-clamp-1 break-words text-sm text-cyan-700 underline"
          href={url}
        >
          {url}
        </a>
        <p className="text-xs text-slate-500">{description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  poster: PropTypes.string,
};
