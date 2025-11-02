import { NextRequest, NextResponse } from 'next/server';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    console.log('Testing Product Hunt API...');
    
    // Simple test query first
    const testResponse = await fetch('https://api.producthunt.com/v2/api/graphql', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer rrt5sxA1EOgYSReFp_yYvHfEhPd8p3Rp9j-jVIEMISM',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            posts(first: 1) {
              edges {
                node {
                  id
                  name
                  tagline
                }
              }
            }
          }
        `
      })
    });

    console.log('Test API response status:', testResponse.status);
    
    if (!testResponse.ok) {
      const errorText = await testResponse.text();
      console.error('Test API error:', errorText);
      return NextResponse.json({
        success: false,
        error: `API test failed: ${testResponse.status} ${errorText}`,
        test: true
      }, { status: 500 });
    }

    const testData = await testResponse.json();
    console.log('Test API response:', testData);

    return NextResponse.json({
      success: true,
      message: 'Product Hunt API is working',
      testData: testData
    });

  } catch (error) {
    console.error('Product Hunt API Test Error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'API test failed',
      test: true
    }, { status: 500 });
  }
}
