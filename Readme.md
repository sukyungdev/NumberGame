# NumberGuessGame

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
[https://numberguessgame-sukyungdev.netlify.app/](https://numberguessgame-sukyungdev.netlify.app/)

<img src="https://user-images.githubusercontent.com/96860670/172842806-a1eda54c-033b-4cfb-bd79-e9b4fe87bf1f.png" alt="NumberGame img" width = "550px"/>

## 사용언어

HTML/CSS/Vanilla JavaScript

## 무엇을 구현했나요?

유저가 1에서 100까지의 랜덤한 숫자를 맞추는 게임입니다.

## 기본 구조

1. 유저가 1부터 100사이의 숫자를 입력한다.
2. start 버튼을 누르거나, enter를 한다.
3. 유저가 입력한 숫자가 정답 숫자와 다를 경우, 정답에 관련된 힌트를 제공한다.
4. 유저는 7번의 기회가 있다. 7번이 지나면 유저는 게임 플레이를 할 수 없다.
5. 유저가 reset 버튼을 누르면, 처음 환경으로 reset 된다.
6. 만약 유저가 입력했던 숫자를 다시 입력하면 다른 숫자를 입력하라고 알려준다.

## 추가 요소

### 1. 반응형 대응.

- 모바일과 데스크탑에 맞춰 반응형 코드를 추가하였습니다.(960px)

모바일 버전

<img src="https://user-images.githubusercontent.com/96860670/172842933-62a5d33c-27ce-4cf3-8ffb-c98382c06fa5.png" alt="NumberGame img" width = "300px"/>

### 2. Glassmorphism UI 구현

- glassmorphism이란?
  서리가 낀 느낌의 불투명한 유리 질감을 이용한 UI  
  [Glassmorphism in user interfaces](https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9)

  <img src="https://user-images.githubusercontent.com/96860670/170073411-208989c5-fa64-4c61-9c00-529ef0e87b49.png" alt="glassmorphism" width="500px" />

## 배포

netlify를 이용하여 배포하였습니다.

## History

- 2022/05/24 : deploy 완료, 리드미 추가.
- 2022/05/25 : chance 관련 버그 수정.
- 2022/06/06 : background img 용량 최적화.
