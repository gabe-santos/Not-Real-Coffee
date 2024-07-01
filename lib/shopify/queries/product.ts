import productFragment from '../fragments/product';

export const getProductQuery = /* GraphQL */ `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
      caffeine_level: metafield(namespace: "custom", key: "caffeine_level") {
        key
        value
      }
      tasting_notes: metafield(namespace: "custom", key: "tasting_notes") {
        key
        value
      }
      sweetness: metafield(namespace: "custom", key: "sweetness") {
        key
        value
      }
    }
  }
  ${productFragment}
`;

export const getProductsQuery = /* GraphQL */ `
  query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${productFragment}
`;

export const getProductRecommendationsQuery = /* GraphQL */ `
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${productFragment}
`;
