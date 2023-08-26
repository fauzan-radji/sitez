import { twMerge } from "tailwind-merge";

export default function Input({
  id,
  label,
  value = "",
  type,
  name,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          name={name}
          id={id}
          rows={3}
          className={twMerge(
            "resize-none rounded bg-slate-200 px-4 py-2 text-inherit outline-none ring-slate-400 transition duration-300 placeholder:text-slate-400 focus:ring-2",
            className
          )}
          placeholder={label}
          defaultValue={value}
          {...props}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          defaultValue={value}
          className={twMerge(
            "rounded bg-slate-200 px-4 py-2 text-inherit outline-none ring-slate-400 transition duration-300 placeholder:text-slate-400 focus:ring-2",
            className
          )}
          placeholder={label}
          {...props}
        />
      )}
    </div>
  );
}
