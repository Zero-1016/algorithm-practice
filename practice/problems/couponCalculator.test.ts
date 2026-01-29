import { couponCalculator, type Coupon } from "./couponCalculator";
import { describe, test, expect } from "vitest";

describe("Optimal Coupon Calculator", () => {
  test("예제 1: 최적의 쿠폰 조합 찾기 및 10원 단위 절사", () => {
    const items = [55500, 12000];
    const coupons: Coupon[] = [
      { type: "amount", value: 10000 },
      { type: "percent", value: 15 },
    ];
    // 55500 * 0.15 = 8325 -> 절사 8320
    // 12000 - 10000 = 10000 할인 (상품 가격 이내)
    // 총 18320 할인
    expect(couponCalculator(items, coupons)).toBe(18320);
  });

  test("할인 금액이 상품 가격을 초과하는 경우 (0원 처리)", () => {
    const items = [5000];
    const coupons: Coupon[] = [{ type: "amount", value: 10000 }];

    // 5000원 상품에 10000원 할인이지만, 실제 할인은 5000원만 가능
    expect(couponCalculator(items, coupons)).toBe(5000);
  });

  test("쿠폰이 상품보다 많을 때", () => {
    const items = [10000];
    const coupons: Coupon[] = [
      { type: "amount", value: 5000 },
      { type: "amount", value: 3000 },
    ];
    // 상품은 하나뿐이므로 가장 이득인 5000원 쿠폰 하나만 적용되어야 함
    expect(couponCalculator(items, coupons)).toBe(5000);
  });

  test("상품은 많고 쿠폰은 적을 때", () => {
    const items = [20000, 30000, 40000];
    const coupons: Coupon[] = [{ type: "percent", value: 10 }];

    // 가장 비싼 40000원 상품에 10% 적용하는 것이 최적 (4000원 할인)
    expect(couponCalculator(items, coupons)).toBe(4000);
  });
});
