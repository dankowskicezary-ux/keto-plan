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
    { name: "Skyr + orzechy", text: "Skyr 170 g + 10 g orzechow", kcal: 170, protein: 23, fat: 6, carbs: 9 },
    { name: "Twarog jogurtowy", text: "Twarog poltlusty 180 g + 2 lyzki jogurtu", kcal: 270, protein: 34, fat: 12, carbs: 8 },
    { name: "Omlet prosty", text: "Omlet z 3 jajek bez maki + szpinak/cukinia", kcal: 280, protein: 24, fat: 19, carbs: 5 },
    { name: "Jajka + awokado", text: "2 jajka + pol awokado + ogorek", kcal: 330, protein: 16, fat: 27, carbs: 8 },
    { name: "Kefir + jajka", text: "Kefir 200 ml + 2 jajka", kcal: 240, protein: 20, fat: 14, carbs: 10 },
    { name: "Serek + losos", text: "Serek wiejski 150 g + losos wedzony 80 g", kcal: 300, protein: 34, fat: 16, carbs: 5 },
    { name: "Szynka + jajka", text: "Chuda szynka 100 g + 2 jajka + ogorek", kcal: 280, protein: 35, fat: 13, carbs: 3 },
    { name: "Pasta jajeczna", text: "Pasta z 3 jajek + 1 lyzka jogurtu + ogorek, bez pieczywa", kcal: 300, protein: 23, fat: 20, carbs: 5 },
    { name: "Tunczyk z jajkiem", text: "Tunczyk 100 g + 2 jajka + ogorek", kcal: 300, protein: 43, fat: 12, carbs: 3 },
    { name: "Parowki dobrej jakosci", text: "2 parowki min. 90% miesa + ogorek, okazjonalnie", kcal: 330, protein: 22, fat: 26, carbs: 5 },
    { name: "Sledz lagodny", text: "Sledz 120 g + jajko + ogorek, bez cebuli", kcal: 360, protein: 28, fat: 25, carbs: 4 },
    { name: "Jajka na miekko", text: "3 jajka na miekko + cukinia na parze", kcal: 260, protein: 21, fat: 16, carbs: 8 }
  ],
  [
    { name: "Skyr 170 g", text: "Skyr naturalny 170 g", kcal: 110, protein: 19, fat: 0, carbs: 8 },
    { name: "Kefir + skyr", text: "Kefir 200 ml + skyr 100 g", kcal: 170, protein: 18, fat: 4, carbs: 13 },
    { name: "2 jajka", text: "2 jajka na twardo", kcal: 150, protein: 13, fat: 10, carbs: 1 },
    { name: "Twarog 150 g", text: "Twarog poltlusty 150 g", kcal: 210, protein: 29, fat: 9, carbs: 5 },
    { name: "Jogurt grecki", text: "Jogurt grecki naturalny 150 g", kcal: 165, protein: 14, fat: 9, carbs: 7 },
    { name: "Orzechy + skyr", text: "Skyr 120 g + orzechy 15 g", kcal: 180, protein: 17, fat: 9, carbs: 7 },
    { name: "Tunczyk mini", text: "Pol puszki tunczyka + ogorek", kcal: 120, protein: 25, fat: 1, carbs: 2 },
    { name: "Mozzarella lekka", text: "Mozzarella light 125 g + ogorek/salata", kcal: 210, protein: 25, fat: 10, carbs: 3 },
    { name: "U kogos: wedlina", text: "Wedlina/chude mieso 120 g + warzywa bez pieczywa", kcal: 220, protein: 35, fat: 8, carbs: 4 },
    { name: "Bialy ser na slono", text: "Twarog 150 g + jogurt + ogorek, bez cebuli", kcal: 230, protein: 31, fat: 9, carbs: 7 },
    { name: "Jajko + mozzarella", text: "2 jajka + mozzarella light 80 g", kcal: 300, protein: 31, fat: 18, carbs: 3 },
    { name: "Kabanosy awaryjne", text: "Kabanosy 60 g + ogorek, raczej awaryjnie", kcal: 290, protein: 18, fat: 23, carbs: 3 },
    { name: "Serek proteinowy", text: "Serek/skyr proteinowy naturalny 150 g", kcal: 130, protein: 21, fat: 2, carbs: 6 },
    { name: "Bulion + jajko", text: "Bulion 300 ml + 2 jajka, lekko dla zoladka", kcal: 210, protein: 18, fat: 13, carbs: 3 }
  ],
  [
    { name: "Kurczak + brokul", text: "Kurczak 220 g + brokul/cukinia 350 g + 1 lyzka oliwy", kcal: 550, protein: 70, fat: 23, carbs: 16 },
    { name: "Indyk + fasolka", text: "Indyk 220 g + fasolka 350 g + 1 lyzka oliwy", kcal: 530, protein: 68, fat: 22, carbs: 18 },
    { name: "Dorsz + warzywa", text: "Dorsz/mintaj 250 g + warzywa 400 g + 1 lyzka oliwy", kcal: 430, protein: 58, fat: 16, carbs: 18 },
    { name: "Losos + brokul", text: "Losos 180 g + brokul/cukinia 350 g", kcal: 520, protein: 45, fat: 30, carbs: 14 },
    { name: "Pulpeciki indyka", text: "Pulpeciki z indyka 250 g + cukinia/marchew 350 g", kcal: 560, protein: 62, fat: 26, carbs: 18 },
    { name: "Rosol bez makaronu", text: "Rosol 400 ml + mieso z kurczaka 150 g + warzywa", kcal: 300, protein: 35, fat: 14, carbs: 8 },
    { name: "Rosol + zwykly makaron", text: "Rosol 400 ml + kurczak 120 g + zwykly makaron jajeczny gotowany 40 g", kcal: 360, protein: 33, fat: 15, carbs: 24 },
    { name: "Zupa krem", text: "Krem z brokula/cukinii 400 ml bez maki + kurczak 150 g", kcal: 380, protein: 42, fat: 18, carbs: 15 },
    { name: "Gulasz bez kaszy", text: "Gulasz miesny 250 g + ogorek/salata, bez ziemniakow i kaszy", kcal: 520, protein: 48, fat: 32, carbs: 12 },
    { name: "Kotlet bez panierki", text: "Mieso pieczone/grillowane 220 g + surowka bez cukru", kcal: 500, protein: 58, fat: 26, carbs: 10 },
    { name: "Schabowy panierowany", text: "1 schabowy panierowany + surowka, bez ziemniakow", kcal: 620, protein: 45, fat: 38, carbs: 24 },
    { name: "Mielony + surowka", text: "Kotlet mielony 180 g + surowka, bez ziemniakow", kcal: 520, protein: 35, fat: 36, carbs: 16 },
    { name: "Karkowka + salata", text: "Karkowka pieczona 180 g + salata/ogorki", kcal: 560, protein: 38, fat: 44, carbs: 5 },
    { name: "Salatka z kurczakiem", text: "Salatka: kurczak 180 g + warzywa + sos jogurtowy", kcal: 420, protein: 55, fat: 16, carbs: 12 },
    { name: "Jajka sadzone obiad", text: "3 jajka + warzywa na parze 350 g", kcal: 360, protein: 25, fat: 21, carbs: 18 },
    { name: "Zupa pomidorowa mala", text: "Pomidorowa 300 ml + mieso, bez ryzu lub z minimalnym makaronem", kcal: 260, protein: 20, fat: 12, carbs: 20 },
    { name: "Pomidorowa + omlet", text: "Pomidorowa lagodna 350 ml + paski z cienkiego omletu z 1 jajka", kcal: 310, protein: 24, fat: 18, carbs: 16 },
    { name: "Pomidorowa konjac", text: "Pomidorowa lagodna 350 ml + makaron konjac/shirataki 100 g + kurczak", kcal: 280, protein: 30, fat: 13, carbs: 14 },
    { name: "Pomidorowa bez makaronu", text: "Pomidorowa lagodna 400 ml + kurczak 150 g, bez makaronu", kcal: 300, protein: 38, fat: 12, carbs: 14 },
    { name: "Ogorkowa keto", text: "Ogorkowa 400 ml bez ziemniakow + mieso 120 g; uwaga na kwas", kcal: 320, protein: 30, fat: 18, carbs: 12 },
    { name: "Kalafiorowa", text: "Zupa kalafiorowa 450 ml + kurczak/indyk, bez maki", kcal: 330, protein: 35, fat: 16, carbs: 15 },
    { name: "Jarzynowa bez ziemniakow", text: "Jarzynowa 450 ml + mieso, bez ziemniakow i zasmażki", kcal: 320, protein: 30, fat: 15, carbs: 18 },
    { name: "Barszcz czysty + jajko", text: "Barszcz czysty 300 ml + 2 jajka, bez uszek", kcal: 260, protein: 18, fat: 12, carbs: 16 },
    { name: "Zurek bez chleba", text: "Zurek 350 ml + jajko + kielbasa 60 g, bez ziemniakow", kcal: 430, protein: 25, fat: 30, carbs: 18 },
    { name: "Flaki", text: "Flaki 400 ml bez maki i pieczywa", kcal: 330, protein: 32, fat: 18, carbs: 10 },
    { name: "Rybna", text: "Zupa rybna 400 ml bez ziemniakow i maki", kcal: 340, protein: 38, fat: 16, carbs: 12 },
    { name: "Krem dyniowy maly", text: "Krem z dyni 300 ml + kurczak; wiecej wegli, jedz mala porcje", kcal: 330, protein: 28, fat: 14, carbs: 25 },
    { name: "Leczo bez cukru", text: "Leczo 350 g z kielbasa/kurczakiem, bez pieczywa", kcal: 480, protein: 32, fat: 32, carbs: 18 },
    { name: "Bigos keto", text: "Bigos 350 g bez cukru i bez pieczywa", kcal: 450, protein: 30, fat: 32, carbs: 14 },
    { name: "Golabki bez ryzu", text: "Golabki z miesem i kalafiorem zamiast ryzu, sos lagodny", kcal: 430, protein: 36, fat: 25, carbs: 16 },
    { name: "Golabek zwykly", text: "1 golabek z ryzem, bez pieczywa; licz jako wyzsze wegle", kcal: 420, protein: 24, fat: 22, carbs: 32 },
    { name: "Kurczak pieczony", text: "Udko/pieczen z kurczaka 220 g + surowka bez cukru", kcal: 520, protein: 48, fat: 34, carbs: 8 },
    { name: "Roladki drobiowe", text: "Roladki z indyka/kurczaka 220 g + warzywa", kcal: 460, protein: 58, fat: 20, carbs: 10 },
    { name: "Wolowina duszona", text: "Wolowina duszona 200 g + ogorek/salata, bez kaszy", kcal: 560, protein: 50, fat: 36, carbs: 8 },
    { name: "Wieprzowina pieczona", text: "Schab/karkowka pieczona 200 g + warzywa, bez ziemniakow", kcal: 560, protein: 45, fat: 38, carbs: 8 },
    { name: "Krewetki + warzywa", text: "Krewetki 220 g + cukinia/szpinak, 1 lyzka oliwy", kcal: 390, protein: 48, fat: 18, carbs: 12 },
    { name: "Tofu + warzywa", text: "Tofu 200 g + warzywa na parze, delikatne przyprawy", kcal: 430, protein: 32, fat: 26, carbs: 16 },
    { name: "Paski z omletu keto", text: "Paski z omletu 2 jajka + kurczak + lagodny sos jogurtowy", kcal: 470, protein: 50, fat: 25, carbs: 9 },
    { name: "Makaron konjac z kurczakiem", text: "Konjac 150 g + kurczak 180 g + cukinia; testuj tolerancje", kcal: 380, protein: 55, fat: 14, carbs: 10 },
    { name: "Zwykly makaron jajeczny", text: "Makaron jajeczny gotowany 60 g + mieso; nie keto, licz wegle", kcal: 460, protein: 35, fat: 18, carbs: 34 },
    { name: "Pizza keto patelnia", text: "Spod jajeczno-serowy + szynka + pieczarki, bez ostrego sosu", kcal: 620, protein: 48, fat: 42, carbs: 10 },
    { name: "Burger bez bulki", text: "Kotlet wolowy/drobiowy + salata + ogorek, bez bulki i frytek", kcal: 520, protein: 42, fat: 36, carbs: 8 }
  ],
  [
    { name: "Twarog + jajko", text: "Twarog 150 g + 1 jajko", kcal: 280, protein: 36, fat: 14, carbs: 6 },
    { name: "Serek wiejski", text: "Serek wiejski 180 g + ogorek", kcal: 190, protein: 22, fat: 7, carbs: 7 },
    { name: "Tunczyk + jajko", text: "Tunczyk w sosie wlasnym + 1 jajko + ogorek", kcal: 260, protein: 42, fat: 7, carbs: 3 },
    { name: "Kurczak lekki", text: "Kurczak 180 g + salata/ogorek", kcal: 300, protein: 55, fat: 6, carbs: 4 },
    { name: "Rosol lekki", text: "Rosol 300 ml + mieso 100 g, bez makaronu", kcal: 220, protein: 25, fat: 11, carbs: 5 },
    { name: "Jajka + skyr", text: "2 jajka + skyr 100 g", kcal: 215, protein: 24, fat: 10, carbs: 5 },
    { name: "Ryba lekka", text: "Dorsz/mintaj 200 g + ogorek/salata", kcal: 230, protein: 45, fat: 3, carbs: 4 },
    { name: "Wedlina awaryjna", text: "Chuda wedlina 150 g + ogorki kiszone, bez pieczywa", kcal: 260, protein: 42, fat: 9, carbs: 4 },
    { name: "Sałatka grecka", text: "Salata, ogorek, feta 80 g, oliwki, 1 lyzka oliwy", kcal: 360, protein: 16, fat: 30, carbs: 10 },
    { name: "Kielbasa awaryjna", text: "Kielbasa 120 g + ogorek/salata, raczej okazjonalnie", kcal: 420, protein: 22, fat: 34, carbs: 6 },
    { name: "Pomidorowa lekka", text: "Pomidorowa 250 ml bez makaronu + jajko; tylko jesli nie nasila zgagi", kcal: 210, protein: 16, fat: 11, carbs: 12 },
    { name: "Zupa krem lekka", text: "Krem brokul/cukinia 300 ml + skyr lyzka, bez maki", kcal: 220, protein: 18, fat: 10, carbs: 14 },
    { name: "Jajeczne kluski", text: "Kluski z cienkiego omletu 2 jajka + bulion", kcal: 250, protein: 18, fat: 16, carbs: 5 },
    { name: "Galaretka drobiowa", text: "Galaretka z kurczaka 250 g + ogorek", kcal: 260, protein: 35, fat: 12, carbs: 4 },
    { name: "Frittata", text: "Frittata 3 jajka + szpinak/cukinia", kcal: 330, protein: 26, fat: 22, carbs: 8 },
    { name: "Pasta tunczykowa", text: "Tunczyk + jajko + jogurt, jedzone lyzka lub z ogorkiem", kcal: 310, protein: 45, fat: 11, carbs: 4 },
    { name: "Caprese light", text: "Mozzarella light + ogorek/salata; pomidora unikaj przy zgadze", kcal: 280, protein: 30, fat: 15, carbs: 6 },
    { name: "Resztki obiadu", text: "Mieso/ryba 150 g + warzywa, bez dodatkow skrobiowych", kcal: 330, protein: 42, fat: 15, carbs: 8 }
  ]
];

const extraMealOptions = [
  { name: "Kantyna: kurczak bez dodatku", text: "Kurczak pieczony/grillowany 200 g + surowka, bez ziemniakow/ryzu", kcal: 460, protein: 55, fat: 22, carbs: 8 },
  { name: "Kantyna: ryba bez panierki", text: "Ryba pieczona/gotowana 220 g + warzywa, bez ziemniakow", kcal: 390, protein: 48, fat: 18, carbs: 10 },
  { name: "Kantyna: ryba panierowana", text: "Ryba panierowana 180 g + surowka, bez ziemniakow", kcal: 560, protein: 36, fat: 34, carbs: 26 },
  { name: "Kantyna: mieso w sosie", text: "Mieso w sosie 220 g + surowka, bez kaszy/ryzu; sos moze miec make", kcal: 560, protein: 45, fat: 34, carbs: 18 },
  { name: "Kantyna: pieczen", text: "Pieczen wieprzowa/wolowa 200 g + warzywa, bez dodatkow skrobiowych", kcal: 560, protein: 45, fat: 38, carbs: 8 },
  { name: "Kantyna: zupa + mieso", text: "Zupa 350 ml + dodatkowe mieso/jajko, bez pieczywa", kcal: 360, protein: 30, fat: 18, carbs: 18 },
  { name: "Kantyna: salatka z miesem", text: "Salatka z kurczakiem/tunczykiem/jajkiem, sos osobno", kcal: 420, protein: 42, fat: 22, carbs: 12 },
  { name: "Kantyna: jajka", text: "3 jajka + warzywa/surowka, bez pieczywa", kcal: 330, protein: 24, fat: 22, carbs: 8 },
  { name: "Kantyna: ser + wedlina", text: "Ser/wedlina 150 g + warzywa, bez pieczywa", kcal: 380, protein: 35, fat: 25, carbs: 5 },
  { name: "Kantyna: leczo", text: "Leczo z miesem 350 g, bez pieczywa; uwaga na tluszcz", kcal: 520, protein: 32, fat: 36, carbs: 18 },
  { name: "Kantyna: fasolka po bretonsku", text: "Fasolka 300 g, awaryjnie; duzo wegli, reszta dnia bardzo keto", kcal: 520, protein: 28, fat: 24, carbs: 45 },
  { name: "Kantyna: pierogi 4 szt.", text: "Pierogi 4 szt. jako awaryjny wybor, nie keto", kcal: 430, protein: 16, fat: 16, carbs: 58 },
  { name: "Kantyna: ziemniaki mala porcja", text: "Mieso + surowka + ziemniaki 100 g; licz jako wyzsze wegle", kcal: 620, protein: 45, fat: 30, carbs: 38 },
  { name: "Kantyna: kasza mala porcja", text: "Mieso + surowka + kasza 80 g gotowana; licz wegle", kcal: 590, protein: 42, fat: 28, carbs: 36 },
  { name: "Kantyna: ryz mala porcja", text: "Mieso + warzywa + ryz 80 g gotowany; licz wegle", kcal: 590, protein: 42, fat: 25, carbs: 42 },
  { name: "Kantyna: omlet", text: "Omlet/jajecznica z 3 jaj, bez pieczywa", kcal: 320, protein: 24, fat: 22, carbs: 4 },
  { name: "Kantyna: twarog mala porcja", text: "Twarog/serek 150 g + warzywa", kcal: 230, protein: 30, fat: 9, carbs: 7 },
  { name: "Kantyna: rosol czysty", text: "Rosol 400 ml + mieso, bez makaronu", kcal: 280, protein: 30, fat: 14, carbs: 6 },
  { name: "Kantyna: krupnik mala porcja", text: "Krupnik 300 ml; ma kasze/ziemniaki, licz wegle", kcal: 260, protein: 15, fat: 10, carbs: 28 },
  { name: "Kantyna: pomidorowa mala", text: "Pomidorowa 300 ml, mala porcja; uwaga przy zgadze", kcal: 240, protein: 14, fat: 10, carbs: 22 },
  { name: "Kantyna: barszcz + jajka", text: "Barszcz 300 ml + 2 jajka, bez uszek/krokieta", kcal: 260, protein: 18, fat: 12, carbs: 16 },
  { name: "Kantyna: bigos", text: "Bigos 300 g, bez pieczywa; raczej okazjonalnie", kcal: 420, protein: 28, fat: 30, carbs: 12 },
  { name: "Kantyna: golonka nie", text: "Golonka/tluste mieso - mala porcja, moze nasilac zgage", kcal: 700, protein: 45, fat: 55, carbs: 4 },
  { name: "Awaryjnie: sklep jajka", text: "2 jajka gotowane + serek wiejski 150 g", kcal: 320, protein: 34, fat: 17, carbs: 7 },
  { name: "Awaryjnie: sklep tunczyk", text: "Tunczyk + ogorek + skyr 100 g", kcal: 250, protein: 45, fat: 2, carbs: 7 },
  { name: "Awaryjnie: sklep kabanosy", text: "Kabanosy 60 g + skyr 100 g; okazjonalnie", kcal: 360, protein: 32, fat: 23, carbs: 8 },
  { name: "Awaryjnie: hot bar mieso", text: "Mieso/kurczak z baru 200 g + salatka, bez frytek", kcal: 520, protein: 45, fat: 32, carbs: 12 },
  { name: "Dom: jajecznica lekka", text: "Jajecznica z 2 jaj + bialko/jogurt + cukinia", kcal: 260, protein: 24, fat: 15, carbs: 7 },
  { name: "Dom: miska bialka", text: "Kurczak/indyk 150 g + jajko + ogorek", kcal: 330, protein: 50, fat: 12, carbs: 4 },
  { name: "Dom: wolnowar", text: "Duszony indyk/wolowina 220 g + warzywa", kcal: 500, protein: 55, fat: 26, carbs: 12 }
];

function buildCatalog() {
  const seen = new Set();
  return mealOptions
    .flat()
    .concat(extraMealOptions)
    .filter(item => {
      const key = item.name.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => a.name.localeCompare(b.name, "pl"));
}

const foodCatalog = buildCatalog();

function getCustomMeals() {
  return JSON.parse(localStorage.getItem("customMeals") || "[]");
}

function setCustomMeals(meals) {
  localStorage.setItem("customMeals", JSON.stringify(meals));
}

function getMealOptions() {
  return foodCatalog.concat(getCustomMeals());
}

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

function optionMatches(option, query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return true;
  return `${option.name} ${option.text}`.toLowerCase().includes(normalized);
}

function optionMarkup(options, selected, query = "") {
  const matched = options
    .map((option, optionIndex) => ({ option, optionIndex }))
    .filter(item => optionMatches(item.option, query));
  const visible = matched.length ? matched : options.map((option, optionIndex) => ({ option, optionIndex }));
  return visible.map(({ option, optionIndex }) => (
    `<option value="${optionIndex}" ${optionIndex === selected ? "selected" : ""}>${option.name}</option>`
  )).join("");
}

function calculateTotals(plan = getPlan()) {
  const totals = { kcal: 0, protein: 0, fat: 0, carbs: 0 };
  plan.selected.forEach((optionIndex, slotIndex) => {
    const item = getMealOptions(slotIndex)[optionIndex] || getMealOptions(slotIndex)[0];
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

  slotNames.forEach((_, slotIndex) => {
    const options = getMealOptions(slotIndex);
    const selected = Number(plan.selected[slotIndex] || 0);
    const item = options[selected] || options[0];
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
        <input class="meal-search" type="search" data-slot="${slotIndex}" placeholder="Szukaj, np. p, zupa, kurczak">
        <select class="meal-choice" data-slot="${slotIndex}">
          ${optionMarkup(options, selected)}
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
    card.querySelector(".meal-search").addEventListener("input", event => filterMealOptions(slotIndex, Number(plan.selected[slotIndex] || 0), event.target.value, card));
    card.querySelectorAll("button[data-step]").forEach(button => {
      button.addEventListener("click", () => changePortion(slotIndex, Number(button.dataset.step)));
    });
    list.append(card);
  });

  renderDrinks();
  renderSummary();
}

function addCustomMeal(meal) {
  const customMeals = getCustomMeals();
  const nextMeal = {
    name: meal.name || "Wlasne danie",
    text: meal.text || meal.name || "Wlasne danie",
    kcal: Number(meal.kcal || 0),
    protein: Number(meal.protein || 0),
    fat: Number(meal.fat || 0),
    carbs: Number(meal.carbs || 0)
  };
  if (!nextMeal.kcal) {
    showToast("Wpisz przynajmniej kalorie.");
    return;
  }
  setCustomMeals([nextMeal, ...customMeals].slice(0, 40));
  clearCustomForm();
  renderMeals();
  renderWeek();
  showToast("Dodano wlasne danie.");
}

function readCustomForm() {
  return {
    name: document.getElementById("customName").value.trim(),
    kcal: document.getElementById("customKcal").value,
    protein: document.getElementById("customProtein").value,
    fat: document.getElementById("customFat").value,
    carbs: document.getElementById("customCarbs").value
  };
}

function clearCustomForm() {
  ["customName", "customKcal", "customProtein", "customFat", "customCarbs"].forEach(id => {
    document.getElementById(id).value = "";
  });
}

function filterMealOptions(slotIndex, selected, query, card) {
  const select = card.querySelector(".meal-choice");
  select.innerHTML = optionMarkup(getMealOptions(slotIndex), selected, query);
  if (!select.querySelector(`option[value="${selected}"]`)) {
    select.selectedIndex = 0;
  }
}

function suggestMaxPortion(slotIndex, plan) {
  const currentPortion = Number(plan.portions[slotIndex] || 1);
  const selected = Number(plan.selected[slotIndex] || 0);
  const item = getMealOptions(slotIndex)[selected] || getMealOptions(slotIndex)[0];
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
  slotNames.forEach((slotName, index) => {
    const options = getMealOptions(index);
    const card = document.createElement("article");
    card.className = "week-day";
    const items = options.map(option => `<li>${option.name}: ${option.text} <span>${macroLine(option)}</span></li>`).join("");
    card.innerHTML = `<h3>${slotName}: wybieraj dowolnie</h3><ol>${items}</ol>`;
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
      const options = getMealOptions(index);
      const item = options[plan.selected[index] || 0] || options[0];
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

  document.getElementById("addCustomMeal").addEventListener("click", () => addCustomMeal(readCustomForm()));

  document.querySelectorAll("button[data-estimate]").forEach(button => {
    button.addEventListener("click", () => {
      const estimate = {
        small: { name: "Wlasne male danie", kcal: 300, protein: 25, fat: 15, carbs: 15 },
        medium: { name: "Wlasne srednie danie", kcal: 500, protein: 35, fat: 25, carbs: 25 },
        large: { name: "Wlasne duze danie", kcal: 750, protein: 45, fat: 40, carbs: 45 },
        carbs: { name: "Wlasne z weglami", kcal: 600, protein: 30, fat: 20, carbs: 65 }
      }[button.dataset.estimate];
      addCustomMeal(estimate);
    });
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
