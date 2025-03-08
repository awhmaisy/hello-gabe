'use client';

import { useState, useEffect } from 'react';

interface MacPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
}

export default function MacPopup({
  isOpen,
  onClose,
  onConfirm,
  title = "Voulez-vous vraiment effacer définitivement les éléments de la corbeille ?",
  message = "Impossible d'annuler cette opération.",
  confirmText = "Vider la corbeille",
  cancelText = "Annuler"
}: MacPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <>
      <div className="mac-popup-overlay" onClick={onClose} />
      <div className="mac-popup">
        <div className="mac-popup-icon">
          {/* Mac-style finder icon */}
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="8" fill="#1D93EF"/>
            <path d="M25 15C25 15 21 19 17 19C13 19 10 16 10 16V34C10 34 13 37 17 37C21 37 25 33 25 33C25 33 29 37 33 37C37 37 40 34 40 34V16C40 16 37 19 33 19C29 19 25 15 25 15Z" fill="white"/>
          </svg>
        </div>
        <div className="mac-popup-title">{title}</div>
        <div className="mac-popup-message">{message}</div>
        <div className="mac-popup-buttons">
          <button 
            className="mac-popup-button mac-popup-button-secondary" 
            onClick={onClose}
          >
            {cancelText}
          </button>
          <button 
            className="mac-popup-button mac-popup-button-primary" 
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </>
  );
} 