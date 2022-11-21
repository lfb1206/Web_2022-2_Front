function handleClick() {
    const box = document.getElementById('selector');
    if (box.style.visibility === 'visible') {
        box.style.visibility = 'hidden';
    } else {
        box.style.visibility = 'visible';
    }
};

export default handleClick;