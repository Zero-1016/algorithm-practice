#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

function toCamelCase(str: string): string {
  return str
    .split(/[\s-_]+/)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

function toPascalCase(str: string): string {
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

async function main() {
  console.log('🚀 새로운 알고리즘 문제 생성\n');

  const problemName = await question('문제 이름 (예: Two Sum): ');
  const difficulty = await question('난이도 (Easy/Medium/Hard): ');
  const description = await question('문제 설명: ');
  const example = await question('예제 (예: Input: [1,2,3], Output: 6): ');

  rl.close();

  const camelName = toCamelCase(problemName);
  const pascalName = toPascalCase(problemName);

  const problemsDir = path.join(process.cwd(), 'problems');
  if (!fs.existsSync(problemsDir)) {
    fs.mkdirSync(problemsDir, { recursive: true });
  }

  const solutionPath = path.join(problemsDir, `${camelName}.ts`);
  const testPath = path.join(problemsDir, `${camelName}.test.ts`);

  // Check if files already exist
  if (fs.existsSync(solutionPath) || fs.existsSync(testPath)) {
    console.error(`\n❌ 오류: ${camelName} 문제가 이미 존재합니다.`);
    process.exit(1);
  }

  // Create solution file
  const solutionContent = `/**
 * 문제: ${problemName}
 * 난이도: ${difficulty}
 *
 * ${description}
 *
 * 예제:
 * ${example}
 */

export function ${camelName}() {
  // 여기에 솔루션을 작성하세요
}
`;

  // Create test file
  const testContent = `import { ${camelName} } from "./${camelName}";
import { describe, test, expect } from "vitest";

describe("${problemName}", () => {
  test("예제 1", () => {
    // TODO: 테스트 케이스를 작성하세요
    expect(${camelName}()).toBeDefined();
  });
});
`;

  fs.writeFileSync(solutionPath, solutionContent);
  fs.writeFileSync(testPath, testContent);

  console.log('\n✅ 문제 파일이 생성되었습니다!');
  console.log(`📝 Solution: problems/${camelName}.ts`);
  console.log(`🧪 Test: problems/${camelName}.test.ts`);
  console.log(`\n실행 방법: pnpm test ${camelName}`);
}

main().catch(console.error);
