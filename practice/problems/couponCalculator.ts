/**
 * 문제: Optimal Coupon Calculator
 * 난이도: Hard
 *
 * 사용자의 장바구니에 담긴 상품들에 대해, 보유한 쿠폰을 적용하여 최종 결제 금액이 최소가 되도록 설계해야 합니다.
 * 최적의 방법으로 쿠폰을 적용했을 때, 사용자가 받을 수 있는 최대 할인 금액을 구하는 함수를 작성하세요.
 *
 * 예제:
 * Input: items = [55500, 12000], coupons = [{ type: "amount", value: 10000 }, { type: "percent", value: 15 }]
 * Output: 18320
 * 설명: 55500원 상품에 15% 할인 쿠폰을 적용하면 8325원 할인 (10원 단위 절사로 8320원)
 *       12000원 상품에 10000원 할인 쿠폰을 적용하면 10000원 할인
 *       총 18320원 할인
 */

export interface Coupon {
  type: "amount" | "percent";
  value: number;
}

export function couponCalculator(items: number[], coupons: Coupon[]): number {
  const ifEmptyList = items.length === 0;

  if (ifEmptyList) return 0;

  const checkCoupon = [...coupons].map((coupon) => {
    return {
      ...coupon,
      할인금액:
        coupon.type === "amount"
          ? coupon.value
          : Math.floor(
              items.reduce((acc, item) => acc + (item * coupon.value) / 100, 0)
            ),
    };
  });

  checkCoupon.sort((a, b) => {
    return b.할인금액 - a.할인금액;
  });

  return checkCoupon.reduce((acc, coupon) => acc + coupon.할인금액, 0);
}
