function scrollUp() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

(function () {
  function updateUpButtonVisibility() {
    const btn = document.getElementById("upButton");
    if (!btn) return;
    const wrapper = btn.parentElement;
    const target = wrapper || btn;
    // The button is always in layout (visibility: hidden by default) so we can
    // measure its position without causing a reflow flicker.
    const rect = btn.getBoundingClientRect();
    const buttonBottomFromDocTop = rect.bottom + window.scrollY;
    // If the button is already fully visible when scrolled to the top, no
    // scrolling is needed to reach it, so keep it hidden.
    const needsScroll = buttonBottomFromDocTop > window.innerHeight;
    target.style.visibility = needsScroll ? "visible" : "hidden";
  }

  function init() {
    updateUpButtonVisibility();
    window.addEventListener("resize", updateUpButtonVisibility);
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(updateUpButtonVisibility);
      ro.observe(document.body);
    }
    new MutationObserver(updateUpButtonVisibility).observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
