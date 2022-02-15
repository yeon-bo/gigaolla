#  📊 데이터 올라운더, ‘기가 올라'

1. 어떤 회사인가?
- 스마트 캠퍼스 및 교육 컨텐츠 유통 플랫폼 구축사업을 전문으로 하는 회사
2. 어떤 서비스인가?
- 핵심성과지표 및 차트를 통해 직렬별 재학생의 학습 현황을 파악하고 효율적인 관리자 운영을 지원하는 서비스
3. 어떤 점이 디자인적으로 기술적으로 어려움이 될 것 같은가?
- 데이터를 시각적으로 보여주는 효과적인 그래프를 선택하기가 어려울 것 같다.
- 필터 요구가 많음
- 비포 애프터 그래프
4. 가장 중요할 것 같은 기능은 무엇인가?
- 데이터를 적재적소에 잘 배치하는 것

## 🔥 git 협업
- git branch 확인
- develop branch 없을 시 __git flow init__
- __git flow feature start + 이름__  ex) git flow feature start test
- 작업하고....
- git add .  또는  git add 파일 명
- git commit 커밋 작성  
- 커밋 페이지에서 i 누르면 작성 가능, 작성이 끝나면 esc를 누르고 :wq 입력해서 커밋 완료
- __git flow feature finish + 이름__
- 자동으로 develop branch로 merge된다 그리고 feature branch는 자동으로 삭제됨
- ⭐️ 수정사항이 생기면 되도록이면 git flow feature를 사용해서 수정하는게 좋다 (develop에 바로 수정을 지양하는게 좋다)
