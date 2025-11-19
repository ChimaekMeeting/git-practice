# git-practice

## 실행 방법

이 프로젝트는 다른 HTML 조각들을 JS로 `fetch` 해서 붙이는 구조라서  
`index.html` 파일을 더블클릭해서 여는 것만으로는 제대로 동작하지 않습니다.  
**간단한 로컬 서버를 띄운 뒤 브라우저에서 접속**해야 합니다.

### 1. 준비물

- Python 3 (Windows, macOS, Linux 아무거나)

### 2. 로컬 서버 실행
python -m http.server 8000

크롬/엣지 등 브라우저를 열고 주소창에 아래를 입력합니다.

http://localhost:8000/public/index.html