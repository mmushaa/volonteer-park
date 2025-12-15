// Данные рейтинга (20 пользователей)
const ratingData = [
    { position: 1, name: "Анна Петрова", avatar: "👑", events: 15, hours: 120 },
    { position: 2, name: "Иван Сидоров", avatar: "⭐", events: 12, hours: 96 },
    { position: 3, name: "Мария Козлова", avatar: "🌸", events: 10, hours: 80 },
    { position: 4, name: "Алексей Иванов", avatar: "🚀", events: 9, hours: 72 },
    { position: 5, name: "Елена Смирнова", avatar: "🌿", events: 8, hours: 64 },
    { position: 6, name: "Дмитрий Попов", avatar: "⚡", events: 7, hours: 56 },
    { position: 7, name: "Ольга Новикова", avatar: "🌺", events: 7, hours: 56 },
    { position: 8, name: "Сергей Кузнецов", avatar: "🏆", events: 6, hours: 48 },
    { position: 9, name: "Татьяна Морозова", avatar: "❄️", events: 6, hours: 48 },
    { position: 10, name: "Андрей Волков", avatar: "🐺", events: 5, hours: 40 },
    { position: 11, name: "Наталья Зайцева", avatar: "🐰", events: 5, hours: 40 },
    { position: 12, name: "Михаил Лебедев", avatar: "🦢", events: 4, hours: 32 },
    { position: 13, name: "Ирина Соколова", avatar: "🦅", events: 4, hours: 32 },
    { position: 14, name: "Павел Комаров", avatar: "🐝", events: 4, hours: 32 },
    { position: 15, name: "Юлия Орлова", avatar: "🦉", events: 3, hours: 24 },
    { position: 16, name: "Владимир Егоров", avatar: "🐻", events: 3, hours: 24 },
    { position: 17, name: "Светлана Федорова", avatar: "🦋", events: 3, hours: 24 },
    { position: 18, name: "Дмитрий Медведев", avatar: "🐾", events: 2, hours: 16 },
    { position: 19, name: "Марина Алексеева", avatar: "🐬", events: 2, hours: 16 },
    { position: 20, name: "Артем Дмитриев", avatar: "🦁", events: 2, hours: 16 }
];

// Данные парков с аудиогидами
const parksData = {
    'gorky': {
        name: 'Парк Горького',
        location: 'Центральный административный округ',
        image: 'https://live.mts.ru/image/1300x1300/chto-interesnogo-v-parke-gorkogo-18c3af76-93f8-3df0-7000-6ba3692ed4ff.jpg',
        rating: '4.9',
        hours: 'Круглосуточно',
        metro: 'Ленинский проспект',
        founded: '1928 год',
        history: 'Парк Горького берет свои корни от Нескучного сада, пейзажного парка, созданного из дворянских усадеб во времена Николая I. Исторические памятники сада сохранились до наших дней...',
        features: 'Парк предлагает разнообразные развлечения: от спокойных прогулок по аллеям до активных видов спорта. Здесь есть набережная Москвы-реки, многочисленные кафе, спортивные площадки и культурные объекты.',
        amenities: [
            { emoji: '🏛️', name: 'Музеи' },
            { emoji: '☕', name: 'Кафе' },
            { emoji: '🚴', name: 'Велосипеды' },
            { emoji: '🎭', name: 'Культурные мероприятия' }
        ],
        audioguide: {
            description: 'Исследуйте главные достопримечательности парка с помощью интерактивного аудиогида. Наведите камеру на объекты, чтобы получить информацию о них.',
            routes: [
                {
                    name: 'Исторический маршрут',
                    icon: '🏛️',
                    duration: '45 мин',
                    length: '2.5 км',
                    points: 8,
                    stops: [
                        'Главный вход и арка',
                        'Пушкинская набережная',
                        'Фонтан "Цветы"',
                        'Нескучный сад',
                        'Голицынский пруд',
                        'Летний кинотеатр',
                        'Музей современного искусства',
                        'Смотровая площадка'
                    ]
                },
                {
                    name: 'Экологическая тропа',
                    icon: '🌿',
                    duration: '60 мин',
                    length: '3.2 км',
                    points: 6,
                    stops: [
                        'Редкие виды деревьев',
                        'Птичий заповедник',
                        'Экологическая станция',
                        'Водоемы парка',
                        'Зона восстановления растительности',
                        'Информационный центр'
                    ]
                }
            ],
            detectableObjects: [
                { icon: '🏛️', name: 'Архитектурные памятники', desc: 'Исторические здания и сооружения' },
                { icon: '🌳', name: 'Редкие деревья', desc: 'Деревья возрастом более 100 лет' },
                { icon: '🦆', name: 'Птицы парка', desc: 'Виды водоплавающих птиц' },
                { icon: '🗿', name: 'Скульптуры', desc: 'Памятники и скульптурные композиции' },
                { icon: '🏛️', name: 'Павильоны', desc: 'Исторические павильоны и беседки' },
                { icon: '🌺', name: 'Клумбы', desc: 'Сезонные цветочные композиции' }
            ]
        }
    },
    'sokolniki': {
        name: 'Сокольники',
        location: 'Восточный административный округ',
        image: 'https://cdn.culture.ru/images/092ed8f9-9c24-555e-8420-12d9d1b01871',
        rating: '4.9',
        hours: 'Круглосуточно',
        metro: 'Сокольники',
        founded: '1878 год',
        history: 'В XIV—XVI веках на месте парка был дремучий лес, уходивший далеко на север...',
        features: 'Парк славится своей уникальной планировкой — лучевой системой аллей, сходящихся к круглой площади. Здесь сохранилась историческая застройка и создана современная инфраструктура для отдыха.',
        amenities: [
            { emoji: '🎪', name: 'Развлечения' },
            { emoji: '🏊', name: 'Бассейн' },
            { emoji: '🎾', name: 'Теннис' },
            { emoji: '🚶', name: 'Прогулочные дорожки' }
        ],
        audioguide: {
            description: 'Откройте секреты одного из старейших парков Москвы с AR-гидом. Сканируйте объекты для получения исторических справок.',
            routes: [
                {
                    name: 'Лучевая аллея',
                    icon: '🛤️',
                    duration: '50 мин',
                    length: '2.8 км',
                    points: 7,
                    stops: [
                        'Главный фонтан',
                        'Ротонда и сцена',
                        'Дендрарий',
                        'Цветочные часы',
                        'Поляна игр',
                        'Охотничий домик',
                        'Смотровая площадка'
                    ]
                },
                {
                    name: 'Спортивный маршрут',
                    icon: '⚽',
                    duration: '75 мин',
                    length: '4.0 км',
                    points: 9,
                    stops: [
                        'Спорткомплекс',
                        'Велосипедные дорожки',
                        'Скейт-парк',
                        'Теннисные корты',
                        'Воркаут площадка',
                        'Беговые дорожки',
                        'Футбольное поле',
                        'Бассейн под открытым небом',
                        'Зона для йоги'
                    ]
                }
            ],
            detectableObjects: [
                { icon: '🏛️', name: 'Исторические постройки', desc: 'Здания XIX-XX веков' },
                { icon: '🎪', name: 'Аттракционы', desc: 'Исторические и современные' },
                { icon: '🌲', name: 'Хвойные деревья', desc: 'Сосны и ели разных видов' },
                { icon: '🦉', name: 'Ночные птицы', desc: 'Совиные в парке' },
                { icon: '🏛️', name: 'Фонтаны', desc: 'Архитектурные водные объекты' },
                { icon: '📜', name: 'Информационные стенды', desc: 'Исторические справки' }
            ]
        }
    },
    'izmaily': {
        name: 'Измайловский парк',
        location: 'Восточный административный округ',
        image: 'https://kudamoscow.ru/uploads/84f1438d0ae789c9ded2c89360ce384e.jpg',
        rating: '4.9',
        hours: 'Круглосуточно',
        metro: 'Партизанская',
        founded: '1931 год',
        history: 'Эта территория имеет богатую историю, уходящую корнями в период царствования Алексея Михайловича...',
        features: 'Парк сочетает в себе исторические памятники и современные развлечения. Здесь находится Измайловский кремль, вернисаж, многочисленные пруды и лесные массивы.',
        amenities: [
            { emoji: '🏰', name: 'Кремль' },
            { emoji: '🛍️', name: 'Вернисаж' },
            { emoji: '🚣', name: 'Лодочная станция' },
            { emoji: '🎡', name: 'Аттракционы' }
        ],
        audioguide: {
            description: 'Погрузитесь в атмосферу царской усадьбы и современного развлекательного комплекса с AR-гидом.',
            routes: [
                {
                    name: 'Кремлевский маршрут',
                    icon: '🏰',
                    duration: '90 мин',
                    length: '3.5 км',
                    points: 10,
                    stops: [
                        'Измайловский кремль',
                        'Вернисаж у входа',
                        'Храм Николая Чудотворца',
                        'Царская усадьба',
                        'Мост через Серебряный пруд',
                        'Музей хлеба',
                        'Кузнечная слобода',
                        'Площадь мужества',
                        'Большое колесо обозрения',
                        'Территория вернисажа'
                    ]
                },
                {
                    name: 'Природная тропа',
                    icon: '🦌',
                    duration: '65 мин',
                    length: '3.0 км',
                    points: 8,
                    stops: [
                        'Сосновая роща',
                        'Дубовая аллея',
                        'Березовая роща',
                        'Пруд "Лебединый"',
                        'Экологическая тропа',
                        'Зона наблюдения за птицами',
                        'Лесная чаща',
                        'Смотровая вышка'
                    ]
                }
            ],
            detectableObjects: [
                { icon: '🏰', name: 'Башни кремля', desc: 'Архитектурные элементы' },
                { icon: '🛍️', name: 'Сувениры', desc: 'Традиционные ремесла' },
                { icon: '🚣', name: 'Лодки', desc: 'Исторические и современные' },
                { icon: '🦢', name: 'Лебеди', desc: 'Обитатели прудов' },
                { icon: '🎪', name: 'Ярмарочные палатки', desc: 'Торговые ряды' },
                { icon: '🎨', name: 'Художественные работы', desc: 'Картины и скульптуры' }
            ]
        }
    },
    'tsaritsyno': {
        name: 'Царицыно',
        location: 'Южный административный округ',
        image: 'https://s3.russpass.ru/rp-mag-public-prod/images/shutterstock_1.format-webp.max-2000x2000.jpegquality-80_LLSVdHf.webp',
        rating: '5.0',
        hours: '6:00-00:00',
        metro: 'Царицыно',
        founded: '1776 год',
        history: 'Царицыно — дворцово-парковый ансамбль на юге Москвы, построенный по повелению императрицы Екатерины II в 1776 году. Музей-заповедник «Царицыно», занимающий площадь более 100 гектаров, расположился на холмистой пересеченной оврагами местности, на месте бывшей усадьбы князей Кантемиров. Территория ансамбля и парка ограничена с северо-востока и юга двумя глубокими оврагами, с запада — Царицынскими прудами, а с востока — комплексом оранжерей. Царицыно — самая крупная в Европе псевдоготическая постройка XVIII века и единственный дворцовый комплекс, разработанный в этом стиле.',
        features: 'Включает в себя дворцовый ансамбль, оранжереи, исторический пейзажный парк с прудами и павильонами. Уникальный образец русской готики.',
        amenities: [
            { emoji: '🏰', name: 'Дворец' },
            { emoji: '🌷', name: 'Оранжереи' },
            { emoji: '🎵', name: 'Музыкальные фонтаны' },
            { emoji: '🏛', name: 'Музей' }
        ]
    },
    'kolomenskoe': {
        name: 'Коломенское',
        location: 'Южный административный округ',
        image: 'https://www.ugorizont.ru/wp-content/uploads/sites/39/2023/05/1280_645ba3da82682c3d5c4a2b67.jpg',
        rating: '5.0',
        hours: '5:30-22:00',
        metro: 'Кленовый бульвар',
        founded: 'XIV век',
        history: 'Коломенское — дворцовое село, бывшая царская резиденция (с 1640 года), расположенная к югу от центра Москвы. С 1923 года на территории усадьбы был создан музей-заповедник русского деревянного зодчества. В настоящее время Коломенское входит в состав Московского государственного объединённого художественного историко-архитектурного и природно-ландшафтного музея-заповедника (МГОМЗ). В апреле 2024 года мэр Москвы Сергей Собянин анонсировал проект благоустройства музея-заповедника «Коломенское», который включает в себя обновление набережной Москвы-реки и парка аттракционов, а также реабилитацию садов, оврагов и каскада прудов на Коломенском ручье. Летом 2025 года завершился первый этап благоустройства: была открыта новая набережная Москвы-реки протяжённостью 3,5 км, которая по результатам голосования получила название «Царская набережная».',
        features: 'Уникальный историко-архитектурный и природно-ландшафтный музей-заповедник. Сохранились памятники русского зодчества XVI-XVII веков.',
        amenities: [
            { emoji: '⛪️', name: 'Церкви' },
            { emoji: '🏺', name: 'Музей' },
            { emoji: '🌳', name: 'Старинные дубы' },
            { emoji: '🏞', name: 'Смотровые площадки' }
        ]
    },
    'vdnh': {
        name: 'ВДНХ',
        location: 'Северо-Восточный административный округ',
        image: 'https://www.m24.ru/b/d/nBkSUhL2hFcmkMm2Jb6BrNOp2Z318Ji-mifGnuWR9mOBdDebBizCnTY8qdJf6ReJ58vU9meMMok3Ee2nhSR6ISeO9G1N_wjJ=YlTYXfvpAuvryKP0dSlsOA.jpg',
        rating: '5.0',
        hours: 'Круглосуточно',
        metro: 'ВДНХ',
        founded: '1939 год',
        history: 'В 1934 году у руководства страны возникла идея организовать юбилейную выставку к 20-летию советской власти, которая бы отразила положительные стороны проведённой в сельском хозяйстве коллективизации. Объявление о проведении сельскохозяйственной выставки было сделано на II Всесоюзном съезде колхозников-ударников, проходившем в Москве 11—17 февраля 1935 года. 1 июля 1941 года по распоряжению Совета народных комиссаров СССР выставку закрыли. В 1948 году Совет министров СССР постановил возобновить работу выставки. С 1950 года проводились реставрационные работы. После развала СССР указом президента РФ Бориса Ельцина выставка была переименована в государственное акционерное общество «Всероссийский выставочный центр» (ГАО ВВЦ). Выставочному комплексу было возвращено историческое название — ВДНХ.',
        features: 'Включает в себя дворцовый ансамбль, оранжереи, исторический пейзажный парк с прудами и павильонами. Уникальный образец русской готики.',
        amenities: [
            { emoji: '🏛', name: 'Музеи' },
            { emoji: '☕️', name: 'Кафе' },
            { emoji: '⛲️', name: 'Фонтаны' },
            { emoji: '🎭', name: 'Культурные мероприятия' }
        ]
    },
};

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

// Функции для навигации
function showMainPage() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('profilePage').style.display = 'none';
    document.getElementById('parksPage').style.display = 'none';
    document.getElementById('parkHistoryPage').style.display = 'none';
    document.body.style.overflow = 'auto';
    closeMenu();
}

function showProfilePage() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('profilePage').style.display = 'block';
    document.getElementById('parksPage').style.display = 'none';
    document.getElementById('parkHistoryPage').style.display = 'none';
    document.body.style.overflow = 'auto';
    closeMenu();
}

function showParksPage() {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('profilePage').style.display = 'none';
    document.getElementById('parksPage').style.display = 'block';
    document.getElementById('parkHistoryPage').style.display = 'none';
    document.body.style.overflow = 'auto';

    if (!document.getElementById('parksGrid').hasChildNodes()) {
        loadParks();
    }

    closeMenu();
}

// Функции для работы с AR-камерой
function startCamera() {
    const cameraPreview = document.querySelector('.camera-preview');
    const startBtn = document.querySelector('.start-camera-btn');
    const stopBtn = document.querySelector('.stop-camera-btn');

    cameraPreview.innerHTML = `
        <div class="camera-viewfinder"></div>
        <div class="object-marker">🏛️</div>
        <div class="object-marker">🌳</div>
        <div class="object-marker">🦆</div>
        <div class="object-marker">🗿</div>
        <div style="position: absolute; top: 20px; left: 20px; background: rgba(0,0,0,0.7); color: white; padding: 10px; border-radius: 5px; font-size: 14px;">
            🔍 Сканирование объектов...
        </div>
    `;

    startBtn.disabled = true;
    stopBtn.disabled = false;

    // Имитация сканирования объектов
    setTimeout(() => {
        showObjectInfo('🏛️', 'Архитектурный памятник', 'Здание построено в 1928 году в стиле советского конструктивизма.');
    }, 2000);

    setTimeout(() => {
        showObjectInfo('🌳', 'Старый дуб', 'Возраст более 150 лет. Охраняется государством как памятник природы.');
    }, 4000);
}

function stopCamera() {
    const cameraPreview = document.querySelector('.camera-preview');
    const startBtn = document.querySelector('.start-camera-btn');
    const stopBtn = document.querySelector('.stop-camera-btn');

    cameraPreview.innerHTML = `
        <div style="font-size: 50px;">📷</div>
        <div style="margin-top: 20px; color: #4c6e26; font-weight: bold;">Нажмите "Запустить камеру" для начала сканирования</div>
    `;

    startBtn.disabled = false;
    stopBtn.disabled = true;

    // Скрываем информацию об объекте
    const objectInfo = document.querySelector('.object-info');
    if (objectInfo) {
        objectInfo.style.display = 'none';
    }
}

function showObjectInfo(icon, name, description) {
    let objectInfo = document.querySelector('.object-info');
    if (!objectInfo) {
        objectInfo = document.createElement('div');
        objectInfo.className = 'object-info';
        objectInfo.style.cssText = `
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 15px;
            border-radius: 10px;
            max-width: 300px;
            text-align: center;
            z-index: 1000;
        `;
        document.querySelector('.camera-preview').appendChild(objectInfo);
    }

    objectInfo.innerHTML = `
        <div style="font-size: 30px; margin-bottom: 10px;">${icon}</div>
        <div style="font-weight: bold; margin-bottom: 5px;">${name}</div>
        <div style="font-size: 12px; opacity: 0.8;">${description}</div>
    `;
    objectInfo.style.display = 'block';

    // Автоматически скрываем через 5 секунд
    setTimeout(() => {
        objectInfo.style.display = 'none';
    }, 5000);
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

// Загрузка рейтинга
function loadRatingTable() {
    const tableBody = document.getElementById('ratingTableBody');
    if (!tableBody) return;

    let html = '';
    ratingData.forEach(user => {
        const positionClass = user.position <= 3 ? `position-${user.position}` : '';
        html += `
            <tr>
                <td class="position-cell ${positionClass}">${user.position}</td>
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