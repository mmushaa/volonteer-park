function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menuButton');

    if (sidebar && menuButton) {
        sidebar.classList.toggle('active');
        menuButton.classList.toggle('active');
    }
}

function closeMenu() {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menuButton');

    if (sidebar) sidebar.classList.remove('active');
    if (menuButton) menuButton.classList.remove('active');
}

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

async function getRatingData() {
    try {
        const response = await fetch('/api/rating');
        if (!response.ok) throw new Error('API error');
        const data = await response.json();
        return Array.isArray(data.rating) ? data.rating : [];
    } catch (error) {
        console.error('Rating load error:', error);
        return [];
    }
}

// async function loadRatingTable() {
//     const tableBody = document.getElementById('ratingTableBody');
//     if (!tableBody) return;

//     tableBody.innerHTML = '';

//     const ratingData = await getRatingData();

//     // Обновление подиума
//     const podiumClasses = ['first-place', 'second-place', 'third-place'];

//     podiumClasses.forEach((className, index) => {
//         const user = ratingData[index];
//         const element = document.querySelector(`.${className}`);
//         if (!user || !element) return;

//         element.querySelector('.position-badge').textContent = index + 1;
//         element.querySelector('.user-avatar').textContent = user.avatar || '';
//         element.querySelector('.user-name').textContent = user.name || '';
//         element.querySelector('.user-stats').textContent = `${user.events || 0} событий`;
//         element.querySelector('.user-score').textContent = `${user.hours || 0} часов`;
//     });

//     // Таблица
//     ratingData.forEach(user => {
//         const tr = document.createElement('tr');

//         const positionTd = document.createElement('td');
//         positionTd.className = 'position-cell';
//         positionTd.textContent = user.place ?? '';
//         tr.appendChild(positionTd);

//         const nameTd = document.createElement('td');
//         const userCell = document.createElement('div');
//         userCell.className = 'user-cell';

//         const avatarDiv = document.createElement('div');
//         avatarDiv.className = 'user-avatar-small';
//         avatarDiv.textContent = user.avatar || '';

//         const nameDiv = document.createElement('div');
//         nameDiv.className = 'user-name';
//         nameDiv.textContent = user.name || '';

//         userCell.appendChild(avatarDiv);
//         userCell.appendChild(nameDiv);
//         nameTd.appendChild(userCell);

//         const eventsTd = document.createElement('td');
//         eventsTd.className = 'stats-cell';
//         eventsTd.textContent = user.events ?? 0;

//         const hoursTd = document.createElement('td');
//         hoursTd.className = 'hours-cell';
//         hoursTd.textContent = user.hours ?? 0;

//         tr.appendChild(nameTd);
//         tr.appendChild(eventsTd);
//         tr.appendChild(hoursTd);

//         tableBody.appendChild(tr);
//     });
// }

document.addEventListener('DOMContentLoaded', function () {

    const menuButton = document.getElementById('menuButton');
    const sidebar = document.getElementById('sidebar');

    if (menuButton && sidebar) {
        menuButton.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMenu();
        });

        document.addEventListener('click', function (e) {
            if (
                sidebar.classList.contains('active') &&
                !sidebar.contains(e.target) &&
                !menuButton.contains(e.target)
            ) {
                closeMenu();
            }
        });
    }

    loadRatingTable();

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

    if (typeof loadParks === 'function') {
        loadParks();
    }
});