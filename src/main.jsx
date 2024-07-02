import React from "react"
import ReactDOM from "react-dom/client"

import "./styles/reset.css"
import "./styles/index.css"

import PageRouter from "./utils/PageRouter"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageRouter />
  </React.StrictMode>,
)
