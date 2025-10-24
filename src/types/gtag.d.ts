// Google Analytics gtag types
declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      parameters: {
        file_name?: string;
        file_type?: string;
        file_version?: string;
        download_url?: string;
        event_category?: string;
        event_label?: string;
        fallback_reason?: string;
        [key: string]: any; // Allow additional custom parameters
      }
    ) => void;
  }
}

export {};
