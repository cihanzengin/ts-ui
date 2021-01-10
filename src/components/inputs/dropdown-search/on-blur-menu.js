export default function onBlurMenu({
  menuRef,
  toggleOpen,
}) {
  // timeout fixing browser bug with document.activeElement
  setTimeout(() => {
    const active = document.activeElement;
    if (menuRef?.current?.contains(active)) return;
    toggleOpen(false);
  }, 0);
}
