// Add dark / light detection that runs before Vue.js load. Borrowed from overreacted.io
(function () {
  window.__onThemeChange = function () {};
  function setTheme(newTheme) {
    window.__theme = newTheme;
    preferredTheme = newTheme;
    if (document.body) {
      document.body.setAttribute("data-theme", newTheme);
    }
    window.__onThemeChange(newTheme);
  }

  var preferredTheme;
  try {
    preferredTheme = localStorage.getItem("theme");
  } catch (err) {}

  window.__setPreferredTheme = function (newTheme) {
    setTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch (err) {}
  };

  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  darkQuery.addListener(function (e) {
    window.__setPreferredTheme(e.matches ? "dark" : "light");
  });

  document.addEventListener("DOMContentLoaded", function (event) {
    setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"));
  });
})();
