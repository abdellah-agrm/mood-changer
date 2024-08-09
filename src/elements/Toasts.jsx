import { HandEmoji } from "../assets/images";

const Success = ({ text }) => (
  <div className="flex w-full max-w-xs items-center rounded-lg bg-white p-2 pr-4 text-gray-500 shadow">
    <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200 text-blue-500">
      <img src={HandEmoji} className="h-7 w-7" />
    </div>
    <div className="ms-3 mr-2 text-sm font-semibold">{text}</div>
    <button type="button" className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900">
      <span className="sr-only">Close</span>
      <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
      </svg>
    </button>
  </div>
);

const Loadings = () => (
  <div className="flex w-full max-w-xs items-center rounded-lg bg-white p-4 pr-4 text-gray-500 shadow">
    <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-gray-600 rounded-full" role="status" aria-label="loading">
      <span className="sr-only">Loading...</span>
    </div>

    <div className="ms-3 mr-2 text-sm font-semibold">Loading...</div>
    <button type="button" className="-mx-1.5 -my-1.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900">
      <span className="sr-only">Close</span>
      <svg className="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
      </svg>
    </button>
  </div>
);

export {
  Success,
  Loadings,
}