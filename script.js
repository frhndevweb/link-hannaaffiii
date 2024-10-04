document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const note = button.previousElementSibling;
        if (note.style.display === 'none' || note.style.display === '') {
            note.style.display = 'block';
            button.textContent = 'Read Less';
        } else {
            note.style.display = 'none';
            button.textContent = 'Read More';
        }
    });
});
