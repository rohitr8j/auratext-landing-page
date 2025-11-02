"use client";
import { useState, useEffect } from 'react';

interface ProductHuntProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  votesCount: number;
  commentsCount: number;
  createdAt: string;
  updatedAt: string;
  website: string;
  thumbnail: {
    url: string;
  };
  gallery: Array<{
    url: string;
  }>;
  user: {
    name: string;
    username: string;
    profileImage: string;
  };
  makers: Array<{
    name: string;
    username: string;
    profileImage: string;
  }>;
}

interface ProductHuntStats {
  product: ProductHuntProduct | null;
  loading: boolean;
  error: string | null;
}

export const useProductHuntProduct = (productSlug: string = 'auratext') => {
  const [product, setProduct] = useState<ProductHuntProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductHuntProduct = async () => {
      try {
        console.log('Fetching Product Hunt data for:', productSlug);
        
        // Support multiple slugs - pass as 'slugs' parameter for multiple, or 'slug' for single
        const isMultiple = productSlug.includes(',') || productSlug.includes(' ');
        const paramName = isMultiple ? 'slugs' : 'slug';
        const paramValue = encodeURIComponent(productSlug);
        
        // Using our server-side API route for better security
        const response = await fetch(`/api/producthunt/?${paramName}=${paramValue}`);
        
        if (!response.ok) {
          throw new Error(`API request failed: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        if (!data.success) {
          throw new Error(data.error || 'Failed to fetch Product Hunt product');
        }

        if (!data.product) {
          throw new Error('No product data received from Product Hunt API');
        }

        console.log('Successfully fetched Product Hunt data:', data.product);
        setProduct(data.product);
        setError(null);
      } catch (err) {
        console.error('Product Hunt API Error:', err);
        
        // Fallback to aggregated data (9 + 10 = 19 votes from your two launches)
        console.log('Using fallback Product Hunt data with aggregated votes');
        setProduct({
          id: 'auratext-fallback',
          name: 'AuraText',
          tagline: 'Your AI writing copilot — anywhere you type',
          description: 'AI-powered text assistant for Windows with intelligent cursor locking',
          votesCount: 19, // Aggregated: 9 + 10 = 19 votes from your two Product Hunt launches
          commentsCount: 0,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          website: 'https://www.auratxt.com/',
          thumbnail: { url: '' },
          gallery: [],
          user: { name: 'Yash Raj', username: 'YashRa4j', profileImage: '' },
          makers: []
        });
        setError(err instanceof Error ? err.message : 'Failed to fetch Product Hunt product');
      } finally {
        setLoading(false);
      }
    };

    fetchProductHuntProduct();
  }, [productSlug]);

  return { product, loading, error };
};

export const useProductHuntStats = () => {
  // Support multiple Product Hunt launches
  // Configure your Product Hunt launch slugs here (comma-separated or space-separated)
  // Example: 'auratxt,auratxt-v2' or 'auratxt auratxt-second-launch'
  // TODO: Replace 'auratxt,auratxt' with your actual Product Hunt launch slugs
  // If both launches have the same slug, you may need to use their actual different slugs
  const slugs = 'auratxt,auratxt'; // Update this with your actual launch slugs
  
  const { product, loading, error } = useProductHuntProduct(slugs);
  
  return {
    votes: product?.votesCount || 0,
    comments: product?.commentsCount || 0,
    productName: product?.name || 'AuraText',
    tagline: product?.tagline || '',
    website: product?.website || '',
    thumbnail: product?.thumbnail?.url || '',
    loading,
    error
  };
};
