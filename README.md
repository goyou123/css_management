> 해당 프로젝트는 고은찬 포트폴리오의 이해를 돕기 위해 작성되었습니다.
> 사내 코드 유출 방지를 위해 일부만 간략하게 작성하였습니다.

> 포트폴리오에 있는 CSS관리방법, 아토믹 디자인 패턴 구성에 관한 예시 코드와
> 평소 코딩 스타일을 파악하실 수 있습니다.

## 사용 스택
* React.js 18.2.0 ver
* Typescript @4.8.4 ver
* Sytled-component @5.1.26 ver 
* Redux-thunk @2.4.1 ver
* Eslint @8.25.0 ver
* Prettier @2.7.1 ver
* Yarn @3.2.4 ver

<br><br><br>

## 폴더 구조 
1. api
    * api 모음 (더미데이터 return하는 형식으로 진행)
2. asset
    * 이미지 모음
3. components
    * 재활용되는 컴포넌트 모음 (아토믹 디자인 패턴)
    * atoms / mocules / organism 으로 구분
4. constant
    * 사용되는 객체들의 type 모음 
5. dummyData
    * 더미데이터
6. hooks
    * custom hook 모음
7. layout
    * 기본 레이아웃, 사이드바 관리
8. lib 
    * 유틸 함수 모음
9. pages 
    * 최종 페이지 컴포넌트 (아토믹 디자인 패턴)
10. templates
    * page를 구성하는 컴포넌트 (아토믹 디자인 패턴)
11. routes 
    * 라우팅 관리
12. store 
    * redux 관련 코드 모음
13. styles 
    * css 관리 코드 모음 
    

<br><br><br>


# CSS 관리 방법 
> 기존에는 css색상만 관리하여 중복되는 CSS 코드가 많았습니다. 또한 반응형을 고려하지 않아 font-size도 px로 되어 있었습니다. 이를 개선하기 위해 색상, 폰트, 자주사용하는 border,shadow 등을 객체화하여 사용하였고, 자주 사용하는 css코드도 함수화하여 사용하였습니다.

### themes.ts
> 실제 사용되는 CSS값들을 정의해놓는다.
* 다크모드, 라이트모드 적용 시 사용되는 객체의 key값이 같아야 한다.
* font의 경우 rem 사용 (ex. 14px -> 1.4rem / index.css에 html{ font-size : 62.5% } 설정 )

### styled.d.ts
> 타입스크립트 환경에서 사용할때 필요한 타입 지정
* 사용하는 css 객체의 타입을 지정한다.
* defaultTheme 인터페이스는 <node_modules/@types/styled-components/ts3.7/index.d.ts> 에 빈 객체 상태로 정의되어 있는데 이를 확장하는 개념

### GlobalStyle.ts (선택)
> 전역적으로 사용되는 CSS 모음
* reset.css 을 대체한다.
* 스크롤바 막대 설정 등이 들어간다.

### OftenStyle.ts
> 자주 사용하는 CSS 묶음 모음
* 가운데 정렬 하는 css 코드같이 자주 사용되는 코드 재사용


<br><br><br>


# Atomic Design Pattern
> 기존에도 아토믹 디자인 패턴이 적용 되어 있었지만, 명확한 기준 없이 UI 크기대로만 나누어 서비스별로 각 단계의 역할이 조금씩 달랐습니다. 이를 개선하기 위해 각 디자인 패턴별 명확한 기준을 정의해 통일성 있는 아토믹 디자인 패턴이 되도록 하였습니다.

### page
> 전체 페이지
* CSS가 들어가지 않는다.
* JSX에서 1개의 template를 return한다.
* return하는 template 하위 organism들에 공통으로 들어가는 data가 있다면 page에서 data를 불러온 뒤 page->template->organism 로 props를 통해 전달한다.

### template
> 레이아웃 관련 배치를 담당 
* 배치관련된 CSS만 들어간다.
* 전체 배경을 변경해야할 경우 여기서 처리
* data를 불러오지 않는다.
* page에서 받은 props가 있을 시 하위 organism들로 넘겨주는 역할만 담당한다.
* organism들의 조합으로 이루어진다.

### organism
> 실제 페이지를 구성하는 큰 단위의 컴포넌트 
* 하나의 컴포넌트일 때 폴더를 생성하여 안에 css파일과 같이 넣는다.
* 컴포넌트를 묶어야 할 경우 root폴더(template폴더)에 바로 넣는다.
* 해당 컴포넌트에서 필요한 데이터가 있다면 이곳에서 불러온다.
* 해당 프로젝트에서는 다른 페이지에서 재사용되는 일이 없어 가독성을 위해 organism 폴더 밑에 페이별 폴더로 한번 더 분기하였다.

### mocules
> organism 만들 때 필요한 공통 컴포넌트 
* 반복되는 CardView 형태의 컴포넌트가 주로 위치한다.

### atom
> 상위 컴포넌트를 구성하는 가장 작은 단위의 공통 컴포넌트
- 버튼 단위의 컴포넌트들이 주로 위치한다.



<br><br><br>


