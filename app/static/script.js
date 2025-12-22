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
            <div class="audioguide-section fade-in">
                <div class="audioguide-header">
                    <div class="audioguide-icon">🎧</div>
                    <div>
                        <h3 style="color: white; margin: 0;">Аудиогид с AR-камерой</h3>
                        <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0 0;">${parkData.audioguide.description}</p>
                    </div>
                </div>
                
                <!-- AR-камера -->
                <div class="ar-camera-container">
                    <h4 style="color: white; margin-bottom: 15px;">📷 AR-камера для сканирования объектов</h4>
                    <div class="camera-preview">
                        <div style="font-size: 50px;">📷</div>
                        <div style="margin-top: 20px; color: #8bc34a; font-weight: bold;">Нажмите "Запустить камеру" для начала сканирования</div>
                    </div>
                    <div class="camera-controls">
                        <button class="camera-btn start-camera-btn" onclick="startCamera()">
                            <span>▶️</span> Запустить камеру
                        </button>
                        <button class="camera-btn secondary stop-camera-btn" onclick="stopCamera()" disabled>
                            <span>⏹️</span> Остановить
                        </button>
                        <button class="camera-btn secondary" onclick="alert('Функция в разработке')">
                            <span>💾</span> Сохранить фото
                        </button>
                    </div>
                </div>
                
                <!-- Маршруты -->
                <h4 style="color: white; margin-top: 30px;">🗺️ Маршруты для прогулок</h4>
                <div class="audioguide-routes">
                    ${parkData.audioguide.routes.map(route => `
                        <div class="route-card" onclick="selectRoute('${route.name}')">
                            <div class="route-header">
                                <div class="route-icon">${route.icon}</div>
                                <h5 style="color: white; margin: 0;">${route.name}</h5>
                            </div>
                            <div class="route-stats">
                                <div class="route-stat">⏱️ ${route.duration}</div>
                                <div class="route-stat">📏 ${route.length}</div>
                                <div class="route-stat">📍 ${route.points} точек</div>
                            </div>
                            <div class="route-points">
                                ${route.stops.map((stop, index) => `
                                    <div class="route-point">
                                        <div class="point-number">${index + 1}</div>
                                        <span style="color: rgba(255,255,255,0.9);">${stop}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Обнаруживаемые объекты -->
                <div class="detected-objects">
                    <h4 style="color: white; margin-bottom: 15px;">🔍 Объекты для сканирования</h4>
                    <p style="color: rgba(255,255,255,0.8); margin-bottom: 15px;">Наведите камеру на эти объекты в парке, чтобы получить информацию:</p>
                    <div class="objects-grid">
                        ${parkData.audioguide.detectableObjects.map(obj => `
                            <div class="object-card">
                                <div class="object-icon">${obj.icon}</div>
                                <div class="object-name">${obj.name}</div>
                                <div class="object-desc">${obj.desc}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        ` : '';

        historyContent.innerHTML = `
            <div class="park-history-content fade-in">
                <div class="history-header">
                    <h2>${parkData.name}</h2>
                    <p class="text-muted">${parkData.location}</p>
                </div>

                <div class="history-image" style="background-image: url('${parkData.image}')">
                </div>

                <div class="history-info">
                    <div class="info-card">
                        <h4>⭐ Рейтинг</h4>
                        <p>${parkData.rating}</p>
                    </div>
                    <div class="info-card">
                        <h4>🕒 Время работы</h4>
                        <p>${parkData.hours}</p>
                    </div>
                    <div class="info-card">
                        <h4>🚇 Метро</h4>
                        <p>${parkData.metro}</p>
                    </div>
                    <div class="info-card">
                        <h4>📅 Основан</h4>
                        <p>${parkData.founded}</p>
                    </div>
                </div>

                <div class="history-text">
                    <h4>История парка</h4>
                    <p>${parkData.history}</p>
                </div>

                <div class="history-text">
                    <h4>Особенности</h4>
                    <p>${parkData.features}</p>
                </div>

                <div class="history-features">
                    ${parkData.amenities.map(amenity => `
                        <div class="feature-item">
                            <span>${amenity.emoji}</span>
                            <span>${amenity.name}</span>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Аудиогид -->
                ${audioguideHTML}
            </div>
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

// Загрузка парков
function loadParks() {
    const parksGrid = document.getElementById('parksGrid');
    const parkIds = ['gorky', 'sokolniki', 'izmaily', 'tsaritsyno', 'kolomenskoe', 'vdnh'];

    const parkCards = parkIds.map(parkId => {
        const parkData = parksData[parkId];
        return `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="park-card fade-in" onclick="showParkHistory('${parkId}')">
                    <div class="park-image" style="background-image: url('${parkData.image}');">
                    </div>
                    <div class="park-info">
                        <h5>${parkData.name}</h5>
                        <p class="park-location">${parkData.location}</p>
                        <div class="park-stats">
                            <span>⭐ ${parkData.rating}</span>
                            <span>🕒 ${parkData.hours}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    parksGrid.innerHTML = parkCards;
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