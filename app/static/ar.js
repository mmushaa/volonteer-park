// Функции для работы с AR-камерой
function startCamera() {
  const cameraPreview = document.querySelector(".camera-preview");
  const startBtn = document.querySelector(".start-camera-btn");
  const stopBtn = document.querySelector(".stop-camera-btn");

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
    showObjectInfo(
      "🏛️",
      "Архитектурный памятник",
      "Здание построено в 1928 году в стиле советского конструктивизма."
    );
  }, 2000);

  setTimeout(() => {
    showObjectInfo(
      "🌳",
      "Старый дуб",
      "Возраст более 150 лет. Охраняется государством как памятник природы."
    );
  }, 4000);
}

function stopCamera() {
  const cameraPreview = document.querySelector(".camera-preview");
  const startBtn = document.querySelector(".start-camera-btn");
  const stopBtn = document.querySelector(".stop-camera-btn");

  cameraPreview.innerHTML = `
        <div style="font-size: 50px;">📷</div>
        <div style="margin-top: 20px; color: #4c6e26; font-weight: bold;">Нажмите "Запустить камеру" для начала сканирования</div>
    `;

  startBtn.disabled = false;
  stopBtn.disabled = true;

  // Скрываем информацию об объекте
  const objectInfo = document.querySelector(".object-info");
  if (objectInfo) {
    objectInfo.style.display = "none";
  }
}

function showObjectInfo(icon, name, description) {
  let objectInfo = document.querySelector(".object-info");
  if (!objectInfo) {
    objectInfo = document.createElement("div");
    objectInfo.className = "object-info";
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
    document.querySelector(".camera-preview").appendChild(objectInfo);
  }

  objectInfo.innerHTML = `
        <div style="font-size: 30px; margin-bottom: 10px;">${icon}</div>
        <div style="font-weight: bold; margin-bottom: 5px;">${name}</div>
        <div style="font-size: 12px; opacity: 0.8;">${description}</div>
    `;
  objectInfo.style.display = "block";

  // Автоматически скрываем через 5 секунд
  setTimeout(() => {
    objectInfo.style.display = "none";
  }, 5000);
}
