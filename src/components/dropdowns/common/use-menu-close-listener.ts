import { useEffect, useCallback, RefObject, MutableRefObject } from "react";

interface IMenuCloseListenerProps {
  menuRef:
    | ((instance: HTMLDivElement | null) => void)
    | MutableRefObject<HTMLDivElement | null>
    | null;
  toggleOpen: (a: boolean) => void;
  triggerRef: RefObject<HTMLDivElement>;
}

export default function useMenuCloseListener({
  menuRef,
  triggerRef,
  toggleOpen,
}: IMenuCloseListenerProps) {
  const handleClick = useCallback(
    (e) => {
      const { current: trigger } = triggerRef;
      const { current: menu } = menuRef as RefObject<HTMLDivElement>;
      if (menu?.contains(e.target) || trigger?.contains(e.target)) return;
      toggleOpen(false);
    },
    [menuRef, triggerRef, toggleOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
}
