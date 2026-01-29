/**
 * 문제: Product Sorting Logic
 * 난이도: Medium
 *
 * 검색 결과 페이지를 구성하기 위해 상품 정렬 기능을 구현해야 합니다. 주어진 상품 배열 products를 아래의 3가지 우선순위에 따라 정렬하고, 정렬된 상품의 ID 배열을 반환하는 함수를 작성하세요.
 *
 * 예제:
 * 가성비 점수(Value for Money가 높은 순(내림차순)으로 정렬합니다.
 * 가성비 점수 = 노출 횟수(viewCount) / 가격(price)
 * 가성비 점수가 동일할 경우, 할인율(discountRate이 높은 순(내림차순)으로 정렬합니다.
 * 할인율까지 동일할 경우, 상품명(name의 사전 순(오름차순)으로 정렬합니다.
 */

interface Product {
  id: number;
  name: string;
  price: number;
  viewCount: number;
  discountRate: number;
}

export function productSortingLogic(products: Product[]) {
  const ifEmptyList = products.length === 0;

  if (ifEmptyList) return [];

  const checkProduct = [...products].map((product) => {
    return {
      ...product,
      가성비점수: product.viewCount / product.price,
    };
  });

  checkProduct.sort((a, b) => {
    if (b.가성비점수 === a.가성비점수) {
      if (b.discountRate === a.discountRate) {
        return a.name.localeCompare(b.name);
      }
      return b.discountRate - a.discountRate;
    }
    return b.가성비점수 - a.가성비점수;
  });

  return checkProduct.map((v) => v.id);
}
