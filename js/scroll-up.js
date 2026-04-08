export function scrollUp() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

export function checkScrollability() {
  const indicator = document.getElementById('scroll-indicator');

  const totalHeight = document.documentElement.scrollHeight;
  const viewportHeight = document.documentElement.clientHeight;

  if (totalHeight > viewportHeight) {
    indicator.classList.remove('d-none')
  } else {
    indicator.classList.add('d-none')
  }
}

document.addEventListener('DOMContentLoaded', checkScrollability);
window.addEventListener('resize', checkScrollability);