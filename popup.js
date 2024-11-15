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

            const hintContainer = document.getElementById("hint-container");
            hintContainer.innerHTML = "";
            hintContainer.innerHTML = hintText;
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
