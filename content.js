const problemTitle = document.querySelector('.title .css-v3d350');
if (problemTitle) {
  chrome.storage.local.set({ problemTitle: problemTitle.textContent });
}
