import { productSortingLogic } from "./productSortingLogic";
import { describe, test, expect } from "vitest";

describe("Product Sorting Logic", () => {
  test("예제 1: 기본 정렬 순서 확인 (가성비 > 할인율 > 이름)", () => {
    const products = [
      {
        id: 1,
        name: "C_Tshirt",
        price: 10000,
        viewCount: 500,
        discountRate: 10,
      },
      {
        id: 2,
        name: "A_Pants",
        price: 20000,
        viewCount: 1400,
        discountRate: 20,
      },
      { id: 3, name: "B_Socks", price: 5000, viewCount: 250, discountRate: 30 },
      {
        id: 4,
        name: "D_Hoodie",
        price: 20000,
        viewCount: 1400,
        discountRate: 15,
      },
    ];

    // 정렬 논리 설명:
    // ID 2, 4: 가성비 0.07 (할인율 20 vs 15 -> 2가 먼저)
    // ID 3: 가성비 0.05 (할인율 30)
    // ID 1: 가성비 0.05 (할인율 10 -> 3이 먼저)
    expect(productSortingLogic(products)).toEqual([2, 4, 3, 1]);
  });

  test("가성비와 할인율이 모두 같을 때 상품명 사전순 정렬", () => {
    const products = [
      { id: 1, name: "Banana", price: 1000, viewCount: 100, discountRate: 10 },
      { id: 2, name: "Apple", price: 1000, viewCount: 100, discountRate: 10 },
    ];
    // 가성비(0.1), 할인율(10) 동일 -> 이름 Apple(2)이 앞서야 함
    expect(productSortingLogic(products)).toEqual([2, 1]);
  });

  test("부동 소수점 정밀도 체크 (1/300 vs 2/600)", () => {
    const products = [
      { id: 1, name: "B", price: 300, viewCount: 1, discountRate: 0 },
      { id: 2, name: "A", price: 600, viewCount: 2, discountRate: 0 },
    ];
    // 둘 다 가성비는 0.00333... 으로 동일함. 이름순 정렬 결과 확인
    expect(productSortingLogic(products)).toEqual([2, 1]);
  });

  test("상품 리스트가 빈 배열일 때", () => {
    expect(productSortingLogic([])).toEqual([]);
  });
});
