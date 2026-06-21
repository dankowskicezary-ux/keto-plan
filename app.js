const mealPlan = [
  [
    ["Posilek 1", "3 jajka na twardo + ogorek bez skorki"],
    ["Posilek 2", "Skyr 250 g"],
    ["Obiad", "Kurczak 220 g + brokul albo cukinia na parze 350-400 g + 1 lyzka oliwy"],
    ["Kolacja", "Twarog poltlusty 200 g + 1 jajko"]
  ],
  [
    ["Posilek 1", "2 jajka + serek wiejski 250 g"],
    ["Posilek 2", "Kefir 300 ml"],
    ["Obiad", "Indyk 220 g + fasolka szparagowa na parze 350 g + 1 lyzka oliwy"],
    ["Kolacja", "Tunczyk w sosie wlasnym + ogorek + 1 jajko"]
  ],
  [
    ["Posilek 1", "3 jajka + skyr 150 g"],
    ["Posilek 2", "Twarog 150-200 g"],
    ["Obiad", "Losos 180 g + brokul albo cukinia na parze 350 g"],
    ["Kolacja", "Serek wiejski 250 g"]
  ],
  [
    ["Posilek 1", "Skyr 250 g + 10 g orzechow"],
    ["Posilek 2", "2 jajka na twardo"],
    ["Obiad", "Pulpeciki z indyka 250 g + cukinia z mala iloscia marchewki na parze 350 g"],
    ["Kolacja", "Twarog 200 g + ogorek"]
  ],
  [
    ["Posilek 1", "3 jajka na twardo"],
    ["Posilek 2", "Kefir 300 ml + skyr 150 g"],
    ["Obiad", "Dorsz albo mintaj 250 g + brokul/fasolka 350-400 g + 1 lyzka oliwy"],
    ["Kolacja", "Kurczak 150-180 g + salata albo ogorek"]
  ],
  [
    ["Posilek 1", "Twarog 250 g + 2-3 lyzki jogurtu naturalnego"],
    ["Posilek 2", "2 jajka na twardo"],
    ["Obiad", "Kurczak 220 g + warzywa na parze 400 g + 1 lyzka oliwy"],
    ["Kolacja", "Tunczyk + 1 jajko + ogorek"]
  ],
  [
    ["Posilek 1", "3 jajka + ogorek"],
    ["Posilek 2", "Skyr 250 g"],
    ["Obiad", "Indyk albo kurczak 220 g + brokul/fasolka/cukinia 350-400 g + oliwa"],
    ["Kolacja", "Serek wiejski 250 g albo twarog 200 g"]
  ]
];

const defaultSettings = {
  mealTimes: ["07:00", "10:30", "14:30", "18:30"],
  waterStart: "07:30",
  waterEnd: "20:30",
  notifications: false
};

let selectedDay = Number(localStorage.getItem("selectedDay") || "0");
let settings = JSON.parse(localStorage.getItem("settings") || JSON.stringify(defaultSettings));
let deferredInstallPrompt = null;

const tabs = document.querySelectorAll(".tab");
const panels = {
  today: document.getElementById("todayPanel"),
  week: document.getElementById("weekPanel"),
  water: document.getElementById("waterPanel"),
  settings: document.getElementById("settingsPanel")
};

const toast = document.getElementById("toast");

function storageKey(type, day = selectedDay) {
  const date = new Date().toISOString().slice(0, 10);
  return `${type}:${date}:day${day}`;
}

function getDoneMeals() {
  return JSON.parse(localStorage.getItem(storageKey("meals")) || "[]");
}

function setDoneMeals(done) {
  localStorage.setItem(storageKey("meals"), JSON.stringify(done));
}

function getWater() {
  return Number(localStorage.getItem(storageKey("water")) || "0");
}

function setWater(value) {
  localStorage.setItem(storageKey("water"), String(value));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function renderDayOptions() {
  const select = document.getElementById("daySelect");
  select.innerHTML = "";
  mealPlan.forEach((_, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `Dzien ${index + 1}`;
    select.append(option);
  });
  select.value = String(selectedDay);
}

function renderMeals() {
  document.getElementById("dayName").textContent = `Dzien ${selectedDay + 1}`;
  document.getElementById("daySelect").value = String(selectedDay);
  const done = getDoneMeals();
  const list = document.getElementById("mealsList");
  list.innerHTML = "";

  mealPlan[selectedDay].forEach((meal, index) => {
    const card = document.createElement("article");
    card.className = `meal ${done.includes(index) ? "done" : ""}`;
    card.innerHTML = `
      <div class="meal-head">
        <span class="time">${settings.mealTimes[index]}</span>
        <h3>${meal[0]}</h3>
        <button class="check" type="button" aria-label="Odhacz posilek">${done.includes(index) ? "OK" : ""}</button>
      </div>
      <p>${meal[1]}</p>
    `;
    card.querySelector(".check").addEventListener("click", () => toggleMeal(index));
    list.append(card);
  });

  document.getElementById("mealCount").textContent = String(done.length);
}

function toggleMeal(index) {
  const done = getDoneMeals();
  const next = done.includes(index) ? done.filter(item => item !== index) : [...done, index];
  setDoneMeals(next);
  renderMeals();
}

function renderWeek() {
  const list = document.getElementById("weekList");
  list.innerHTML = "";
  mealPlan.forEach((day, index) => {
    const card = document.createElement("article");
    card.className = "week-day";
    const items = day.map(meal => `<li>${meal[1]}</li>`).join("");
    card.innerHTML = `<h3>Dzien ${index + 1}</h3><ol>${items}</ol>`;
    list.append(card);
  });
}

function renderWater() {
  const count = getWater();
  document.getElementById("waterCount").textContent = String(count);
  const grid = document.getElementById("waterGrid");
  grid.innerHTML = "";
  for (let i = 1; i <= 10; i += 1) {
    const button = document.createElement("button");
    button.className = `water ${i <= count ? "done" : ""}`;
    button.type = "button";
    button.textContent = `${i}`;
    button.addEventListener("click", () => {
      setWater(i === count ? i - 1 : i);
      renderWater();
    });
    grid.append(button);
  }
}

function renderSettings() {
  settings.mealTimes.forEach((time, index) => {
    document.getElementById(`mealTime${index}`).value = time;
  });
  document.getElementById("waterStart").value = settings.waterStart;
  document.getElementById("waterEnd").value = settings.waterEnd;
}

function saveSettings() {
  settings = {
    ...settings,
    mealTimes: [0, 1, 2, 3].map(index => document.getElementById(`mealTime${index}`).value || defaultSettings.mealTimes[index]),
    waterStart: document.getElementById("waterStart").value || defaultSettings.waterStart,
    waterEnd: document.getElementById("waterEnd").value || defaultSettings.waterEnd
  };
  localStorage.setItem("settings", JSON.stringify(settings));
  renderMeals();
  showToast("Godziny zapisane.");
}

async function enableNotifications() {
  if (!("Notification" in window)) {
    showToast("Ta przegladarka nie obsluguje powiadomien.");
    return;
  }
  const permission = await Notification.requestPermission();
  settings.notifications = permission === "granted";
  localStorage.setItem("settings", JSON.stringify(settings));
  showToast(settings.notifications ? "Powiadomienia wlaczone." : "Powiadomienia nie sa wlaczone.");
}

function minutes(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function notificationLoop() {
  const now = new Date();
  const current = now.getHours() * 60 + now.getMinutes();
  const stamp = new Date().toISOString().slice(0, 10);

  settings.mealTimes.forEach((time, index) => {
    const key = `notify:meal:${stamp}:${index}`;
    if (settings.notifications && Notification.permission === "granted" && current === minutes(time) && !localStorage.getItem(key)) {
      new Notification("Czas na posilek", { body: mealPlan[selectedDay][index][1] });
      localStorage.setItem(key, "1");
    }
  });

  const start = minutes(settings.waterStart);
  const end = minutes(settings.waterEnd);
  const interval = Math.max(1, Math.floor((end - start) / 9));
  for (let i = 0; i < 10; i += 1) {
    const target = start + interval * i;
    const key = `notify:water:${stamp}:${i}`;
    if (settings.notifications && Notification.permission === "granted" && current === target && !localStorage.getItem(key)) {
      new Notification("Woda", { body: "Wypij 250 ml wody." });
      localStorage.setItem(key, "1");
    }
  }
}

function bindEvents() {
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(item => item.classList.remove("active"));
      tab.classList.add("active");
      Object.values(panels).forEach(panel => panel.classList.remove("active"));
      panels[tab.dataset.tab].classList.add("active");
    });
  });

  document.getElementById("daySelect").addEventListener("change", event => {
    selectedDay = Number(event.target.value);
    localStorage.setItem("selectedDay", String(selectedDay));
    renderMeals();
  });

  document.getElementById("prevDay").addEventListener("click", () => {
    selectedDay = (selectedDay + mealPlan.length - 1) % mealPlan.length;
    localStorage.setItem("selectedDay", String(selectedDay));
    renderMeals();
  });

  document.getElementById("nextDay").addEventListener("click", () => {
    selectedDay = (selectedDay + 1) % mealPlan.length;
    localStorage.setItem("selectedDay", String(selectedDay));
    renderMeals();
  });

  document.getElementById("resetWater").addEventListener("click", () => {
    setWater(0);
    renderWater();
  });

  document.getElementById("saveSettings").addEventListener("click", saveSettings);
  document.getElementById("enableNotifications").addEventListener("click", enableNotifications);

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    deferredInstallPrompt = event;
    document.getElementById("installBtn").hidden = false;
  });

  document.getElementById("installBtn").addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    document.getElementById("installBtn").hidden = true;
  });
}

function boot() {
  renderDayOptions();
  renderSettings();
  renderMeals();
  renderWeek();
  renderWater();
  bindEvents();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
  window.setInterval(notificationLoop, 30000);
}

boot();
