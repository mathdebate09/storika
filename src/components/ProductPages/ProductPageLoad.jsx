function ProductPageLoad() {
  return (
    <div className="flex animate-pulse flex-col gap-6 px-4 py-6 font-libre lg:flex-row lg:px-52">
      <div className="mb-6 flex h-60 w-64 items-center justify-center justify-self-start rounded-lg bg-gray-300 lg:w-96">
        <svg
          className="h-10 w-10 text-gray-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="w-full">
        <div className="mb-4 flex w-full flex-col gap-y-2">
          <div className="mb-2 h-2 rounded-full bg-gray-400"></div>
          <div className="mb-2 mr-48 h-2 rounded-full bg-gray-400"></div>
        </div>
        <div className="mb-6 flex w-full flex-col gap-y-2">
          <div className="mb-1.5 h-2 rounded-full bg-gray-300"></div>
          <div className="mb-1.5 mr-48 h-2.5 w-3/5 rounded-full bg-gray-300"></div>
          <div className="mb-1.5 mr-48 h-2.5 w-5/6 rounded-full bg-gray-300"></div>
          <div className="mb-1.5 mr-48 h-2.5 w-2/3 rounded-full bg-gray-300"></div>
        </div>
        <div className="mb-4 mr-48 h-10 w-28 rounded-xl bg-gray-300"></div>
      </div>
    </div>
  )
}

export default ProductPageLoad
