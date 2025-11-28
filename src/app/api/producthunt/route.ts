import { NextRequest, NextResponse } from 'next/server';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

interface ProductHuntPost {
  id: string;
  name: string;
  tagline: string;
  votesCount: number;
  commentsCount: number;
  website?: string;
  createdAt?: string;
  updatedAt?: string;
  thumbnail?: { url: string };
  gallery?: Array<{ url: string }>;
  user?: {
    name: string;
    username: string;
    profileImage: string;
  };
  makers?: Array<{
    name: string;
    username: string;
    profileImage: string;
  }>;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    // Support multiple slugs: comma-separated or space-separated
    const slugsParam = searchParams.get('slugs') || searchParams.get('slug') || 'auratxt';
    const slugs = slugsParam.split(/[,\s]+/).filter(s => s.trim() !== '');

    console.log('Fetching Product Hunt data for slugs:', slugs);

    // Check if we have a valid API token
    const apiToken = process.env.PRODUCT_HUNT_API_TOKEN;

    // Fallback data structure
    const createFallbackData = (totalVotes: number = 0) => ({
      id: 'auratxt-aggregated',
      name: 'AuraText',
      tagline: 'Your AI writing copilot — anywhere you type',
      votesCount: totalVotes,
      commentsCount: 0,
      website: 'https://www.auratxt.com/',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      thumbnail: { url: '' },
      gallery: [],
      user: { name: 'Yash Raj', username: 'YashRa4j', profileImage: '' },
      makers: []
    });

    if (!apiToken) {
      console.log('No Product Hunt API token found, using fallback data');
      return NextResponse.json({
        success: true,
        product: createFallbackData(19), // 9 + 10 = 19 as fallback
        fallback: true,
        aggregated: true
      });
    }

    // Fetch all products and aggregate
    const products: ProductHuntPost[] = [];
    const seenProductIds = new Set<string>(); // Track unique product IDs to avoid double-counting
    let totalVotes = 0;
    let totalComments = 0;
    let aggregatedProduct: ProductHuntPost | null = null;

    for (const slug of slugs) {
      try {
        console.log(`Fetching Product Hunt data for slug: ${slug.trim()}`);

        const response = await fetch('https://api.producthunt.com/v2/api/graphql', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query GetProduct($slug: String!) {
                post(slug: $slug) {
                  id
                  name
                  tagline
                  votesCount
                  commentsCount
                  website
                  createdAt
                  createdAt
                  thumbnail {
                    url
                  }
                  user {
                    name
                    username
                    profileImage
                  }
                  makers {
                    name
                    username
                    profileImage
                  }
                }
              }
            `,
            variables: {
              slug: slug.trim()
            }
          })
        });

        if (response.ok) {
          const data = await response.json();

          if (data.errors) {
            console.error(`Product Hunt GraphQL errors for ${slug}:`, data.errors);
            continue; // Skip this slug and try next
          }

          if (data.data && data.data.post) {
            const post = data.data.post;

            // Only count each unique product once (avoid double-counting if same slug returns same product)
            if (!seenProductIds.has(post.id)) {
              seenProductIds.add(post.id);
              products.push(post);
              totalVotes += post.votesCount || 0;
              totalComments += post.commentsCount || 0;

              // Use the first successful product as the base for aggregated data
              if (!aggregatedProduct) {
                aggregatedProduct = post;
              }

              console.log(`✓ Successfully fetched ${slug}: ${post.votesCount} votes (ID: ${post.id})`);
            } else {
              console.log(`⚠ Product ${slug} (ID: ${post.id}) already counted, skipping duplicate`);
            }
          } else {
            console.log(`⚠ Product ${slug} not found on Product Hunt`);
          }
        } else {
          const errorText = await response.text();
          console.error(`API error for ${slug}:`, errorText);
        }
      } catch (error) {
        console.error(`Error fetching ${slug}:`, error);
        // Continue with other slugs
      }
    }

    // If we got data from at least one product, return aggregated result
    if (products.length > 0 && aggregatedProduct) {
      // Manual override: If we configured multiple slugs but only found one launch,
      // use the known total (9 + 10 = 19) instead of the single launch's votes
      const expectedLaunches = slugs.length;
      const foundLaunches = products.length;
      const manualTotal = 19; // Your known total: 9 + 10 = 19

      let finalVotes = totalVotes;

      // If we expect multiple launches but only found one, use manual total
      if (expectedLaunches > 1 && foundLaunches === 1) {
        console.log(`⚠ Expected ${expectedLaunches} launches but only found ${foundLaunches}. Using manual total: ${manualTotal}`);
        finalVotes = manualTotal;
      }

      console.log(`✓ Aggregated ${foundLaunches}/${expectedLaunches} Product Hunt launches: ${finalVotes} total votes`);

      return NextResponse.json({
        success: true,
        product: {
          ...aggregatedProduct,
          votesCount: finalVotes,
          commentsCount: totalComments,
          name: aggregatedProduct.name, // Use name from first product
          tagline: aggregatedProduct.tagline,
        },
        fallback: foundLaunches < expectedLaunches, // Fallback if not all launches found
        aggregated: true,
        launches: foundLaunches,
        expectedLaunches: expectedLaunches,
        launchesData: products.map((p, idx) => ({
          slug: slugs[idx] || 'unknown',
          votes: p.votesCount,
          comments: p.commentsCount
        }))
      });
    }

    // If no products found, return fallback with manual totals (9 + 10 = 19)
    console.log('No Product Hunt products found, using fallback data with manual total');
    return NextResponse.json({
      success: true,
      product: createFallbackData(19), // 9 + 10 = 19
      fallback: true,
      aggregated: true
    });

  } catch (error) {
    console.error('Product Hunt API Error:', error);

    // Return fallback data with aggregated votes
    return NextResponse.json({
      success: true,
      product: {
        id: 'auratxt-aggregated',
        name: 'AuraText',
        tagline: 'Your AI writing copilot — anywhere you type',
        votesCount: 19, // 9 + 10 = 19
        commentsCount: 0,
        website: 'https://www.auratxt.com/',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        thumbnail: { url: '' },
        gallery: [],
        user: { name: 'Yash Raj', username: 'YashRa4j', profileImage: '' },
        makers: []
      },
      fallback: true,
      aggregated: true,
      error: error instanceof Error ? error.message : 'Failed to fetch Product Hunt product'
    });
  }
}
