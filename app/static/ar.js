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

        objectInfo.style.position = "absolute";
        objectInfo.style.bottom = "20px";
        objectInfo.style.left = "50%";
        objectInfo.style.transform = "translateX(-50%)";
        objectInfo.style.background = "rgba(0,0,0,0.8)";
        objectInfo.style.color = "white";
        objectInfo.style.padding = "15px";
        objectInfo.style.borderRadius = "10px";
        objectInfo.style.maxWidth = "300px";
        objectInfo.style.textAlign = "center";
        objectInfo.style.zIndex = "1000";

        const container = document.querySelector(".camera-preview");
        if (!container) return;
        container.appendChild(objectInfo);
    }

    // Очищаем содержимое безопасно
    objectInfo.replaceChildren();

    // Иконка
    const iconDiv = document.createElement("div");
    iconDiv.style.fontSize = "30px";
    iconDiv.style.marginBottom = "10px";
    iconDiv.textContent = icon || "";
    objectInfo.appendChild(iconDiv);

    // Название
    const nameDiv = document.createElement("div");
    nameDiv.style.fontWeight = "bold";
    nameDiv.style.marginBottom = "5px";
    nameDiv.textContent = name || "";
    objectInfo.appendChild(nameDiv);

    // Описание
    const descDiv = document.createElement("div");
    descDiv.style.fontSize = "12px";
    descDiv.style.opacity = "0.8";
    descDiv.textContent = description || "";
    objectInfo.appendChild(descDiv);

    objectInfo.style.display = "block";

    setTimeout(() => {
        objectInfo.style.display = "none";
    }, 5000);
}