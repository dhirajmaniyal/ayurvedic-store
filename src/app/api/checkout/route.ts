import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json();
    
    const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
    const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

    console.log('Checkout attempt - domain:', domain, 'token:', storefrontAccessToken?.substring(0, 10));

    if (!domain || !storefrontAccessToken || storefrontAccessToken === 'dummy') {
      return NextResponse.json({ 
        error: 'Checkout requires a paid Shopify subscription. The Storefront API is not available on trial plans.' 
      });
    }

    const lineItems = items.map((item: { variantId: string; quantity: number }) => ({
      variantId: item.variantId,
      quantity: item.quantity,
    }));

    const query = `
      mutation checkoutCreate($input: CheckoutCreateInput!) {
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

    const response = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      },
      body: JSON.stringify({
        query,
        variables: { input: { lineItems } },
      }),
    });

    const json = await response.json();
    
    console.log('Checkout response:', JSON.stringify(json));

    if (json.errors) {
      console.error('Shopify API errors:', json.errors);
      return NextResponse.json(
        { error: json.errors[0].message },
        { status: 400 }
      );
    }

    if (json.data?.checkoutCreate?.checkoutUserErrors?.length > 0) {
      const errors = json.data.checkoutCreate.checkoutUserErrors;
      console.error('Checkout user errors:', errors);
      return NextResponse.json(
        { error: errors[0].message },
        { status: 400 }
      );
    }

    const checkout = json.data?.checkoutCreate?.checkout;
    
    if (!checkout?.webUrl) {
      return NextResponse.json({ error: 'No checkout URL returned' });
    }
    
    return NextResponse.json({ url: checkout.webUrl });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create checkout' },
      { status: 500 }
    );
  }
}