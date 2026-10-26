export type Metric = {
  value: string
  label: string
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  category: string
  year: string
  client: string
  role: string
  tools: string[]
  description: string
  image: string
  imageAlt: string
  metrics: Metric[]
}

export function getProjectHref(slug: string) {
  return `/work/${slug}`
}

export function getProjectBySlug(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return null
  return {
    project: projects[index],
    index,
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  }
}

export const projects: Project[] = [
  {
    slug: 'lane',
    title: 'Lane',
    subtitle: '수영 트레이닝 앱',
    category: 'Mobile App',
    year: '2026',
    client: 'Lane Swim Club',
    role: 'Lead Product Designer',
    tools: ['Figma', 'Protopie', 'Lottie'],
    description:
      '레인 위의 기록을 한눈에. 랩 타임, 스트로크, 컨디션을 자동으로 기록하고 개인 맞춤형 훈련 플랜을 제안하는 수영 트레이닝 앱을 설계했습니다.',
    image: '/images/project-swim.png',
    imageAlt: '맑은 수영장 레인에서 자유형으로 수영하는 선수를 위에서 내려다본 사진',
    metrics: [
      { value: '+42%', label: '주간 리텐션 상승' },
      { value: '4.8', label: '앱스토어 평점' },
      { value: '120K', label: '월간 활성 사용자' },
      { value: '3.1x', label: '평균 세션 시간' },
    ],
  },
  {
    slug: 'powder-pass',
    title: 'Powder Pass',
    subtitle: '스키 리조트 통합 예약',
    category: 'Web Service',
    year: '2025',
    client: 'Alpine Resorts Group',
    role: 'UX / UI Designer',
    tools: ['Figma', 'Framer', 'Maze'],
    description:
      '리프트권, 장비 렌탈, 강습 예약이 흩어져 있던 경험을 하나의 흐름으로 묶었습니다. 실시간 슬로프 혼잡도와 날씨 정보를 예약 단계에 자연스럽게 녹였습니다.',
    image: '/images/project-ski.png',
    imageAlt: '하얀 설원 위에서 눈보라를 일으키며 카빙하는 스키어',
    metrics: [
      { value: '-35%', label: '예약 소요 시간' },
      { value: '+28%', label: '결제 전환율' },
      { value: '18', label: '연동 리조트' },
      { value: '92%', label: '고객 만족도' },
    ],
  },
  {
    slug: 'pulse',
    title: 'Pulse',
    subtitle: '설문 데이터 분석 대시보드',
    category: 'Data Product',
    year: '2025',
    client: 'Pulse Research Inc.',
    role: 'Product Designer',
    tools: ['Figma', 'D3.js', 'Notion'],
    description:
      '수천 건의 설문 응답을 리서처가 바로 읽을 수 있는 인사이트로 바꾸는 대시보드입니다. 차트 시스템을 정의하고, 필터와 비교 뷰를 통해 분석 시간을 크게 줄였습니다.',
    image: '/images/project-survey.png',
    imageAlt: '책상 위 노트북과 인쇄물에 표시된 설문 결과 막대 차트와 도넛 차트',
    metrics: [
      { value: '2.4M', label: '분석된 응답 수' },
      { value: '-60%', label: '리포트 작성 시간' },
      { value: '14', label: '차트 컴포넌트' },
      { value: '87%', label: '팀 도입률' },
    ],
  },
  {
    slug: 'blue-hour',
    title: 'Blue Hour',
    subtitle: '스페셜티 커피 브랜딩',
    category: 'Brand Identity',
    year: '2024',
    client: 'Blue Hour Coffee',
    role: 'Brand Designer',
    tools: ['Illustrator', 'Figma', 'Blender'],
    description:
      '해가 지고 난 직후의 푸른 시간에서 영감을 얻은 커피 브랜드입니다. 로고, 패키지, 온라인 스토어까지 하나의 톤으로 일관되게 확장했습니다.',
    image: '/images/project-cafe.png',
    imageAlt: '옅은 돌 위에 놓인 흰색과 코발트 블루 커피 패키지와 컵',
    metrics: [
      { value: '+56%', label: '온라인 매출 성장' },
      { value: '3', label: '오프라인 매장 오픈' },
      { value: '24', label: '패키지 SKU' },
      { value: '1st', label: '로컬 브랜드 어워드' },
    ],
  },
  {
    slug: 'void-gallery',
    title: 'Void Gallery',
    subtitle: '전시 공간 아카이브 웹사이트',
    category: 'Website',
    year: '2024',
    client: 'Void Gallery Seoul',
    role: 'Designer & Front-end',
    tools: ['Figma', 'Next.js', 'GSAP'],
    description:
      '여백이 주인공인 갤러리를 위해 콘텐츠가 숨 쉴 수 있는 아카이브를 만들었습니다. 전시별 아카이브, 작가 인덱스, 관람 예약을 담았습니다.',
    image: '/images/project-space.png',
    imageAlt: '창으로 들어온 빛이 기하학적 그림자를 만드는 하얀 갤러리 내부',
    metrics: [
      { value: '0.9s', label: '평균 로딩 속도' },
      { value: '+71%', label: '전시 예약 수' },
      { value: '40+', label: '아카이브 전시' },
      { value: '98', label: 'Lighthouse 점수' },
    ],
  },
  {
    slug: 'tripline',
    title: 'Tripline',
    subtitle: '여행 일정 플래너',
    category: 'Mobile App',
    year: '2023',
    client: 'Tripline Labs',
    role: 'Product Designer',
    tools: ['Figma', 'Rive', 'Amplitude'],
    description:
      '지도와 타임라인을 하나로 엮어 여행 일정을 손쉽게 짜고 친구와 함께 편집할 수 있는 플래너입니다. 복잡한 일정도 한 화면에서 정리됩니다.',
    image: '/images/project-travel.png',
    imageAlt: '밝은 해안 도시 거리를 배경으로 여행 일정 앱 화면을 띄운 스마트폰',
    metrics: [
      { value: '500K', label: '누적 다운로드' },
      { value: '+33%', label: '공동 편집 사용률' },
      { value: '4.7', label: '플레이스토어 평점' },
      { value: '62', label: '지원 국가' },
    ],
  },
]
