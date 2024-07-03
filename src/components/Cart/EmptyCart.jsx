import { Link } from "react-router-dom"

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center pb-12 pt-4 font-libre">
      <svg
        version="1.1"
        viewBox="0 0 2048 1755"
        width="1280"
        height="1280"
        xmlns="http://www.w3.org/2000/svg"
        className="h-52"
      >
        <path transform="translate(0)" d="m0 0h2048v1755h-2048z" fill="#FCFCFC" />
        <path
          transform="translate(1298,255)"
          d="m0 0h5l7 9 3 13 9 43 11 57 10 45 3 11 1 1h170l4 6 7 16 4 9 13 26 4 10 4 8 8 17 12 27 8 16 7 15 8 18 6 12 10 22 4 9 5 10 6 13 9 20 4 9 8 16 9 19 8 16 21 43 12 27 4 15 1 612 21 3 37 8 48 12 29 9 25 9 24 11 16 9 13 9 10 9 5 9v14l-6 9-9 8-14 9-18 10-32 13-33 11-38 10-45 10-60 11-65 10-42 5-74 7-79 6-70 5-59 3-80 3-37 1-68 1h-134l-65-1-68-2-69-3-66-4-68-5-80-7-36-4v-2h-9l-63-8-57-9-44-8-47-10-38-10-32-10-21-8-20-9-6-3-13-8-3-1v-2h-3v-2l-6-2-1-3-4-2-6-10-1-2v-13l6-9 10-9 14-9 21-10 26-10 31-10 34-9 62-14 47-9 31-5h9v-79l1-514 1-9v-11l5-8 6-16 7-14 6-14 6-12 5-12 36-81 3-7 5-11 5-13 5-10 4-10 7-16 4-11 5-10 5-13 6-12 6-15 4-8 7-15 4-11 6-12 5-12 4-9 8-19 5-10 2-7 3-1h182l20-100 11-58 4-15 4-4 12 1 5 3 4 5 14 48 13 48 7 25 12 39 3 8h329l3-9 29-86 12-36 12-37 4-6 6-5z"
          fill="#4C4C4C"
        />
        <path
          transform="translate(1665,847)"
          d="m0 0h6l2 2 1 46v536l-1 44-2 18-5 17-9 17-3 5h-2l-1 4-13 13-8 6h-2v2h-3v2l-11 5-14 4-12 2-14 1-36 1h-857l-76-1-23-1-7-1-7-9-7-7-11-14-9-14-5-10-4-13-2-13-2-35-1-45-1-71-1-488 1-1 22-1h319l-1 176h404v-107l1-69z"
          fill="hsla(43, 74%, 90%, 1)"
        />
        <path
          transform="translate(837,297)"
          d="m0 0 2 1 1 30 3 17 4 13 12 50 18 68 15 53 8 27 6 15 2 4 4 4v2l6-4h2v-2l4-1v-2l9-6h2v-2l4-1v-2l16-12 3-3 19-14 6-4h2v-2l11-6 8-5 11-6 17-8 16-6 4-1h10l23 5 22 9 16 8 10 6 9 6 5 3 8 5v2l5 2 17 14 4 2v2l4 2 10 9 7 5 10 2 12-31 12-35 11-33 13-37 12-36 11-34 9-30 2-5 1-11 2 3 2 26 10 55 8 41 8 42 33 168 11 57 18 90 3 9 1 1h19l-1-9-4-22v-7l2 1 4 20 2 19-50 1h-269l-21 2h-14l-12-1h-269l-29-1 1-11 13-69 19-98 15-80 16-80 10-48 9-47 5-36 3-6-2-2-1-5-1-16v-20z"
          fill="#caf0f8"
        />
        <path
          transform="translate(434,844)"
          d="m0 0h1v595l4 50 3 17 5 15 8 16 10 14 10 9 16 10 16 8 9 4 16 5 17 3 26 1h53l35 1h93l790-2 30-1 32-4 15-4 15-6 14-8 12-11 5-5 9-10 9-13 6-12 4-18 2-16 2-27 1-7 2-2 2-1 28 5 31 7 44 11 29 9 25 9 24 11 16 9 13 9 10 9 5 9v14l-6 9-9 8-14 9-18 10-32 13-33 11-38 10-45 10-60 11-65 10-42 5-74 7-79 6-70 5-59 3-80 3-37 1-68 1h-134l-65-1-68-2-69-3-66-4-68-5-80-7-36-4v-2h-9l-63-8-57-9-44-8-47-10-38-10-32-10-21-8-20-9-6-3-13-8-3-1v-2h-3v-2l-6-2-1-3-4-2-6-10-1-2v-13l6-9 10-9 14-9 21-10 26-10 31-10 34-9 62-14 47-9 31-5h9v-79z"
          fill="#A2A2A2"
        />
        <path
          transform="translate(933,844)"
          d="m0 0h100l170 1 40 1 3 2 1 22 1 132h-355l-9-1v-14h1l1 11h3l1-46 1-99 1-5h-3l-2 5-7-1-6-1-1-4 29-2z"
          fill="#dda15e"
        />
        <path
          transform="translate(463,840)"
          d="m0 0 10 2 49 2 2 7h1l1 5 1 482 1 71 1 45 2 35 3 17 6 16 10 16 11 13 7 8 4 5v3l1 5h-16l-19-3-16-6-16-9-14-11-10-10-6-8-7-12-4-10-2-12-2-31-1-39-3-220v-68l1-62 2-86 2-143z"
          fill="#E4C399"
        />
        <path
          transform="translate(632,460)"
          d="m0 0 68 1h79l8-1-4 27-13 71-10 52-16 81-14 77-8 46v5l-1 1h-91v-106l1-83z"
          fill="#EED8B6"
        />
        <path
          transform="translate(1352,460)"
          d="m0 0 5 1 135 1 1 212v145h-42l-34-1-2-10-9-52-19-100-12-64-18-97z"
          fill="#EED8B6"
        />
        <path
          transform="translate(1521,510)"
          d="m0 0 2 3 5 15 6 15 15 29 10 19 20 39 14 28 13 28 14 29 11 23 14 28 12 29 9 25-1 1-72 1h-31l-50-1-13-1-2-2h11l11 1 2-189z"
          fill="#D0975F"
        />
        <path
          transform="translate(607,505)"
          d="m0 0h2l1 2v12l-2 33-1 230-1 39 17-1v2l-30 1h-47l-69-1-21-1 3-2 7-1 7-14 13-30 18-41 17-38 11-26 27-60 11-25 8-17 8-16 7-15 4-9 7-16 2-5z"
          fill="#D0975F"
        />
        <path
          transform="translate(1045,459)"
          d="m0 0h22l1 3h2v-2h5l2 1 2-1 55 1h65l22-1-1 8-13 42-6 23-2 8 3 1 4 8-4-2-1-4-3-1-2-5-9-10-16-13-4-2v-2l-5-2-6-5-3-1v-2l-5-2-4-2v-2l-4-1-19-10-17-7-10-4-18-7-13-2h-16l-10 3-34 16-11 6-4 1v2l-6 3-5 2v2h-3v2l-9 5-6 4-4 4h-2v2l-5 3h-2v2l-6 4-4 4h-2v2l-6 4h-2v2l-3-1-6-27-6-26-4-23h121z"
          fill="#EED8B6"
        />
        <path
          transform="translate(1068,708)"
          d="m0 0 12 2 8 4 6 5 9 12 6 12 4 13 1 7v10l-3 15-7 14-2 3h-2l-1 4-5 6-3 1-30 2-16-1-4-4v-2h-2l-7-11-6-16-2-8v-13l4-18 8-15h2l2-5 8-9 8-5z"
          fill="#4D4D4D"
        />
        <path
          transform="translate(1373,1226)"
          d="m0 0h11l12 3 10 5 10 10 5 9 3 8 1 12-3 12-5 9-9 10-5 4-11 6-9 2h-12l-9-3-8-4-8-7-5-7-7-16-1-9 3-14 8-13 10-10 10-5z"
          fill="#4C4C4C"
        />
        <path
          transform="translate(751,1227)"
          d="m0 0h14l10 3 6 3 10 9 7 11 4 14v9l-4 13-8 11-9 8-7 4-16 4-11-1-9-3-10-5-7-7-6-10-2-5-1-6v-16l3-9 7-11 7-7 10-6z"
          fill="#4C4C4C"
        />
        <path
          transform="translate(1045,459)"
          d="m0 0h22l1 3h2v-2h5l4 2-3 3-13-1h-16l-10 3-34 16-11 6-4 1v2l-6 3-5 2v2h-3v2l-9 5-6 4-4 4h-2v2l-5 3h-2v2l-6 4-4 4h-2v2l-6 4h-2v2l-3-1-6-27-6-26-4-23h121z"
          fill="#EED8B6"
        />
        <path
          transform="translate(999,1443)"
          d="m0 0h82l44 1 24 1-1 10-1 14-1 1h-147z"
          fill="#4D4D4D"
        />
        <path
          transform="translate(839,628)"
          d="m0 0 8 1 26 7 56 14 40 12 5 2-2 22h-9l-45-9-55-13-28-7 1-14z"
          fill="#4C4C4C"
        />
        <path
          transform="translate(1248,629)"
          d="m0 0h4l3 19v8l-9 3-45 11-49 11-19 3h-10l-3-8-2-7v-5l16-5 65-17z"
          fill="#4C4C4C"
        />
        <path
          transform="translate(1065,731)"
          d="m0 0 7 1 5 4 5 12 2 8v31l-7 12-6 2v2l-6-1-7-6-1-4h-2l-4-11v-24l4-11 6-11z"
          fill="#F9F9F9"
        />
        <path
          transform="translate(201,1585)"
          d="m0 0 6 1 17 6 38 12 35 9 41 9 43 8 69 11 45 6 35 4 3 2-17-1-64-8-47-7-52-9-48-10-40-10-39-12-21-8z"
          fill="#4C4C4C"
        />
        <path
          transform="translate(1094,814)"
          d="m0 0 1 2 3 1-4 2-21 2h-14l-12-1h-269v-1l212-1 71-1 30-2z"
          fill="#AFAFAF"
        />
        <path
          transform="translate(1094,814)"
          d="m0 0 1 2 3 1-4 2-21 2h-14l-12-1h-39l-18-1v-1l71-1 30-2z"
          fill="#C1C1C1"
        />
        <path
          transform="translate(1375,1239)"
          d="m0 0 11 1 10 5 7 8 3 5v3l-3-1-2-4-3-2v-2l-4-2-5-5-5-2h-8l-10 4-12 10v-3l8-8 10-6z"
          fill="#A2A2A2"
        />
        <path
          transform="translate(837,297)"
          d="m0 0 2 1 1 30 3 19-3-1-3-9-1-16v-20z"
          fill="#A4A4A4"
        />
        <path transform="translate(1241,848)" d="m0 0h5v35l-2-3-1-3v-8l-2-11-2-9z" fill="#C2C2C2" />
        <path
          transform="translate(1405,778)"
          d="m0 0 2 1 4 20 2 19h-38v-1h14l1-2 1 1h19l-1-9-4-22z"
          fill="#A7A7A7"
        />
        <path
          transform="translate(1045,459)"
          d="m0 0h22l1 3h2v-2h5l4 2-3 3-13-1-10-1-3-2-5-1z"
          fill="#DBDBDB"
        />
        <path
          transform="translate(1295,324)"
          d="m0 0 2 3 2 26v6h-1l-3-12-2-1-3 7-1-4 4-10 1-4z"
          fill="#ABABAB"
        />
        <path
          transform="translate(1375,1239)"
          d="m0 0 11 1 1 2-15 2-10 6-8 7v-3l8-8 10-6z"
          fill="#A7A7A7"
        />
        <path
          transform="translate(1512,472)"
          d="m0 0 2 3 4 17 1 13-2 1v-5h-2v-6l-1-1-2-15z"
          fill="#A2A2A2"
        />
        <path transform="translate(889,846)" d="m0 0m-16 1h16l-1 5-1 1-7-1-6-1z" fill="#A7A7A7" />
        <path transform="translate(767,1243)" d="m0 0 5 2 8 8 3 6-1 2-9-9-6-7z" fill="#A2A2A2" />
        <path transform="translate(1523,499)" d="m0 0 2 1 7 14v5l-3-1-7-14z" fill="#A2A2A2" />
        <path transform="translate(1094,814)" d="m0 0 1 2 3 1-4 2-15 1 1-4 11-1z" fill="#B7B7B7" />
        <path
          transform="translate(884,987)"
          d="m0 0h1l1 11 4-1 2-3 3 5 9 1v1h-20z"
          fill="#BDBDBD"
        />
        <path transform="translate(917,528)" d="m0 0 2 3 2 9 3 3v5h-3l-3-6-2-11z" fill="#A5A5A5" />
        <path
          transform="translate(163,1565)"
          d="m0 0 5 2 25 13 1 2-9-3-6-3-13-8-3-1z"
          fill="#505050"
        />
        <path transform="translate(847,636)" d="m0 0 8 1 13 4 1 2-8-1-13-4z" fill="#A2A2A2" />
        <path transform="translate(1070,460)" d="m0 0h5l4 2-3 3-13-1v-1l6-1z" fill="#CDCDCD" />
        <path transform="translate(1197,538)" d="m0 0h2v3l3 1 4 8-4-2-1-4-3-1z" fill="#B5B5B5" />
        <path transform="translate(1094,814)" d="m0 0 1 2 3 1-4 2h-8l4-2 1-2z" fill="#B2B2B2" />
      </svg>
      <p>
        Oh no your Cart is Empty <span className="font-bold text-ruby">:{`(`}</span>
      </p>
      <p>
        Checkout our{" "}
        <Link
          to="/products"
          className="font-semibold text-ruby underline decoration-wavy hover:no-underline"
        >
          Products
        </Link>{" "}
        page to add items
      </p>
    </div>
  )
}

export default EmptyCart
