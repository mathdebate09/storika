import { Link } from "react-router-dom"

function Heading() {
  return (
    <header className="flex h-28 items-center justify-center bg-header-bg font-playwrite text-5xl font-black">
      <Link to="/" className="flex">
        <p className="text-soft-black underline decoration-golden underline-offset-4">storika</p>
        <span className="mt-4 text-4xl text-ruby" aria-hidden="true">
          .
        </span>
      </Link>
    </header>
  )
}

export default Heading
