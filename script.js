document.addEventListener('DOMContentLoaded', () => {
    const smileButton = document.getElementById('smileButton');
    const emojiContainer = document.getElementById('emojiContainer');
    const emojis = ['😊', '😄', '😁', '😂', '😉', '😍', '🥳', '🤩'];

    smileButton.addEventListener('click', () => {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        emojiContainer.textContent = randomEmoji;
    });
});
