const nav = document.querySelector('nav');
const tabButtons = document.querySelectorAll('nav li');
const contents = document.querySelectorAll('.content');


function activateTab(index) {
    if ((index < 0) || (index >= tabButtons.length)) return;

    tabButtons.forEach((tabButton, btnIndex) => {
        if (btnIndex === index) {
            tabButton.classList.add('selected');
        } else {
            tabButton.classList.remove('selected');
        }
    });

    contents.forEach((content, contentIndex) => {
        if (contentIndex === index) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    });
}

activateTab(0);

nav.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('li');
    if (!tabBtn) return;

    if (!(tabBtn.classList.contains('selected'))) {
        const index = Array.from(tabButtons).indexOf(tabBtn);
        if (index === -1) return;
        activateTab(index);
    }
});
