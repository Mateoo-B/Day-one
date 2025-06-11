document.addEventListener('DOMContentLoaded', () => {
    const smileButton = document.getElementById('smileButton');
    const emojiContainer = document.getElementById('emojiContainer');
    const emojis = ['😊', '😄', '😁', '😂', '😉', '😍', '🥳', '🤩'];

    smileButton.addEventListener('click', () => {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        emojiContainer.textContent = randomEmoji;

        // New button movement logic
        smileButton.style.position = 'absolute';
        const randomTop = Math.floor(Math.random() * 91); // 0 to 90
        const randomLeft = Math.floor(Math.random() * 91); // 0 to 90
        smileButton.style.top = randomTop + '%';
        smileButton.style.left = randomLeft + '%';
    });
});
