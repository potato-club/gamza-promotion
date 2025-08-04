# 🥔 GAMZA - 코딩 동아리 홍보 사이트

> 프로젝트의 시작, GAMZA. 모두가 함께 고민하고, 함께 성장합니다.

  <br>
  <br>

<div align="center">
  <img src="public/logo/logo.svg" alt="GAMZA Logo" width="100">

</div>
  <br>
  <br>
  <br>

감자 코딩 동아리의 공식 홍보 웹사이트입니다. 
Next.js 15와 TypeScript를 사용하여 개발된 모던 웹 애플리케이션으로, 동아리의 활동과 프로젝트를 소개합니다.

## 🚀 주요 기능

### ✨ 인터랙티브 UI/UX
- **부드러운 스크롤**: Lenis를 활용한 네이티브 스무스 스크롤링
- **애니메이션**: CSS 기반 최적화된 애니메이션 효과
- **반응형 디자인**: 모든 디바이스에서 완벽한 사용자 경험

### 📊 주요 섹션
- **Hero Section**: 동아리 소개 및 메인 비주얼
- **Statistics**: 숫자로 보는 감자 (운영기간, 기수, 인원, 프로젝트 수)
- **What We Do**: Frontend, Backend, Designer 분야별 소개
- **Activities**: 동아리 주요 활동 소개
- **Project Results**: 프로젝트 결과물 마키 슬라이더

### 🎨 디자인 시스템
- **Tailwind CSS**: 유틸리티 기반 스타일링
- **Custom Components**: 재사용 가능한 UI 컴포넌트
- **Dark Theme**: 일관된 다크 테마 디자인
- **Typography**: Pretendard 폰트 적용

## 🛠️ 기술 스택

### Core
- **Framework**: [Next.js 15.2.4](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

### Styling & UI
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: Custom SVG icons
- **Animations**: CSS-based animations with GPU acceleration

### Libraries
- **Smooth Scrolling**: [@studio-freight/lenis](https://github.com/studio-freight/lenis)
- **Counter Animation**: [react-slot-counter](https://github.com/alpertuna/react-slot-counter)
- **Charts**: [Recharts](https://recharts.org/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

### Development Tools
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Linting**: [ESLint](https://eslint.org/)
- **Code Formatting**: [Prettier](https://prettier.io/)
- **Version Control**: Git

## 📦 설치 및 실행

### 사전 요구사항
- Node.js 18.0.0 이상
- pnpm (권장) 또는 npm/yarn

### 1. 저장소 클론
```bash
git clone https://github.com/potato-club/gamza-promotion.git
cd gamza-promotion
```

### 2. 의존성 설치
```bash
pnpm install
```

### 3. 개발 서버 실행
```bash
pnpm dev
```

### 4. 빌드 및 배포
```bash
# 프로덕션 빌드
pnpm build

# 빌드 결과 미리보기
pnpm start
```

## 📁 프로젝트 구조

```
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx          # 메인 페이지
│   └── projects/         # 프로젝트 상세 페이지
├── components/           # 재사용 가능한 컴포넌트
│   ├── sections/        # 페이지 섹션 컴포넌트
│   ├── ui/             # 기본 UI 컴포넌트
│   └── LenisScroller.ts # 스무스 스크롤 컴포넌트
├── lib/                # 유틸리티 함수
├── public/             # 정적 자원
│   ├── fonts/         # 폰트 파일
│   ├── icons/         # 아이콘 파일
│   ├── logo/          # 로고 파일
│   └── projectThumbnails/ # 프로젝트 썸네일
├── styles/            # 추가 스타일 파일
└── types/             # TypeScript 타입 정의
```

## 🎯 주요 컴포넌트

### HeroSection
- 메인 히어로 영역
- 동아리 소개 및 Call-to-Action

### StatisticsSection
- 애니메이션 카운터가 적용된 통계 카드
- Intersection Observer를 활용한 지연 로딩

### WhatWeDoSection
- 역할별(Frontend, Backend, Designer) 인터랙티브 탭
- 부드러운 이미지 전환 애니메이션

### ProjectResultsSection
- CSS 기반 마키 슬라이더
- Lenis와 충돌 없는 최적화된 애니메이션

### CSSMarquee
- 순수 CSS 애니메이션 기반 마키 컴포넌트
- GPU 가속 및 성능 최적화

## ⚙️ 성능 최적화

### 스크롤 최적화
- Lenis를 활용한 부드러운 스크롤링
- `data-lenis-prevent`를 통한 특정 영역 제외
- CSS `scroll-behavior` 폴백 지원

### 애니메이션 최적화
- CSS Transform과 GPU 가속 활용
- `will-change` 속성을 통한 렌더링 최적화
- Intersection Observer를 활용한 지연 애니메이션

### 접근성
- `prefers-reduced-motion` 미디어 쿼리 지원
- 시맨틱 HTML 구조
- 적절한 ARIA 속성 적용

## 🚀 배포

### Vercel 
[감자 동아리 홍보 사이트 바로가기](https://www.gamzatech.site/)


## 👥 개발팀

- **소영** - Designer
- **지훈** - Backend  
- **경환** - Frontend


---

## 📞 문의

**감자 코딩 동아리**
- GitHub: [@potato-club](https://github.com/potato-club)
- 이메일: leegh0702@gmail.com

---

  <img src="public/logo/logo.svg" alt="GAMZA Logo" width="100">
  <br>
  <strong>Made with ❤️ by GAMZA Team</strong>
</div>
