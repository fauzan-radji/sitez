import { Image } from "../Icons";

export default function Card() {
  return (
    <div className="flex animate-pulse flex-col overflow-hidden rounded bg-slate-950/20 shadow-md">
      <div className="grid aspect-video w-full place-content-center bg-slate-950/20">
        <Image className="h-10 w-10 text-slate-950/20" />
      </div>

      <div className="flex flex-col gap-2 px-4 py-2">
        <div className="h-6 w-4/5 rounded bg-slate-950/20"></div>
        <div className="mt-1 h-4 w-36 max-w-full rounded bg-slate-950/20"></div>

        <span className="h-3 w-11/12 rounded bg-slate-950/20"></span>
        <span className="h-3 w-2/3 rounded bg-slate-950/20"></span>
        <span className="h-3 w-4/5 rounded bg-slate-950/20"></span>
        <span className="h-3 w-1/2 rounded bg-slate-950/20"></span>
      </div>
    </div>
  );
}
