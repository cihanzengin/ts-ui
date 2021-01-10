import { MutableRefObject, RefObject } from 'react';

interface IBlurMenuProps {
  menuRef:
    | ((instance: HTMLDivElement | null) => void)
    | MutableRefObject<HTMLDivElement | null>
    | null;
  toggleOpen: (a: boolean) => void;
}

export default function onBlurMenu({
  menuRef,
  toggleOpen,
}: IBlurMenuProps) {
  // timeout fixing browser bug with document.activeElement
  setTimeout(() => {
    const active = document.activeElement;
    const { current: menu } = menuRef as RefObject<HTMLDivElement>;
    if (menu?.contains(active)) return;
    toggleOpen(false);
  }, 0);
}
