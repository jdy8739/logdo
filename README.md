# logdo

Gatsby 기반 개인 개발 블로그입니다.

**🔗 블로그 바로가기**: [logdo.netlify.app](https://logdo.netlify.app/)

## 주요 기능

- **Contentful CMS 연동**: Rich Text 기반 블로그 포스팅 관리
- **다크모드**: Light / Dark / System 테마 지원 (localStorage 저장, OS 설정 동기화)
- **타입 안전한 스타일링**: Vanilla Extract CSS-in-TypeScript
- **코드 하이라이팅**: PrismJS 기반 문법 강조 (테마별 최적화)
- **SEO 최적화**: 사이트맵, robots.txt, canonical URL, Google Analytics

## 기술 스택

- **프레임워크**: Gatsby 5 (React 18, TypeScript)
- **CMS**: Contentful
- **스타일링**: Vanilla Extract (CSS-in-TypeScript)
- **배포**: Netlify
- **패키지 관리**: pnpm

## SEO 플러그인

- **gatsby-plugin-canonical-urls**: 중복 콘텐츠 방지를 위한 canonical URL 설정
- **gatsby-plugin-sitemap**: 사이트맵 자동 생성 (`/sitemap.xml`)
- **gatsby-plugin-robots-txt**: 검색 엔진 크롤러 접근 규칙 설정 (`/robots.txt`)
- **gatsby-plugin-gtag**: Google Analytics v4 태그 삽입 (방문자 추적)

## 로컬 실행

```bash
# 패키지 설치
pnpm install

# 개발 서버 실행 (http://localhost:8000)
pnpm develop

# 프로덕션 빌드
pnpm build
```

## 환경 변수

`.env` 파일 생성 후 아래 변수 설정:
```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
GOOGLE_ANALYTICS_ID=your_ga_id
```