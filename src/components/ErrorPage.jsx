import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn&apos;t exist!</h1>
      <Link to="/" className="bg-slate-100 text-blue-800">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  )
}

export default ErrorPage
