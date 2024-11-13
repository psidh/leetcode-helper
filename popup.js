function formatHintText(hintText) {
  return hintText
    .replace(/##/g, "\n##") // Add line break before each ##
    .replace(/\n\*\*/g, "\n**") // Add line break before each **
    .replace(/\*\* /g, "** ") // Add space after **
    .replace(/ /g, " ") // Replace all spaces with a single space
    .replace(/(\n\s*\*)+/g, "\n") // Replace extra stars
    .replace(/\n\s*(-|\*)/g, "\n") // Remove leading dashes and stars
    .replace(/\n\s+/g, "\n") // Add line break after each line
    .replace(/\s+/g, " "); // Add a space between words
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fetch-hints").addEventListener("click", fetchHints);

  async function fetchHints() {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      async function (tabs) {
        const tab = tabs[0];
        const url = new URL(tab.url);
        const problemName = url.pathname.split("/")[2];
        console.log(problemName);
        document.getElementById("problem-name").innerText = `
        Give me hints about this problem ${problemName}
        `;

        try {
          const response = await fetch("http://localhost:3000/getHints", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ problemName: problemName }),
          });

          if (response.ok) {
            const data = await response.json();
            const hintText = data.hint;
            const formattedHintText = formatHintText(hintText);

            const hintContainer = document.getElementById("hint-container");
            hintContainer.innerHTML = "";
            hintContainer.innerHTML = formattedHintText;
          }
        } catch (error) {
          console.error("Error fetching hints:", error);
          document.getElementById("hint-list").innerHTML =
            "<li>Failed to fetch hints</li>";
        }
      }
    );
  }
});
