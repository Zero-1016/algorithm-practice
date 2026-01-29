# Algorithm Practice

TypeScript로 알고리즘 문제를 풀고 테스트하는 환경입니다.

## 빠른 시작

### 의존성 설치

```bash
pnpm install
```

### 새 문제 만들기

```bash
pnpm run create
```

대화형 프롬프트에서 문제 정보를 입력하면 자동으로 파일이 생성됩니다.

### 테스트 실행

```bash
# 전체 테스트
pnpm test

# 특정 문제만 테스트
pnpm test twoSum

# Watch 모드 (파일 변경 감지)
pnpm test:watch

# 커버리지 확인
pnpm test:coverage
```

## 프로젝트 구조

```
practice/
├── problems/           # 알고리즘 문제 폴더
│   ├── twoSum.ts      # 솔루션
│   └── twoSum.test.ts # 테스트
├── scripts/
│   └── createProblem.ts  # 문제 생성 스크립트
└── package.json
```

## 문제 생성 방법

`pnpm run create` 실행 후:

1. **문제 이름** 입력 (예: Two Sum)
2. **난이도** 선택 (Easy/Medium/Hard)
3. **문제 설명** 작성
4. **예제** 작성

생성되는 파일:

- `problems/{camelCase이름}.ts` - 솔루션 템플릿 (JSDoc 포함)
- `problems/{camelCase이름}.test.ts` - 테스트 템플릿
