function showParkHistory(parkId) {
    const pages = ['mainPage', 'profilePage', 'parksPage', 'parkHistoryPage'];
    pages.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = id === 'parkHistoryPage' ? 'block' : 'none';
    });

    document.body.style.overflow = 'auto';

    const parkData = parksData?.[parkId];
    const historyContent = document.getElementById('parkHistoryContent');
    if (!historyContent) return;

    historyContent.innerHTML = '';

    if (!parkData) return;

    // Заголовок
    const title = document.createElement('h2');
    title.textContent = parkData.name || 'Парк';
    historyContent.appendChild(title);

    // Описание
    if (parkData.description) {
        const desc = document.createElement('p');
        desc.textContent = parkData.description;
        historyContent.appendChild(desc);
    }

    // Аудиогид (если есть)
    if (parkData.audioguide) {
        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = parkData.audioguide;
        historyContent.appendChild(audio);
    }

    // Кнопки камеры
    const startBtn = document.createElement('button');
    startBtn.className = 'start-camera-btn';
    startBtn.textContent = 'Включить камеру';

    const stopBtn = document.createElement('button');
    stopBtn.className = 'stop-camera-btn';
    stopBtn.textContent = 'Выключить камеру';

    startBtn.addEventListener('click', startCamera);
    stopBtn.addEventListener('click', stopCamera);

    historyContent.appendChild(startBtn);
    historyContent.appendChild(stopBtn);
}

function selectRoute(routeName) {
    alert(`Выбран маршрут: "${routeName}"`);
}

document.addEventListener('DOMContentLoaded', function () {
    const parkSearch = document.getElementById('parkSearch');
    if (parkSearch) {
        parkSearch.addEventListener('input', function (e) {
            const searchTerm = e.target.value.toLowerCase();
            const parkCards = document.querySelectorAll('.park-card');

            parkCards.forEach(card => {
                const parkName = card.querySelector('h5')?.textContent.toLowerCase() || '';
                const parkLocation = card.querySelector('.park-location')?.textContent.toLowerCase() || '';

                const visible = parkName.includes(searchTerm) || parkLocation.includes(searchTerm);
                if (card.parentElement) {
                    card.parentElement.style.display = visible ? 'block' : 'none';
                }
            });
        });
    }
});