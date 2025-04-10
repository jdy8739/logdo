# logdo

개인 개발 블로그입니다.  
Gatsby + Contentful + Vanilla Extract 기반으로 제작되었습니다.

블로그를 방문하려면 우클릭 후 "새 탭에서 열기"를 선택하세요.
<a href="https://logdo.netlify.app/" target="_blank">블로그 링크</a>

## 주요 스택
- Gatsby 5
- Contentful CMS
- Vanilla Extract (CSS-in-TypeScript)
- PrismJS (코드블럭 문법 하이라이팅)
- Netlify (정적 배포)

## 사용한 SEO 관련 Gatsby 플러그인

- `gatsby-plugin-canonical-urls`  
  중복 콘텐츠 방지를 위한 canonical URL 설정

- `gatsby-plugin-sitemap`  
  사이트맵 자동 생성 (`/sitemap.xml`)

- `gatsby-plugin-robots-txt`  
  검색 엔진 크롤러에 대한 접근 규칙 설정 (`/robots.txt`)

- `gatsby-plugin-gtag`  
  Google Analytics v4 태그 삽입 (방문자 추적)