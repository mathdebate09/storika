function LoadingCard() {
  return (
    <div className="flex h-72 w-full animate-pulse flex-col items-center justify-center rounded-md border-2 border-soft-black bg-white p-2 text-center font-libre shadow-md shadow-soft-ruby">
      <div className="mb-6 flex h-32 w-full items-center justify-center justify-self-start rounded-lg bg-gray-300">
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
        <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200"></div>
        <div className="mb-4 h-2.5 w-28 rounded-full bg-gray-200 lg:w-48"></div>
      </div>
      <div className="mt-4 h-8 w-28 rounded-2xl bg-gray-200"></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

function ItemsLoad() {
  let cardArr = []

  for (let i = 0; i < 8; i++) {
    cardArr.push(<LoadingCard key={i} />)
  }

  return (
    <div className="item-center mx-4 mb-8 grid grid-cols-2 justify-center gap-4 lg:mx-16 lg:grid-cols-4 lg:gap-8">
      {cardArr}
    </div>
  )
}

export default ItemsLoad
