import PropTypes from "prop-types";

export default function Card({ title, poster, url, description }) {
  return (
    <div className="bg-slate-200 rounded shadow-md flex flex-col overflow-hidden cursor-pointer">
      <img
        src={poster}
        className="w-full aspect-video bg-slate-400"
        alt={title}
      />

      <div className="px-4 flex gap-2 flex-col py-2">
        <h2 className="font-semibold text-xl">{title}</h2>
        <a
          className="text-cyan-700 text-sm underline line-clamp-1 break-words"
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
  poster: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
