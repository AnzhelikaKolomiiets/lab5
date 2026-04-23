
const feedbackModal = document.getElementById('feedbackModal');
const closeX = document.getElementById('closeX');
const closeModal = () => {
    feedbackModal.style.display = 'none';
};
if (closeX) {
    closeX.addEventListener('click', closeModal);
}
window.addEventListener('click', (e) => {
    if (e.target === feedbackModal) {
        closeModal();
    }
});

setTimeout(() => {
   
    if (feedbackModal) {
        feedbackModal.style.display = 'flex';
    }
}, 60000);
