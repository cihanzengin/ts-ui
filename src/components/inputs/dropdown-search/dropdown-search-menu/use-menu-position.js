import { useEffect, useState } from 'react';

const getMenuPosition = ({ scrollRef, triggerRef, menuRef }) => {
  if (!menuRef.current) return '';
  const { top } = triggerRef
    .current.getBoundingClientRect();
  const { height: menuHeight } = menuRef
    .current?.getBoundingClientRect();

  const scrollHeight = scrollRef
    ? scrollRef.current.clientHeight
    : document.clientHeight;
  if (scrollHeight - menuHeight < top) {
    return 'upward';
  }
  return '';
};

export default function useMenuCloseListener({
  menuRef,
  triggerRef,
  scrollRef,
  isOpen,
}) {

  const [menuPosition, setMenuPosition] = useState('');
  useEffect(() => {
    setMenuPosition(getMenuPosition({
      menuRef,
      triggerRef,
      scrollRef,
    }));
  }, [menuRef, triggerRef, scrollRef, isOpen]);
  return { menuPosition };
}
