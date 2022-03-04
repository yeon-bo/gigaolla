// 경찰 인원 분포
// https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=2021&mm=12&subject=경찰학

// https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=2021&mm=12&subject=경찰학&class=${SERIES}&classn=${CLASS}

export const getTotalSubjectRangeData = async (SUBJECT) => {
  const response = await fetch(
    `https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=2021&mm=12&subject=${SUBJECT}`
  )
  const { result } = await response.json
  return result
}

export const getClassRangeData = async (SUBJECT) => {
  const response = await fetch(
    `https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=2021&mm=12&subject=${SUBJECT}`
  )
  const { result } = await response.json
  return result
}
