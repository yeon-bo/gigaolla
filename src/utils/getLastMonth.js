export const getLastMonth = () => {
  let lastMonth = new Date().getMonth() - 1
  const thisYear = new Date().getFullYear()
  if (lastMonth < 10) lastMonth = '0' + lastMonth
  // console.log(lastMonth, thisYear)
  return { thisYear, lastMonth }
}
