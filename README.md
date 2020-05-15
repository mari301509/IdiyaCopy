# IdiyaCopy 웹페이지 구현 Project



## 프로젝트 사전회의

1. 네이밍 방식
   
   - 케밥케이스를 베이스로 클래스 네이밍을하되 음료의 특정 네이밍을 할떄에는 카멜케이스로한다.
2. 네이밍 규칙
   - a = link
   - ul = list
   - li = item
3. 기능
   - 헤더고정
   - 이미지 확대
   - 메뉴아이콘 클릭시 메뉴등장
   - 메뉴닫기 아이콘 확대
   - 메뉴 버튼 hover bg color
   - 음료설명 팝업
   - 음료설명 팝업 닫기 버튼 백그라운드
   - 음료설명 팝업 닫기 버튼 아웃라인 애니메이션
   - 음료 마크업 css? html?
4. 모듈
   - 숨김컨텐츠
   - 리셋
5. 추가기능
   - 메뉴 들여쓰기 & 크기 조정
   - 음료설명 bg filter
   - to top 버튼
   - 메뉴설명 닫기 버튼이 너무 작음
   - 설명 툴팁
   - 네비게이션 바 첫번쨰 메뉴 수정
   
   

## 완성본 Feedback

1. drink-infoWrap에 사용한 dfn 요소의 경우 section이나 p 요소 내부에 해당 정보가 정의어임을 나타내도록 해야 하는데 div 요소에서 사용한 것이 적절하지 않음.

   

```
<!-- 작성본 -->
<div class="drink-infoWrap">
	<dfn class="drink-infoName" data-enName="Cherry Blossom Latte">ICED 벚꽃라떼</dfn>
	<p class="drink-infoEx">은은한 벚꽃향과 라즈베리 화이트 초콜릿 토핑이 올라간 핑크빛 라떼</p>
</div>

<!-- 수정본 -->
<p>
	<dfn class="drink-infoName" data-enName="Cherry Blossom Latte">ICED 벚꽃라떼</dfn>
	은은한 벚꽃향과 라즈베리 화이트 초콜릿 토핑이 올라간 핑크빛 라떼
<p>
```



- dfn의 정의

  **HTML dfn 요소**는 현재 맥락이나 문장에서 정의하고 있는 용어를 나타내며 

  `dfn`에서 가장 가까운 조상요소인 `p` / `dt/dd쌍` / `section`  내부에서 용어를 정의한다.

- dfn tag 사용법

  1. 요소가 `title` 특성을 가지고 있으면 그 값을 현재 정의 중인 용어로 간주한다. 

     `dfn`은 여전히 텍스트 콘텐츠를 가지고 있겠지만, 완전한 용어 대신 준말(`abbr`)을 넣을 수도 있고, 다른 대체 형태일 수도 있다.

  2. `dfn`이 다른 텍스트는 없이 하나의 자식만 가지는데, 그 자식이 `title` 특성을 가진 `abbr`인 경우, 자식 `abbr`의 `title` 특성 값을 정의용어로 간주한다.

  3. 모두 아닌 경우 `dfn`의 텍스트 콘텐츠를  정의용어로 간주한다.



출처: [MDN dfn][https://developer.mozilla.org/ko/docs/Web/HTML/Element/dfn]



2. 사용자 정의 속성 (`data-`) 은 소문자를 사용하여야 한다.

```
<!-- 작성본 -->
<dfn class="drink-infoName" data-enName="Cherry Blossom Latte">ICED 벚꽃라떼</dfn>

<!-- 수정본 -->
<dfn class="drink-infoName" data-enname="Cherry Blossom Latte">ICED 벚꽃라떼</dfn>

```



3. 버튼 요소에 담겨있는 `span` 요소를 스크린 리더에서는 읽지 못하도록 aria-hidden 속성을 부여하여 화면에서만 나타나게 한다면, 이때 이미지의 대체텍스트는 읽을 수 있기 때문에 **<u>ICED 벚꽃라떼 이미지 버튼</u>**이라고 읽어주므로 콘텐츠를 이해하는 데 문제가 발생하지 않음.

```
<!-- 작성본 -->
<span>ICED 벚꽃라떼</span><span class="a11y-hidden">설명보기</span>

<!-- 수정본 -->
<span aria-hidden="true">ICED 벚꽃라떼</span>
```



4. aria-label로 어떤 제품을 닫을 것인지 알려줄 경우 추후 **<u>스크립트를 활용하여</u>** 해당 콘텐츠 정보를 읽어와서 결합(join)해서 제공할 수 있음. 

   -> Mark-up을 바로 하기보다는 스크립트로 처리 가능함.

```
<!-- 작성본 -->
<button class="btn-infoClose resetButton btn-gray ariaButton" title="설명 닫기" aria-label="ICED 벛꽃라떼 설명 닫기" type="button">설명 닫기</button>
```



5. aria-label 속성을 사용한 경우를 제외하고 해당 버튼을 클릭했을 때 모달 다이얼로그 창이 뜨는지 등의 정보를 알 수 있도록 aria-haspopup이나 aria-pressed 속성 및 role=“dialog” 등을 사용해 보라고 권하고 싶음.

```
<!-- 작성본 -->

<button class="btn-infoOpen resetButton" title="설명 보기" type="button"></button>

<div class="drink-info">
<div class="drink-infoWrap">
	<dfn class="drink-infoName" data-enname="Cherry Blossom Latte">ICED 벚꽃라떼</dfn>
	<p>은은한 벚꽃향과 라즈베리 화이트 초콜릿 토핑이 올라간 핑크빛 라떼</p>
</div>

<!-- 수정본 -->

<button class="btn-infoOpen resetButton" title="설명 보기" type="button" aria-haspopup="true" aria-pressed="false"></button>

<div class="drink-info" role="dialog" aria-labelledby="iceCherryBlossom">
<p class="drink-infoWrap">
	<dfn class="drink-infoName" data-enname="Cherry Blossom Latte" 
		 id="iceCherryBlossom">ICED 벚꽃라떼</dfn>
	은은한 벚꽃향과 라즈베리 화이트 초콜릿 토핑이 올라간 핑크빛 라떼
</p>

```

