import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

// File configuration
const FILE_CONFIG = {
  main: {
    filename: 'AuraText-Setup-1.0.3.exe',
    size: 'Latest Version',
    description: 'Main AuraText application for Windows 10/11',
    url: 'https://github.com/lkasdfj/auratext-releases/releases/latest/download/AuraText-Setup-1.0.3.exe'
  },
  extension: {
    filename: 'AuraText-Extension.zip', 
    size: 'Coming Soon',
    description: 'Browser extension for Chrome, Edge, Firefox',
    url: 'https://github.com/lkasdfj/auratext-releases/releases'
  }
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (!type || !['main', 'extension'].includes(type)) {
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid download type' 
      });
    }

    const config = FILE_CONFIG[type as keyof typeof FILE_CONFIG];
    const filePath = join(process.cwd(), 'public', 'downloads', config.filename);

    // Check if file exists
    if (!existsSync(filePath)) {
      return NextResponse.json({
        success: false,
        error: 'File not found. Please contact administrator.',
        filename: config.filename
      });
    }

    // Get file stats
    const stats = await readFile(filePath);
    
    return NextResponse.json({
      success: true,
      message: 'File ready for download',
      filename: config.filename,
      size: config.size,
      description: config.description,
      url: config.url,
      githubReleases: 'https://github.com/lkasdfj/auratext-releases/releases'
    });

  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to process download request' 
    }, { status: 500 });
  }
}

// Admin endpoint for file management (you can secure this with authentication)
export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;
    const type = data.get('type') as string;

    if (!file || !type || !['main', 'extension'].includes(type)) {
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid file or type' 
      });
    }

    // Validate file type
    const allowedTypes = ['.exe', '.zip'];
    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
    
    if (!allowedTypes.includes(fileExtension)) {
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid file type. Only .exe and .zip files are allowed.' 
      });
    }

    // Validate file size (100MB limit)
    const maxSize = 100 * 1024 * 1024; // 100MB in bytes
    if (file.size > maxSize) {
      return NextResponse.json({ 
        success: false, 
        error: 'File too large. Maximum size is 100MB.' 
      });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create downloads directory if it doesn't exist
    const downloadsDir = join(process.cwd(), 'public', 'downloads');
    if (!existsSync(downloadsDir)) {
      await mkdir(downloadsDir, { recursive: true });
    }

    // Use the configured filename
    const config = FILE_CONFIG[type as keyof typeof FILE_CONFIG];
    const filepath = join(downloadsDir, config.filename);

    // Write file to disk
    await writeFile(filepath, new Uint8Array(buffer));

    return NextResponse.json({ 
      success: true, 
      message: 'File uploaded successfully',
      filename: config.filename,
      size: file.size,
      type: file.type,
      description: config.description
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to upload file' 
    }, { status: 500 });
  }
}