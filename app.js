const targets = {
  kcal: 2000,
  protein: 150,
  carbs: 60,
  fat: 115
};

const slotNames = ["Posilek 1", "Posilek 2", "Obiad", "Kolacja"];

const mealOptions = [
  [
    { name: "3 jajka + ogorek", text: "3 jajka na twardo + ogorek bez skorki", kcal: 230, protein: 19, fat: 15, carbs: 4 },
    { name: "2 jajka + serek", text: "2 jajka + serek wiejski 250 g", kcal: 330, protein: 38, fat: 15, carbs: 8 },
    { name: "Skyr + orzechy", text: "Skyr 250 g + 10 g orzechow", kcal: 220, protein: 30, fat: 6, carbs: 13 },
    { name: "Twarog jogurtowy", text: "Twarog poltlusty 250 g + 2 lyzki jogurtu", kcal: 350, protein: 45, fat: 15, carbs: 10 }
  ],
  [
    { name: "Skyr 250 g", text: "Skyr naturalny 250 g", kcal: 160, protein: 28, fat: 0, carbs: 12 },
    { name: "Kefir + skyr", text: "Kefir 300 ml + skyr 150 g", kcal: 250, protein: 27, fat: 6, carbs: 20 },
    { name: "2 jajka", text: "2 jajka na twardo", kcal: 150, protein: 13, fat: 10, carbs: 1 },
    { name: "Twarog 200 g", text: "Twarog poltlusty 200 g", kcal: 280, protein: 38, fat: 12, carbs: 7 }
  ],
  [
    { name: "Kurczak + brokul", text: "Kurczak 220 g + brokul/cukinia 350 g + 1 lyzka oliwy", kcal: 550, protein: 70, fat: 23, carbs: 16 },
    { name: "Indyk + fasolka", text: "Indyk 220 g + fasolka 350 g + 1 lyzka oliwy", kcal: 530, protein: 68, fat: 22, carbs: 18 },
    { name: "Dorsz + warzywa", text: "Dorsz/mintaj 250 g + warzywa 400 g + 1 lyzka oliwy", kcal: 430, protein: 58, fat: 16, carbs: 18 },
    { name: "Losos + brokul", text: "Losos 180 g + brokul/cukinia 350 g", kcal: 520, protein: 45, fat: 30, carbs: 14 },
    { name: "Pulpeciki indyka", text: "Pulpeciki z indyka 250 g + cukinia/marchew 350 g", kcal: 560, protein: 62, fat: 26, carbs: 18 }
  ],
  [
    { name: "Twarog + jajko", text: "Twarog 200 g + 1 jajko", kcal: 350, protein: 45, fat: 17, carbs: 7 },
    { name: "Serek wiejski", text: "Serek wiejski 250 g + ogorek", kcal: 250, protein: 30, fat: 10, carbs: 10 },
    { name: "Tunczyk + jajko", text: "Tunczyk w sosie wlasnym + 1 jajko + ogorek", kcal: 260, protein: 42, fat: 7, carbs: 3 },
    { name: "Kurczak lekki", text: "Kurczak 180 g + salata/ogorek", kcal: 300, protein: 55, fat: 6, carbs: 4 }
  ]
];

const drinks = [
  { id: "nootri", name: "Nootri", text: "1 porcja 6 g z woda, zamiast zwyklej kawy", kcal: 20, protein: 0, fat: 1.5, carbs: 1.5, caffeine: "45 mg kofeiny" },
  { id: "blackCoffee", name: "Czarna kawa", text: "Czarna kawa bez cukru", kcal: 3, protein: 0, fat: 0, carbs: 0, caffeine: "zaleznie od kawy" }
];

const shoppingPlan = [
  {
    category: "Bialko",
    items: [
      ["Jajka", "24 szt."],
      ["Kurczak albo indyk", "2 kg"],
      ["Dorsz, mintaj albo losos", "0,8-1 kg"],
      ["Tunczyk w sosie wlasnym", "3-4 puszki"]
    ]
  },
  {
    category: "Nabial",
    items: [
      ["Skyr naturalny", "5-7 szt."],
      ["Kefir naturalny", "2-3 butelki"],
      ["Twarog poltlusty", "4 kostki"],
      ["Serek wiejski", "4-5 szt."],
      ["Jogurt naturalny", "1 op."]
    ]
  },
  {
    category: "Warzywa",
    items: [
      ["Brokul mrozony", "1-1,5 kg"],
      ["Fasolka szparagowa mrozona", "1 kg"],
      ["Cukinia", "4-6 szt."],
      ["Ogorki", "5-7 szt."],
      ["Salata", "1-2 szt."],
      ["Szpinak albo mieszanka warzyw", "0,5-1 kg"],
      ["Marchew", "mala paczka"]
    ]
  },
  {
    category: "Dodatki",
    items: [
      ["Nootri", "1 op. / 30 porcji"],
      ["Oliwa", "1 butelka"],
      ["Orzechy", "mala paczka"],
      ["Awokado", "2 szt. opcjonalnie"],
      ["Woda niegazowana", "wedlug potrzeby"],
      ["Sol, lagodne ziola", "do smaku"]
    ]
  }
];

const defaultSettings = {
  mealTimes: ["07:00", "10:30", "14:30", "18:30"],
  drinkTime: "08:00",
  waterStart: "07:30",
  waterEnd: "20:30",
  notifications: false
};

const shiftPresets = {
  first: { label: "1 zmiana", mealTimes: ["05:30", "09:00", "14:30", "18:30"], drinkTime: "06:00", waterStart: "05:30", waterEnd: "20:30" },
  second: { label: "2 zmiana", mealTimes: ["09:00", "12:30", "17:00", "21:00"], drinkTime: "09:30", waterStart: "09:00", waterEnd: "22:30" },
  night: { label: "Nocka", mealTimes: ["18:00", "22:00", "02:00", "06:30"], drinkTime: "21:30", waterStart: "18:00", waterEnd: "07:00" }
};

let selectedDay = Number(localStorage.getItem("selectedDay") || "0");
let settings = JSON.parse(localStorage.getItem("settings") || JSON.stringify(defaultSettings));
settings = { ...defaultSettings, ...settings };
let deferredInstallPrompt = null;

const tabs = document.querySelectorAll(".tab");
const panels = {
  today: document.getElementById("todayPanel"),
  week: document.getElementById("weekPanel"),
  shopping: document.getElementById("shoppingPanel"),
  water: document.getElementById("waterPanel"),
  settings: document.getElementById("settingsPanel")
};

const toast = document.getElementById("toast");

function storageKey(type) {
  const date = new Date().toISOString().slice(0, 10);
  return `${type}:${date}:day${selectedDay}`;
}

function getPlan() {
  const fallback = {
    selected: [0, 0, 0, 0],
    portions: [1, 1, 1, 1],
    done: [],
    drinks: { nootri: 1, blackCoffee: 0 }
  };
  return { ...fallback, ...JSON.parse(localStorage.getItem(storageKey("plan")) || "{}") };
}

function setPlan(plan) {
  localStorage.setItem(storageKey("plan"), JSON.stringify(plan));
}

function getWater() {
  return Number(localStorage.getItem(storageKey("water")) || "0");
}

function setWater(value) {
  localStorage.setItem(storageKey("water"), String(value));
}

function getShoppingDone() {
  return JSON.parse(localStorage.getItem("shoppingDone") || "[]");
}

function setShoppingDone(done) {
  localStorage.setItem("shoppingDone", JSON.stringify(done));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function round(value) {
  return Math.round(value);
}

function macroLine(item, portion = 1) {
  return `${round(item.kcal * portion)} kcal | B ${round(item.protein * portion)} g | T ${round(item.fat * portion)} g | W ${round(item.carbs * portion)} g`;
}

function calculateTotals(plan = getPlan()) {
  const totals = { kcal: 0, protein: 0, fat: 0, carbs: 0 };
  plan.selected.forEach((optionIndex, slotIndex) => {
    const item = mealOptions[slotIndex][optionIndex];
    const portion = Number(plan.portions[slotIndex] || 1);
    totals.kcal += item.kcal * portion;
    totals.protein += item.protein * portion;
    totals.fat += item.fat * portion;
    totals.carbs += item.carbs * portion;
  });
  drinks.forEach(drink => {
    const count = Number(plan.drinks?.[drink.id] || 0);
    totals.kcal += drink.kcal * count;
    totals.protein += drink.protein * count;
    totals.fat += drink.fat * count;
    totals.carbs += drink.carbs * count;
  });
  return totals;
}

function renderDayOptions() {
  const select = document.getElementById("daySelect");
  select.innerHTML = "";
  for (let index = 0; index < 7; index += 1) {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `Dzien ${index + 1}`;
    select.append(option);
  }
  select.value = String(selectedDay);
}

function renderSummary() {
  const plan = getPlan();
  const totals = calculateTotals(plan);
  const remaining = targets.kcal - totals.kcal;
  const doneMeals = plan.done.length;
  const kcalText = `${round(totals.kcal)}/${targets.kcal}`;

  document.getElementById("dayName").textContent = `Dzien ${selectedDay + 1}`;
  document.getElementById("mealCount").textContent = String(doneMeals);
  document.getElementById("kcalCount").textContent = kcalText;
  document.getElementById("todayKcal").textContent = `${round(totals.kcal)} kcal`;
  document.getElementById("todayProtein").textContent = `${round(totals.protein)} g`;
  document.getElementById("todayFat").textContent = `${round(totals.fat)} g`;
  document.getElementById("todayCarbs").textContent = `${round(totals.carbs)} g`;
  document.getElementById("remainingKcal").textContent = remaining >= 0 ? `${round(remaining)} kcal zostalo` : `${Math.abs(round(remaining))} kcal ponad plan`;
}

function renderMeals() {
  const plan = getPlan();
  const list = document.getElementById("mealsList");
  list.innerHTML = "";
  document.getElementById("daySelect").value = String(selectedDay);

  mealOptions.forEach((options, slotIndex) => {
    const selected = Number(plan.selected[slotIndex] || 0);
    const item = options[selected];
    const portion = Number(plan.portions[slotIndex] || 1);
    const isDone = plan.done.includes(slotIndex);
    const maxPortion = suggestMaxPortion(slotIndex, plan);

    const card = document.createElement("article");
    card.className = `meal ${isDone ? "done" : ""}`;
    card.innerHTML = `
      <div class="meal-head">
        <span class="time">${settings.mealTimes[slotIndex]}</span>
        <h3>${slotNames[slotIndex]}</h3>
        <button class="check" type="button" aria-label="Odhacz posilek">${isDone ? "OK" : ""}</button>
      </div>
      <label class="choice-label">Co jesz?
        <select class="meal-choice" data-slot="${slotIndex}">
          ${options.map((option, optionIndex) => `<option value="${optionIndex}" ${optionIndex === selected ? "selected" : ""}>${option.name}</option>`).join("")}
        </select>
      </label>
      <div class="portion-row">
        <button type="button" data-step="-0.5" data-slot="${slotIndex}">-</button>
        <strong>${portion}x porcji</strong>
        <button type="button" data-step="0.5" data-slot="${slotIndex}">+</button>
      </div>
      <p>${item.text}</p>
      <p class="macro">${macroLine(item, portion)}</p>
      <p class="hint">Przy obecnym limicie mozesz dac do ok. ${maxPortion}x tej porcji.</p>
    `;
    card.querySelector(".check").addEventListener("click", () => toggleMeal(slotIndex));
    card.querySelector(".meal-choice").addEventListener("change", event => updateMealChoice(slotIndex, Number(event.target.value)));
    card.querySelectorAll("button[data-step]").forEach(button => {
      button.addEventListener("click", () => changePortion(slotIndex, Number(button.dataset.step)));
    });
    list.append(card);
  });

  renderDrinks();
  renderSummary();
}

function suggestMaxPortion(slotIndex, plan) {
  const currentPortion = Number(plan.portions[slotIndex] || 1);
  const selected = Number(plan.selected[slotIndex] || 0);
  const item = mealOptions[slotIndex][selected];
  const totals = calculateTotals(plan);
  const kcalWithoutThis = totals.kcal - item.kcal * currentPortion;
  const room = Math.max(0, targets.kcal - kcalWithoutThis);
  return Math.max(0.5, Math.floor((room / item.kcal) * 2) / 2).toFixed(1);
}

function updateMealChoice(slotIndex, optionIndex) {
  const plan = getPlan();
  plan.selected[slotIndex] = optionIndex;
  setPlan(plan);
  renderMeals();
}

function changePortion(slotIndex, step) {
  const plan = getPlan();
  const current = Number(plan.portions[slotIndex] || 1);
  plan.portions[slotIndex] = Math.min(2, Math.max(0.5, current + step));
  setPlan(plan);
  renderMeals();
}

function toggleMeal(index) {
  const plan = getPlan();
  plan.done = plan.done.includes(index) ? plan.done.filter(item => item !== index) : [...plan.done, index];
  setPlan(plan);
  renderMeals();
}

function renderDrinks() {
  const plan = getPlan();
  const holder = document.getElementById("drinkList");
  holder.innerHTML = "";
  drinks.forEach(drink => {
    const count = Number(plan.drinks?.[drink.id] || 0);
    const card = document.createElement("article");
    card.className = "drink-card";
    card.innerHTML = `
      <div>
        <h3>${drink.name}</h3>
        <p>${drink.text}</p>
        <p class="macro">${macroLine(drink, count)}${drink.caffeine ? ` | ${drink.caffeine}` : ""}</p>
      </div>
      <div class="drink-stepper">
        <button type="button" data-drink="${drink.id}" data-step="-1">-</button>
        <strong>${count}</strong>
        <button type="button" data-drink="${drink.id}" data-step="1">+</button>
      </div>
    `;
    card.querySelectorAll("button[data-drink]").forEach(button => {
      button.addEventListener("click", () => changeDrink(button.dataset.drink, Number(button.dataset.step)));
    });
    holder.append(card);
  });
}

function changeDrink(id, step) {
  const plan = getPlan();
  plan.drinks = { ...plan.drinks };
  plan.drinks[id] = Math.min(4, Math.max(0, Number(plan.drinks[id] || 0) + step));
  setPlan(plan);
  renderMeals();
}

function renderWeek() {
  const list = document.getElementById("weekList");
  list.innerHTML = "";
  mealOptions.forEach((options, index) => {
    const card = document.createElement("article");
    card.className = "week-day";
    const items = options.map(option => `<li>${option.name}: ${option.text} <span>${macroLine(option)}</span></li>`).join("");
    card.innerHTML = `<h3>${slotNames[index]}</h3><ol>${items}</ol>`;
    list.append(card);
  });
}

function renderShopping() {
  const list = document.getElementById("shoppingList");
  const done = getShoppingDone();
  list.innerHTML = "";

  shoppingPlan.forEach((group, groupIndex) => {
    const card = document.createElement("article");
    card.className = "shopping-category";
    const rows = group.items.map((item, itemIndex) => {
      const key = `${groupIndex}-${itemIndex}`;
      const isDone = done.includes(key);
      return `
        <div class="shopping-item ${isDone ? "done" : ""}">
          <button type="button" data-key="${key}" aria-label="Odhacz produkt">${isDone ? "OK" : ""}</button>
          <span>${item[0]}</span>
          <strong>${item[1]}</strong>
        </div>
      `;
    }).join("");
    card.innerHTML = `<h3>${group.category}</h3>${rows}`;
    card.querySelectorAll("button[data-key]").forEach(button => {
      button.addEventListener("click", () => toggleShopping(button.dataset.key));
    });
    list.append(card);
  });
}

function toggleShopping(key) {
  const done = getShoppingDone();
  const next = done.includes(key) ? done.filter(item => item !== key) : [...done, key];
  setShoppingDone(next);
  renderShopping();
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
  document.getElementById("drinkTime").value = settings.drinkTime;
  document.getElementById("waterStart").value = settings.waterStart;
  document.getElementById("waterEnd").value = settings.waterEnd;
}

function saveSettings() {
  settings = {
    ...settings,
    mealTimes: [0, 1, 2, 3].map(index => document.getElementById(`mealTime${index}`).value || defaultSettings.mealTimes[index]),
    drinkTime: document.getElementById("drinkTime").value || defaultSettings.drinkTime,
    waterStart: document.getElementById("waterStart").value || defaultSettings.waterStart,
    waterEnd: document.getElementById("waterEnd").value || defaultSettings.waterEnd
  };
  localStorage.setItem("settings", JSON.stringify(settings));
  renderMeals();
  showToast("Godziny zapisane.");
}

function applyShiftPreset(presetId) {
  const preset = shiftPresets[presetId];
  settings = { ...settings, ...preset };
  localStorage.setItem("settings", JSON.stringify(settings));
  renderSettings();
  renderMeals();
  showToast(`Ustawiono: ${preset.label}.`);
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

function isCurrentMinute(target) {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes() === minutes(target);
}

function notificationLoop() {
  const stamp = new Date().toISOString().slice(0, 10);
  const plan = getPlan();

  settings.mealTimes.forEach((time, index) => {
    const key = `notify:meal:${stamp}:${index}`;
    if (settings.notifications && Notification.permission === "granted" && isCurrentMinute(time) && !localStorage.getItem(key)) {
      const item = mealOptions[index][plan.selected[index] || 0];
      new Notification("Czas na posilek", { body: item.text });
      localStorage.setItem(key, "1");
    }
  });

  const drinkKey = `notify:drink:${stamp}`;
  if (settings.notifications && Notification.permission === "granted" && isCurrentMinute(settings.drinkTime) && !localStorage.getItem(drinkKey)) {
    new Notification("Nootri", { body: "Jesli pijesz dzisiaj kawe, wypij porcje Nootri z woda." });
    localStorage.setItem(drinkKey, "1");
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
    selectedDay = (selectedDay + 6) % 7;
    localStorage.setItem("selectedDay", String(selectedDay));
    renderMeals();
  });

  document.getElementById("nextDay").addEventListener("click", () => {
    selectedDay = (selectedDay + 1) % 7;
    localStorage.setItem("selectedDay", String(selectedDay));
    renderMeals();
  });

  document.getElementById("resetWater").addEventListener("click", () => {
    setWater(0);
    renderWater();
  });

  document.getElementById("resetShopping").addEventListener("click", () => {
    setShoppingDone([]);
    renderShopping();
  });

  document.getElementById("resetDay").addEventListener("click", () => {
    localStorage.removeItem(storageKey("plan"));
    renderMeals();
    showToast("Dzien zresetowany.");
  });

  document.querySelectorAll("button[data-preset]").forEach(button => {
    button.addEventListener("click", () => applyShiftPreset(button.dataset.preset));
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
  renderShopping();
  renderWater();
  bindEvents();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
  window.setInterval(notificationLoop, 30000);
}

boot();
