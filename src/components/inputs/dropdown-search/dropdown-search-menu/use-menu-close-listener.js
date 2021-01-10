import { useEffect, useCallback } from 'react';

export default function useMenuCloseListener({
  menuRef,
  triggerRef,
  toggleOpen,
}) {
  const handleClick = useCallback((e) => {
    if (
      menuRef?.current?.contains(e.target)
      || triggerRef.current.contains(e.target)
    ) return;
    toggleOpen(false);
  }, [menuRef, triggerRef, toggleOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
}
