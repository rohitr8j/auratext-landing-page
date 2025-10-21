"use client";
import { useState, useEffect } from 'react';

interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  assets: Array<{
    name: string;
    browser_download_url: string;
  }>;
}

export const useLatestRelease = () => {
  const [latestRelease, setLatestRelease] = useState<GitHubRelease | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/y4shr4j/auratext-releases/releases/latest');
        if (!response.ok) {
          throw new Error('Failed to fetch latest release');
        }
        const data = await response.json();
        setLatestRelease(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch latest release');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestRelease();
  }, []);

  return { latestRelease, loading, error };
};

export const useReleases = () => {
  const [releases, setReleases] = useState<GitHubRelease[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/y4shr4j/auratext-releases/releases');
        if (!response.ok) {
          throw new Error('Failed to fetch releases');
        }
        const data = await response.json();
        setReleases(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch releases');
      } finally {
        setLoading(false);
      }
    };

    fetchReleases();
  }, []);

  return { releases, loading, error };
};
