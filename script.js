// ===== AI Native Guide - Specific Scripts =====
// Base functionality provided by common/base.js

// ===== Maturity Checklist Toggle =====
document.querySelectorAll('.maturity-check').forEach(check => {
    check.addEventListener('click', () => {
        check.classList.toggle('checked');
    });
});
