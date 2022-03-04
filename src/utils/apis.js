// 경찰 인원 분포
// https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=2021&mm=12&subject=경찰학

// https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=2021&mm=12&subject=경찰학&class=${SERIES}&classn=${CLASS}

export const POLICE_SUbJECTS = ['경찰학', '형사법', '헌법']
export const FIRE_SUbJECTS = [
  '소방학개론',
  '소방행정법',
  '소방관계법규',
  '소방영어',
  '소방한국사',
]
export const ADMIN_SUbJECTS = ['행정학', '행정법', '국어', '한국사', '영어']

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
