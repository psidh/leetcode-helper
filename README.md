
# LeetCode Helper Chrome Extension

LeetCode Tutor is a Chrome extension designed to help users analyze and understand coding problems on LeetCode. By extracting problem details directly from the LeetCode website and sending them to Google AI Studio, the extension provides AI-generated guidance, including solution strategies, key concepts, common pitfalls, and complexity analysis.

## Features

- **Automatic Problem Extraction**: Retrieves the title and description of the active LeetCode problem.
- **AI-Powered Analysis**: Uses Google AI Studio to generate a solution guide for the problem.
- **Interactive UI**: Simple popup interface to trigger and view analysis results.

## How It Works

1. **Popup Interface (`Popup.js`)**: 
   - Provides a button to start analyzing the current LeetCode problem.
   - Displays analysis results or error messages within the popup.
  
2. **Content Script (`content.js`)**: 
   - Runs on LeetCode problem pages.
   - Extracts the problem title and description.

3. **Background Script (`background.js`)**: 
   - Listens for messages from the popup and retrieves LeetCode problem data from `content.js`.

4. **(`script.js`)**:
   - Manages API calls to external services.
   - Helps keep sensitive keys secure by acting as a proxy between the extension and the AI API.

## Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/(your-name)/leetcode-helper
   cd leetcode-helper
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Add Environment Variables**:
   - Create a `.env` file in the root directory:
     ```plaintext
     API_KEY=your-google-api-key
     ```
   - Replace `your-google-api-key` with your Google Gemini API key.


4. **Load the Extension into Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode."
   - Click "Load unpacked" and select the `chrome-extension` directory.

## Usage

1. **Navigate to a LeetCode Problem Page**: Go to any problem on [LeetCode](https://leetcode.com/problems/).
2. **Open the Extension**: Click on the extension icon in the Chrome toolbar to open the popup.
3. **Analyze the Problem**: Click the "Analyze Problem" button. The extension will extract the problem details and provide AI-generated insights on solving it.

## Technologies Used

- **HTML, CSS**: For building the popup UI.
- **Google AI Studio**: Provides the AI-generated solution analysis.
