document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-include]").forEach((el) => {
    const path = el.getAttribute("data-include");
    if (!path) return;

    fetch(path)
      .then((res) => res.text())
      .then((html) => {
        el.innerHTML = html;
      })
      .catch((err) => {
        console.error("include 실패:", path, err);
        el.innerHTML =
          "<div style='color:red; font-size:12px;'>include 실패: " +
          path +
          "</div>";
      });
  });
});
