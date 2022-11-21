function showPopup(texto) {
    const box = document.getElementById('pop');
    const text = document.getElementById('popup_text');
    if (box.style.visibility === 'visible') {
        box.style.visibility = 'hidden';
        text.innerHTML = texto;
    } else {
        box.style.visibility = 'visible';
    }
};

export default showPopup;