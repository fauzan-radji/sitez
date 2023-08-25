export default function Modal({ id, title, children }) {
  return (
    <>
      <input type="checkbox" id={id} className="peer hidden" />
      <label
        htmlFor={id}
        className="pointer-events-none fixed inset-0 z-50 flex -translate-y-4 items-center justify-center bg-gray-900 bg-opacity-50 opacity-0 transition-all duration-300 ease-in-out peer-checked:pointer-events-auto peer-checked:translate-y-0 peer-checked:opacity-100"
      >
        <div className="flex w-full max-w-md flex-col gap-4 rounded-lg bg-white p-4">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">{title}</h2>

            <label htmlFor={id} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 transition-colors duration-300 ease-in-out hover:text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Close</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>

          <div>{children}</div>
        </div>
      </label>
    </>
  );
}
