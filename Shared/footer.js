document.addEventListener("DOMContentLoaded", () => {
  fetch("../Shared/footer.html")
    .then(res => {
      if (!res.ok) throw new Error("Footer not found");
      return res.text();
    })
    .then(html => {
      const container = document.getElementById("footer-container");
      if (container) {
        container.innerHTML = html;
      }
    })
    .catch(err => console.error("Footer load error:", err));
});
