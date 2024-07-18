import React from 'react';
import styles from './dropdownMenu.module.scss';

interface DropdownMenuProps {
  actions: { label: string; onClick: () => void; color: string }[];
  isOpen: boolean;
  onClose: () => void;
  position: { top: number; left: number };
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ actions, isOpen, onClose, position }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.dropdownMenu} style={{ top: position.top, left: position.left }}>
      <ul className={styles.menuList}>
        {actions.map((action, index) => (
          <li 
            key={index} 
            className={styles.menuItem} 
            onClick={() => { action.onClick(); onClose(); }}
          >
            <p className={`
              ${action.color === 'black' && styles.black || ''}
              ${action.color === 'grey' && styles.grey || ''}
              ${action.color === 'yellow' && styles.yellow || ''}
              ${action.color === 'red' && styles.red || ''}
            `}>
              {action.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
