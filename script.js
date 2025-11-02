const draggableSections = document.querySelectorAll('section');

draggableSections.forEach(section => {
section.style.position = 'absolute'; // required for dragging
section.style.cursor = 'grab';

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

section.addEventListener('mousedown', (e) => {
isDragging = true;
offsetX = e.clientX - section.offsetLeft;
offsetY = e.clientY - section.offsetTop;
section.style.cursor = 'grabbing';
section.style.zIndex = 1000; // bring to front while dragging
});

document.addEventListener('mousemove', (e) => {
if (!isDragging) return;
section.style.left = (e.clientX - offsetX) + 'px';
section.style.top = (e.clientY - offsetY) + 'px';
});

document.addEventListener('mouseup', () => {
if (isDragging) {
isDragging = false;
section.style.cursor = 'grab';
section.style.zIndex = 1;
}
});
});
