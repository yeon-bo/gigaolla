#  📊 데이터 올라운더, ‘기가 올라'

🌏 어떤 회사인가?
- 스마트 캠퍼스 및 교육 컨텐츠 유통 플랫폼 구축사업을 전문으로 하는 회사

🥑 어떤 서비스인가?
- 핵심성과지표 및 차트를 통해 직렬별 재학생의 학습 현황을 파악하고 효율적인 관리자 운영을 지원하는 서비스

🍇 어떤 점이 디자인적으로 기술적으로 어려움이 될 것 같은가?
- 데이터를 시각적으로 보여주는 효과적인 그래프를 선택하기가 어려울 것 같다.
- 필터 요구가 많음
- 비포 애프터 그래프

🍓 가장 중요할 것 같은 기능은 무엇인가?
- 데이터를 적재적소에 잘 배치하는 것

## 🔥 git 협업

### 처음 fork해서 git flow로 작업해서 pull request 보내는 과정

- 선택사항: ( Kimchulyeon 레포에서 issues 작성하는거 연습해도 좋을거 같습니다 )
- gigaolla 레포지토리를 fork해서 자신의 github 레포로 가져간다.
- vscode나 텍스트에디터에서 작업할 폴더로 들어가서
- ⭐️ git clone + __fork해서 가져온 각자 자신의 레포지토리 gigaolla 주소__ (⚠️ kimchulyeon 레포 주소 아닙니다!)
- git branch 확인
- develop branch 없을 시 __git flow init__ (git flow init은 팀원 각자 입력해서 develop branch를 만드는 것)
- git flow init하면 [main] 나오면 enter [develop] 나오면 끝까지 다 enter를 누른다
- ![image](https://user-images.githubusercontent.com/86825214/153995228-4a8ced7c-1125-4dca-b466-5c665be18eb3.png)

- __⭐️ git flow feature start + 이름__  ex) git flow feature start test
- 각자 작업을 하고....
- git add .  또는  git add 파일명
- git commit 커밋 작성  
- 커밋 페이지에서 i 누르면 작성 가능, 작성이 끝나면 esc를 누르고 :wq 입력해서 커밋 완료
- __git flow feature finish + 이름__
- 자동으로 develop branch로 merge된다 그리고 feature branch는 자동으로 삭제됨
- ⭐️ 수정사항이 생기면 되도록이면 git flow feature를 사용해서 수정하는게 좋다 (develop에 바로 수정을 지양하는게 좋다)
- __git push -u origin develop__ 를 입력해서 각자 자신의 레포로 push해준다
- 자신의 레포를 새로고침하면 __compare & pull request__ 녹색 버튼이 생기는데 눌러서 kimchulyeon 레포로 pull request를 요청
- ![image](https://user-images.githubusercontent.com/86825214/153993446-784e2ce6-0510-4a98-9646-d8c2a17f37e4.png)
- develop -> develop으로 보낸다 ( main X )
- - title이랑 comment 편한 방법으로 작성해서 create pull requset 버튼 클릭

---

### 팀원들이 pull request되어 수정된 코드를 내려 받을 때 (업데이트된 코드를 가져오기)

- kimchulyeon 레포에서 주소를 복사한다
- __git remote add upstream + 복사한 주소__ ( kimchulyeon의 레포 주소를 upstream으로 설정 )
- __git fetch upstream develop__ ( kimchulyeon {upstream} 의 최신화된 코드를 fetch해온다
- __git merge FETCH_HEAD__ 해서 가져오기를 완료한다

🏠 이 작업을 반복하면서 작업하시면 됩니다.
