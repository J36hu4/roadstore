document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        document.querySelector('.selected').classList.remove('selected');
        item.classList.add('selected');
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('selected');
        document.querySelector('.menu-item:nth-child(1)').classList.add('selected');
    });
});