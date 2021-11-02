export const scrollToTarget = (
  elSelector,
  { offset = 10, animate = true } = {}
) => {
  /**
   * Scroll to a target element
   *
   * @param {string} target - Target element selector
   * @param {object} options - Options
   * @param {number} options.offset - Offset in pixels
   * @param {boolean} options.animate - Animate the scroll. Default: true
   *
   * @return {void}
   * */
  const targetEl = document.querySelector(elSelector);
  if (!targetEl) {
    throw new Error(`No element with selector "${elSelector}" found in DOM`);
  }
  const scrollPos = document.querySelector(elSelector).offsetTop - offset;
  if (animate) {
    window.scroll({
      left: 0,
      top: scrollPos,
      behavior: "smooth",
    });
    return;
  }
  window.scrollTo(0, scrollPos);
};
