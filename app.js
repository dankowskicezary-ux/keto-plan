const defaultTargets = {
  kcal: 2000,
  protein: 150,
  carbs: 60,
  fat: 115
};

const slotNames = ["Posilek 1", "Posilek 2", "Obiad", "Kolacja"];
const dayNames = ["Poniedzialek", "Wtorek", "Sroda", "Czwartek", "Piatek", "Sobota", "Niedziela"];
const dayShortNames = ["Pon", "Wt", "Sr", "Czw", "Pt", "Sob", "Niedz"];
const CANTEEN_MEAL_NAME = "Kantyna: mieso + surowka";

const mealOptions = [
  [
    { name: "3 jajka + ogorek", text: "3 jajka na twardo + ogorek bez skorki", portion: "3 jajka ok. 150 g + ogorek 100 g", grams: 250, components: [{ name: "jajka", amount: 3, unit: "szt." }, { name: "ogorek", grams: 100 }], kcal: 230, protein: 19, fat: 15, carbs: 4 },
    { name: "2 jajka + serek", text: "2 jajka + serek wiejski 180 g", portion: "2 jajka ok. 100 g + serek wiejski 180 g", grams: 280, components: [{ name: "jajka", amount: 2, unit: "szt." }, { name: "serek wiejski", grams: 180 }], kcal: 260, protein: 31, fat: 12, carbs: 7 },
    { name: "Skyr + orzechy", text: "Skyr 170 g + 10 g orzechow", kcal: 170, protein: 23, fat: 6, carbs: 9 },
    { name: "Twarog jogurtowy", text: "Twarog poltlusty 180 g + 2 lyzki jogurtu", kcal: 270, protein: 34, fat: 12, carbs: 8 },
    { name: "Omlet prosty", text: "Omlet z 3 jajek bez maki + szpinak/cukinia", portion: "3 jajka ok. 150 g + warzywa 100 g", grams: 250, kcal: 280, protein: 24, fat: 19, carbs: 5 },
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
    { name: "Twarog 150 g", text: "Twarog poltlusty 150 g", portion: "twarog 150 g", grams: 150, kcal: 210, protein: 29, fat: 9, carbs: 5 },
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
    { name: "Kurczak + brokul", text: "Kurczak 220 g + brokul/cukinia 350 g + 1 lyzka oliwy", portion: "kurczak 220 g + warzywa 350 g + oliwa 10 g", grams: 580, kcal: 550, protein: 70, fat: 23, carbs: 16 },
    { name: "Indyk + fasolka", text: "Indyk 220 g + fasolka 350 g + 1 lyzka oliwy", portion: "indyk 220 g + fasolka 350 g + oliwa 10 g", grams: 580, kcal: 530, protein: 68, fat: 22, carbs: 18 },
    { name: "Dorsz + warzywa", text: "Dorsz/mintaj 250 g + warzywa 400 g + 1 lyzka oliwy", portion: "ryba 250 g + warzywa 400 g + oliwa 10 g", grams: 660, kcal: 430, protein: 58, fat: 16, carbs: 18 },
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
    { name: "Pomidorowa + omlet", text: "Pomidorowa lagodna 350 ml + paski z cienkiego omletu z 1 jajka", portion: "pomidorowa 350 ml + 1 jajko ok. 50 g", grams: 400, kcal: 310, protein: 24, fat: 18, carbs: 16 },
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
  { name: "Kantyna: mieso + surowka", text: "Mieso 110 g + surowka 150 g, bez ziemniakow/ryzu/makaronu", portion: "mieso 110 g + surowka 150 g", grams: 260, components: [{ name: "mieso", grams: 110 }, { name: "surowka", grams: 150 }], kcal: 215, protein: 29, fat: 7, carbs: 9 },
  { name: "Kurczak z surowka", text: "Kurczak pieczony/grillowany 200 g + surowka, bez ryzu i ziemniakow", kcal: 460, protein: 55, fat: 22, carbs: 8 },
  { name: "Ryba z warzywami", text: "Ryba pieczona/gotowana 220 g + warzywa na parze", kcal: 390, protein: 48, fat: 18, carbs: 10 },
  { name: "Ryba panierowana + surowka", text: "Ryba panierowana 180 g + surowka, bez ziemniakow", kcal: 560, protein: 36, fat: 34, carbs: 26 },
  { name: "Mieso w sosie + surowka", text: "Mieso w sosie 220 g + surowka, bez kaszy/ryzu; sos moze miec make", kcal: 560, protein: 45, fat: 34, carbs: 18 },
  { name: "Pieczen + warzywa", text: "Pieczen wieprzowa/wolowa 200 g + warzywa, bez dodatkow skrobiowych", kcal: 560, protein: 45, fat: 38, carbs: 8 },
  { name: "Biala kielbasa + jajka", text: "Biala kielbasa 150 g + 2 jajka + ogorek; bez pieczywa", kcal: 610, protein: 37, fat: 48, carbs: 5 },
  { name: "Biala kielbasa + surowka", text: "Biala kielbasa 180 g + surowka 150 g, bez ziemniakow", kcal: 590, protein: 31, fat: 47, carbs: 10 },
  { name: "Zurek z biala kielbasa keto", text: "Zurek bez ziemniakow + biala kielbasa 120 g + jajko", kcal: 540, protein: 30, fat: 41, carbs: 14 },
  { name: "Jajka + serek wiejski", text: "2 jajka gotowane + serek wiejski 150 g + ogorek", kcal: 320, protein: 34, fat: 17, carbs: 7 },
  { name: "Tunczyk + skyr + ogorek", text: "Tunczyk w sosie wlasnym + ogorek + skyr 100 g", kcal: 250, protein: 45, fat: 2, carbs: 7 },
  { name: "Kabanosy + serek", text: "Kabanosy 60 g + serek/skyr 100 g; wybieraj okazjonalnie", kcal: 360, protein: 32, fat: 23, carbs: 8 },
  { name: "Hot bar: mieso + salatka", text: "Mieso/kurczak z baru 200 g + salatka, bez frytek", kcal: 520, protein: 45, fat: 32, carbs: 12 },
  { name: "Fasolka po bretonsku mala", text: "Fasolka 300 g; duzo wegli, reszta dnia bardzo nisko weglowodanowa", kcal: 520, protein: 28, fat: 24, carbs: 45 },
  { name: "Pierogi mala porcja", text: "Pierogi 4 szt.; nie keto, traktuj jako zaplanowane odstepstwo", kcal: 430, protein: 16, fat: 16, carbs: 58 },
  { name: "Mieso + ziemniaki 100 g", text: "Mieso + surowka + ziemniaki 100 g; wyzsze wegle", kcal: 620, protein: 45, fat: 30, carbs: 38 },
  { name: "Mieso + kasza 80 g", text: "Mieso + surowka + kasza 80 g gotowana; wyzsze wegle", kcal: 590, protein: 42, fat: 28, carbs: 36 },
  { name: "Mieso + ryz 80 g", text: "Mieso + warzywa + ryz 80 g gotowany; wyzsze wegle", kcal: 590, protein: 42, fat: 25, carbs: 42 },
  { name: "Rosol czysty + mieso", text: "Rosol 400 ml + mieso, bez makaronu", kcal: 280, protein: 30, fat: 14, carbs: 6 },
  { name: "Krupnik mala porcja", text: "Krupnik 300 ml; zawiera kasze/ziemniaki, licz wegle", kcal: 260, protein: 15, fat: 10, carbs: 28 },
  { name: "Pomidorowa mala porcja", text: "Pomidorowa 300 ml, mala porcja; uwaga przy zgadze", kcal: 240, protein: 14, fat: 10, carbs: 22 },
  { name: "Barszcz + jajka", text: "Barszcz 300 ml + 2 jajka, bez uszek/krokieta", kcal: 260, protein: 18, fat: 12, carbs: 16 },
  { name: "Bigos bez pieczywa", text: "Bigos 300 g, bez pieczywa; raczej okazjonalnie przy refluksie", kcal: 420, protein: 28, fat: 30, carbs: 12 },
  { name: "Golonka mala porcja", text: "Golonka 180 g + ogorek; tluste, moze nasilac zgage", kcal: 700, protein: 45, fat: 55, carbs: 4 },
  { name: "Dom: jajecznica lekka", text: "Jajecznica z 2 jaj + bialko/jogurt + cukinia", kcal: 260, protein: 24, fat: 15, carbs: 7 },
  { name: "Dom: miska bialka", text: "Kurczak/indyk 150 g + jajko + ogorek", kcal: 330, protein: 50, fat: 12, carbs: 4 },
  { name: "Dom: wolnowar", text: "Duszony indyk/wolowina 220 g + warzywa", kcal: 500, protein: 55, fat: 26, carbs: 12 },
  { name: "Keto chleb z jajkiem", text: "Keto chleb 70 g + 2 jajka + ogorek", portion: "keto chleb 70 g + jajka 100 g + ogorek 100 g", grams: 270, components: [{ name: "keto chleb", grams: 70 }, { name: "jajka", grams: 100 }, { name: "ogorek", grams: 100 }], kcal: 350, protein: 28, fat: 22, carbs: 10 },
  { name: "Keto chleb z wedlina", text: "Keto chleb 80 g + wedlina 100 g + maslo 10 g + ogorek", kcal: 420, protein: 35, fat: 27, carbs: 11 },
  { name: "Keto tost", text: "Keto chleb 70 g + ser 40 g + szynka 80 g", kcal: 430, protein: 38, fat: 28, carbs: 8 },
  { name: "Pizza keto jajeczna", text: "Spod z jajek i sera + szynka/pieczarki; bez ostrego sosu", kcal: 650, protein: 52, fat: 44, carbs: 11 },
  { name: "Pizza keto z tortilli low carb", text: "Tortilla low carb + mozzarella + kurczak/szynka + pieczarki", kcal: 560, protein: 45, fat: 34, carbs: 18 },
  { name: "Pizza keto kalafiorowa", text: "Spod kalafiorowo-serowy + chude mieso + lagodny sos", kcal: 520, protein: 38, fat: 34, carbs: 14 },
  { name: "Zapiekanka keto", text: "Kurczak 180 g + brokul/kalafior + ser 40 g", kcal: 520, protein: 58, fat: 28, carbs: 12 },
  { name: "Lasagne keto z cukinii", text: "Plastry cukinii + mieso mielone + mozzarella, bez makaronu", kcal: 560, protein: 45, fat: 38, carbs: 13 },
  { name: "Makaron z jajka + kurczak", text: "Paski z omletu 2 jajka + kurczak 170 g + cukinia", kcal: 500, protein: 58, fat: 25, carbs: 8 },
  { name: "Pomidorowa keto + makaron jajeczny", text: "Pomidorowa 300 ml + paski z omletu; uwaga przy zgadze", kcal: 300, protein: 22, fat: 17, carbs: 15 },
  { name: "Pomidorowa + konjac", text: "Pomidorowa 300 ml + makaron konjac 150 g + kurczak 100 g", kcal: 260, protein: 28, fat: 10, carbs: 12 },
  { name: "Rosol + makaron jajeczny keto", text: "Rosol 400 ml + paski z omletu 2 jajka + mieso", kcal: 390, protein: 36, fat: 23, carbs: 7 },
  { name: "Rosol + konjac", text: "Rosol 400 ml + konjac 150 g + mieso kurczaka", kcal: 270, protein: 30, fat: 14, carbs: 4 },
  { name: "Krem brokulowy z kurczakiem", text: "Krem brokulowy 350 g + kurczak 150 g + jogurt", kcal: 390, protein: 45, fat: 17, carbs: 15 },
  { name: "Krem kalafiorowy z jajkiem", text: "Krem kalafiorowy 350 g + 2 jajka", kcal: 330, protein: 22, fat: 20, carbs: 13 },
  { name: "Zurek keto", text: "Zurek bez ziemniakow + jajko + kielbasa, mala porcja", kcal: 460, protein: 27, fat: 34, carbs: 14 },
  { name: "Salatka cezar keto", text: "Kurczak + salata + parmezan + sos jogurtowy, bez grzanek", kcal: 480, protein: 48, fat: 28, carbs: 9 },
  { name: "Salatka jajeczna", text: "3 jajka + ogorek + jogurt/majonez 15 g", kcal: 380, protein: 25, fat: 27, carbs: 6 },
  { name: "Salatka z tunczykiem", text: "Tunczyk 120 g + jajko + ogorek + salata + oliwa 10 g", kcal: 390, protein: 45, fat: 20, carbs: 5 },
  { name: "Bowl keto kurczak", text: "Kurczak 180 g + awokado 70 g + salata + ogorek", kcal: 500, protein: 58, fat: 26, carbs: 10 },
  { name: "Bowl keto wolowina", text: "Wolowina 170 g + warzywa + oliwa 10 g", kcal: 560, protein: 45, fat: 38, carbs: 11 },
  { name: "Burger keto talerz", text: "Kotlet wolowy + ser + salata + ogorek, bez bulki", kcal: 620, protein: 44, fat: 47, carbs: 8 },
  { name: "Hot dog keto talerz", text: "Parowki 120 g + salata + ogorek + musztarda, bez bulki", kcal: 390, protein: 20, fat: 31, carbs: 6 },
  { name: "Kebab box keto", text: "Mieso kebab 180 g + salata + sos jogurtowy, bez frytek", kcal: 560, protein: 40, fat: 39, carbs: 12 },
  { name: "Schabowy bez dodatkow", text: "Schabowy panierowany 170 g + surowka 150 g, bez ziemniakow", kcal: 600, protein: 40, fat: 36, carbs: 25 },
  { name: "Kotlet z piersi panierowany", text: "Kotlet z piersi 180 g + surowka 150 g, bez ziemniakow", kcal: 560, protein: 47, fat: 31, carbs: 28 },
  { name: "Mielony + ogorki", text: "Kotlet mielony 180 g + ogorki/salata, bez ziemniakow", kcal: 500, protein: 34, fat: 36, carbs: 10 },
  { name: "Pulpet w sosie + surowka", text: "Pulpety 220 g + surowka; sos licz jako wyzsze kcal", kcal: 560, protein: 40, fat: 34, carbs: 18 },
  { name: "Gulasz + ogorek", text: "Gulasz 280 g + ogorek/salata, bez kaszy", kcal: 540, protein: 42, fat: 34, carbs: 14 },
  { name: "Leczo keto", text: "Leczo z miesem i cukinia, bez pieczywa", kcal: 430, protein: 30, fat: 30, carbs: 14 },
  { name: "Ryba po grecku keto", text: "Ryba + warzywa bez cukru, mala porcja marchwi", kcal: 420, protein: 38, fat: 22, carbs: 17 },
  { name: "Dorsz w sosie jogurtowym", text: "Dorsz 220 g + warzywa + sos jogurtowy", kcal: 360, protein: 50, fat: 12, carbs: 12 },
  { name: "Losos + szpinak", text: "Losos 180 g + szpinak/cukinia", kcal: 520, protein: 40, fat: 36, carbs: 6 },
  { name: "Tunczyk z keto chlebem", text: "Tunczyk 120 g + keto chleb 60 g + ogorek", kcal: 330, protein: 44, fat: 11, carbs: 10 },
  { name: "Serek wiejski + jajka", text: "Serek wiejski 200 g + 2 jajka + ogorek", kcal: 360, protein: 37, fat: 18, carbs: 8 },
  { name: "Omlet z szynka", text: "3 jajka + szynka 80 g + pieczarki", kcal: 430, protein: 39, fat: 28, carbs: 5 },
  { name: "Omlet z serem", text: "3 jajka + ser 40 g + cukinia", kcal: 470, protein: 34, fat: 34, carbs: 6 },
  { name: "Jajka faszerowane", text: "3 jajka + jogurt/majonez 15 g + ogorek", kcal: 360, protein: 24, fat: 27, carbs: 5 },
  { name: "Tortilla low carb", text: "Tortilla low carb + kurczak 130 g + salata + jogurt", kcal: 440, protein: 43, fat: 20, carbs: 20 },
  { name: "Nalesnik keto", text: "Nalesnik z jajka/twarogu + serek, bez cukru", kcal: 360, protein: 32, fat: 22, carbs: 9 },
  { name: "Gofr keto", text: "Gofr z jajka i maki migdalowej + skyr", kcal: 420, protein: 30, fat: 28, carbs: 10 },
  { name: "Chaffle", text: "Jajko + mozzarella jako keto tost/gofr", kcal: 330, protein: 25, fat: 24, carbs: 3 },
  { name: "Keto kanapki", text: "Keto chleb 90 g + szynka/ser + ogorek", kcal: 480, protein: 38, fat: 30, carbs: 12 },
  { name: "Keto zapiekanka z tunczykiem", text: "Tunczyk + jajko + mozzarella + cukinia", kcal: 500, protein: 55, fat: 28, carbs: 8 },
  { name: "Keto chleb solo", text: "Keto chleb/proteinowy jako wazony dodatek", portion: "keto chleb 100 g", grams: 100, components: [{ name: "keto chleb", grams: 100 }], kcal: 240, protein: 18, fat: 12, carbs: 8 },
  { name: "Biala kielbasa pieczona", text: "Biala kielbasa 180 g + ogorek kiszony 100 g + musztarda", kcal: 570, protein: 30, fat: 47, carbs: 7 },
  { name: "Biala kielbasa w kapuscie", text: "Biala kielbasa 150 g + kapusta duszona 250 g", kcal: 560, protein: 29, fat: 42, carbs: 16 },
  { name: "Kielbasa z patelni + jajka", text: "Kielbasa 120 g + 2 jajka + ogorek, bez pieczywa", kcal: 560, protein: 32, fat: 45, carbs: 5 },
  { name: "Jajecznica z biala kielbasa", text: "2 jajka + biala kielbasa 100 g + szczypiorek, bez cebuli jesli zgaga", kcal: 460, protein: 28, fat: 37, carbs: 4 },
  { name: "Jajecznica z lososiem", text: "3 jajka + losos 60 g + ogorek", kcal: 430, protein: 34, fat: 30, carbs: 4 },
  { name: "Jajecznica z pieczarkami", text: "3 jajka + pieczarki 120 g + maslo 10 g", kcal: 360, protein: 24, fat: 28, carbs: 5 },
  { name: "Omlet pizza", text: "3 jajka + mozzarella 50 g + szynka + pieczarki", kcal: 520, protein: 41, fat: 36, carbs: 6 },
  { name: "Omlet twarogowy", text: "2 jajka + twarog 100 g + jogurt, wersja lagodna", kcal: 340, protein: 34, fat: 19, carbs: 6 },
  { name: "Talerz wedlin", text: "Szynka 100 g + ser 40 g + jajko + ogorek", kcal: 390, protein: 38, fat: 24, carbs: 4 },
  { name: "Talerz serow keto", text: "Mozzarella/feta/ser zolty 150 g + ogorek i salata", kcal: 480, protein: 34, fat: 36, carbs: 6 },
  { name: "Serek wiejski z szynka", text: "Serek wiejski 200 g + szynka 80 g + ogorek", kcal: 320, protein: 40, fat: 13, carbs: 7 },
  { name: "Skyr bialkowy maly", text: "Skyr 150 g + orzechy 10 g; mala porcja nabialu", kcal: 165, protein: 18, fat: 7, carbs: 8 },
  { name: "Tunczyk majonez ogorek", text: "Tunczyk 120 g + majonez 15 g + ogorek/salata", kcal: 270, protein: 32, fat: 14, carbs: 3 },
  { name: "Pasta jajeczna z keto chlebem", text: "Pasta z 2 jaj + jogurt/majonez + keto chleb 60 g", kcal: 430, protein: 28, fat: 29, carbs: 10 },
  { name: "Pasta z makreli", text: "Makrela 100 g + jajko + ogorek; bez cebuli przy zgadze", kcal: 430, protein: 31, fat: 32, carbs: 4 },
  { name: "Szakszuka lagodna", text: "2 jajka + passata lagodna + cukinia; ostre przyprawy pomin", kcal: 300, protein: 20, fat: 18, carbs: 13 },
  { name: "Kurczak curry lagodne", text: "Kurczak 180 g + mleczko kokosowe 60 g + cukinia, bez ryzu", kcal: 520, protein: 55, fat: 29, carbs: 10 },
  { name: "Indyk w sosie jogurtowym", text: "Indyk 200 g + sos jogurtowy + warzywa gotowane", kcal: 430, protein: 58, fat: 15, carbs: 13 },
  { name: "Kurczak caprese", text: "Kurczak 180 g + mozzarella 60 g + pomidor, jesli tolerujesz", kcal: 500, protein: 58, fat: 27, carbs: 6 },
  { name: "Kurczak brokul ser", text: "Kurczak 180 g + brokul 250 g + ser 30 g", kcal: 480, protein: 60, fat: 21, carbs: 14 },
  { name: "Indyk + kalafior puree", text: "Indyk 200 g + puree z kalafiora 250 g + maslo 10 g", kcal: 450, protein: 60, fat: 18, carbs: 12 },
  { name: "Wolowina + fasolka", text: "Wolowina 180 g + fasolka szparagowa 250 g + oliwa 10 g", kcal: 560, protein: 48, fat: 36, carbs: 12 },
  { name: "Karkowka + kapusta", text: "Karkowka 180 g + kapusta duszona 250 g", kcal: 680, protein: 42, fat: 52, carbs: 13 },
  { name: "Schab pieczony + mizeria", text: "Schab 200 g + ogorek/jogurt 180 g", kcal: 500, protein: 58, fat: 25, carbs: 7 },
  { name: "Mielone w sosie pomidorowym", text: "Mieso mielone 200 g + passata 100 g + cukinia", kcal: 560, protein: 42, fat: 38, carbs: 12 },
  { name: "Pulpeciki z indyka keto", text: "Pulpety z indyka 220 g + sos jogurtowy + warzywa", kcal: 480, protein: 52, fat: 24, carbs: 12 },
  { name: "Kotlety jajeczne keto", text: "2 kotlety jajeczne bez bulki + salata/ogorek", kcal: 380, protein: 25, fat: 28, carbs: 7 },
  { name: "Dorsz + kalafior", text: "Dorsz 220 g + kalafior 300 g + maslo 10 g", kcal: 360, protein: 50, fat: 13, carbs: 14 },
  { name: "Mintaj + warzywa parowane", text: "Mintaj 250 g + warzywa parowane 300 g + oliwa 10 g", kcal: 410, protein: 55, fat: 14, carbs: 18 },
  { name: "Pstrag + salata", text: "Pstrag 220 g + salata + ogorek + oliwa 10 g", kcal: 540, protein: 50, fat: 34, carbs: 6 },
  { name: "Makrela + jajka", text: "Makrela 120 g + 2 jajka + ogorek", kcal: 530, protein: 40, fat: 39, carbs: 4 },
  { name: "Krewetki + cukinia", text: "Krewetki 220 g + cukinia 300 g + oliwa 10 g", kcal: 360, protein: 52, fat: 12, carbs: 12 },
  { name: "Zupa jarzynowa keto", text: "Zupa z kalafiora/cukinii/brokula + kurczak, bez ziemniakow", kcal: 330, protein: 35, fat: 15, carbs: 16 },
  { name: "Kapusniak keto", text: "Kapusniak bez ziemniakow + kielbasa 80 g", kcal: 360, protein: 20, fat: 26, carbs: 13 },
  { name: "Ogorkowa keto", text: "Zupa ogorkowa bez ziemniakow + kurczak/jajko", kcal: 300, protein: 28, fat: 16, carbs: 11 },
  { name: "Flaki bez pieczywa", text: "Flaki 400 g, bez pieczywa; sprawdz tolerancje przypraw", kcal: 340, protein: 30, fat: 20, carbs: 10 },
  { name: "Golabki bez ryzu", text: "Mieso mielone w kapuscie, bez ryzu + sos lagodny", kcal: 520, protein: 38, fat: 34, carbs: 16 },
  { name: "Keto lazanki z kapusta", text: "Kapusta + kielbasa + makaron konjac albo paski z jajka", kcal: 470, protein: 28, fat: 34, carbs: 12 },
  { name: "Cukinia faszerowana", text: "Cukinia + mieso mielone + mozzarella, bez ryzu", kcal: 520, protein: 42, fat: 34, carbs: 13 },
  { name: "Papryka faszerowana keto", text: "Papryka + mieso mielone + ser, bez ryzu", kcal: 540, protein: 40, fat: 36, carbs: 17 },
  { name: "Zapiekanka kalafior mieso", text: "Kalafior + mieso mielone + ser, bez makaronu", kcal: 560, protein: 42, fat: 38, carbs: 14 },
  { name: "Zapiekanka brokul jajka", text: "Brokul + 3 jajka + ser 40 g", kcal: 500, protein: 34, fat: 35, carbs: 12 },
  { name: "Keto gyros talerz", text: "Kurczak gyros lagodny + salata + ogorek + sos jogurtowy", kcal: 520, protein: 55, fat: 27, carbs: 11 },
  { name: "Keto taco bowl", text: "Mieso mielone + salata + ser + awokado, bez tortilli", kcal: 620, protein: 42, fat: 47, carbs: 12 },
  { name: "Tortilla z jajka", text: "Omlet jako wrap + kurczak/szynka + salata", kcal: 430, protein: 42, fat: 25, carbs: 6 },
  { name: "Kanapki z chaffle", text: "Chaffle + szynka/ser + ogorek, bez zwyklego pieczywa", kcal: 460, protein: 34, fat: 33, carbs: 5 },
  { name: "Keto burger z jajkiem", text: "Kotlet wolowy + jajko + salata + ogorek, bez bulki", kcal: 690, protein: 52, fat: 51, carbs: 7 },
  { name: "Keto pizza z kurczakiem", text: "Spod low carb + kurczak + mozzarella + pieczarki", kcal: 610, protein: 55, fat: 36, carbs: 15 },
  { name: "Keto pizza z salami", text: "Spod low carb + salami + mozzarella; bardziej tlusta", kcal: 720, protein: 42, fat: 55, carbs: 14 },
  { name: "Keto pizza z tunczykiem", text: "Spod jajeczny + tunczyk + mozzarella + oliwki", kcal: 620, protein: 55, fat: 39, carbs: 10 },
  { name: "Keto chleb z pasta z makreli", text: "Keto chleb 70 g + pasta z makreli 120 g + ogorek", kcal: 520, protein: 35, fat: 37, carbs: 11 },
  { name: "Keto chleb z twarozkiem", text: "Keto chleb 70 g + serek/twarozek 120 g + wedlina", kcal: 430, protein: 36, fat: 25, carbs: 10 },
  { name: "Keto chleb z jajecznica", text: "Keto chleb 60 g + jajecznica z 2 jaj", kcal: 390, protein: 25, fat: 27, carbs: 8 },
  { name: "Twarozek lagodny", text: "Twarog/serek 180 g + jogurt + ogorek; bez cebuli", kcal: 260, protein: 32, fat: 10, carbs: 8 },
  { name: "Mozzarella + szynka", text: "Mozzarella 125 g + szynka 80 g + ogorek", kcal: 430, protein: 42, fat: 26, carbs: 4 },
  { name: "Feta + kurczak salatka", text: "Kurczak 150 g + feta 60 g + salata + ogorek", kcal: 460, protein: 52, fat: 24, carbs: 7 }
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

function saveCustomMeal(meal, limit = 120) {
  const customMeals = getCustomMeals();
  const key = `${meal.name}|${meal.kcal}|${meal.grams}`;
  const withoutDuplicate = customMeals.filter(item => `${item.name}|${item.kcal}|${item.grams}` !== key);
  setCustomMeals([meal, ...withoutDuplicate].slice(0, limit));
}

const customTypeValues = {
  mixed: { label: "danie mieszane", kcal: 160, protein: 10, fat: 8, carbs: 12 },
  lean: { label: "chude mieso/ryba", kcal: 150, protein: 25, fat: 5, carbs: 0 },
  sauce: { label: "mieso w sosie", kcal: 210, protein: 16, fat: 13, carbs: 8 },
  soup: { label: "zupa", kcal: 70, protein: 4, fat: 3, carbs: 7 },
  eggs: { label: "jajka/nabial", kcal: 150, protein: 13, fat: 10, carbs: 4 },
  carbs: { label: "ziemniaki/ryz/makaron", kcal: 130, protein: 3, fat: 1, carbs: 27 },
  fried: { label: "smazone/panierowane", kcal: 260, protein: 14, fat: 17, carbs: 14 },
  salad: { label: "surowka lekka", kcal: 35, protein: 1, fat: 1, carbs: 6 },
  mayoSalad: { label: "surowka z majonezem", kcal: 160, protein: 1, fat: 13, carbs: 8 },
  none: { label: "brak", kcal: 0, protein: 0, fat: 0, carbs: 0 }
};

const customProductCatalog = [
  { id: "egg", name: "Jajko", unit: "szt.", gramsPerUnit: 50, kcal: 75, protein: 6.5, fat: 5, carbs: 0.5 },
  { id: "egg_white", name: "Bialko jajka", unit: "szt.", gramsPerUnit: 35, kcal: 17, protein: 3.6, fat: 0, carbs: 0.2 },
  { id: "scrambled_egg", name: "Jajecznica bez tluszczu", unit: "g", kcal100: 150, protein100: 11, fat100: 10, carbs100: 2 },
  { id: "omelet_plain", name: "Omlet jajeczny bez maki", unit: "g", kcal100: 155, protein100: 11, fat100: 11, carbs100: 2 },
  { id: "chicken_breaded", name: "Kotlet z piersi panierowany", unit: "g", kcal100: 260, protein100: 23, fat100: 14, carbs100: 13 },
  { id: "pork_cutlet", name: "Kotlet schabowy panierowany", unit: "g", kcal100: 300, protein100: 20, fat100: 19, carbs100: 14 },
  { id: "minced_cutlet", name: "Kotlet mielony", unit: "g", kcal100: 260, protein100: 17, fat100: 19, carbs100: 7 },
  { id: "chicken_grilled", name: "Piers z kurczaka bez panierki", unit: "g", kcal100: 165, protein100: 31, fat100: 4, carbs100: 0 },
  { id: "chicken_thigh", name: "Udko z kurczaka pieczone", unit: "g", kcal100: 210, protein100: 25, fat100: 12, carbs100: 0 },
  { id: "turkey_breast", name: "Piers z indyka", unit: "g", kcal100: 135, protein100: 30, fat100: 1, carbs100: 0 },
  { id: "pork_roast", name: "Schab/pieczen bez panierki", unit: "g", kcal100: 230, protein100: 27, fat100: 13, carbs100: 0 },
  { id: "pork_neck", name: "Karkowka pieczona", unit: "g", kcal100: 330, protein100: 22, fat100: 27, carbs100: 0 },
  { id: "beef_roast", name: "Wolowina duszona/pieczona", unit: "g", kcal100: 250, protein100: 26, fat100: 16, carbs100: 0 },
  { id: "goulash_meat", name: "Gulasz miesny bez kaszy", unit: "g", kcal100: 170, protein100: 16, fat100: 10, carbs100: 4 },
  { id: "meat_sauce", name: "Mieso w sosie", unit: "g", kcal100: 210, protein100: 16, fat100: 13, carbs100: 8 },
  { id: "sausage", name: "Kielbasa", unit: "g", kcal100: 300, protein100: 14, fat100: 26, carbs100: 3 },
  { id: "kabanos", name: "Kabanosy", unit: "g", kcal100: 460, protein100: 25, fat100: 38, carbs100: 3 },
  { id: "parowki", name: "Parowki dobrej jakosci", unit: "g", kcal100: 260, protein100: 12, fat100: 22, carbs100: 4 },
  { id: "fish_breaded", name: "Ryba panierowana", unit: "g", kcal100: 240, protein100: 17, fat100: 13, carbs100: 14 },
  { id: "fish_plain", name: "Ryba bez panierki", unit: "g", kcal100: 120, protein100: 24, fat100: 2, carbs100: 0 },
  { id: "cod", name: "Dorsz/mintaj", unit: "g", kcal100: 90, protein100: 20, fat100: 1, carbs100: 0 },
  { id: "salmon", name: "Losos", unit: "g", kcal100: 208, protein100: 20, fat100: 13, carbs100: 0 },
  { id: "herring", name: "Sledz", unit: "g", kcal100: 210, protein100: 18, fat100: 15, carbs100: 0 },
  { id: "tuna", name: "Tunczyk w sosie wlasnym", unit: "g", kcal100: 110, protein100: 25, fat100: 1, carbs100: 0 },
  { id: "shrimp", name: "Krewetki", unit: "g", kcal100: 99, protein100: 24, fat100: 0, carbs100: 0 },
  { id: "cottage", name: "Serek wiejski", unit: "g", kcal100: 100, protein100: 12, fat100: 5, carbs100: 3 },
  { id: "skyr", name: "Skyr naturalny", unit: "g", kcal100: 65, protein100: 11, fat100: 0, carbs100: 4 },
  { id: "greek_yogurt", name: "Jogurt grecki naturalny", unit: "g", kcal100: 110, protein100: 8, fat100: 7, carbs100: 4 },
  { id: "natural_yogurt", name: "Jogurt naturalny", unit: "g", kcal100: 60, protein100: 4, fat100: 3, carbs100: 5 },
  { id: "kefir", name: "Kefir naturalny", unit: "g", kcal100: 50, protein100: 3.5, fat100: 2, carbs100: 5 },
  { id: "curd", name: "Twarog poltlusty", unit: "g", kcal100: 130, protein100: 18, fat100: 5, carbs100: 4 },
  { id: "mozzarella", name: "Mozzarella", unit: "g", kcal100: 250, protein100: 18, fat100: 19, carbs100: 2 },
  { id: "feta", name: "Feta", unit: "g", kcal100: 265, protein100: 14, fat100: 21, carbs100: 4 },
  { id: "cheese", name: "Ser zolty", unit: "g", kcal100: 350, protein100: 25, fat100: 27, carbs100: 2 },
  { id: "ham", name: "Szynka/chuda wedlina", unit: "g", kcal100: 120, protein100: 20, fat100: 4, carbs100: 2 },
  { id: "turkey_ham", name: "Wedlina drobiowa", unit: "g", kcal100: 110, protein100: 19, fat100: 3, carbs100: 2 },
  { id: "salami", name: "Salami", unit: "g", kcal100: 430, protein100: 22, fat100: 37, carbs100: 2 },
  { id: "salad_light", name: "Surowka lekka", unit: "g", kcal100: 35, protein100: 1, fat100: 1, carbs100: 6 },
  { id: "salad_mayo", name: "Surowka z majonezem", unit: "g", kcal100: 160, protein100: 1, fat100: 13, carbs100: 8 },
  { id: "cucumber", name: "Ogorek", unit: "g", kcal100: 15, protein100: 1, fat100: 0, carbs100: 3 },
  { id: "pickled_cucumber", name: "Ogorek kiszony", unit: "g", kcal100: 12, protein100: 0.5, fat100: 0, carbs100: 2 },
  { id: "tomato", name: "Pomidor", unit: "g", kcal100: 18, protein100: 1, fat100: 0, carbs100: 4 },
  { id: "lettuce", name: "Salata/mix salat", unit: "g", kcal100: 15, protein100: 1, fat100: 0, carbs100: 3 },
  { id: "broccoli", name: "Brokul", unit: "g", kcal100: 35, protein100: 3, fat100: 0, carbs100: 7 },
  { id: "cauliflower", name: "Kalafior", unit: "g", kcal100: 25, protein100: 2, fat100: 0, carbs100: 5 },
  { id: "zucchini", name: "Cukinia", unit: "g", kcal100: 17, protein100: 1, fat100: 0, carbs100: 3 },
  { id: "spinach", name: "Szpinak", unit: "g", kcal100: 23, protein100: 3, fat100: 0, carbs100: 4 },
  { id: "green_beans", name: "Fasolka szparagowa", unit: "g", kcal100: 31, protein100: 2, fat100: 0, carbs100: 7 },
  { id: "carrot", name: "Marchew", unit: "g", kcal100: 41, protein100: 1, fat100: 0, carbs100: 10 },
  { id: "beetroot", name: "Buraczki", unit: "g", kcal100: 43, protein100: 2, fat100: 0, carbs100: 10 },
  { id: "cabbage", name: "Kapusta gotowana/surowka", unit: "g", kcal100: 25, protein100: 1, fat100: 0, carbs100: 6 },
  { id: "sauerkraut", name: "Kapusta kiszona", unit: "g", kcal100: 20, protein100: 1, fat100: 0, carbs100: 4 },
  { id: "mushrooms", name: "Pieczarki", unit: "g", kcal100: 22, protein100: 3, fat100: 0, carbs100: 3 },
  { id: "vegetables", name: "Warzywa gotowane/parowane", unit: "g", kcal100: 35, protein100: 2, fat100: 0, carbs100: 7 },
  { id: "potatoes", name: "Ziemniaki gotowane", unit: "g", kcal100: 77, protein100: 2, fat100: 0, carbs100: 17 },
  { id: "fries", name: "Frytki", unit: "g", kcal100: 310, protein100: 3, fat100: 15, carbs100: 41 },
  { id: "buckwheat", name: "Kasza gryczana gotowana", unit: "g", kcal100: 110, protein100: 4, fat100: 1, carbs100: 22 },
  { id: "barley", name: "Kasza jeczmienna gotowana", unit: "g", kcal100: 120, protein100: 3, fat100: 1, carbs100: 25 },
  { id: "rice", name: "Ryz gotowany", unit: "g", kcal100: 130, protein100: 3, fat100: 0, carbs100: 28 },
  { id: "pasta", name: "Makaron gotowany", unit: "g", kcal100: 155, protein100: 5, fat100: 1, carbs100: 31 },
  { id: "egg_pasta", name: "Makaron jajeczny gotowany", unit: "g", kcal100: 155, protein100: 5, fat100: 2, carbs100: 29 },
  { id: "konjac", name: "Makaron konjac", unit: "g", kcal100: 10, protein100: 0, fat100: 0, carbs100: 1 },
  { id: "bread", name: "Chleb zwykly", unit: "g", kcal100: 250, protein100: 8, fat100: 3, carbs100: 49 },
  { id: "bread_roll", name: "Bulka pszenna", unit: "g", kcal100: 270, protein100: 9, fat100: 3, carbs100: 53 },
  { id: "keto_bread", name: "Pieczywo keto/proteinowe", unit: "g", kcal100: 240, protein100: 18, fat100: 12, carbs100: 8 },
  { id: "soup", name: "Zupa niezageszczana", unit: "g", kcal100: 45, protein100: 3, fat100: 2, carbs100: 5 },
  { id: "tomato_soup", name: "Zupa pomidorowa", unit: "g", kcal100: 60, protein100: 2, fat100: 3, carbs100: 7 },
  { id: "broth", name: "Rosol czysty", unit: "g", kcal100: 35, protein100: 3, fat100: 2, carbs100: 2 },
  { id: "cream_soup", name: "Zupa krem warzywna", unit: "g", kcal100: 70, protein100: 3, fat100: 4, carbs100: 8 },
  { id: "bigos", name: "Bigos", unit: "g", kcal100: 120, protein100: 7, fat100: 8, carbs100: 5 },
  { id: "leczo", name: "Leczo z miesem", unit: "g", kcal100: 115, protein100: 7, fat100: 8, carbs100: 6 },
  { id: "pierogi", name: "Pierogi", unit: "g", kcal100: 220, protein100: 7, fat100: 8, carbs100: 32 },
  { id: "beans_stew", name: "Fasolka po bretonsku", unit: "g", kcal100: 150, protein100: 8, fat100: 7, carbs100: 15 },
  { id: "sauce", name: "Sos miesny", unit: "g", kcal100: 110, protein100: 5, fat100: 8, carbs100: 5 },
  { id: "ketchup", name: "Ketchup", unit: "g", kcal100: 100, protein100: 1, fat100: 0, carbs100: 24 },
  { id: "mayo", name: "Majonez", unit: "g", kcal100: 680, protein100: 1, fat100: 75, carbs100: 1 },
  { id: "mustard", name: "Musztarda", unit: "g", kcal100: 70, protein100: 4, fat100: 4, carbs100: 6 },
  { id: "olive", name: "Oliwa/olej", unit: "g", kcal100: 884, protein100: 0, fat100: 100, carbs100: 0 },
  { id: "butter", name: "Maslo", unit: "g", kcal100: 720, protein100: 1, fat100: 82, carbs100: 1 },
  { id: "avocado", name: "Awokado", unit: "g", kcal100: 160, protein100: 2, fat100: 15, carbs100: 9 },
  { id: "walnuts", name: "Orzechy wloskie", unit: "g", kcal100: 650, protein100: 15, fat100: 65, carbs100: 14 },
  { id: "almonds", name: "Migdal", unit: "g", kcal100: 580, protein100: 21, fat100: 50, carbs100: 22 },
  { id: "apple", name: "Jablko", unit: "g", kcal100: 52, protein100: 0, fat100: 0, carbs100: 14 },
  { id: "banana", name: "Banan", unit: "g", kcal100: 89, protein100: 1, fat100: 0, carbs100: 23 },
  { id: "berries", name: "Owoce jagodowe", unit: "g", kcal100: 50, protein100: 1, fat100: 0, carbs100: 12 }
];

const expandedProductCatalog = [
  { id: "egg_boiled", name: "Jajko gotowane", unit: "szt.", gramsPerUnit: 50, kcal: 75, protein: 6.5, fat: 5, carbs: 0.5 },
  { id: "egg_scrambled_fat", name: "Jajecznica na masle", unit: "g", kcal100: 190, protein100: 11, fat100: 15, carbs100: 2 },
  { id: "keto_bread_home", name: "Chleb keto domowy", unit: "g", kcal100: 260, protein100: 17, fat100: 18, carbs100: 7 },
  { id: "keto_bread_seed", name: "Chleb keto ziarnisty", unit: "g", kcal100: 310, protein100: 16, fat100: 24, carbs100: 8 },
  { id: "protein_bread", name: "Chleb proteinowy low carb", unit: "g", kcal100: 250, protein100: 22, fat100: 10, carbs100: 9 },
  { id: "low_carb_tortilla", name: "Tortilla low carb", unit: "g", kcal100: 240, protein100: 16, fat100: 9, carbs100: 18 },
  { id: "almond_flour", name: "Maka migdalowa", unit: "g", kcal100: 580, protein100: 21, fat100: 50, carbs100: 20 },
  { id: "coconut_flour", name: "Maka kokosowa", unit: "g", kcal100: 400, protein100: 18, fat100: 14, carbs100: 60 },
  { id: "psyllium", name: "Babka jajowata/luska", unit: "g", kcal100: 180, protein100: 2, fat100: 1, carbs100: 85 },
  { id: "flaxseed", name: "Siemie lniane", unit: "g", kcal100: 530, protein100: 18, fat100: 42, carbs100: 29 },
  { id: "chia", name: "Nasiona chia", unit: "g", kcal100: 490, protein100: 17, fat100: 31, carbs100: 42 },
  { id: "sunflower", name: "Slonecznik", unit: "g", kcal100: 585, protein100: 21, fat100: 51, carbs100: 20 },
  { id: "pumpkin_seeds", name: "Pestki dyni", unit: "g", kcal100: 560, protein100: 30, fat100: 49, carbs100: 11 },
  { id: "sesame", name: "Sezam", unit: "g", kcal100: 570, protein100: 18, fat100: 50, carbs100: 23 },
  { id: "peanut_butter", name: "Maslo orzechowe", unit: "g", kcal100: 590, protein100: 25, fat100: 50, carbs100: 20 },
  { id: "cream_cheese", name: "Serek kremowy", unit: "g", kcal100: 250, protein100: 7, fat100: 24, carbs100: 4 },
  { id: "ricotta", name: "Ricotta", unit: "g", kcal100: 170, protein100: 11, fat100: 13, carbs100: 3 },
  { id: "parmesan", name: "Parmezan", unit: "g", kcal100: 430, protein100: 38, fat100: 29, carbs100: 4 },
  { id: "blue_cheese", name: "Ser plesniowy", unit: "g", kcal100: 350, protein100: 21, fat100: 29, carbs100: 2 },
  { id: "halloumi", name: "Halloumi", unit: "g", kcal100: 320, protein100: 22, fat100: 26, carbs100: 2 },
  { id: "cream_30", name: "Smietanka 30%", unit: "g", kcal100: 290, protein100: 2, fat100: 30, carbs100: 3 },
  { id: "sour_cream", name: "Smietana 18%", unit: "g", kcal100: 185, protein100: 3, fat100: 18, carbs100: 4 },
  { id: "whey", name: "Odzywka bialkowa", unit: "g", kcal100: 390, protein100: 78, fat100: 6, carbs100: 8 },
  { id: "tofu", name: "Tofu naturalne", unit: "g", kcal100: 120, protein100: 13, fat100: 7, carbs100: 2 },
  { id: "tempeh", name: "Tempeh", unit: "g", kcal100: 190, protein100: 20, fat100: 11, carbs100: 8 },
  { id: "bacon", name: "Boczek", unit: "g", kcal100: 500, protein100: 15, fat100: 48, carbs100: 1 },
  { id: "pork_loin", name: "Schab pieczony", unit: "g", kcal100: 230, protein100: 27, fat100: 13, carbs100: 0 },
  { id: "pork_shoulder", name: "Lopatka wieprzowa", unit: "g", kcal100: 260, protein100: 24, fat100: 18, carbs100: 0 },
  { id: "meatballs", name: "Pulpety", unit: "g", kcal100: 230, protein100: 16, fat100: 16, carbs100: 7 },
  { id: "kebab_meat", name: "Mieso kebab", unit: "g", kcal100: 260, protein100: 18, fat100: 19, carbs100: 5 },
  { id: "beef_patty", name: "Kotlet wolowy burger", unit: "g", kcal100: 260, protein100: 25, fat100: 17, carbs100: 0 },
  { id: "duck", name: "Kaczka pieczona", unit: "g", kcal100: 300, protein100: 19, fat100: 25, carbs100: 0 },
  { id: "mackerel", name: "Makrela", unit: "g", kcal100: 260, protein100: 19, fat100: 20, carbs100: 0 },
  { id: "sardines", name: "Sardynki", unit: "g", kcal100: 210, protein100: 25, fat100: 11, carbs100: 0 },
  { id: "trout", name: "Pstrag", unit: "g", kcal100: 170, protein100: 24, fat100: 8, carbs100: 0 },
  { id: "pollock", name: "Mintaj", unit: "g", kcal100: 90, protein100: 20, fat100: 1, carbs100: 0 },
  { id: "squid", name: "Kalmary", unit: "g", kcal100: 92, protein100: 16, fat100: 1, carbs100: 3 },
  { id: "crab_sticks", name: "Paluszki krabowe", unit: "g", kcal100: 100, protein100: 8, fat100: 1, carbs100: 15 },
  { id: "cauliflower_rice", name: "Ryż z kalafiora", unit: "g", kcal100: 25, protein100: 2, fat100: 0, carbs100: 5 },
  { id: "celeriac", name: "Seler korzeniowy", unit: "g", kcal100: 42, protein100: 1.5, fat100: 0, carbs100: 9 },
  { id: "asparagus", name: "Szparagi", unit: "g", kcal100: 20, protein100: 2, fat100: 0, carbs100: 4 },
  { id: "brussels", name: "Brukselka", unit: "g", kcal100: 43, protein100: 3, fat100: 0, carbs100: 9 },
  { id: "eggplant", name: "Baklazan", unit: "g", kcal100: 25, protein100: 1, fat100: 0, carbs100: 6 },
  { id: "pepper", name: "Papryka", unit: "g", kcal100: 31, protein100: 1, fat100: 0, carbs100: 6 },
  { id: "onion", name: "Cebula", unit: "g", kcal100: 40, protein100: 1, fat100: 0, carbs100: 9 },
  { id: "garlic", name: "Czosnek", unit: "g", kcal100: 150, protein100: 6, fat100: 0, carbs100: 33 },
  { id: "olives", name: "Oliwki", unit: "g", kcal100: 145, protein100: 1, fat100: 15, carbs100: 4 },
  { id: "pickles_mix", name: "Warzywa konserwowe", unit: "g", kcal100: 25, protein100: 1, fat100: 0, carbs100: 5 },
  { id: "salsa_mild", name: "Sos pomidorowy lagodny", unit: "g", kcal100: 55, protein100: 2, fat100: 1, carbs100: 10 },
  { id: "tomato_passata", name: "Passata pomidorowa", unit: "g", kcal100: 35, protein100: 2, fat100: 0, carbs100: 6 },
  { id: "pesto", name: "Pesto", unit: "g", kcal100: 430, protein100: 5, fat100: 42, carbs100: 6 },
  { id: "guacamole", name: "Guacamole", unit: "g", kcal100: 160, protein100: 2, fat100: 14, carbs100: 8 },
  { id: "yogurt_sauce", name: "Sos jogurtowy", unit: "g", kcal100: 80, protein100: 4, fat100: 5, carbs100: 5 },
  { id: "breaded_chicken_ready", name: "Kotlet drobiowy panierowany gotowy", unit: "g", kcal100: 260, protein100: 20, fat100: 14, carbs100: 18 },
  { id: "keto_pizza_ready", name: "Pizza keto gotowa/domowa", unit: "g", kcal100: 260, protein100: 20, fat100: 17, carbs100: 6 },
  { id: "keto_pizza_tortilla", name: "Pizza keto na tortilli", unit: "g", kcal100: 240, protein100: 18, fat100: 14, carbs100: 10 },
  { id: "keto_waffle", name: "Gofr keto", unit: "g", kcal100: 260, protein100: 18, fat100: 18, carbs100: 8 },
  { id: "keto_pancake", name: "Nalesnik keto", unit: "g", kcal100: 210, protein100: 17, fat100: 13, carbs100: 8 },
  { id: "chaffle_ready", name: "Chaffle jajko + ser", unit: "g", kcal100: 300, protein100: 22, fat100: 23, carbs100: 3 },
  { id: "zucchini_noodles", name: "Makaron z cukinii", unit: "g", kcal100: 20, protein100: 1, fat100: 0, carbs100: 4 },
  { id: "egg_noodles_keto", name: "Makaron z jajka/paski omletu", unit: "g", kcal100: 155, protein100: 11, fat100: 11, carbs100: 2 },
  { id: "shirataki_rice", name: "Ryz konjac/shirataki", unit: "g", kcal100: 10, protein100: 0, fat100: 0, carbs100: 1 },
  { id: "tomato_soup_keto", name: "Pomidorowa keto", unit: "g", kcal100: 55, protein100: 3, fat100: 3, carbs100: 5 },
  { id: "broccoli_soup", name: "Zupa brokulowa", unit: "g", kcal100: 60, protein100: 3, fat100: 4, carbs100: 5 },
  { id: "cauliflower_soup", name: "Zupa kalafiorowa", unit: "g", kcal100: 55, protein100: 3, fat100: 3, carbs100: 6 },
  { id: "zucchini_soup", name: "Zupa krem z cukinii", unit: "g", kcal100: 45, protein100: 2, fat100: 3, carbs100: 4 },
  { id: "ceasar_salad", name: "Salatka cezar bez grzanek", unit: "g", kcal100: 165, protein100: 15, fat100: 10, carbs100: 4 },
  { id: "coleslaw", name: "Coleslaw", unit: "g", kcal100: 150, protein100: 1, fat100: 12, carbs100: 9 },
  { id: "greek_salad_ready", name: "Salatka grecka", unit: "g", kcal100: 120, protein100: 5, fat100: 9, carbs100: 5 },
  { id: "strawberries", name: "Truskawki", unit: "g", kcal100: 32, protein100: 1, fat100: 0, carbs100: 8 },
  { id: "raspberries", name: "Maliny", unit: "g", kcal100: 52, protein100: 1, fat100: 1, carbs100: 12 },
  { id: "blueberries", name: "Borowki", unit: "g", kcal100: 57, protein100: 1, fat100: 0, carbs100: 14 },
  { id: "white_sausage", name: "Biala kielbasa", unit: "g", kcal100: 270, protein100: 14, fat100: 23, carbs100: 2 },
  { id: "white_sausage_cooked", name: "Biala kielbasa parzona", unit: "g", kcal100: 250, protein100: 14, fat100: 21, carbs100: 2 },
  { id: "white_sausage_baked", name: "Biala kielbasa pieczona", unit: "g", kcal100: 300, protein100: 15, fat100: 26, carbs100: 2 },
  { id: "smoked_sausage", name: "Kielbasa wedzona", unit: "g", kcal100: 310, protein100: 16, fat100: 27, carbs100: 2 },
  { id: "silesian_sausage", name: "Kielbasa slaska", unit: "g", kcal100: 290, protein100: 14, fat100: 25, carbs100: 3 },
  { id: "frankfurter", name: "Frankfurterki", unit: "g", kcal100: 300, protein100: 14, fat100: 26, carbs100: 2 },
  { id: "black_pudding", name: "Kaszanka", unit: "g", kcal100: 240, protein100: 11, fat100: 18, carbs100: 12 },
  { id: "liver_pate", name: "Pasztet", unit: "g", kcal100: 320, protein100: 13, fat100: 28, carbs100: 7 },
  { id: "liver", name: "Watrobka drobiowa", unit: "g", kcal100: 165, protein100: 24, fat100: 6, carbs100: 1 },
  { id: "chicken_wing", name: "Skrzydelka kurczaka", unit: "g", kcal100: 240, protein100: 23, fat100: 16, carbs100: 0 },
  { id: "chicken_drumstick", name: "Palka z kurczaka", unit: "g", kcal100: 190, protein100: 25, fat100: 10, carbs100: 0 },
  { id: "chicken_minced", name: "Mieso mielone drobiowe", unit: "g", kcal100: 160, protein100: 20, fat100: 8, carbs100: 0 },
  { id: "turkey_minced", name: "Mieso mielone z indyka", unit: "g", kcal100: 150, protein100: 22, fat100: 7, carbs100: 0 },
  { id: "pork_minced", name: "Mieso mielone wieprzowe", unit: "g", kcal100: 260, protein100: 17, fat100: 21, carbs100: 0 },
  { id: "beef_minced", name: "Mieso mielone wolowe", unit: "g", kcal100: 250, protein100: 26, fat100: 17, carbs100: 0 },
  { id: "pork_tenderloin", name: "Poledwiczka wieprzowa", unit: "g", kcal100: 145, protein100: 26, fat100: 4, carbs100: 0 },
  { id: "pork_ribs", name: "Zeberka wieprzowe", unit: "g", kcal100: 320, protein100: 20, fat100: 27, carbs100: 0 },
  { id: "pork_knuckle", name: "Golonka", unit: "g", kcal100: 290, protein100: 25, fat100: 21, carbs100: 0 },
  { id: "beef_steak", name: "Stek wolowy", unit: "g", kcal100: 240, protein100: 27, fat100: 15, carbs100: 0 },
  { id: "beef_stew", name: "Wolowina gulaszowa", unit: "g", kcal100: 210, protein100: 25, fat100: 12, carbs100: 0 },
  { id: "veal", name: "Cielecina", unit: "g", kcal100: 170, protein100: 28, fat100: 6, carbs100: 0 },
  { id: "cod_fillet", name: "Filet z dorsza", unit: "g", kcal100: 82, protein100: 18, fat100: 1, carbs100: 0 },
  { id: "hake", name: "Morszczuk", unit: "g", kcal100: 90, protein100: 19, fat100: 1, carbs100: 0 },
  { id: "zander", name: "Sandacz", unit: "g", kcal100: 85, protein100: 19, fat100: 1, carbs100: 0 },
  { id: "carp", name: "Karp", unit: "g", kcal100: 160, protein100: 18, fat100: 10, carbs100: 0 },
  { id: "eel", name: "Wegorz", unit: "g", kcal100: 300, protein100: 18, fat100: 25, carbs100: 0 },
  { id: "smoked_salmon", name: "Losos wedzony", unit: "g", kcal100: 180, protein100: 22, fat100: 10, carbs100: 0 },
  { id: "smoked_mackerel", name: "Makrela wedzona", unit: "g", kcal100: 300, protein100: 20, fat100: 24, carbs100: 0 },
  { id: "herring_oil", name: "Sledz w oleju", unit: "g", kcal100: 260, protein100: 16, fat100: 22, carbs100: 1 },
  { id: "tuna_oil", name: "Tunczyk w oleju", unit: "g", kcal100: 200, protein100: 25, fat100: 11, carbs100: 0 },
  { id: "eggs_omelet_strips", name: "Paski z omletu", unit: "g", kcal100: 155, protein100: 11, fat100: 11, carbs100: 2 },
  { id: "egg_mayo_paste", name: "Pasta jajeczna", unit: "g", kcal100: 240, protein100: 13, fat100: 20, carbs100: 3 },
  { id: "mackerel_paste", name: "Pasta z makreli", unit: "g", kcal100: 260, protein100: 16, fat100: 21, carbs100: 3 },
  { id: "tuna_paste", name: "Pasta z tunczyka", unit: "g", kcal100: 170, protein100: 22, fat100: 8, carbs100: 2 },
  { id: "cottage_light", name: "Serek wiejski lekki", unit: "g", kcal100: 80, protein100: 12, fat100: 3, carbs100: 3 },
  { id: "quark_light", name: "Twarog chudy", unit: "g", kcal100: 100, protein100: 19, fat100: 1, carbs100: 4 },
  { id: "quark_fat", name: "Twarog tlusty", unit: "g", kcal100: 170, protein100: 16, fat100: 10, carbs100: 4 },
  { id: "mascarpone", name: "Mascarpone", unit: "g", kcal100: 430, protein100: 5, fat100: 44, carbs100: 4 },
  { id: "gouda", name: "Ser gouda", unit: "g", kcal100: 350, protein100: 25, fat100: 27, carbs100: 2 },
  { id: "edam", name: "Ser edamski", unit: "g", kcal100: 335, protein100: 26, fat100: 25, carbs100: 2 },
  { id: "camembert", name: "Camembert", unit: "g", kcal100: 300, protein100: 20, fat100: 24, carbs100: 1 },
  { id: "brie", name: "Brie", unit: "g", kcal100: 335, protein100: 21, fat100: 28, carbs100: 1 },
  { id: "ayran", name: "Ayran", unit: "g", kcal100: 35, protein100: 2, fat100: 2, carbs100: 3 },
  { id: "buttermilk", name: "Maslanka", unit: "g", kcal100: 45, protein100: 3, fat100: 2, carbs100: 5 },
  { id: "coconut_milk", name: "Mleczko kokosowe", unit: "g", kcal100: 200, protein100: 2, fat100: 20, carbs100: 3 },
  { id: "almond_milk", name: "Napoj migdalowy bez cukru", unit: "g", kcal100: 15, protein100: 1, fat100: 1, carbs100: 0 },
  { id: "keto_roll", name: "Bulka keto", unit: "g", kcal100: 260, protein100: 18, fat100: 17, carbs100: 8 },
  { id: "keto_crackers", name: "Krakersy keto", unit: "g", kcal100: 430, protein100: 18, fat100: 34, carbs100: 10 },
  { id: "pork_rinds", name: "Chipsy wieprzowe", unit: "g", kcal100: 545, protein100: 61, fat100: 31, carbs100: 0 },
  { id: "pickled_mushrooms", name: "Pieczarki marynowane", unit: "g", kcal100: 25, protein100: 2, fat100: 0, carbs100: 4 },
  { id: "radish", name: "Rzodkiewka", unit: "g", kcal100: 16, protein100: 1, fat100: 0, carbs100: 3 },
  { id: "kohlrabi", name: "Kalarepa", unit: "g", kcal100: 27, protein100: 2, fat100: 0, carbs100: 6 },
  { id: "leek", name: "Por", unit: "g", kcal100: 61, protein100: 2, fat100: 0, carbs100: 14 },
  { id: "celery_stalk", name: "Seler naciowy", unit: "g", kcal100: 16, protein100: 1, fat100: 0, carbs100: 3 },
  { id: "dill_pickle_soup", name: "Zupa ogorkowa keto", unit: "g", kcal100: 55, protein100: 4, fat100: 3, carbs100: 4 },
  { id: "cabbage_soup", name: "Kapusniak keto", unit: "g", kcal100: 70, protein100: 4, fat100: 5, carbs100: 5 },
  { id: "tripe_soup", name: "Flaki", unit: "g", kcal100: 85, protein100: 8, fat100: 5, carbs100: 3 },
  { id: "horseradish", name: "Chrzan", unit: "g", kcal100: 70, protein100: 2, fat100: 1, carbs100: 14 },
  { id: "mustard_dijon", name: "Musztarda dijon", unit: "g", kcal100: 85, protein100: 5, fat100: 5, carbs100: 6 },
  { id: "soy_sauce", name: "Sos sojowy", unit: "g", kcal100: 55, protein100: 8, fat100: 0, carbs100: 5 },
  { id: "tahini", name: "Tahini", unit: "g", kcal100: 595, protein100: 17, fat100: 54, carbs100: 21 },
  { id: "hazelnuts", name: "Orzechy laskowe", unit: "g", kcal100: 630, protein100: 15, fat100: 61, carbs100: 17 },
  { id: "pistachios", name: "Pistacje", unit: "g", kcal100: 560, protein100: 20, fat100: 45, carbs100: 28 },
  { id: "macadamia", name: "Orzechy macadamia", unit: "g", kcal100: 720, protein100: 8, fat100: 76, carbs100: 14 },
  { id: "dark_chocolate", name: "Czekolada gorzka 85%", unit: "g", kcal100: 600, protein100: 10, fat100: 50, carbs100: 20 }
];

function allCustomProducts() {
  const seen = new Set();
  return customProductCatalog.concat(expandedProductCatalog).filter(product => {
    if (seen.has(product.id)) return false;
    seen.add(product.id);
    return true;
  });
}

function allMealOptions() {
  return foodCatalog.concat(getCustomMeals());
}

function mealKind(item) {
  const text = `${item.name} ${item.text}`.toLowerCase();
  if (item.name === CANTEEN_MEAL_NAME) return "canteen";
  const dinnerWords = ["kantyna", "zupa", "rosol", "barszcz", "zurek", "flaki", "kurczak", "indyk", "dorsz", "losos", "ryba", "schab", "mielony", "karkowka", "gulasz", "leczo", "bigos", "golab", "wolowina", "wieprzowina", "pizza", "burger", "makaron", "kasza", "ryz", "ziemniaki", "pierogi"];
  return dinnerWords.some(word => text.includes(word)) ? "dinner" : "light";
}

function typeLabel(type) {
  return { light: "lekki", dinner: "obiadowy", canteen: "kantyna", any: "dowolny", random: "random" }[type] || "dowolny";
}

function getMealOptions(slotIndex, plan = null) {
  const type = plan?.mealTypes?.[slotIndex] || settings.mealTypes?.[slotIndex] || "any";
  const options = allMealOptions();
  if (type === "canteen") return options.filter(item => item.name === CANTEEN_MEAL_NAME);
  if (type === "any") return options;
  return options.slice().sort((a, b) => {
    const aMatch = mealKind(a) === type ? 0 : 1;
    const bMatch = mealKind(b) === type ? 0 : 1;
    return aMatch - bMatch || a.name.localeCompare(b.name, "pl");
  });
}

function fixedCanteenMeal() {
  return allMealOptions().find(item => item.name === CANTEEN_MEAL_NAME);
}

function setFixedCanteenMeal(plan, slotIndex) {
  const meal = fixedCanteenMeal();
  plan.selected[slotIndex] = 0;
  plan.weights[slotIndex] = meal ? baseGrams(meal) : 260;
}

function clampMealWeight(item, grams, allowIncrease = false) {
  const base = baseGrams(item);
  const max = allowIncrease ? 1000 : base;
  return Math.min(max, Math.max(30, Number(grams || base)));
}

function normalizeMealWeights(plan) {
  if (!plan.weights || plan.weights.length !== slotNames.length) return plan;
  const allowIncrease = Boolean(plan.fitExpanded);
  slotNames.forEach((_, slotIndex) => {
    if (plan.mealTypes?.[slotIndex] === "canteen") {
      setFixedCanteenMeal(plan, slotIndex);
      return;
    }
    const options = getMealOptions(slotIndex, plan);
    const item = options[plan.selected[slotIndex] || 0] || options[0];
    plan.weights[slotIndex] = clampMealWeight(item, plan.weights[slotIndex], allowIncrease || Boolean(plan.manualSlots?.[slotIndex]));
  });
  return plan;
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
      ["Skyr naturalny", "2-3 szt. opcjonalnie"],
      ["Kefir naturalny", "2-3 butelki"],
      ["Twarog poltlusty", "1-2 kostki opcjonalnie"],
      ["Serek wiejski", "6-8 szt."],
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
  mealTypes: ["light", "dinner", "dinner", "light"],
  targets: defaultTargets,
  drinkTime: "08:00",
  waterStart: "07:30",
  waterEnd: "20:30",
  notifications: false
};

const shiftPresets = {
  first: { label: "6:00", mealTimes: ["05:30", "10:30", "14:30", "18:30"], mealTypes: ["light", "canteen", "dinner", "light"], drinkTime: "06:00", waterStart: "05:30", waterEnd: "20:30" },
  second: { label: "14:00", mealTimes: ["09:00", "12:30", "17:00", "21:00"], mealTypes: ["light", "canteen", "dinner", "light"], drinkTime: "09:30", waterStart: "09:00", waterEnd: "22:30" },
  night: { label: "22:00", mealTimes: ["18:00", "22:00", "02:00", "06:30"], mealTypes: ["canteen", "dinner", "light", "light"], drinkTime: "21:30", waterStart: "18:00", waterEnd: "07:00" }
};

function currentPlanDayIndex() {
  const day = new Date().getDay();
  return day === 0 ? 6 : day - 1;
}

let selectedDay = Number(localStorage.getItem("selectedDay") ?? String(currentPlanDayIndex()));
let settings = JSON.parse(localStorage.getItem("settings") || JSON.stringify(defaultSettings));
settings = { ...defaultSettings, ...settings };
settings.targets = { ...defaultTargets, ...(settings.targets || {}) };
let deferredInstallPrompt = null;
let mealCameraStream = null;

const tabs = document.querySelectorAll(".tab");
const panels = {
  today: document.getElementById("todayPanel"),
  week: document.getElementById("weekPanel"),
  shopping: document.getElementById("shoppingPanel"),
  results: document.getElementById("resultsPanel"),
  water: document.getElementById("waterPanel"),
  settings: document.getElementById("settingsPanel")
};

const toast = document.getElementById("toast");

function storageKey(type) {
  return storageKeyForDay(type, selectedDay);
}

function localDateKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function storageKeyForDay(type, day) {
  const date = localDateKey();
  if (type === "plan") return `plan:week:day${day}`;
  return `${type}:${date}:day${day}`;
}

function oldDailyPlanKey(day) {
  return `plan:${localDateKey()}:day${day}`;
}

function getPlan() {
  return getPlanForDay(selectedDay);
}

function getPlanForDay(day) {
  const oldDailyKey = oldDailyPlanKey(day);
  const weeklyKey = storageKeyForDay("plan", day);
  const savedPlan = localStorage.getItem(weeklyKey) || localStorage.getItem(oldDailyKey) || "{}";
  const fallback = {
    selected: [0, 0, 0, 0],
    portions: [1, 1, 1, 1],
    weights: null,
    mealTimes: settings.mealTimes || defaultSettings.mealTimes,
    mealTypes: settings.mealTypes || defaultSettings.mealTypes,
    manualSlots: [false, false, false, false],
    shift: null,
    done: [],
    drinks: { nootri: 1, blackCoffee: 0 }
  };
  const plan = { ...fallback, ...JSON.parse(savedPlan) };
  restoreSelectedMeals(plan);
  return rememberSelectedMeals(normalizeMealWeights(backfillWeights(plan)));
}

function setPlan(plan) {
  localStorage.setItem(storageKey("plan"), JSON.stringify(rememberSelectedMeals(plan)));
}

function mealRef(item) {
  return item ? { name: item.name, kcal: Math.round(item.kcal) } : null;
}

function restoreSelectedMeals(plan) {
  if (!Array.isArray(plan.selectedMeals)) return plan;
  slotNames.forEach((_, slotIndex) => {
    const wanted = plan.selectedMeals[slotIndex];
    if (!wanted?.name) return;
    const options = getMealOptions(slotIndex, plan);
    const sameMeal = options.findIndex(item => item.name === wanted.name && Math.round(item.kcal) === Number(wanted.kcal));
    const sameName = options.findIndex(item => item.name === wanted.name);
    if (sameMeal >= 0 || sameName >= 0) {
      plan.selected[slotIndex] = sameMeal >= 0 ? sameMeal : sameName;
    }
  });
  return plan;
}

function rememberSelectedMeals(plan) {
  if (!Array.isArray(plan.selected)) return plan;
  plan.selectedMeals = slotNames.map((_, slotIndex) => {
    const options = getMealOptions(slotIndex, plan);
    return mealRef(options[plan.selected[slotIndex] || 0] || options[0]);
  });
  return plan;
}

function markManualSlot(plan, slotIndex, manual = true) {
  plan.manualSlots = [...(plan.manualSlots || [false, false, false, false])];
  plan.manualSlots[slotIndex] = manual;
}

function migratePlansToWeeklyKeys() {
  for (let day = 0; day < 7; day += 1) {
    const weeklyKey = storageKeyForDay("plan", day);
    const oldKey = oldDailyPlanKey(day);
    if (!localStorage.getItem(weeklyKey) && localStorage.getItem(oldKey)) {
      localStorage.setItem(weeklyKey, localStorage.getItem(oldKey));
    }
  }
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

function getResults() {
  return JSON.parse(localStorage.getItem("results") || "[]");
}

function setResults(results) {
  localStorage.setItem("results", JSON.stringify(results));
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

function getTargets() {
  return { ...defaultTargets, ...(settings.targets || {}) };
}

function macroLine(item, portion = 1) {
  return `${round(item.kcal * portion)} kcal | B ${round(item.protein * portion)} g | T ${round(item.fat * portion)} g | W ${round(item.carbs * portion)} g`;
}

function baseGrams(item) {
  if (item.grams) return item.grams;
  const text = `${item.name} ${item.text}`.toLowerCase();
  if (text.includes("zupa") || text.includes("rosol") || text.includes("barszcz") || text.includes("zurek") || text.includes("bulion")) return 400;
  if (text.includes("skyr") || text.includes("twarog") || text.includes("serek") || text.includes("jogurt")) return 170;
  if (text.includes("jajka") || text.includes("jajko") || text.includes("tunczyk")) return 200;
  return 250;
}

function portionText(item) {
  return item.portion || `porcja bazowa ok. ${baseGrams(item)} g`;
}

function parsedPortionComponents(item) {
  if (!item.portion) return [];
  return item.portion.split("+").map(part => {
    const match = part.trim().match(/^(.+?)\s+(?:ok\.\s*)?(\d+)\s*(g|ml)\b/i);
    if (!match) return null;
    return {
      name: match[1].trim(),
      grams: Number(match[2]),
      unit: match[3].toLowerCase()
    };
  }).filter(Boolean);
}

function portionComponents(item) {
  return item.components || parsedPortionComponents(item);
}

function scaledPortionText(item, grams) {
  const components = portionComponents(item);
  if (!components.length) return `${grams} g`;
  const factor = grams / baseGrams(item);
  const hasPieceUnits = components.some(component => component.unit === "szt.");
  let gramSum = 0;
  const gramIndexes = components
    .map((component, index) => component.unit === "szt." ? -1 : index)
    .filter(index => index >= 0);
  const lastGramIndex = gramIndexes[gramIndexes.length - 1];

  return components.map((component, index) => {
    if (component.unit === "szt.") {
      const amount = Math.max(1, Math.round(component.amount * factor));
      return `${amount} ${component.name}`;
    }
    let amount = Math.round(component.grams * factor);
    if (!hasPieceUnits && index === lastGramIndex) {
      amount = Math.max(0, grams - gramSum);
    }
    gramSum += amount;
    return `${component.name} ${amount} ${component.unit || "g"}`;
  }).join(" + ");
}

function mealDetailText(item, grams) {
  const base = baseGrams(item);
  if (Number(grams) === base) return item.text;
  return `Danie przeliczone do ${grams} g. Baza: ${portionText(item)}.`;
}

function portionFromGrams(item, grams) {
  return Math.max(0.1, Number(grams || baseGrams(item)) / baseGrams(item));
}

function gramsFromPortion(item, portion) {
  return Math.round(baseGrams(item) * Number(portion || 1));
}

function backfillWeights(plan) {
  if (!plan.mealTypes || plan.mealTypes.length !== slotNames.length) {
    plan.mealTypes = settings.mealTypes || defaultSettings.mealTypes;
  }
  if (!plan.mealTimes || plan.mealTimes.length !== slotNames.length) {
    plan.mealTimes = settings.mealTimes || defaultSettings.mealTimes;
  }
  if (plan.weights && plan.weights.length === slotNames.length) return plan;
  const weights = slotNames.map((_, slotIndex) => {
    const options = getMealOptions(slotIndex, plan);
    const item = options[plan.selected[slotIndex] || 0] || options[0];
    return gramsFromPortion(item, plan.portions?.[slotIndex] || 1);
  });
  return { ...plan, weights };
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

function mealChoiceListMarkup(options, selected, query = "") {
  const matched = options
    .map((option, optionIndex) => ({ option, optionIndex }))
    .filter(item => optionMatches(item.option, query));
  const visible = (matched.length ? matched : options.map((option, optionIndex) => ({ option, optionIndex }))).slice(0, 60);
  return visible.map(({ option, optionIndex }) => `
    <button class="meal-option ${optionIndex === selected ? "selected" : ""}" type="button" data-option="${optionIndex}">
      <strong>${option.name}</strong>
      <span>${option.text}</span>
      <em>${macroLine(option)}</em>
    </button>
  `).join("");
}

function optionCount(options, query = "") {
  const normalized = query.trim();
  if (!normalized) return options.length;
  return options.filter(option => optionMatches(option, query)).length;
}

function calculateTotals(plan = getPlan()) {
  const totals = { kcal: 0, protein: 0, fat: 0, carbs: 0 };
  plan.selected.forEach((optionIndex, slotIndex) => {
    const item = getMealOptions(slotIndex, plan)[optionIndex] || getMealOptions(slotIndex, plan)[0];
    const portion = portionFromGrams(item, plan.weights?.[slotIndex]);
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

function mealKcal(item, grams) {
  return item.kcal * portionFromGrams(item, grams);
}

function mealFitsType(item, type) {
  if (!type || type === "any" || type === "random") return true;
  return mealKind(item) === type;
}

function renderDayOptions() {
  const select = document.getElementById("daySelect");
  select.innerHTML = "";
  for (let index = 0; index < 7; index += 1) {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = dayNames[index];
    select.append(option);
  }
  select.value = String(selectedDay);
}

function fillCustomDatalists() {
  const productList = document.getElementById("customProductList");
  const readyList = document.getElementById("readyMealList");
  if (productList) {
    productList.innerHTML = allCustomProducts().slice().sort((a, b) => a.name.localeCompare(b.name, "pl")).map(product =>
      `<option value="${product.name}"></option>`
    ).join("");
  }
  if (readyList) {
    readyList.innerHTML = foodCatalog.slice().sort((a, b) => a.name.localeCompare(b.name, "pl")).map(item =>
      `<option value="${item.name}"></option>`
    ).join("");
  }
}

function findProductByInput(value) {
  const normalized = value.trim().toLowerCase();
  if (!normalized) return null;
  return allCustomProducts().find(product => product.id === value || product.name.toLowerCase() === normalized)
    || allCustomProducts().find(product => product.name.toLowerCase().includes(normalized));
}

function findReadyMealByInput(value) {
  const normalized = value.trim().toLowerCase();
  if (!normalized) return null;
  return foodCatalog.find(item => item.name.toLowerCase() === normalized)
    || foodCatalog.find(item => `${item.name} ${item.text}`.toLowerCase().includes(normalized));
}

function renderCustomIngredients() {
  const holder = document.getElementById("customIngredientRows");
  holder.innerHTML = "";
  for (let index = 0; index < 4; index += 1) {
    const row = document.createElement("div");
    row.className = "custom-ingredient-row";
    row.innerHTML = `
      <input class="custom-product-search" type="search" list="customProductList" aria-label="Produkt ${index + 1}" placeholder="${index === 0 ? "wpisz produkt" : "produkt"}">
      <input class="custom-amount" type="number" inputmode="decimal" min="0" step="1" placeholder="${index === 0 ? "ilosc/waga" : "opcjonalnie"}">
      <span class="custom-unit">${index === 0 ? "ilosc" : "-"}</span>
    `;
    row.querySelector(".custom-product-search").addEventListener("input", () => updateCustomUnit(row));
    holder.append(row);
  }
  fillCustomDatalists();
  updateCustomMode();
}

function updateCustomUnit(row) {
  const product = findProductByInput(row.querySelector(".custom-product-search").value);
  const unit = product ? product.unit : "-";
  row.querySelector(".custom-unit").textContent = unit === "szt." ? "szt." : "g";
}

function updateCustomMode() {
  const mode = document.querySelector("input[name='customMode']:checked")?.value || "products";
  document.getElementById("customProductMode").classList.toggle("hidden", mode !== "products");
  document.getElementById("customReadyMode").classList.toggle("hidden", mode !== "ready");
  updateReadyPreview();
}

function updateReadyPreview() {
  const preview = document.getElementById("customReadyPreview");
  if (!preview) return;
  const item = findReadyMealByInput(document.getElementById("customReadySearch").value);
  const grams = Number(document.getElementById("customReadyGrams").value || 0);
  if (!item) {
    preview.textContent = "Wpisz i wybierz gotowe danie z listy.";
    return;
  }
  const portion = portionFromGrams(item, grams || baseGrams(item));
  preview.textContent = `${item.name}: ${mealDetailText(item, grams || baseGrams(item))} | ${macroLine(item, portion)}`;
}

function renderSummary() {
  const plan = getPlan();
  const targets = getTargets();
  const totals = calculateTotals(plan);
  const remaining = targets.kcal - totals.kcal;
  const doneMeals = plan.done.length;
  const kcalText = `${round(totals.kcal)}/${targets.kcal}`;

  document.getElementById("dayName").textContent = dayNames[selectedDay];
  document.getElementById("mealCount").textContent = String(doneMeals);
  document.getElementById("kcalCount").textContent = kcalText;
  document.getElementById("todayKcal").textContent = `${round(totals.kcal)} kcal`;
  document.getElementById("todayProtein").textContent = `${round(totals.protein)} g`;
  document.getElementById("todayFat").textContent = `${round(totals.fat)} g`;
  document.getElementById("todayCarbs").textContent = `${round(totals.carbs)} g`;
  const remainingNode = document.getElementById("remainingKcal");
  if (remaining > 250) {
    remainingNode.textContent = `Brakuje ${round(remaining)} kcal do limitu`;
  } else if (remaining >= 0) {
    remainingNode.textContent = `${round(remaining)} kcal zapasu`;
  } else {
    remainingNode.textContent = `${Math.abs(round(remaining))} kcal ponad plan`;
  }
}

function renderMeals() {
  const plan = getPlan();
  const list = document.getElementById("mealsList");
  list.innerHTML = "";
  document.getElementById("daySelect").value = String(selectedDay);

  slotNames.forEach((_, slotIndex) => {
    const options = getMealOptions(slotIndex, plan);
    const selected = Number(plan.selected[slotIndex] || 0);
    const item = options[selected] || options[0];
    const grams = Number(plan.weights?.[slotIndex] || baseGrams(item));
    const portion = portionFromGrams(item, grams);
    const isDone = plan.done.includes(slotIndex);
    const isFixedCanteen = plan.mealTypes?.[slotIndex] === "canteen" && item.name === CANTEEN_MEAL_NAME;

    const card = document.createElement("article");
    card.className = `meal ${isDone ? "done" : ""}`;
    card.innerHTML = `
      <div class="meal-head">
        <span class="time">${plan.mealTimes?.[slotIndex] || settings.mealTimes[slotIndex]}</span>
        <h3>${slotNames[slotIndex]} <small>${typeLabel(plan.mealTypes?.[slotIndex])}</small></h3>
        <button class="check" type="button" aria-label="Odhacz posilek">${isDone ? "OK" : ""}</button>
      </div>
      <label class="choice-label">Typ posilku
        <select class="meal-type" data-slot="${slotIndex}">
          <option value="light" ${plan.mealTypes?.[slotIndex] === "light" ? "selected" : ""}>lekki</option>
          <option value="dinner" ${plan.mealTypes?.[slotIndex] === "dinner" ? "selected" : ""}>obiadowy</option>
          <option value="canteen" ${plan.mealTypes?.[slotIndex] === "canteen" ? "selected" : ""}>kantyna</option>
          <option value="any" ${plan.mealTypes?.[slotIndex] === "any" ? "selected" : ""}>dowolny</option>
          <option value="random">random</option>
        </select>
      </label>
      <button class="selected-meal" type="button" data-open-options="${slotIndex}">
        <strong>${item.name}</strong>
        <span>${mealDetailText(item, grams)}</span>
        <em>Zmien danie</em>
      </button>
      <button class="memory-button" type="button" data-save-meal="${slotIndex}">Zapisz do pamieci</button>
      <div class="meal-picker collapsed">
        <label class="choice-label">Co jesz? <em class="option-count">${options.length} dan</em>
          <input class="meal-search" type="search" data-slot="${slotIndex}" placeholder="Szukaj, np. p, zupa, kurczak">
        </label>
        <div class="meal-choice-list" data-slot="${slotIndex}">
          ${mealChoiceListMarkup(options, selected)}
        </div>
      </div>
      <div class="portion-row weight-row">
        <button type="button" data-step="-50" data-slot="${slotIndex}" ${isFixedCanteen ? "disabled" : ""}>-</button>
        <label><span>Gramatura</span><input class="weight-input" type="number" inputmode="numeric" min="30" max="1000" step="10" value="${grams}" data-slot="${slotIndex}" ${isFixedCanteen ? "disabled" : ""}></label>
        <button type="button" data-step="50" data-slot="${slotIndex}" ${isFixedCanteen ? "disabled" : ""}>+</button>
      </div>
      <p>${mealDetailText(item, grams)}</p>
      <p class="macro">${macroLine(item, portion)}</p>
      <p class="hint">Zjedz: ${scaledPortionText(item, grams)}. Razem: ${grams} g.</p>
    `;
    card.querySelector(".check").addEventListener("click", () => toggleMeal(slotIndex));
    card.querySelector(".meal-type").addEventListener("change", event => updateMealType(slotIndex, event.target.value));
    card.querySelector(".meal-search").addEventListener("input", event => filterMealOptions(slotIndex, Number(plan.selected[slotIndex] || 0), event.target.value, card));
    card.querySelector(".selected-meal").addEventListener("click", () => toggleMealChoiceList(card, true));
    card.querySelector(".memory-button").addEventListener("click", () => saveMealFromSlot(slotIndex));
    bindMealChoiceButtons(card, slotIndex);
    card.querySelector(".weight-input").addEventListener("change", event => updateWeight(slotIndex, Number(event.target.value)));
    card.querySelectorAll("button[data-step]").forEach(button => {
      button.addEventListener("click", () => changeWeight(slotIndex, Number(button.dataset.step)));
    });
    list.append(card);
  });

  renderDrinks();
  renderSummary();
  renderShopping();
  renderWeek();
}

function mealSnapshot(item, grams, name = item.name) {
  const portion = portionFromGrams(item, grams);
  const components = portionComponents(item);
  return {
    name,
    text: `${item.name} zapisane z planu (${grams} g)`,
    kcal: Math.round(item.kcal * portion),
    protein: Math.round(item.protein * portion),
    fat: Math.round(item.fat * portion),
    carbs: Math.round(item.carbs * portion),
    grams,
    portion: `${item.name} ${grams} g`,
    components: components.length ? components : [{ name: item.name, grams }]
  };
}

function saveMealFromSlot(slotIndex) {
  const plan = getPlan();
  const options = getMealOptions(slotIndex, plan);
  const item = options[plan.selected[slotIndex] || 0] || options[0];
  const grams = Number(plan.weights?.[slotIndex] || baseGrams(item));
  saveCustomMeal(mealSnapshot(item, grams));
  renderMeals();
  renderWeek();
  showToast("Zapisano posilek do pamieci.");
}

function addCustomMeal(meal) {
  if (meal.mode === "ready") {
    const item = findReadyMealByInput(meal.readyName);
    const grams = Math.max(30, Number(meal.readyGrams || baseGrams(item || {})));
    if (!item) {
      showToast("Wybierz gotowe danie z listy.");
      return;
    }
    const portion = portionFromGrams(item, grams);
    const nextMeal = {
      name: meal.name || item.name,
      text: item.text,
      kcal: Math.round(item.kcal * portion),
      protein: Math.round(item.protein * portion),
      fat: Math.round(item.fat * portion),
      carbs: Math.round(item.carbs * portion),
      grams,
      portion: `${item.name} ${grams} g`,
      components: [{ name: item.name, grams }]
    };
    saveCustomMeal(nextMeal);
    if (meal.slot !== "list") {
      applyCustomMealToSlot(nextMeal, Number(meal.slot));
    }
    clearCustomForm();
    renderMeals();
    renderWeek();
    showToast(`Dodano gotowe danie: ${nextMeal.kcal} kcal.`);
    return;
  }

  const ingredients = meal.ingredients
    .map(ingredient => {
      const product = findProductByInput(ingredient.productId);
      const amount = Number(ingredient.amount || 0);
      if (!product || !amount) return null;
      if (product.unit === "szt.") {
        return {
          product,
          amount,
          grams: Math.round(product.gramsPerUnit * amount),
          kcal: product.kcal * amount,
          protein: product.protein * amount,
          fat: product.fat * amount,
          carbs: product.carbs * amount,
          component: { name: product.name, amount, unit: "szt.", grams: Math.round(product.gramsPerUnit * amount) }
        };
      }
      const factor = amount / 100;
      return {
        product,
        amount,
        grams: amount,
        kcal: product.kcal100 * factor,
        protein: product.protein100 * factor,
        fat: product.fat100 * factor,
        carbs: product.carbs100 * factor,
        component: { name: product.name, grams: amount }
      };
    })
    .filter(Boolean);
  const grams = ingredients.reduce((sum, item) => sum + item.grams, 0);
  const kcal = Math.round(ingredients.reduce((sum, item) => sum + item.kcal, 0));
  const protein = Math.round(ingredients.reduce((sum, item) => sum + item.protein, 0));
  const fat = Math.round(ingredients.reduce((sum, item) => sum + item.fat, 0));
  const carbs = Math.round(ingredients.reduce((sum, item) => sum + item.carbs, 0));
  const components = ingredients.map(item => item.component);
  const componentText = ingredients.map(item =>
    item.product.unit === "szt." ? `${item.amount} x ${item.product.name}` : `${item.product.name} ${item.amount} g`
  ).join(" + ");
  const nextMeal = {
    name: meal.name || "Wlasny posilek",
    text: componentText,
    kcal,
    protein,
    fat,
    carbs,
    grams,
    portion: components.map(item => item.unit === "szt." ? `${item.amount} ${item.name}` : `${item.name} ${item.grams} g`).join(" + "),
    components
  };
  if (!ingredients.length) {
    showToast("Wybierz produkt i wpisz ilosc.");
    return;
  }
  saveCustomMeal(nextMeal);
  if (meal.slot !== "list") {
    applyCustomMealToSlot(nextMeal, Number(meal.slot));
  }
  clearCustomForm();
  renderMeals();
  renderWeek();
  showToast(`Dodano: ${nextMeal.kcal} kcal.`);
}

function resizePhoto(file, callback) {
  const reader = new FileReader();
  reader.onload = event => {
    const img = new Image();
    img.onload = () => {
      const maxSize = 720;
      const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      callback(canvas.toDataURL("image/jpeg", 0.72));
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

function handlePhotoMealInput(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  resizePhoto(file, dataUrl => {
    setPhotoMealImage(dataUrl);
  });
}

function setPhotoMealImage(dataUrl) {
  const preview = document.getElementById("photoMealPreview");
  preview.src = dataUrl;
  preview.classList.remove("hidden");
  preview.dataset.image = dataUrl;
}

async function startMealCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    showToast("Ta przegladarka nie obsluguje aparatu w aplikacji.");
    return;
  }
  try {
    mealCameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false
    });
    const video = document.getElementById("photoMealCamera");
    video.srcObject = mealCameraStream;
    video.classList.remove("hidden");
    document.getElementById("captureMealPhoto").disabled = false;
    document.getElementById("stopMealCamera").disabled = false;
    document.getElementById("startMealCamera").disabled = true;
  } catch (error) {
    showToast("Nie udalo sie wlaczyc aparatu. Sprawdz zgode w przegladarce.");
  }
}

function stopMealCamera() {
  if (mealCameraStream) {
    mealCameraStream.getTracks().forEach(track => track.stop());
    mealCameraStream = null;
  }
  const video = document.getElementById("photoMealCamera");
  video.srcObject = null;
  video.classList.add("hidden");
  document.getElementById("captureMealPhoto").disabled = true;
  document.getElementById("stopMealCamera").disabled = true;
  document.getElementById("startMealCamera").disabled = false;
}

function captureMealPhoto() {
  const video = document.getElementById("photoMealCamera");
  if (!video.videoWidth || !video.videoHeight) {
    showToast("Aparat jeszcze sie uruchamia.");
    return;
  }
  const maxSize = 720;
  const scale = Math.min(1, maxSize / Math.max(video.videoWidth, video.videoHeight));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(video.videoWidth * scale);
  canvas.height = Math.round(video.videoHeight * scale);
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  setPhotoMealImage(canvas.toDataURL("image/jpeg", 0.72));
  stopMealCamera();
  showToast("Zdjecie dodane do posilku.");
}

function addPhotoMeal() {
  const grams = Number(document.getElementById("photoMealGrams").value || 0);
  const kcal = Number(document.getElementById("photoMealKcal").value || 0);
  if (!grams || !kcal) {
    showToast("Wpisz gramature i kcal dla posilku ze zdjecia.");
    return;
  }
  const meal = {
    name: document.getElementById("photoMealName").value.trim() || "Posilek ze zdjecia",
    text: "Zapisane ze zdjecia w aplikacji",
    kcal: Math.round(kcal),
    protein: Math.round(Number(document.getElementById("photoMealProtein").value || 0)),
    fat: Math.round(Number(document.getElementById("photoMealFat").value || 0)),
    carbs: Math.round(Number(document.getElementById("photoMealCarbs").value || 0)),
    grams,
    portion: `porcja ze zdjecia ${grams} g`,
    components: [{ name: "posilek ze zdjecia", grams }],
    photo: document.getElementById("photoMealPreview").dataset.image || ""
  };
  saveCustomMeal(meal);
  const slot = document.getElementById("photoMealSlot").value;
  if (slot !== "list") applyCustomMealToSlot(meal, Number(slot));
  ["photoMealName", "photoMealGrams", "photoMealKcal", "photoMealProtein", "photoMealFat", "photoMealCarbs"].forEach(id => {
    document.getElementById(id).value = "";
  });
  document.getElementById("photoMealInput").value = "";
  const preview = document.getElementById("photoMealPreview");
  preview.removeAttribute("src");
  preview.dataset.image = "";
  preview.classList.add("hidden");
  renderMeals();
  renderWeek();
  showToast("Zapisano posilek ze zdjecia.");
}

function readCustomForm() {
  return {
    mode: document.querySelector("input[name='customMode']:checked")?.value || "products",
    name: document.getElementById("customName").value.trim(),
    ingredients: Array.from(document.querySelectorAll(".custom-ingredient-row")).map(row => ({
      productId: row.querySelector(".custom-product-search").value,
      amount: row.querySelector(".custom-amount").value
    })),
    readyName: document.getElementById("customReadySearch").value,
    readyGrams: document.getElementById("customReadyGrams").value,
    slot: document.getElementById("customSlot").value
  };
}

function clearCustomForm() {
  document.getElementById("customName").value = "";
  document.getElementById("customReadySearch").value = "";
  document.getElementById("customReadyGrams").value = "250";
  document.querySelectorAll(".custom-ingredient-row").forEach((row, index) => {
    row.querySelector(".custom-product-search").value = "";
    row.querySelector(".custom-amount").value = "";
    row.querySelector(".custom-unit").textContent = index === 0 ? "ilosc" : "-";
  });
  updateReadyPreview();
}

function applyCustomMealToSlot(meal, slotIndex) {
  const plan = getPlan();
  const options = getMealOptions(slotIndex, plan);
  const optionIndex = options.findIndex(item => item.name === meal.name && item.kcal === meal.kcal);
  plan.selected[slotIndex] = optionIndex >= 0 ? optionIndex : options.length - 1;
  plan.weights[slotIndex] = meal.grams;
  plan.fitExpanded = false;
  markManualSlot(plan, slotIndex);
  normalizeMealWeights(plan);
  setPlan(plan);
}

function filterMealOptions(slotIndex, selected, query, card) {
  const options = getMealOptions(slotIndex, getPlan());
  const list = card.querySelector(".meal-choice-list");
  toggleMealChoiceList(card, true);
  list.innerHTML = mealChoiceListMarkup(options, selected, query);
  const count = optionCount(options, query);
  card.querySelector(".option-count").textContent = query.trim() ? `${count} pasuje` : `${options.length} dan`;
  bindMealChoiceButtons(card, slotIndex);
}

function bindMealChoiceButtons(card, slotIndex) {
  card.querySelectorAll(".meal-option").forEach(button => {
    button.addEventListener("click", () => updateMealChoice(slotIndex, Number(button.dataset.option)));
  });
}

function toggleMealChoiceList(card, open) {
  card.querySelector(".meal-picker").classList.toggle("collapsed", !open);
}

function suggestMaxPortion(slotIndex, plan) {
  const targets = getTargets();
  const selected = Number(plan.selected[slotIndex] || 0);
  const item = getMealOptions(slotIndex, plan)[selected] || getMealOptions(slotIndex, plan)[0];
  const currentPortion = portionFromGrams(item, plan.weights?.[slotIndex]);
  const totals = calculateTotals(plan);
  const kcalWithoutThis = totals.kcal - item.kcal * currentPortion;
  const room = Math.max(0, targets.kcal - kcalWithoutThis);
  return Math.max(30, Math.floor((room / item.kcal) * baseGrams(item) / 10) * 10);
}

function updateMealChoice(slotIndex, optionIndex) {
  const plan = getPlan();
  plan.selected[slotIndex] = optionIndex;
  const item = getMealOptions(slotIndex, plan)[optionIndex] || getMealOptions(slotIndex, plan)[0];
  plan.weights[slotIndex] = baseGrams(item);
  plan.fitExpanded = false;
  markManualSlot(plan, slotIndex);
  if (plan.mealTypes?.[slotIndex] === "canteen") setFixedCanteenMeal(plan, slotIndex);
  setPlan(plan);
  renderMeals();
  showToast("Wybrano danie bez przeliczania dnia.");
}

function updateMealType(slotIndex, type) {
  if (type === "random") {
    randomizeMeal(slotIndex);
    return;
  }
  const plan = getPlan();
  const oldOptions = getMealOptions(slotIndex, plan);
  const oldItem = oldOptions[plan.selected[slotIndex] || 0];
  plan.mealTypes = [...(plan.mealTypes || settings.mealTypes || defaultSettings.mealTypes)];
  plan.mealTypes[slotIndex] = type;
  const newOptions = getMealOptions(slotIndex, plan);
  const canteenIndex = newOptions.findIndex(item => item.name === CANTEEN_MEAL_NAME);
  const sameIndex = type === "canteen" && canteenIndex >= 0 ? canteenIndex : newOptions.findIndex(item => oldItem && item.name === oldItem.name);
  plan.selected[slotIndex] = sameIndex >= 0 ? sameIndex : 0;
  const item = newOptions[plan.selected[slotIndex]] || newOptions[0];
  plan.weights[slotIndex] = baseGrams(item);
  plan.fitExpanded = false;
  markManualSlot(plan, slotIndex);
  if (type === "canteen") setFixedCanteenMeal(plan, slotIndex);
  setPlan(plan);
  renderMeals();
}

function randomizeMeal(slotIndex) {
  const plan = getPlan();
  if (plan.mealTypes?.[slotIndex] === "canteen") {
    showToast("Kantyna ma stala porcje.");
    renderMeals();
    return;
  }

  plan.mealTypes = [...(plan.mealTypes || settings.mealTypes || defaultSettings.mealTypes)];
  plan.mealTypes[slotIndex] = "any";
  const options = getMealOptions(slotIndex, plan);
  const current = options[plan.selected[slotIndex] || 0];
  const usedNames = new Set(slotNames.map((_, index) => {
    if (index === slotIndex) return null;
    const slotOptions = getMealOptions(index, plan);
    return (slotOptions[plan.selected[index] || 0] || slotOptions[0])?.name;
  }).filter(Boolean));
  const candidates = options
    .map((item, optionIndex) => ({ item, optionIndex }))
    .filter(({ item }) => item.name !== CANTEEN_MEAL_NAME)
    .filter(({ item }) => item.name !== current?.name)
    .filter(({ item }) => !usedNames.has(item.name));
  const pool = candidates.length ? candidates : options
    .map((item, optionIndex) => ({ item, optionIndex }))
    .filter(({ item }) => item.name !== CANTEEN_MEAL_NAME && item.name !== current?.name);
  if (!pool.length) {
    showToast("Brak innego dania do wylosowania.");
    renderMeals();
    return;
  }

  const choice = pool[Math.floor(Math.random() * pool.length)];
  plan.selected[slotIndex] = choice.optionIndex;
  const targets = getTargets();
  const totals = calculateTotals(plan);
  const currentPortion = portionFromGrams(choice.item, plan.weights?.[slotIndex]);
  const kcalWithoutThis = totals.kcal - choice.item.kcal * currentPortion;
  const room = Math.max(0, targets.kcal - kcalWithoutThis);
  const grams = room ? Math.round(Math.min(practicalMaxGrams(choice.item), Math.max(80, (room / choice.item.kcal) * baseGrams(choice.item))) / 10) * 10 : baseGrams(choice.item);
  plan.weights[slotIndex] = clampMealWeight(choice.item, grams, true);
  markManualSlot(plan, slotIndex, false);
  plan.fitExpanded = true;
  setPlan(plan);
  renderMeals();
  showToast(`Wylosowano: ${choice.item.name}.`);
}

function updateWeight(slotIndex, grams) {
  const plan = getPlan();
  if (plan.mealTypes?.[slotIndex] === "canteen") {
    setFixedCanteenMeal(plan, slotIndex);
    setPlan(plan);
    renderMeals();
    showToast("Kantyna ma stala porcje: mieso 110 g + surowka 150 g.");
    return;
  }
  const selected = Number(plan.selected[slotIndex] || 0);
  const item = getMealOptions(slotIndex, plan)[selected] || getMealOptions(slotIndex, plan)[0];
  plan.weights[slotIndex] = clampMealWeight(item, grams, true);
  plan.fitExpanded = false;
  markManualSlot(plan, slotIndex);
  setPlan(plan);
  renderMeals();
}

function changeWeight(slotIndex, step) {
  const plan = getPlan();
  if (plan.mealTypes?.[slotIndex] === "canteen") {
    setFixedCanteenMeal(plan, slotIndex);
    setPlan(plan);
    renderMeals();
    showToast("Kantyna ma stala porcje: mieso 110 g + surowka 150 g.");
    return;
  }
  const selected = Number(plan.selected[slotIndex] || 0);
  const item = getMealOptions(slotIndex, plan)[selected] || getMealOptions(slotIndex, plan)[0];
  const current = Number(plan.weights?.[slotIndex] || baseGrams(item));
  plan.weights[slotIndex] = clampMealWeight(item, current + step, true);
  plan.fitExpanded = false;
  markManualSlot(plan, slotIndex);
  setPlan(plan);
  renderMeals();
}

function suggestDayPlan() {
  const plan = getPlan();
  const used = new Set();
  const lightBySlot = [
    ["3 jajka + ogorek", "Omlet prosty", "Pasta jajeczna", "Jajka na miekko"],
    ["Serek wiejski", "Serek + losos", "Jajko + mozzarella", "Tunczyk mini"],
    ["Tunczyk + jajko", "Ryba lekka", "Kurczak lekki", "Resztki obiadu"],
    ["Pasta tunczykowa", "Serek wiejski", "Wedlina awaryjna", "Jajeczne kluski"]
  ];
  const dinnerBySlot = [
    ["Pomidorowa + omlet", "Rosol bez makaronu", "Zupa krem", "Kalafiorowa"],
    ["Kurczak + brokul", "Indyk + fasolka", "Kurczak z surowka", "Mieso w sosie + surowka"],
    ["Dorsz + warzywa", "Losos + brokul", "Ryba z warzywami", "Krewetki + warzywa"],
    ["Gulasz bez kaszy", "Leczo bez cukru", "Bigos keto", "Kotlet bez panierki"]
  ];

  slotNames.forEach((_, slotIndex) => {
    const type = plan.mealTypes?.[slotIndex] || "any";
    const preferred = type === "dinner" ? dinnerBySlot[slotIndex] : lightBySlot[slotIndex];
    const options = getMealOptions(slotIndex, plan);
    let foundIndex = preferred
      .map(name => options.findIndex(item => item.name === name && !used.has(item.name)))
      .find(index => index >= 0);
    if (foundIndex === undefined) {
      foundIndex = options.findIndex(item => !used.has(item.name));
    }
    plan.selected[slotIndex] = foundIndex >= 0 ? foundIndex : 0;
    const item = options[plan.selected[slotIndex]] || options[0];
    used.add(item.name);
    plan.weights[slotIndex] = baseGrams(item);
    if (type === "canteen") setFixedCanteenMeal(plan, slotIndex);
  });

  plan.manualSlots = [false, false, false, false];
  normalizeMealWeights(plan);
  optimizeMealChoicesToLimit(plan, getWorkLockedSlots(plan));
  plan.fitExpanded = false;
  setPlan(plan);
  renderMeals();
  showToast("Zaproponowano dzien blizej limitu kcal.");
}

function fitRemainingMealsToLimit() {
  const plan = getPlan();
  const alreadyLocked = Array.from(new Set([...getWorkLockedSlots(plan), ...(plan.done || [])]));
  const manualSlots = (plan.manualSlots || []).map((isManual, slotIndex) => isManual ? slotIndex : -1).filter(slotIndex => slotIndex >= 0);
  const unlocked = slotNames
    .map((_, slotIndex) => slotIndex)
    .filter(slotIndex => !alreadyLocked.includes(slotIndex));
  const autoSlots = unlocked.filter(slotIndex => !manualSlots.includes(slotIndex));
  const slotsToFit = autoSlots.length ? autoSlots : (manualSlots.length ? [] : unlocked);
  if (!slotsToFit.length) {
    showToast("Brak niezmienionych posilkow do dopasowania.");
    return;
  }
  const lockForFit = slotNames
    .map((_, slotIndex) => slotIndex)
    .filter(slotIndex => !slotsToFit.includes(slotIndex));
  if (!fitOpenMealsToLimit(plan, slotsToFit)) {
    fitPlanToLimit(plan, lockForFit);
  }
}

function practicalMaxGrams(item) {
  const text = `${item.name} ${item.text}`.toLowerCase();
  if (text.includes("zupa") || text.includes("rosol") || text.includes("barszcz") || text.includes("zurek")) return 650;
  return mealKind(item) === "dinner" ? 650 : 450;
}

function fitOpenMealsToLimit(plan, slotsToFit) {
  if (!slotsToFit.length) return false;
  const targets = getTargets();
  const fixedKcal = slotNames.reduce((sum, _, slotIndex) => {
    if (slotsToFit.includes(slotIndex)) return sum;
    const options = getMealOptions(slotIndex, plan);
    const item = options[plan.selected[slotIndex] || 0] || options[0];
    return sum + mealKcal(item, plan.weights?.[slotIndex]);
  }, 0) + drinks.reduce((sum, drink) => sum + drink.kcal * Number(plan.drinks?.[drink.id] || 0), 0);

  let room = Math.max(0, targets.kcal - fixedKcal);
  if (!room) return false;
  const usedNames = new Set(slotNames.map((_, slotIndex) => {
    if (slotsToFit.includes(slotIndex)) return null;
    const options = getMealOptions(slotIndex, plan);
    return (options[plan.selected[slotIndex] || 0] || options[0])?.name;
  }).filter(Boolean));

  slotsToFit.forEach((slotIndex, index) => {
    const targetForSlot = room / Math.max(1, slotsToFit.length - index);
    const type = plan.mealTypes?.[slotIndex] || "any";
    const options = getMealOptions(slotIndex, plan);
    const candidates = options
      .map((item, optionIndex) => ({ item, optionIndex }))
      .filter(({ item }) => item.name !== CANTEEN_MEAL_NAME && mealFitsType(item, type));

    let best = null;
    candidates.forEach(candidate => {
      const base = baseGrams(candidate.item);
      const kcalPerGram = candidate.item.kcal / base;
      const max = practicalMaxGrams(candidate.item);
      const grams = Math.round(Math.min(max, Math.max(80, targetForSlot / kcalPerGram)) / 10) * 10;
      const kcal = mealKcal(candidate.item, grams);
      const over = Math.max(0, kcal - targetForSlot);
      const under = Math.max(0, targetForSlot - kcal);
      const duplicatePenalty = usedNames.has(candidate.item.name) ? 250 : 0;
      const hugePortionPenalty = grams > 500 ? (grams - 500) * 1.5 : 0;
      const portionPenalty = Math.abs(grams - base) * 0.12;
      const score = under + over * 3 + duplicatePenalty + hugePortionPenalty + portionPenalty;
      if (!best || score < best.score) best = { ...candidate, grams, score };
    });

    if (!best) return;
    plan.selected[slotIndex] = best.optionIndex;
    plan.weights[slotIndex] = best.grams;
    usedNames.add(best.item.name);
    room = Math.max(0, room - mealKcal(best.item, best.grams));
  });

  plan.fitExpanded = true;
  setPlan(plan);
  renderMeals();
  const totals = calculateTotals(plan);
  const diff = Math.round(targets.kcal - totals.kcal);
  if (Math.abs(diff) <= 80) {
    showToast("Dopasowano wolne posilki do limitu.");
  } else if (diff > 0) {
    showToast(`Dopasowano wolne posilki. Zostaje ${diff} kcal.`);
  } else {
    showToast(`Dopasowano wolne posilki. ${Math.abs(diff)} kcal ponad plan.`);
  }
  return true;
}

function optimizeMealChoicesToLimit(plan, lockedSlots = []) {
  const targets = getTargets();
  normalizeMealWeights(plan);
  const locked = Array.from(new Set([...lockedSlots, ...getWorkLockedSlots(plan), ...(plan.done || [])]));
  const adjustable = slotNames
    .map((_, slotIndex) => slotIndex)
    .filter(slotIndex => !locked.includes(slotIndex) && plan.mealTypes?.[slotIndex] !== "canteen");

  if (!adjustable.length) return false;

  const fixedTotals = { kcal: 0, protein: 0, fat: 0, carbs: 0 };
  slotNames.forEach((_, slotIndex) => {
    if (!locked.includes(slotIndex) && plan.mealTypes?.[slotIndex] !== "canteen") return;
    const options = getMealOptions(slotIndex, plan);
    const item = options[plan.selected[slotIndex] || 0] || options[0];
    const portion = portionFromGrams(item, plan.weights?.[slotIndex]);
    fixedTotals.kcal += item.kcal * portion;
    fixedTotals.protein += item.protein * portion;
    fixedTotals.fat += item.fat * portion;
    fixedTotals.carbs += item.carbs * portion;
  });
  drinks.forEach(drink => {
    const count = Number(plan.drinks?.[drink.id] || 0);
    fixedTotals.kcal += drink.kcal * count;
    fixedTotals.protein += drink.protein * count;
    fixedTotals.fat += drink.fat * count;
    fixedTotals.carbs += drink.carbs * count;
  });

  const currentNames = new Set();
  slotNames.forEach((_, slotIndex) => {
    const options = getMealOptions(slotIndex, plan);
    const item = options[plan.selected[slotIndex] || 0] || options[0];
    if (item) currentNames.add(item.name);
  });

  const candidateSets = adjustable.map(slotIndex => {
    const type = plan.mealTypes?.[slotIndex] || "any";
    const options = getMealOptions(slotIndex, plan)
      .map((item, optionIndex) => ({ item, optionIndex }))
      .filter(({ item }) => mealFitsType(item, type))
      .filter(({ item }) => item.name !== CANTEEN_MEAL_NAME)
      .sort((a, b) => b.item.kcal - a.item.kcal);
    const selected = Number(plan.selected[slotIndex] || 0);
    const selectedItem = getMealOptions(slotIndex, plan)[selected];
    const keepCurrent = selectedItem ? [{ item: selectedItem, optionIndex: selected }] : [];
    const merged = keepCurrent.concat(options).filter((candidate, index, array) =>
      array.findIndex(other => other.item.name === candidate.item.name) === index
    );
    return merged.slice(0, 18);
  });

  let best = null;

  function scoreChoice(total, names) {
    const over = Math.max(0, total.kcal - targets.kcal);
    const under = Math.max(0, targets.kcal - total.kcal);
    const carbOver = Math.max(0, total.carbs - targets.carbs);
    const proteinUnder = Math.max(0, targets.protein - total.protein);
    const duplicatePenalty = names.length - new Set(names).size;
    return under + over * 4 + carbOver * 20 + proteinUnder * 0.2 + duplicatePenalty * 250;
  }

  function walk(position, total, choices, names) {
    if (position === adjustable.length) {
      const score = scoreChoice(total, names);
      if (!best || score < best.score) best = { score, choices: [...choices], total: { ...total } };
      return;
    }

    candidateSets[position].forEach(candidate => {
      const nextTotal = {
        kcal: total.kcal + candidate.item.kcal,
        protein: total.protein + candidate.item.protein,
        fat: total.fat + candidate.item.fat,
        carbs: total.carbs + candidate.item.carbs
      };
      if (nextTotal.kcal > targets.kcal + 120) return;
      choices.push(candidate);
      names.push(candidate.item.name);
      walk(position + 1, nextTotal, choices, names);
      names.pop();
      choices.pop();
    });
  }

  walk(0, fixedTotals, [], Array.from(currentNames).filter(name => {
    return !adjustable.some(slotIndex => {
      const options = getMealOptions(slotIndex, plan);
      const item = options[plan.selected[slotIndex] || 0] || options[0];
      return item?.name === name;
    });
  }));

  if (!best) return false;

  best.choices.forEach((choice, index) => {
    const slotIndex = adjustable[index];
    plan.selected[slotIndex] = choice.optionIndex;
    plan.weights[slotIndex] = baseGrams(choice.item);
  });
  normalizeMealWeights(plan);
  return true;
}

function fitPlanToLimit(plan, lockedSlots = []) {
  const targets = getTargets();
  const selectedBeforeFit = slotNames.map((_, slotIndex) => {
    const options = getMealOptions(slotIndex, plan);
    return mealRef(options[plan.selected[slotIndex] || 0] || options[0]);
  });
  normalizeMealWeights(plan);
  plan.selectedMeals = selectedBeforeFit;
  restoreSelectedMeals(plan);
  const locked = Array.from(new Set([...lockedSlots, ...getWorkLockedSlots(plan), ...(plan.done || [])]));
  const adjustable = slotNames
    .map((_, slotIndex) => slotIndex)
    .filter(slotIndex => !locked.includes(slotIndex));

  const slots = adjustable.length ? adjustable : slotNames.map((_, slotIndex) => slotIndex).filter(slotIndex => !locked.includes(slotIndex));
  if (!slots.length) {
    setPlan(plan);
    renderMeals();
    showToast("Brak wolnych posilkow do dopasowania.");
    return;
  }

  const fixedKcal = slotNames.reduce((sum, _, slotIndex) => {
    if (slots.includes(slotIndex)) return sum;
    const options = getMealOptions(slotIndex, plan);
    const item = options[plan.selected[slotIndex] || 0] || options[0];
    return sum + mealKcal(item, plan.weights?.[slotIndex]);
  }, 0);

  const adjustableKcal = slots.reduce((sum, slotIndex) => {
    const options = getMealOptions(slotIndex, plan);
    const item = options[plan.selected[slotIndex] || 0] || options[0];
    return sum + mealKcal(item, plan.weights?.[slotIndex]);
  }, 0);

  const room = Math.max(0, targets.kcal - fixedKcal);
  if (!adjustableKcal || !room) {
    setPlan(plan);
    renderMeals();
    showToast("Nie da sie zejsc do limitu bez zmiany wybranych dan.");
    return;
  }

  const factor = room / adjustableKcal;
  slots.forEach(slotIndex => {
    const options = getMealOptions(slotIndex, plan);
    const item = options[plan.selected[slotIndex] || 0] || options[0];
    const current = Number(plan.weights?.[slotIndex] || baseGrams(item));
    plan.weights[slotIndex] = clampMealWeight(item, Math.round(current * factor / 10) * 10, factor > 1);
  });
  plan.fitExpanded = factor > 1;
  plan.selectedMeals = selectedBeforeFit;
  restoreSelectedMeals(plan);

  setPlan(plan);
  renderMeals();
  const totals = calculateTotals(plan);
  const diff = Math.round(targets.kcal - totals.kcal);
  if (Math.abs(diff) <= 80) {
    showToast("Dopasowano gramatury bez zmiany posilkow.");
  } else if (diff > 0) {
    showToast(`Dopasowano bez zmiany posilkow. Zostaje ${diff} kcal.`);
  } else {
    showToast(`Dopasowano bez zmiany posilkow. ${Math.abs(diff)} kcal ponad plan.`);
  }
}

function getWorkLockedSlots(plan) {
  return slotNames
    .map((_, slotIndex) => slotIndex)
    .filter(slotIndex => isWorkMeal(selectedDay, plan.shift, slotIndex));
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
  for (let day = 0; day < 7; day += 1) {
    const plan = getPlanForDay(day);
    const card = document.createElement("article");
    card.className = "week-day";
    const totals = calculateTotals(plan);
    const items = plan.selected.map((optionIndex, slotIndex) => {
      const options = getMealOptions(slotIndex, plan);
      const item = options[optionIndex] || options[0];
      const grams = Number(plan.weights?.[slotIndex] || baseGrams(item));
      const portion = portionFromGrams(item, grams);
      return `<li>${plan.mealTimes?.[slotIndex] || ""} ${slotNames[slotIndex]} (${typeLabel(plan.mealTypes?.[slotIndex])}): ${item.name} <span>${grams} g | ${macroLine(item, portion)}</span></li>`;
    }).join("");
    card.innerHTML = `<h3>${dayNames[day]} <span>${round(totals.kcal)} kcal</span></h3><ol>${items}</ol>`;
    list.append(card);
  }
}

function renderShopping() {
  const list = document.getElementById("shoppingList");
  const done = getShoppingDone();
  list.innerHTML = "";

  buildDynamicShoppingPlan().forEach((group, groupIndex) => {
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

function renderResults() {
  const results = getResults();
  const summary = document.getElementById("resultsSummary");
  const list = document.getElementById("resultsList");
  summary.innerHTML = "";
  list.innerHTML = "";

  if (!results.length) {
    summary.innerHTML = `<div class="result-stat"><span>Start</span><strong>Dodaj pierwszy pomiar</strong></div>`;
    return;
  }

  const latest = results[0];
  const oldest = results[results.length - 1];
  const diff = Number(latest.weight || 0) && Number(oldest.weight || 0) ? Number(latest.weight) - Number(oldest.weight) : 0;
  summary.innerHTML = `
    <div class="result-stat"><span>Ostatnia waga</span><strong>${latest.weight || "-"} kg</strong></div>
    <div class="result-stat"><span>Zmiana od startu</span><strong>${diff > 0 ? "+" : ""}${diff.toFixed(1)} kg</strong></div>
    <div class="result-stat"><span>Ostatnie cisnienie</span><strong>${latest.pressure || "-"}</strong></div>
  `;

  results.slice(0, 20).forEach(result => {
    const card = document.createElement("article");
    card.className = "week-day";
    card.innerHTML = `
      <h3>${result.date}</h3>
      <ol>
        <li>Waga: ${result.weight || "-"} kg</li>
        <li>Cisnienie: ${result.pressure || "-"}</li>
        <li>Zgaga: ${result.heartburn || "0"}/10 | Bol: ${result.pain || "0"}/10</li>
        <li>Notatka: ${result.note || "-"}</li>
      </ol>
    `;
    list.append(card);
  });
}

function addResult() {
  const result = {
    date: new Date().toLocaleDateString("pl-PL"),
    weight: document.getElementById("resultWeight").value,
    pressure: document.getElementById("resultPressure").value.trim(),
    heartburn: document.getElementById("resultHeartburn").value,
    pain: document.getElementById("resultPain").value,
    note: document.getElementById("resultNote").value.trim()
  };
  if (!result.weight && !result.pressure && !result.note) {
    showToast("Wpisz wage, cisnienie albo notatke.");
    return;
  }
  setResults([result, ...getResults()].slice(0, 100));
  ["resultWeight", "resultPressure", "resultHeartburn", "resultPain", "resultNote"].forEach(id => {
    document.getElementById(id).value = "";
  });
  renderResults();
  showToast("Pomiar zapisany.");
}

function buildDynamicShoppingPlan() {
  const menuItems = [];
  const workMeals = [];
  const products = new Map();

  function addProduct(name, amount) {
    if (!products.has(name)) products.set(name, []);
    products.get(name).push(amount);
  }

  for (let day = 0; day < 7; day += 1) {
    const plan = getPlanForDay(day);
    plan.selected.forEach((optionIndex, slotIndex) => {
      const options = getMealOptions(slotIndex, plan);
      const item = options[optionIndex] || options[0];
      const grams = Number(plan.weights?.[slotIndex] || baseGrams(item));
      menuItems.push([`${dayShortNames[day]} ${slotNames[slotIndex]}`, `${item.name} (${grams} g)`]);
      if (isWorkMeal(day, plan.shift, slotIndex)) {
        workMeals.push([`${dayShortNames[day]} ${slotNames[slotIndex]}`, `${item.name} (${grams} g)`]);
        return;
      }
      suggestProducts(item, grams, addProduct);
    });
  }

  const productItems = Array.from(products.entries()).map(([name, amounts]) => [name, amounts.join(" + ")]);
  return [
    { category: "Menu tygodnia", items: menuItems },
    { category: "Odliczone posilki w pracy", items: workMeals.length ? workMeals : [["Brak", "W dni robocze ustaw zmiane 6:00, 14:00 albo 22:00"]] },
    { category: "Zakupy z wybranych dan", items: productItems.length ? productItems : [["Brak", "Uloz menu w zakladce Plan/Tydzien"]] },
    { category: "Stale zapasy", items: [["Nootri", "jesli pijesz codziennie"], ["Woda niegazowana", "min. 2,5 l dziennie"], ["Lagodne przyprawy", "bez ostrego"], ["Oliwa", "do odmierzania lyzka"]] }
  ];
}

function isWorkMeal(day, shift, slotIndex) {
  const isWeekend = day >= 5;
  if (isWeekend) return false;
  const plan = getPlanForDay(day);
  if (plan.mealTypes?.[slotIndex] === "canteen") return true;
  if (!shift) return false;
  if (shift === "first" || shift === "second") return slotIndex === 1;
  if (shift === "night") return slotIndex === 0;
  return false;
}

function suggestProducts(item, grams, addProduct) {
  const text = `${item.name} ${item.text}`.toLowerCase();
  const amount = `${grams} g`;
  if (text.includes("kantyna")) {
    addProduct("Posilki w kantynie", item.name);
    return;
  }
  if (text.includes("jaj")) addProduct("Jajka", amount);
  if (text.includes("kurczak")) addProduct("Kurczak", amount);
  if (text.includes("indyk")) addProduct("Indyk", amount);
  if (text.includes("dorsz") || text.includes("mintaj") || text.includes("losos") || text.includes("ryba")) addProduct("Ryby", amount);
  if (text.includes("tunczyk")) addProduct("Tunczyk", amount);
  if (text.includes("twarog")) addProduct("Twarog", amount);
  if (text.includes("skyr")) addProduct("Skyr", amount);
  if (text.includes("serek")) addProduct("Serek wiejski/proteinowy", amount);
  if (text.includes("kefir")) addProduct("Kefir", amount);
  if (text.includes("jogurt")) addProduct("Jogurt naturalny", amount);
  if (text.includes("brokul")) addProduct("Brokul", amount);
  if (text.includes("cukinia")) addProduct("Cukinia", amount);
  if (text.includes("fasolka")) addProduct("Fasolka szparagowa", amount);
  if (text.includes("ogorek") || text.includes("ogork")) addProduct("Ogorki", amount);
  if (text.includes("salata") || text.includes("surowka")) addProduct("Salata/surowka", amount);
  if (text.includes("makaron")) addProduct("Makaron lub paski z omletu", item.name);
  if (text.includes("ziemniaki")) addProduct("Ziemniaki", "mala porcja");
  if (text.includes("ryz")) addProduct("Ryz", "mala porcja");
  if (text.includes("kasza")) addProduct("Kasza", "mala porcja");
  if (text.includes("zupa") || text.includes("rosol") || text.includes("barszcz") || text.includes("zurek")) addProduct("Skladniki na zupe", item.name);
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
  const targets = getTargets();
  document.getElementById("targetKcal").value = targets.kcal;
  document.getElementById("targetProtein").value = targets.protein;
  document.getElementById("targetFat").value = targets.fat;
  document.getElementById("targetCarbs").value = targets.carbs;
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
    targets: {
      kcal: Number(document.getElementById("targetKcal").value || defaultTargets.kcal),
      protein: Number(document.getElementById("targetProtein").value || defaultTargets.protein),
      fat: Number(document.getElementById("targetFat").value || defaultTargets.fat),
      carbs: Number(document.getElementById("targetCarbs").value || defaultTargets.carbs)
    },
    mealTimes: [0, 1, 2, 3].map(index => document.getElementById(`mealTime${index}`).value || defaultSettings.mealTimes[index]),
    drinkTime: document.getElementById("drinkTime").value || defaultSettings.drinkTime,
    waterStart: document.getElementById("waterStart").value || defaultSettings.waterStart,
    waterEnd: document.getElementById("waterEnd").value || defaultSettings.waterEnd
  };
  localStorage.setItem("settings", JSON.stringify(settings));
  const plan = getPlan();
  plan.mealTimes = [...settings.mealTimes];
  setPlan(plan);
  renderMeals();
  renderWeek();
  renderShopping();
  showToast("Godziny zapisane.");
}

function applyShiftPreset(presetId) {
  const preset = shiftPresets[presetId];
  settings = { ...settings, ...preset };
  localStorage.setItem("settings", JSON.stringify(settings));
  const plan = getPlan();
  plan.mealTypes = [...preset.mealTypes];
  plan.mealTimes = [...preset.mealTimes];
  plan.shift = presetId;
  slotNames.forEach((_, slotIndex) => {
    const options = getMealOptions(slotIndex, plan);
    const item = options[plan.selected[slotIndex] || 0] || options[0];
    if (plan.mealTypes?.[slotIndex] === "canteen") {
      setFixedCanteenMeal(plan, slotIndex);
    } else {
      plan.weights[slotIndex] = plan.weights[slotIndex] || baseGrams(item);
    }
  });
  setPlan(plan);
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

  const times = plan.mealTimes || settings.mealTimes;
  times.forEach((time, index) => {
    const key = `notify:meal:${stamp}:${index}`;
    if (settings.notifications && Notification.permission === "granted" && isCurrentMinute(time) && !localStorage.getItem(key)) {
      const options = getMealOptions(index, plan);
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

  document.getElementById("fitLimit").addEventListener("click", fitRemainingMealsToLimit);
  document.getElementById("suggestDay").addEventListener("click", suggestDayPlan);

  document.querySelectorAll("input[name='customMode']").forEach(input => {
    input.addEventListener("change", updateCustomMode);
  });
  document.getElementById("customReadySearch").addEventListener("input", updateReadyPreview);
  document.getElementById("customReadyGrams").addEventListener("input", updateReadyPreview);
  document.getElementById("addCustomMeal").addEventListener("click", () => addCustomMeal(readCustomForm()));
  document.getElementById("startMealCamera").addEventListener("click", startMealCamera);
  document.getElementById("captureMealPhoto").addEventListener("click", captureMealPhoto);
  document.getElementById("stopMealCamera").addEventListener("click", stopMealCamera);
  document.getElementById("photoMealInput").addEventListener("change", handlePhotoMealInput);
  document.getElementById("addPhotoMeal").addEventListener("click", addPhotoMeal);
  document.getElementById("addResult").addEventListener("click", addResult);

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
  migratePlansToWeeklyKeys();
  renderCustomIngredients();
  renderDayOptions();
  renderSettings();
  renderMeals();
  renderWeek();
  renderShopping();
  renderResults();
  renderWater();
  bindEvents();
  if ("serviceWorker" in navigator) {
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });
    navigator.serviceWorker.register("sw.js?v=55").then(registration => {
      registration.update();
      if (registration.waiting) registration.waiting.postMessage({ type: "SKIP_WAITING" });
      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;
        if (!worker) return;
        worker.addEventListener("statechange", () => {
          if (worker.state === "installed" && navigator.serviceWorker.controller) {
            worker.postMessage({ type: "SKIP_WAITING" });
          }
        });
      });
    });
  }
  window.setInterval(notificationLoop, 30000);
}

boot();
