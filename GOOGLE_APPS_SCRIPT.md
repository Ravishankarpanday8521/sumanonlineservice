# Google Apps Script Setup for Contact Form

Follow these steps to set up Google Apps Script to receive form data and save it to your Google Sheet.

## Step 1: Create the Apps Script

1. Go to https://script.google.com/
2. Click "New Project"
3. Replace the default code with the following:

```javascript
function doPost(e) {
  try {
    // Open the Google Sheet by ID
    const sheetId = '16kvqsnfXfenhYVgj6Ai8igajfSX83OqF2TWgG920ecg';
    const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the current timestamp
    const timestamp = new Date();
    
    // Append the data to the sheet
    // Format: Timestamp, Name, Mobile, Email, Service, Message
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.mobile || '',
      data.email || '',
      data.service || '',
      data.message || ''
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Contact Form API is running')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## Step 2: Set Up the Google Sheet Headers

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/16kvqsnfXfenhYVgj6Ai8igajfSX83OqF2TWgG920ecg/edit
2. In the first row, add these headers:
   - Column A: Timestamp
   - Column B: Name
   - Column C: Mobile
   - Column D: Email
   - Column E: Service
   - Column F: Message

## Step 3: Deploy the Script as Web App

1. In the Apps Script editor, click "Deploy" > "New deployment"
2. Click the gear icon (⚙️) next to "Select type" and choose "Web app"
3. Set the following:
   - Description: "Contact Form API"
   - Execute as: "Me"
   - Who has access: "Anyone" (or "Anyone with Google account" if you prefer)
4. Click "Deploy"
5. Copy the Web App URL that appears (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)

## Step 4: Update the Frontend Code

1. Open `frontend/src/pages/Contact.tsx`
2. Find the line: `const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';`
3. Replace `YOUR_SCRIPT_ID` with the actual script ID from your deployed Web App URL

## Step 5: Test

1. Submit a test form from your website
2. Check your Google Sheet to see if the data appears

## Security Note

The current setup uses `no-cors` mode which means the browser can't verify the response. For production, consider:
- Adding authentication to your Apps Script
- Using a backend server as a proxy
- Implementing rate limiting

