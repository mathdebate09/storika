export function sortData(arr, param) {
  let copiedArray = [...arr]

  if (param === "popularity") {
    copiedArray = copiedArray.sort((a, b) => b.rating.rate - a.rating.rate)
    return copiedArray
  } else if (param === "alpha-asc") {
    copiedArray = copiedArray.sort((a, b) => a.title.localeCompare(b.title))
    return copiedArray
  } else if (param === "alpha-dsc") {
    copiedArray = copiedArray.sort((a, b) => b.title.localeCompare(a.title))
    return copiedArray
  } else if (param === "price-asc") {
    copiedArray = copiedArray.sort((a, b) => a.price - b.price)
    return copiedArray
  } else if (param === "price-dsc") {
    copiedArray = copiedArray.sort((a, b) => b.price - a.price)
    return copiedArray
  }

  return copiedArray
}

export function totalCart(arr) {
  const copiedArr = [...arr]
  const total = copiedArr.reduce((acc, item) => acc + item.price * item.count, 0)
  return total
}
