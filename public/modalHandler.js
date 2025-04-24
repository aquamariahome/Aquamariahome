// src/components/modalHandler.js

document.addEventListener('DOMContentLoaded', () => {
    // Abrir modal
    document.querySelectorAll('[data-modal-trigger]').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const modalId = trigger.getAttribute('data-modal-trigger');
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('open');
      });
    });
  
    // Cerrar modal
    document.querySelectorAll('[data-modal-close]').forEach(closeBtn => {
      closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal');
        if (modal) modal.classList.remove('open');
      });
    });
  });
  