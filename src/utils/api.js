// 전체
// https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=2021&mm=12&subject=경찰학

// 반별
// https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=2021&mm=12&subject=경찰학&class=경찰classn=1

// &class=경찰&classn=1

export const getPoliceSubjectRangeData = async (year, month) => {
  const response = await fetch(
    `https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=${year}&mm=${month}&subject=경찰학`
  )
  const result = await response.json()
  return result.result
}
export const getCriminalSubjectRangeData = async (year, month) => {
  const response = await fetch(
    `https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=${year}&mm=${month}&subject=형사법`
  )
  const result = await response.json()
  return result.result
}
export const getLawSubjectRangeData = async (year, month) => {
  const response = await fetch(
    `https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=${year}&mm=${month}&subject=헌법`
  )
  const result = await response.json()
  return result.result
}
