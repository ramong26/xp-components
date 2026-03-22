# AGENTS.md

## 📌 프론트엔드 컴포넌트 개발 규칙

프레임워크는 React, TypeScript, Next.js(App Router)를 사용하며, 모든 UI 컴포넌트는 `/src/components/컴포넌트명` 경로에 위치한다. 각 컴포넌트 폴더에는 `컴포넌트명.tsx`(React + TypeScript로 구현된 컴포넌트), `컴포넌트명.scss`(컴포넌트 전용 SCSS 스타일), `컴포넌트명.test.tsx`(Vitest와 Testing Library 기반 테스트 코드), `컴포넌트명.stories.tsx`(Storybook 스토리 파일)를 포함해야 한다.

예를 들어, Button 컴포넌트는 다음과 같은 구조를 가진다:

```tsx
/src/components/Button
├── Button.tsx
├── Button.scss
├── Button.test.tsx
├── Button.stories.tsx
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
