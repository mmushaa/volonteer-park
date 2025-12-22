// Функции для меню
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
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('profilePage').style.display = 'none';
    document.getElementById('parksPage').style.display = 'none';
    document.getElementById('parkHistoryPage').style.display = 'block';
    document.body.style.overflow = 'auto';

    const parkData = parksData[parkId];
    const historyContent = document.getElementById('parkHistoryContent');

    if (parkData) {
        // Создаем HTML для аудиогида
        const audioguideHTML = parkData.audioguide ? `
            
        ` : '';

        historyContent.innerHTML = `
            
        `;

        // Инициализируем кнопки камеры
        setTimeout(() => {
            const startBtn = document.querySelector('.start-camera-btn');
            const stopBtn = document.querySelector('.stop-camera-btn');
            if (startBtn && stopBtn) {
                startBtn.addEventListener('click', startCamera);
                stopBtn.addEventListener('click', stopCamera);
            }
        }, 100);
    }
}

function selectRoute(routeName) {
    alert(`Выбран маршрут: "${routeName}"\n\nФункция навигации по маршруту будет доступна в полной версии приложения.`);
}

async function getRatingData() {
    try {
        const response = await fetch('/api/rating');
        const data = await response.json();
        return data.rating;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Загрузка рейтинга
async function loadRatingTable() {
    const tableBody = document.getElementById('ratingTableBody');
    if (!tableBody) return;

    let html = '';

    const ratingData = await getRatingData();
    
    // Заполняем подиум (первые 3 места)
    if (ratingData.length >= 1) {
        // Первое место
        const firstPlace = ratingData[0];
        const firstPlaceElement = document.querySelector('.first-place');
        if (firstPlaceElement) {
            firstPlaceElement.querySelector('.position-badge').textContent = '1';
            firstPlaceElement.querySelector('.user-avatar').textContent = firstPlace.avatar;
            firstPlaceElement.querySelector('.user-name').textContent = firstPlace.name;
            firstPlaceElement.querySelector('.user-stats').textContent = `${firstPlace.events} событий`;
            firstPlaceElement.querySelector('.user-score').textContent = `${firstPlace.hours} часов`;
        }
    }

    if (ratingData.length >= 2) {
        // Второе место
        const secondPlace = ratingData[1];
        const secondPlaceElement = document.querySelector('.second-place');
        if (secondPlaceElement) {
            secondPlaceElement.querySelector('.position-badge').textContent = '2';
            secondPlaceElement.querySelector('.user-avatar').textContent = secondPlace.avatar;
            secondPlaceElement.querySelector('.user-name').textContent = secondPlace.name;
            secondPlaceElement.querySelector('.user-stats').textContent = `${secondPlace.events} событий`;
            secondPlaceElement.querySelector('.user-score').textContent = `${secondPlace.hours} часов`;
        }
    }

    if (ratingData.length >= 3) {
        // Третье место
        const thirdPlace = ratingData[2];
        const thirdPlaceElement = document.querySelector('.third-place');
        if (thirdPlaceElement) {
            thirdPlaceElement.querySelector('.position-badge').textContent = '3';
            thirdPlaceElement.querySelector('.user-avatar').textContent = thirdPlace.avatar;
            thirdPlaceElement.querySelector('.user-name').textContent = thirdPlace.name;
            thirdPlaceElement.querySelector('.user-stats').textContent = `${thirdPlace.events} событий`;
            thirdPlaceElement.querySelector('.user-score').textContent = `${thirdPlace.hours} часов`;
        }
    }

    ratingData.forEach(user => {
        const positionClass = user.position <= 3 ? `position-${user.place}` : '';
        html += `
            <tr>
                <td class="position-cell ${positionClass}">${user.place}</td>
                <td>
                    <div class="user-cell">
                        <div class="user-avatar-small">${user.avatar}</div>
                        <div>
                            <div class="user-name">${user.name}</div>
                        </div>
                    </div>
                </td>
                <td class="stats-cell">${user.events}</td>
                <td class="hours-cell">${user.hours}</td>
            </tr>
        `;
    });

    tableBody.innerHTML = html;
}

// Инициализация
document.addEventListener('DOMContentLoaded', function () {
    // Инициализация меню
    const menuButton = document.getElementById('menuButton');
    const sidebar = document.getElementById('sidebar');

    if (menuButton && sidebar) {
        menuButton.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMenu();
        });

        document.addEventListener('click', function (e) {
            if (sidebar.classList.contains('active') &&
                !sidebar.contains(e.target) &&
                !menuButton.contains(e.target)) {
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
                const parkName = card.querySelector('h5').textContent.toLowerCase();
                const parkLocation = card.querySelector('.park-location').textContent.toLowerCase();

                if (parkName.includes(searchTerm) || parkLocation.includes(searchTerm)) {
                    card.parentElement.style.display = 'block';
                } else {
                    card.parentElement.style.display = 'none';
                }
            });
        });
    }

    loadParks();
});