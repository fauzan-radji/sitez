import { Image } from "../icons/Image";

export default function Card() {
  return (
    <div className="bg-slate-950/20 rounded shadow-md flex flex-col animate-pulse overflow-hidden">
      <div className="w-full aspect-video bg-slate-950/20 grid place-content-center">
        <Image className="w-10 h-10 text-slate-950/20" />
      </div>

      <div className="px-4 flex gap-2 flex-col py-2">
        <div className="bg-slate-950/20 w-4/5 h-6 rounded"></div>
        <div className="bg-slate-950/20 rounded max-w-full w-36 h-4 mt-1"></div>

        <span className="bg-slate-950/20 w-11/12 h-3 rounded"></span>
        <span className="bg-slate-950/20 w-2/3 h-3 rounded"></span>
        <span className="bg-slate-950/20 w-4/5 h-3 rounded"></span>
        <span className="bg-slate-950/20 w-1/2 h-3 rounded"></span>
      </div>
    </div>
  );
}
