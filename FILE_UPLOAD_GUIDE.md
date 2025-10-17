# AuraText File Upload Script

This script helps you upload files to your AuraText landing page.

## How to Upload Files

### Method 1: Using curl (Command Line)

```bash
# Upload main application (.exe file)
curl -X POST -F "file=@path/to/your/AuraText-Setup-1.0.3.exe" -F "type=main" http://localhost:3000/api/download

# Upload browser extension (.zip file)  
curl -X POST -F "file=@path/to/your/AuraText-Extension.zip" -F "type=extension" http://localhost:3000/api/download
```

### Method 2: Using a simple HTML form

Create a file called `admin-upload.html` in your project root:

```html
<!DOCTYPE html>
<html>
<head>
    <title>AuraText File Upload</title>
    <style>
        body { font-family: 'Space Mono', monospace; padding: 20px; }
        .form-group { margin: 20px 0; }
        input, select, button { padding: 10px; margin: 5px; }
        button { background: #2563eb; color: white; border: none; cursor: pointer; }
    </style>
</head>
<body>
    <h1>AuraText File Upload</h1>
    
    <form id="uploadForm">
        <div class="form-group">
            <label>File Type:</label>
            <select name="type" required>
                <option value="main">Main Application (.exe)</option>
                <option value="extension">Browser Extension (.zip)</option>
            </select>
        </div>
        
        <div class="form-group">
            <label>Select File:</label>
            <input type="file" name="file" required accept=".exe,.zip">
        </div>
        
        <button type="submit">Upload File</button>
    </form>
    
    <div id="result"></div>
    
    <script>
        document.getElementById('uploadForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const resultDiv = document.getElementById('result');
            
            try {
                const response = await fetch('/api/download', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                if (result.success) {
                    resultDiv.innerHTML = `<p style="color: green;">✅ ${result.message}</p><p>File: ${result.filename}</p><p>Size: ${result.size} bytes</p>`;
                } else {
                    resultDiv.innerHTML = `<p style="color: red;">❌ Error: ${result.error}</p>`;
                }
            } catch (error) {
                resultDiv.innerHTML = `<p style="color: red;">❌ Upload failed: ${error.message}</p>`;
            }
        });
    </script>
</body>
</html>
```

### Method 3: Direct File Placement

Simply place your files directly in the `public/downloads/` directory:

```
public/downloads/
├── AuraText-Setup-1.0.3.exe    (Main application)
└── AuraText-Extension.zip (Browser extension)
```

## File Naming Convention

The system expects these exact filenames:
- **Main App**: `AuraText-Setup-1.0.3.exe`
- **Extension**: `AuraText-Extension.zip`

## Updating Files

When you have new versions:
1. Upload the new file using any method above
2. The old file will be automatically replaced
3. Users will download the latest version

## Security Note

The POST endpoint is currently open. For production, you should:
1. Add authentication (API key, JWT token, etc.)
2. Restrict access to admin users only
3. Add rate limiting
