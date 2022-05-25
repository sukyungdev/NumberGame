# NumberGame

## 목차

```
1. 사용언어
2. 무엇을 구현했나요?
3. 기본 구조
4. 추가 요소
5. 배포
6. History
```

vanilla js로 구현한 숫자 맞추기 게임입니다.  
[https://numbergame-sukyungdev.netlify.app/](https://numbergame-sukyungdev.netlify.app/)

<img src="https://user-images.githubusercontent.com/96860670/170072878-080bd952-ee3b-4ee0-90fa-42ddfab76b37.png" alt="NumberGame img" width = "550px"/>

## 사용언어

HTML/CSS/Vanilla JavaScript

## 무엇을 구현했나요?

유저가 1에서 100까지의 랜덤한 숫자를 맞추는 게임입니다.

## 기본 구조

1. 유저가 1부터 100까지의 숫자를 입력한다.
2. start버튼을 누르거나, enter를 한다.
3. 유저가 입력한 숫자가 정답인 숫자보가 작으면  
   "up", 크면 "down", 같으면 "맞추셨습니다" 메세지가 출력된다.
4. 유저는 7번안에 숫자를 맞추어야 한다. 7번이 지나면 게임을 플레이할 수 없다.
5. reset버튼을 누르면 처음 환경으로 reset 된다.
6. 만약 유저가 같은 숫자를 입력하면 알려준다.
7. 1부터 100까지의 숫자가 아니라면 알려준다.

## 추가 요소

### 1. 반응형 대응.

- 모바일과 데스크탑에 맞춰 반응형 코드를 추가하였습니다.(960px)

### 2. glassmorphism UI 구현

- glassmorphism이란?
  서리가 낀 느낌의 불투명한 유리 질감을 이용한 UI  
  [Glassmorphism in user interfaces](https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9)

  <img src="https://user-images.githubusercontent.com/96860670/170073411-208989c5-fa64-4c61-9c00-529ef0e87b49.png" alt="glassmorphism" width="500px" />

## 배포

netlify를 이용하여 배포하였습니다.

## History

- 2022/05/24 : deploy 완료, 리드미 추가.
- 2022/05/25 : chance 관련 버그 수정.
