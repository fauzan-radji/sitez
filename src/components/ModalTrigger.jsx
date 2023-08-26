import { twMerge } from "tailwind-merge";

export default function ModalTrigger({ id, children, className = "" }) {
  return (
    <label
      htmlFor={id}
      className={twMerge(
        "flex cursor-pointer items-center justify-center gap-2 rounded-md bg-cyan-900 px-4 py-2 text-sm text-slate-300",
        className
      )}
      role="button"
    >
      {children}
    </label>
  );
}
