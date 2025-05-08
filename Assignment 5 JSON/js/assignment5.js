document.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.getElementById('content');
    const sortBy = document.getElementById('sortBy');

    let languages = [];

    fetch('https://raw.githubusercontent.com/maxduenhoelter/CSCI202/refs/heads/main/languages.json')
        .then(response => response.json())
        .then(data => {
            languages = data.languages || data;
            const sortedLanguages = [...languages].sort((a, b) => parseSpeakers(b.totalSpeakers) - parseSpeakers(a.totalSpeakers));
            renderLanguages(sortedLanguages);
        })
        .catch(error => {
            console.error('Error fetching languages:', error);
            contentDiv.innerHTML = '<p>Sorry, there was an error loading the language data.</p>';
        });

    sortBy.addEventListener('change', () => {
        const selected = sortBy.value;
        let sortedLanguages = [...languages];

        if (selected === 'speakers') {
            sortedLanguages.sort((a, b) => parseSpeakers(b.totalSpeakers) - parseSpeakers(a.totalSpeakers));
        } else if (selected === 'year') {
            sortedLanguages.sort((a, b) => parseYear(a.year_first_spoken) - parseYear(b.year_first_spoken));
        } else if (selected === 'continent') {
            sortedLanguages.sort((a, b) => (a.primary_continents[0] || '').localeCompare(b.primary_continents[0] || ''));
        }

        renderLanguages(sortedLanguages);
    });

    function parseSpeakers(value) {
        if (!value) return 0;
        const lowerCaseVal = value.toLowerCase();
        const num = parseFloat(value);
        if (lowerCaseVal.includes('billion')) return num * 1e9;
        if (lowerCaseVal.includes('million')) return num * 1e6;
        return num;
    }

    function parseYear(yearStr) {
        if (!yearStr) return Number.MAX_VALUE;
        if (yearStr.toUpperCase().includes('BC')) {
            return -parseInt(yearStr.replace(/BC/i, '').trim());
        }
        return parseInt(yearStr);
    }

    function renderLanguages(data) {
        contentDiv.innerHTML = '';
        data.forEach((item, index) => {
            const section = document.createElement('section');
            section.innerHTML = `
                <h2>${index + 1}. ${item.title}</h2>
                <img src="${item.imageUrl}" alt="${item.altText}">
                <p><strong>Total Speakers:</strong> ${item.totalSpeakers}</p>
                <p><strong>First Spoken:</strong> ${item.year_first_spoken}</p>
                <p><strong>Continents:</strong> ${item.primary_continents.join(', ')}</p>
                <p>${item.text} <a href="${item.wikiLink}" target="_blank">Read More</a></p>
                <p><strong>Sample Greeting:</strong> ${item.sampleGreeting}</p>
                <audio controls src="${item.pronunciationUrl}">Your browser does not support audio.</audio>
            `;
            contentDiv.appendChild(section);
        });
    }
});
