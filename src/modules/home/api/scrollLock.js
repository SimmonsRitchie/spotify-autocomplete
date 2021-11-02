export const scrollLock = () => {
  document.documentElement.style.overflow = "hidden";
  document.body.scroll = "no";
};

export const scrollUnlock = () => {
  document.documentElement.style.overflow = "scroll";
  document.body.scroll = "yes";
};
