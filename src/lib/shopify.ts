import { getMockProducts, getMockProductByHandle } from './mockData';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const isConfigured = domain && storefrontAccessToken && 
  domain !== 'your-store.myshopify.com' && 
  !storefrontAccessToken.startsWith('your-') && 
  !storefrontAccessToken.startsWith('dummy') &&
  storefrontAccessToken.length > 20;

async function shopifyFetch<T>({ query, variables }: { query: string; variables?: Record<string, unknown> }): Promise<T> {
  const endpoint = `https://${domain}/api/2024-01/graphql.json`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(`Shopify API error: ${response.statusText}`);
  }

  const json = await response.json();

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data;
}

export async function getProducts(first: number = 20) {
  console.log('isConfigured:', isConfigured, 'domain:', domain, 'token:', storefrontAccessToken?.substring(0, 10));
  
  if (!isConfigured) {
    const mock = getMockProducts().slice(0, first);
    console.log('Returning mock products:', mock.length);
    return mock;
  }

  const query = `
    query getProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            handle
            title
            description
            descriptionHtml
            vendor
            productType
            tags
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  availableForSale
                  price {
                    amount
                    currencyCode
                  }
                  compareAtPrice {
                    amount
                    currencyCode
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
            options {
              id
              name
              values
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{ products: { edges: Array<{ node: unknown }> } }>({
    query,
    variables: { first },
  });

  return data.products.edges.map((edge) => edge.node);
}

export async function getProductByHandle(handle: string) {
  console.log('getProductByHandle called, isConfigured:', isConfigured);
  
  if (!isConfigured) {
    const mock = getMockProductByHandle(handle);
    console.log('Returning mock product:', mock?.title);
    return mock;
  }

  const query = `
    query getProduct($handle: String!) {
      productByHandle(handle: $handle) {
        id
        handle
        title
        description
        descriptionHtml
        vendor
        productType
        tags
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 10) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 20) {
          edges {
            node {
              id
              title
              availableForSale
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
              selectedOptions {
                name
                value
              }
            }
          }
        }
        options {
          id
          name
          values
        }
      }
    }
  `;

  const data = await shopifyFetch<{ productByHandle: unknown }>({
    query,
    variables: { handle },
  });

  return data.productByHandle;
}

export async function getCollections() {
  const query = `
    query getCollections {
      collections(first: 20) {
        edges {
          node {
            id
            handle
            title
            description
            image {
              url
              altText
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{ collections: { edges: Array<{ node: unknown }> } }>({
    query,
  });

  return data.collections.edges.map((edge) => edge.node);
}

export function formatPrice(amount: string, currencyCode: string = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(parseFloat(amount));
}

export async function createCheckout(variantId: string, quantity: number = 1) {
  const query = `
    mutation createCheckout($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          id
          webUrl
        }
        checkoutUserErrors {
          field
          message
        }
      }
    }
  `;

  const data = await shopifyFetch<{ checkoutCreate: { checkout: { id: string; webUrl: string } } }>({
    query,
    variables: {
      input: {
        lineItems: [{ variantId, quantity }],
      },
    },
  });

  return data.checkoutCreate.checkout;
}