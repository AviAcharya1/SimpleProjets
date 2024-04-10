function generateQuote() {
    const name = document.getElementById('nameInput').value;
    const quotes = [
        `"${name}, The only way to do great work is to love what you do."`,
        `"${name}, Life is 10% what happens to us and 90% how we react to it."`,
        `"${name}, Success is not the key to happiness. Happiness is the key to success."`,
        `"${name}, The only limit to our realization of tomorrow will be our doubts of today."`,
        `"${name}, Believe you can and you're halfway there."`,
        `"${name}, You are the person who pushes to "DO" impossible to possible"`,
        `"${name}, If you are disturbed ,just take a break...! if possible with Coffee :)"`,
        `"${name}, If you can't change your MIND,you can't Change ANYTHING"`,
        `"${name}, DONE is better than PERFECT...!(rather than Procrastinating)"`,
        `"${name}, CONSISTENCY is far better than PERFECTION"`,
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteOutput').innerHTML = `<p class="lead">${randomQuote}</p>`;
}