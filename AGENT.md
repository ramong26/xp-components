# AGENTS.md

## Goal

이 프로젝트는 **React + TypeScript 기반 UI 컴포넌트 라이브러리**입니다.  
AI 에이전트(Codex CLI 포함)는 새로운 코드를 작성하거나 기존 코드를 수정할 때,  
기존 구조와 스타일 규칙을 최우선으로 따릅니다.

이 문서의 목적은 다음과 같습니다.

- 컴포넌트 구조와 스타일 규칙 일관성 유지
- 과도한 추상화 및 불필요한 패턴 도입 방지
- Storybook / 테스트 / 타입 정의를 포함한 완성도 있는 컴포넌트 작성
- 사람이 유지보수하기 쉬운 코드 생성

---

## Core Principles

1. **기존 코드 스타일 우선**
   - 새 패턴을 임의로 도입하지 말고, 현재 프로젝트에서 사용 중인 방식에 맞춘다.
   - 이미 존재하는 폴더 구조, 파일 네이밍, props 설계 방식을 우선 따른다.

2. **작고 명확한 컴포넌트**
   - 컴포넌트는 한 가지 역할에 집중한다.
   - 지나친 범용화보다 실제 사용성을 우선한다.

3. **타입 안정성**
   - 모든 public props는 명확하게 타입 정의한다.
   - `any` 사용 금지.
   - 타입은 컴포넌트 사용자가 바로 이해할 수 있어야 한다.

4. **스타일 일관성**
   - 기존 디자인 토큰, spacing, radius, font, color 규칙을 따른다.
   - 비슷한 UI는 같은 스타일 패턴으로 맞춘다.
   - 스타일 충돌을 만드는 강한 선택자, `!important` 사용은 최대한 피한다.

5. **접근성 고려**
   - button, input, label, aria 속성 등 기본 접근성을 반드시 고려한다.
   - 클릭 가능한 요소는 의미에 맞는 태그를 사용한다.
   - `button` 안에 `a`, `a` 안에 `button` 같은 잘못된 중첩 금지.

6. **문서화와 테스트 포함**
   - 새 컴포넌트 추가 시 Storybook 스토리를 함께 작성한다.
   - 상호작용 또는 상태 변화가 있는 경우 테스트도 함께 작성한다.

---

## Tech Stack Assumptions

- React
- TypeScript
- Vite
- Storybook
- Vitest
- SCSS 또는 기존 스타일 시스템
- npm package 배포를 고려한 라이브러리 구조

---

## What the Agent Should Do

AI 에이전트는 작업 시 다음을 기본으로 수행합니다.

1. 기존 컴포넌트 패턴을 먼저 확인한다.
2. 새 컴포넌트가 필요하면 아래 파일 구성을 기본으로 제안한다.
3. 컴포넌트 구현과 함께 Storybook 스토리, 테스트 파일 작성 여부를 함께 판단한다.
4. 라이브러리 외부 사용자 입장에서 props API를 단순하고 명확하게 유지한다.
5. breaking change 가능성이 있으면 반드시 최소화한다.

---

## File / Component Conventions

기본적으로 아래 구조를 따른다.

```txt
src/
  components/
    Button/
      Button.tsx
      Button.types.ts
      Button.stories.tsx
      Button.test.tsx
      Button.scss
      index.ts
```

스타일링은 SCSS(Sass)를 기반으로 작성하며, 공통 스타일과 변수는 `styles` 디렉토리에서 import한다. 컴포넌트 네이밍은 PascalCase를 사용한다.

상태 관리는 전역 상태와 컴포넌트 상태 모두 Zustand를 사용한다.

모든 컴포넌트는 반드시 Storybook 스토리를 작성해야 하며, `.stories.tsx` 파일은 해당 컴포넌트 폴더 내부에 위치한다.

또한 모든 컴포넌트는 테스트 코드를 작성해야 하며, Testing Library와 Vitest를 사용한다.

명령어는 다음과 같다:

- 빌드: `pnpm run build`
- 테스트 실행: `pnpm run test`
- 스토리북 실행: `pnpm run storybook`
- 스토리북 빌드: `pnpm run build-storybook`

추가적으로 모든 컴포넌트는 재사용성과 확장성을 고려해 설계해야 하며, UI와 로직은 최대한 분리하고, Props 타입은 명확하게 정의한다.
