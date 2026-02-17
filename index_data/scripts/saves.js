import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCSRiNFYMMCAUTAhPBwRFQhF3rnFGC5hvQ",
  authDomain: "smcsave-e10de.firebaseapp.com",
  projectId: "smcsave-e10de"
}
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
window.saveGame = async function(username, code) {
  let profileID = username + "_" + code;
  await setDoc(doc(db, "users", profileID), {
    highScore: localStorage.getItem('high-score'),
    meawToken: localStorage.getItem('meawTokenStorage'),
    gold: localStorage.getItem('goldStorage'),
    alphaCoin: localStorage.getItem('alphaCoinStorage'),
    crystal: localStorage.getItem('crystalStorage'),
    ticket: localStorage.getItem('ticketStorage'),
    ticketChromatic: localStorage.getItem('ticketChromaticStorage'),
    ticketPremium: localStorage.getItem('ticketPremiumStorage'),
    ticketPremium2: localStorage.getItem('ticketPremium2Storage'),
    virtualToken: localStorage.getItem('virtualTokenStorage'),
    food000: localStorage.getItem('food000Storage'),
    food001: localStorage.getItem('food001Storage'),
    food002: localStorage.getItem('food002Storage'),
    food003: localStorage.getItem('food003Storage'),
    food004: localStorage.getItem('food004Storage'),
    food005: localStorage.getItem('food005Storage'),
    food006: localStorage.getItem('food006Storage'),
    food007: localStorage.getItem('food007Storage'),
    food008: localStorage.getItem('food008Storage'),
    food009: localStorage.getItem('food009Storage'),
    food010: localStorage.getItem('food010Storage'),
    food011: localStorage.getItem('food011Storage'),
    food012: localStorage.getItem('food012Storage'),
    food013: localStorage.getItem('food013Storage'),
    food014: localStorage.getItem('food014Storage'),
    food015: localStorage.getItem('food015Storage'),
    food016: localStorage.getItem('food016Storage'),
    food017: localStorage.getItem('food017Storage'),
    food018: localStorage.getItem('food018Storage'),
    food019: localStorage.getItem('food019Storage'),
    food020: localStorage.getItem('food020Storage'),
    food021: localStorage.getItem('food021Storage'),
    food022: localStorage.getItem('food022Storage'),
    food023: localStorage.getItem('food023Storage'),
    food024: localStorage.getItem('food024Storage'),
    food025: localStorage.getItem('food025Storage'),
    food026: localStorage.getItem('food026Storage'),
    food027: localStorage.getItem('food027Storage'),
    food028: localStorage.getItem('food028Storage'),
    food029: localStorage.getItem('food029Storage'),
    food030: localStorage.getItem('food030Storage'),
    food031: localStorage.getItem('food031Storage'),
    food032: localStorage.getItem('food032Storage'),
    food033: localStorage.getItem('food033Storage'),
    food034: localStorage.getItem('food034Storage'),
    food035: localStorage.getItem('food035Storage'),
    food036: localStorage.getItem('food036Storage'),
    food037: localStorage.getItem('food037Storage'),
    food038: localStorage.getItem('food038Storage'),
    food039: localStorage.getItem('food039Storage'),
    food040: localStorage.getItem('food040Storage'),
    food041: localStorage.getItem('food041Storage'),
    food042: localStorage.getItem('food042Storage'),
    food043: localStorage.getItem('food043Storage'),
    food044: localStorage.getItem('food044Storage'),
    food045: localStorage.getItem('food045Storage'),
    food046: localStorage.getItem('food046Storage'),
    food047: localStorage.getItem('food047Storage'),
    food048: localStorage.getItem('food048Storage'),
    food049: localStorage.getItem('food049Storage'),
    food050: localStorage.getItem('food050Storage'),
    food051: localStorage.getItem('food051Storage'),
    food052: localStorage.getItem('food052Storage'),
    food053: localStorage.getItem('food053Storage'),
    food054: localStorage.getItem('food054Storage'),
    food055: localStorage.getItem('food055Storage'),
    food056: localStorage.getItem('food056Storage'),
    food057: localStorage.getItem('food057Storage'),
    food058: localStorage.getItem('food058Storage'),
    food059: localStorage.getItem('food059Storage'),
    food060: localStorage.getItem('food060Storage'),
    food061: localStorage.getItem('food061Storage'),
    food062: localStorage.getItem('food062Storage'),
    food063: localStorage.getItem('food063Storage'),
    food064: localStorage.getItem('food064Storage'),
    food065: localStorage.getItem('food065Storage'),
    food066: localStorage.getItem('food066Storage'),
    food067: localStorage.getItem('food067Storage'),
    food068: localStorage.getItem('food068Storage'),
    food069: localStorage.getItem('food069Storage'),
    food070: localStorage.getItem('food070Storage'),
    food071: localStorage.getItem('food071Storage'),
    food072: localStorage.getItem('food072Storage'),
    food073: localStorage.getItem('food073Storage'),
    food074: localStorage.getItem('food074Storage'),
    food075: localStorage.getItem('food075Storage'),
    food076: localStorage.getItem('food076Storage'),
    food077: localStorage.getItem('food077Storage'),
    Akashic: localStorage.getItem('Akashic'),
    Alborada: localStorage.getItem('Alborada'),
    Andromeda: localStorage.getItem('Andromeda'),
    Arthur: localStorage.getItem('Arthur'),
    Aurora: localStorage.getItem('Aurora'),
    Boltus: localStorage.getItem('Boltus'),
    Caramel: localStorage.getItem('Caramel'),
    DeathKnell: localStorage.getItem('Death Knell'),
    Doomlight: localStorage.getItem('Doomlight'),
    Dreadwolf: localStorage.getItem('Dreadwolf'),
    Firefox: localStorage.getItem('Firefox'),
    Firestar: localStorage.getItem('Firestar'),
    Flamenco: localStorage.getItem('Flamenco'),
    Gabriel: localStorage.getItem('Gabriel'),
    Gaia: localStorage.getItem('Gaia'),
    GuerillaHunter: localStorage.getItem('Guerilla Hunter'),
    Hotsteel: localStorage.getItem('Hotsteel'),
    Hurricane: localStorage.getItem('Hurricane'),
    JOJO: localStorage.getItem('JOJO'),
    Lancelot: localStorage.getItem('Lancelot'),
    Michael: localStorage.getItem('Michael'),
    MoonRabbit: localStorage.getItem('Moon Rabbit'),
    Nebula: localStorage.getItem('Nebula'),
    NeutronStar: localStorage.getItem('Neutron Star'),
    NorthernKnight: localStorage.getItem('Northern Knight'),
    Pulsar: localStorage.getItem('Pulsar'),
    Ranger: localStorage.getItem('Ranger'),
    Raven: localStorage.getItem('Raven'),
    Shiranui: localStorage.getItem('Shiranui'),
    Skyfall: localStorage.getItem('Skyfall'),
    Skyfire: localStorage.getItem('Skyfire'),
    Skylark: localStorage.getItem('Skylark'),
    SnowMirage: localStorage.getItem('Snow Mirage'),
    Tempest: localStorage.getItem('Tempest'),
    TrioofEnders: localStorage.getItem('Trio of Enders'),
    Twilight: localStorage.getItem('Twilight'),
    Ventorus: localStorage.getItem('Ventorus'),
    Aya: localStorage.getItem('Aya'),
    Belladonna: localStorage.getItem('Belladonna'),
    Cyrus: localStorage.getItem('Cyrus'),
    Fran: localStorage.getItem('Fran'),
    Furanku: localStorage.getItem('Furanku'),
    Iori: localStorage.getItem('Iori'),
    Ivan: localStorage.getItem('Ivan'),
    Jaka: localStorage.getItem('Jaka'),
    JiuChong: localStorage.getItem('Jiu Chong'),
    Joanna: localStorage.getItem('Joanna'),
    Kije: localStorage.getItem('Kije'),
    Kikina: localStorage.getItem('Kikina'),
    KizunaAi: localStorage.getItem('Kizuna Ai'),
    Lillian: localStorage.getItem('Lillian'),
    Lysa: localStorage.getItem('Lysa'),
    Matilda: localStorage.getItem('Matilda'),
    Mia: localStorage.getItem('Mia'),
    Mila: localStorage.getItem('Mila'),
    Mobius: localStorage.getItem('Mobius'),
    Nighthawk: localStorage.getItem('Nighthawk'),
    Ning: localStorage.getItem('Ning'),
    Norma: localStorage.getItem('Norma'),
    Opal: localStorage.getItem('Opal'),
    Purity: localStorage.getItem('Purity'),
    RED: localStorage.getItem('RED'),
    Riko: localStorage.getItem('Riko'),
    Rom: localStorage.getItem('Rom'),
    Serena: localStorage.getItem('Serena'),
    Shin: localStorage.getItem('Shin'),
    SilverDeacon: localStorage.getItem('Silver Deacon'),
    Tarantula: localStorage.getItem('Tarantula'),
    Vanessa: localStorage.getItem('Vanessa'),
    Villar: localStorage.getItem('Villar'),
    Vita: localStorage.getItem('Vita'),
    Yang: localStorage.getItem('Yang'),
    Yulia: localStorage.getItem('Yulia'),
    Yutong: localStorage.getItem('Yutong'),
    Zoe: localStorage.getItem('Zoe'),
    ShadowWatcher: localStorage.getItem('Shadow Watcher'),
    YellowDwarf: localStorage.getItem('Yellow Dwarf')
  });
  console.log("Game saved in cloud");
}
window.loadGame = async function(username, code) {
  let profileID = username + "_" + code;
  let docSnap = await getDoc(doc(db, "users", profileID));
  if (docSnap.exists()) {
    let data = docSnap.data();
    localStorage.setItem('high-score', data.highScore);
    localStorage.setItem('meawTokenStorage', data.meawToken);
    localStorage.setItem('goldStorage', data.gold);
    localStorage.setItem('alphaCoinStorage', data.alphaCoin);
    localStorage.setItem('crystalStorage', data.crystal);
    localStorage.setItem('ticketStorage', data.ticket);
    localStorage.setItem('ticketChromaticStorage', data.ticketChromatic);
    localStorage.setItem('ticketPremiumStorage', data.ticketPremium);
    localStorage.setItem('ticketPremium2Storage', data.ticketPremium2);
    localStorage.setItem('virtualTokenStorage', data.virtualToken);
    localStorage.setItem('food000Storage', data.food000);
    localStorage.setItem('food001Storage', data.food001);
    localStorage.setItem('food002Storage', data.food002);
    localStorage.setItem('food003Storage', data.food003);
    localStorage.setItem('food004Storage', data.food004);
    localStorage.setItem('food005Storage', data.food005);
    localStorage.setItem('food006Storage', data.food006);
    localStorage.setItem('food007Storage', data.food007);
    localStorage.setItem('food008Storage', data.food008);
    localStorage.setItem('food009Storage', data.food009);
    localStorage.setItem('food010Storage', data.food010);
    localStorage.setItem('food011Storage', data.food011);
    localStorage.setItem('food012Storage', data.food012);
    localStorage.setItem('food013Storage', data.food013);
    localStorage.setItem('food014Storage', data.food014);
    localStorage.setItem('food015Storage', data.food015);
    localStorage.setItem('food016Storage', data.food016);
    localStorage.setItem('food017Storage', data.food017);
    localStorage.setItem('food018Storage', data.food018);
    localStorage.setItem('food019Storage', data.food019);
    localStorage.setItem('food020Storage', data.food020);
    localStorage.setItem('food021Storage', data.food021);
    localStorage.setItem('food022Storage', data.food022);
    localStorage.setItem('food023Storage', data.food023);
    localStorage.setItem('food024Storage', data.food024);
    localStorage.setItem('food025Storage', data.food025);
    localStorage.setItem('food026Storage', data.food026);
    localStorage.setItem('food027Storage', data.food027);
    localStorage.setItem('food028Storage', data.food028);
    localStorage.setItem('food029Storage', data.food029);
    localStorage.setItem('food030Storage', data.food030);
    localStorage.setItem('food031Storage', data.food031);
    localStorage.setItem('food032Storage', data.food032);
    localStorage.setItem('food033Storage', data.food033);
    localStorage.setItem('food034Storage', data.food034);
    localStorage.setItem('food035Storage', data.food035);
    localStorage.setItem('food036Storage', data.food036);
    localStorage.setItem('food037Storage', data.food037);
    localStorage.setItem('food038Storage', data.food038);
    localStorage.setItem('food039Storage', data.food039);
    localStorage.setItem('food040Storage', data.food040);
    localStorage.setItem('food041Storage', data.food041);
    localStorage.setItem('food042Storage', data.food042);
    localStorage.setItem('food043Storage', data.food043);
    localStorage.setItem('food044Storage', data.food044);
    localStorage.setItem('food045Storage', data.food045);
    localStorage.setItem('food046Storage', data.food046);
    localStorage.setItem('food047Storage', data.food047);
    localStorage.setItem('food048Storage', data.food048);
    localStorage.setItem('food049Storage', data.food049);
    localStorage.setItem('food050Storage', data.food050);
    localStorage.setItem('food051Storage', data.food051);
    localStorage.setItem('food052Storage', data.food052);
    localStorage.setItem('food053Storage', data.food053);
    localStorage.setItem('food054Storage', data.food054);
    localStorage.setItem('food055Storage', data.food055);
    localStorage.setItem('food056Storage', data.food056);
    localStorage.setItem('food057Storage', data.food057);
    localStorage.setItem('food058Storage', data.food058);
    localStorage.setItem('food059Storage', data.food059);
    localStorage.setItem('food060Storage', data.food060);
    localStorage.setItem('food061Storage', data.food061);
    localStorage.setItem('food062Storage', data.food062);
    localStorage.setItem('food063Storage', data.food063);
    localStorage.setItem('food064Storage', data.food064);
    localStorage.setItem('food065Storage', data.food065);
    localStorage.setItem('food066Storage', data.food066);
    localStorage.setItem('food067Storage', data.food067);
    localStorage.setItem('food068Storage', data.food068);
    localStorage.setItem('food069Storage', data.food069);
    localStorage.setItem('food070Storage', data.food070);
    localStorage.setItem('food071Storage', data.food071);
    localStorage.setItem('food072Storage', data.food072);
    localStorage.setItem('food073Storage', data.food073);
    localStorage.setItem('food074Storage', data.food074);
    localStorage.setItem('food075Storage', data.food075);
    localStorage.setItem('food076Storage', data.food076);
    localStorage.setItem('food077Storage', data.food077);
    localStorage.setItem('Akashic', data.Akashic);
    localStorage.setItem('Alborada', data.Alborada);
    localStorage.setItem('Andromeda', data.Andromeda);
    localStorage.setItem('Arthur', data.Arthur);
    localStorage.setItem('Aurora', data.Aurora);
    localStorage.setItem('Boltus', data.Boltus);
    localStorage.setItem('Caramel', data.Caramel);
    localStorage.setItem('Death Knell', data.DeathKnell);
    localStorage.setItem('Doomlight', data.Doomlight);
    localStorage.setItem('Dreadwolf', data.Dreadwolf);
    localStorage.setItem('Firefox', data.Firefox);
    localStorage.setItem('Firestar', data.Firestar);
    localStorage.setItem('Flamenco', data.Flamenco);
    localStorage.setItem('Gabriel', data.Gabriel);
    localStorage.setItem('Gaia', data.Gaia);
    localStorage.setItem('Guerilla Hunter', data.GuerillaHunter);
    localStorage.setItem('Hotsteel', data.Hotsteel);
    localStorage.setItem('Hurricane', data.Hurricane);
    localStorage.setItem('JOJO', data.JOJO);
    localStorage.setItem('Lancelot', data.Lancelot);
    localStorage.setItem('Michael', data.Michael);
    localStorage.setItem('Moon Rabbit', data.MoonRabbit);
    localStorage.setItem('Nebula', data.Nebula);
    localStorage.setItem('Neutron Star', data.NeutronStar);
    localStorage.setItem('Northern Knight', data.NorthernKnight);
    localStorage.setItem('Pulsar', data.Pulsar);
    localStorage.setItem('Ranger', data.Ranger);
    localStorage.setItem('Raven', data.Raven);
    localStorage.setItem('Shiranui', data.Shiranui);
    localStorage.setItem('Skyfall', data.Skyfall);
    localStorage.setItem('Skyfire', data.Skyfire);
    localStorage.setItem('Skylark', data.Skylark);
    localStorage.setItem('Snow Mirage', data.SnowMirage);
    localStorage.setItem('Tempest', data.Tempest);
    localStorage.setItem('Trio of Enders', data.TrioofEnders);
    localStorage.setItem('Twilight', data.Twilight);
    localStorage.setItem('Ventorus', data.Ventorus);
    localStorage.setItem('Aya', data.Aya);
    localStorage.setItem('Belladonna', data.Belladonna);
    localStorage.setItem('Cyrus', data.Cyrus);
    localStorage.setItem('Fran', data.Fran);
    localStorage.setItem('Furanku', data.Furanku);
    localStorage.setItem('Iori', data.Iori);
    localStorage.setItem('Ivan', data.Ivan);
    localStorage.setItem('Jaka', data.Jaka);
    localStorage.setItem('Jiu Chong', data.JiuChong);
    localStorage.setItem('Joanna', data.Joanna);
    localStorage.setItem('Kije', data.Kije);
    localStorage.setItem('Kikina', data.Kikina);
    localStorage.setItem('Kizuna Ai', data.KizunaAi);
    localStorage.setItem('Lillian', data.Lillian);
    localStorage.setItem('Lysa', data.Lysa);
    localStorage.setItem('Matilda', data.Matilda);
    localStorage.setItem('Mia', data.Mia);
    localStorage.setItem('Mila', data.Mila);
    localStorage.setItem('Mobius', data.Mobius);
    localStorage.setItem('Nighthawk', data.Nighthawk);
    localStorage.setItem('Ning', data.Ning);
    localStorage.setItem('Norma', data.Norma);
    localStorage.setItem('Opal', data.Opal);
    localStorage.setItem('Purity', data.Purity);
    localStorage.setItem('RED', data.RED);
    localStorage.setItem('Riko', data.Riko);
    localStorage.setItem('Rom', data.Rom);
    localStorage.setItem('Serena', data.Serena);
    localStorage.setItem('Shin', data.Shin);
    localStorage.setItem('Silver Deacon', data.SilverDeacon);
    localStorage.setItem('Tarantula', data.Tarantula);
    localStorage.setItem('Vanessa', data.Vanessa);
    localStorage.setItem('Villar', data.Villar);
    localStorage.setItem('Vita', data.Vita);
    localStorage.setItem('Yang', data.Yang);
    localStorage.setItem('Yulia', data.Yulia);
    localStorage.setItem('Yutong', data.Yutong);
    localStorage.setItem('Zoe', data.Zoe);
    localStorage.setItem('Shadow Watcher', data.ShadowWatcher);
    localStorage.setItem('Yellow Dwarf', data.YellowDwarf);
    console.log("Game loaded");
  }else{
    console.log("Profile not found");
  }
}
window.register = async function(username, code) {
  let profileID = username + "_" + code;
  let docRef = doc(db, "users", profileID);
  let docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Account already exists");
    return;
  }
  await setDoc(docRef, {
    highScore: 0,
    meawToken: 0,
    gold: 0,
    alphaCoin: 0,
    crystal: 0,
    ticket: 0,
    ticketChromatic: 0,
    ticketPremium: 0,
    ticketPremium2: 0,
    virtualToken: 0,
    food000: 0,
    food001: 0,
    food002: 0,
    food003: 0,
    food004: 0,
    food005: 0,
    food006: 0,
    food007: 0,
    food008: 0,
    food009: 0,
    food010: 0,
    food011: 0,
    food012: 0,
    food013: 0,
    food014: 0,
    food015: 0,
    food016: 0,
    food017: 0,
    food018: 0,
    food019: 0,
    food020: 0,
    food021: 0,
    food022: 0,
    food023: 0,
    food024: 0,
    food025: 0,
    food026: 0,
    food027: 0,
    food028: 0,
    food029: 0,
    food030: 0,
    food031: 0,
    food032: 0,
    food033: 0,
    food034: 0,
    food035: 0,
    food036: 0,
    food037: 0,
    food038: 0,
    food039: 0,
    food040: 0,
    food041: 0,
    food042: 0,
    food043: 0,
    food044: 0,
    food045: 0,
    food046: 0,
    food047: 0,
    food048: 0,
    food049: 0,
    food050: 0,
    food051: 0,
    food052: 0,
    food053: 0,
    food054: 0,
    food055: 0,
    food056: 0,
    food057: 0,
    food058: 0,
    food059: 0,
    food060: 0,
    food061: 0,
    food062: 0,
    food063: 0,
    food064: 0,
    food065: 0,
    food066: 0,
    food067: 0,
    food068: 0,
    food069: 0,
    food070: 0,
    food071: 0,
    food072: 0,
    food073: 0,
    food074: 0,
    food075: 0,
    food076: 0,
    food077: 0,
    Akashic: null,
    Alborada: null,
    Andromeda: null,
    Arthur: null,
    Aurora: null,
    Boltus: null,
    Caramel: null,
    DeathKnell: null,
    Doomlight: null,
    Dreadwolf: null,
    Firefox: null,
    Firestar: null,
    Flamenco: null,
    Gabriel: null,
    Gaia: null,
    GuerillaHunter: null,
    Hotsteel: null,
    Hurricane: null,
    JOJO: null,
    Lancelot: null,
    Michael: null,
    MoonRabbit: null,
    Nebula: null,
    NeutronStar: null,
    NorthernKnight: null,
    Pulsar: null,
    Ranger: null,
    Raven: null,
    Shiranui: null,
    Skyfall: null,
    Skyfire: null,
    Skylark: null,
    SnowMirage: null,
    Tempest: null,
    TrioofEnders: null,
    Twilight: null,
    Ventorus: null,
    Aya: null,
    Belladonna: null,
    Cyrus: null,
    Fran: null,
    Furanku: null,
    Iori: null,
    Ivan: null,
    Jaka: null,
    JiuChong: null,
    Joanna: null,
    Kije: null,
    Kikina: null,
    KizunaAi: null,
    Lillian: null,
    Lysa: null,
    Matilda: null,
    Mia: null,
    Mila: null,
    Mobius: null,
    Nighthawk: null,
    Ning: null,
    Norma: null,
    Opal: null,
    Purity: null,
    RED: null,
    Riko: null,
    Rom: null,
    Serena: null,
    Shin: null,
    SilverDeacon: null,
    Tarantula: null,
    Vanessa: null,
    Villar: null,
    Vita: null,
    Yang: null,
    Yulia: null,
    Yutong: null,
    Zoe: null,
    ShadowWatcher: null,
    YellowDwarf: null
  });
  console.log("Account created");
}
window.login = async function(username, code) {
  let profileID = username + "_" + code;
  let docRef = doc(db, "user", profileID);
  let docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    console.log("Account not found");
    return;
  }
  let data = docSnap.data();
  localStorage.setItem('high-score', data.highScore);
  localStorage.setItem('meawTokenStorage', data.meawToken);
  localStorage.setItem('goldStorage', data.gold);
  localStorage.setItem('alphaCoinStorage', data.alphaCoin);
  localStorage.setItem('crystalStorage', data.crystal);
  localStorage.setItem('ticketStorage', data.ticket);
  localStorage.setItem('ticketChromaticStorage', data.ticketChromatic);
  localStorage.setItem('ticketPremiumStorage', data.ticketPremium);
  localStorage.setItem('ticketPremium2Storage', data.ticketPremium2);
  localStorage.setItem('virtualTokenStorage', data.virtualToken);
  localStorage.setItem('food000Storage', data.food000);
  localStorage.setItem('food001Storage', data.food001);
  localStorage.setItem('food002Storage', data.food002);
  localStorage.setItem('food003Storage', data.food003);
  localStorage.setItem('food004Storage', data.food004);
  localStorage.setItem('food005Storage', data.food005);
  localStorage.setItem('food006Storage', data.food006);
  localStorage.setItem('food007Storage', data.food007);
  localStorage.setItem('food008Storage', data.food008);
  localStorage.setItem('food009Storage', data.food009);
  localStorage.setItem('food010Storage', data.food010);
  localStorage.setItem('food011Storage', data.food011);
  localStorage.setItem('food012Storage', data.food012);
  localStorage.setItem('food013Storage', data.food013);
  localStorage.setItem('food014Storage', data.food014);
  localStorage.setItem('food015Storage', data.food015);
  localStorage.setItem('food016Storage', data.food016);
  localStorage.setItem('food017Storage', data.food017);
  localStorage.setItem('food018Storage', data.food018);
  localStorage.setItem('food019Storage', data.food019);
  localStorage.setItem('food020Storage', data.food020);
  localStorage.setItem('food021Storage', data.food021);
  localStorage.setItem('food022Storage', data.food022);
  localStorage.setItem('food023Storage', data.food023);
  localStorage.setItem('food024Storage', data.food024);
  localStorage.setItem('food025Storage', data.food025);
  localStorage.setItem('food026Storage', data.food026);
  localStorage.setItem('food027Storage', data.food027);
  localStorage.setItem('food028Storage', data.food028);
  localStorage.setItem('food029Storage', data.food029);
  localStorage.setItem('food030Storage', data.food030);
  localStorage.setItem('food031Storage', data.food031);
  localStorage.setItem('food032Storage', data.food032);
  localStorage.setItem('food033Storage', data.food033);
  localStorage.setItem('food034Storage', data.food034);
  localStorage.setItem('food035Storage', data.food035);
  localStorage.setItem('food036Storage', data.food036);
  localStorage.setItem('food037Storage', data.food037);
  localStorage.setItem('food038Storage', data.food038);
  localStorage.setItem('food039Storage', data.food039);
  localStorage.setItem('food040Storage', data.food040);
  localStorage.setItem('food041Storage', data.food041);
  localStorage.setItem('food042Storage', data.food042);
  localStorage.setItem('food043Storage', data.food043);
  localStorage.setItem('food044Storage', data.food044);
  localStorage.setItem('food045Storage', data.food045);
  localStorage.setItem('food046Storage', data.food046);
  localStorage.setItem('food047Storage', data.food047);
  localStorage.setItem('food048Storage', data.food048);
  localStorage.setItem('food049Storage', data.food049);
  localStorage.setItem('food050Storage', data.food050);
  localStorage.setItem('food051Storage', data.food051);
  localStorage.setItem('food052Storage', data.food052);
  localStorage.setItem('food053Storage', data.food053);
  localStorage.setItem('food054Storage', data.food054);
  localStorage.setItem('food055Storage', data.food055);
  localStorage.setItem('food056Storage', data.food056);
  localStorage.setItem('food057Storage', data.food057);
  localStorage.setItem('food058Storage', data.food058);
  localStorage.setItem('food059Storage', data.food059);
  localStorage.setItem('food060Storage', data.food060);
  localStorage.setItem('food061Storage', data.food061);
  localStorage.setItem('food062Storage', data.food062);
  localStorage.setItem('food063Storage', data.food063);
  localStorage.setItem('food064Storage', data.food064);
  localStorage.setItem('food065Storage', data.food065);
  localStorage.setItem('food066Storage', data.food066);
  localStorage.setItem('food067Storage', data.food067);
  localStorage.setItem('food068Storage', data.food068);
  localStorage.setItem('food069Storage', data.food069);
  localStorage.setItem('food070Storage', data.food070);
  localStorage.setItem('food071Storage', data.food071);
  localStorage.setItem('food072Storage', data.food072);
  localStorage.setItem('food073Storage', data.food073);
  localStorage.setItem('food074Storage', data.food074);
  localStorage.setItem('food075Storage', data.food075);
  localStorage.setItem('food076Storage', data.food076);
  localStorage.setItem('food077Storage', data.food077);
  localStorage.setItem('Akashic', data.Akashic);
  localStorage.setItem('Alborada', data.Alborada);
  localStorage.setItem('Andromeda', data.Andromeda);
  localStorage.setItem('Arthur', data.Arthur);
  localStorage.setItem('Aurora', data.Aurora);
  localStorage.setItem('Boltus', data.Boltus);
  localStorage.setItem('Caramel', data.Caramel);
  localStorage.setItem('Death Knell', data.DeathKnell);
  localStorage.setItem('Doomlight', data.Doomlight);
  localStorage.setItem('Dreadwolf', data.Dreadwolf);
  localStorage.setItem('Firefox', data.Firefox);
  localStorage.setItem('Firestar', data.Firestar);
  localStorage.setItem('Flamenco', data.Flamenco);
  localStorage.setItem('Gabriel', data.Gabriel);
  localStorage.setItem('Gaia', data.Gaia);
  localStorage.setItem('Guerilla Hunter', data.GuerillaHunter);
  localStorage.setItem('Hotsteel', data.Hotsteel);
  localStorage.setItem('Hurricane', data.Hurricane);
  localStorage.setItem('JOJO', data.JOJO);
  localStorage.setItem('Lancelot', data.Lancelot);
  localStorage.setItem('Michael', data.Michael);
  localStorage.setItem('Moon Rabbit', data.MoonRabbit);
  localStorage.setItem('Nebula', data.Nebula);
  localStorage.setItem('Neutron Star', data.NeutronStar);
  localStorage.setItem('Northern Knight', data.NorthernKnight);
  localStorage.setItem('Pulsar', data.Pulsar);
  localStorage.setItem('Ranger', data.Ranger);
  localStorage.setItem('Raven', data.Raven);
  localStorage.setItem('Shiranui', data.Shiranui);
  localStorage.setItem('Skyfall', data.Skyfall);
  localStorage.setItem('Skyfire', data.Skyfire);
  localStorage.setItem('Skylark', data.Skylark);
  localStorage.setItem('Snow Mirage', data.SnowMirage);
  localStorage.setItem('Tempest', data.Tempest);
  localStorage.setItem('Trio of Enders', data.TrioofEnders);
  localStorage.setItem('Twilight', data.Twilight);
  localStorage.setItem('Ventorus', data.Ventorus);
  localStorage.setItem('Aya', data.Aya);
  localStorage.setItem('Belladonna', data.Belladonna);
  localStorage.setItem('Cyrus', data.Cyrus);
  localStorage.setItem('Fran', data.Fran);
  localStorage.setItem('Furanku', data.Furanku);
  localStorage.setItem('Iori', data.Iori);
  localStorage.setItem('Ivan', data.Ivan);
  localStorage.setItem('Jaka', data.Jaka);
  localStorage.setItem('Jiu Chong', data.JiuChong);
  localStorage.setItem('Joanna', data.Joanna);
  localStorage.setItem('Kije', data.Kije);
  localStorage.setItem('Kikina', data.Kikina);
  localStorage.setItem('Kizuna Ai', data.KizunaAi);
  localStorage.setItem('Lillian', data.Lillian);
  localStorage.setItem('Lysa', data.Lysa);
  localStorage.setItem('Matilda', data.Matilda);
  localStorage.setItem('Mia', data.Mia);
  localStorage.setItem('Mila', data.Mila);
  localStorage.setItem('Mobius', data.Mobius);
  localStorage.setItem('Nighthawk', data.Nighthawk);
  localStorage.setItem('Ning', data.Ning);
  localStorage.setItem('Norma', data.Norma);
  localStorage.setItem('Opal', data.Opal);
  localStorage.setItem('Purity', data.Purity);
  localStorage.setItem('RED', data.RED);
  localStorage.setItem('Riko', data.Riko);
  localStorage.setItem('Rom', data.Rom);
  localStorage.setItem('Serena', data.Serena);
  localStorage.setItem('Shin', data.Shin);
  localStorage.setItem('Silver Deacon', data.SilverDeacon);
  localStorage.setItem('Tarantula', data.Tarantula);
  localStorage.setItem('Vanessa', data.Vanessa);
  localStorage.setItem('Villar', data.Villar);
  localStorage.setItem('Vita', data.Vita);
  localStorage.setItem('Yang', data.Yang);
  localStorage.setItem('Yulia', data.Yulia);
  localStorage.setItem('Yutong', data.Yutong);
  localStorage.setItem('Zoe', data.Zoe);
  localStorage.setItem('Shadow Watcher', data.ShadowWatcher);
  localStorage.setItem('Yellow Dwarf', data.YellowDwarf);
  console.log("Login successful");
  setLogined();
}
window.saveGame = async function(username, code) {
  let profileID = username + "_" + code;
  await setDoc(doc(db, "user", profileID), {
    highScore: localStorage.getItem('high-score'),
    meawToken: localStorage.getItem('meawTokenStorage'),
    gold: localStorage.getItem('goldStorage'),
    alphaCoin: localStorage.getItem('alphaCoinStorage'),
    crystal: localStorage.getItem('crystalStorage'),
    ticket: localStorage.getItem('ticketStorage'),
    ticketChromatic: localStorage.getItem('ticketChromaticStorage'),
    ticketPremium: localStorage.getItem('ticketPremiumStorage'),
    ticketPremium2: localStorage.getItem('ticketPremium2Storage'),
    virtualToken: localStorage.getItem('virtualTokenStorage'),
    food000: localStorage.getItem('food000Storage'),
    food001: localStorage.getItem('food001Storage'),
    food002: localStorage.getItem('food002Storage'),
    food003: localStorage.getItem('food003Storage'),
    food004: localStorage.getItem('food004Storage'),
    food005: localStorage.getItem('food005Storage'),
    food006: localStorage.getItem('food006Storage'),
    food007: localStorage.getItem('food007Storage'),
    food008: localStorage.getItem('food008Storage'),
    food009: localStorage.getItem('food009Storage'),
    food010: localStorage.getItem('food010Storage'),
    food011: localStorage.getItem('food011Storage'),
    food012: localStorage.getItem('food012Storage'),
    food013: localStorage.getItem('food013Storage'),
    food014: localStorage.getItem('food014Storage'),
    food015: localStorage.getItem('food015Storage'),
    food016: localStorage.getItem('food016Storage'),
    food017: localStorage.getItem('food017Storage'),
    food018: localStorage.getItem('food018Storage'),
    food019: localStorage.getItem('food019Storage'),
    food020: localStorage.getItem('food020Storage'),
    food021: localStorage.getItem('food021Storage'),
    food022: localStorage.getItem('food022Storage'),
    food023: localStorage.getItem('food023Storage'),
    food024: localStorage.getItem('food024Storage'),
    food025: localStorage.getItem('food025Storage'),
    food026: localStorage.getItem('food026Storage'),
    food027: localStorage.getItem('food027Storage'),
    food028: localStorage.getItem('food028Storage'),
    food029: localStorage.getItem('food029Storage'),
    food030: localStorage.getItem('food030Storage'),
    food031: localStorage.getItem('food031Storage'),
    food032: localStorage.getItem('food032Storage'),
    food033: localStorage.getItem('food033Storage'),
    food034: localStorage.getItem('food034Storage'),
    food035: localStorage.getItem('food035Storage'),
    food036: localStorage.getItem('food036Storage'),
    food037: localStorage.getItem('food037Storage'),
    food038: localStorage.getItem('food038Storage'),
    food039: localStorage.getItem('food039Storage'),
    food040: localStorage.getItem('food040Storage'),
    food041: localStorage.getItem('food041Storage'),
    food042: localStorage.getItem('food042Storage'),
    food043: localStorage.getItem('food043Storage'),
    food044: localStorage.getItem('food044Storage'),
    food045: localStorage.getItem('food045Storage'),
    food046: localStorage.getItem('food046Storage'),
    food047: localStorage.getItem('food047Storage'),
    food048: localStorage.getItem('food048Storage'),
    food049: localStorage.getItem('food049Storage'),
    food050: localStorage.getItem('food050Storage'),
    food051: localStorage.getItem('food051Storage'),
    food052: localStorage.getItem('food052Storage'),
    food053: localStorage.getItem('food053Storage'),
    food054: localStorage.getItem('food054Storage'),
    food055: localStorage.getItem('food055Storage'),
    food056: localStorage.getItem('food056Storage'),
    food057: localStorage.getItem('food057Storage'),
    food058: localStorage.getItem('food058Storage'),
    food059: localStorage.getItem('food059Storage'),
    food060: localStorage.getItem('food060Storage'),
    food061: localStorage.getItem('food061Storage'),
    food062: localStorage.getItem('food062Storage'),
    food063: localStorage.getItem('food063Storage'),
    food064: localStorage.getItem('food064Storage'),
    food065: localStorage.getItem('food065Storage'),
    food066: localStorage.getItem('food066Storage'),
    food067: localStorage.getItem('food067Storage'),
    food068: localStorage.getItem('food068Storage'),
    food069: localStorage.getItem('food069Storage'),
    food070: localStorage.getItem('food070Storage'),
    food071: localStorage.getItem('food071Storage'),
    food072: localStorage.getItem('food072Storage'),
    food073: localStorage.getItem('food073Storage'),
    food074: localStorage.getItem('food074Storage'),
    food075: localStorage.getItem('food075Storage'),
    food076: localStorage.getItem('food076Storage'),
    food077: localStorage.getItem('food077Storage'),
    Akashic: localStorage.getItem('Akashic'),
    Alborada: localStorage.getItem('Alborada'),
    Andromeda: localStorage.getItem('Andromeda'),
    Arthur: localStorage.getItem('Arthur'),
    Aurora: localStorage.getItem('Aurora'),
    Boltus: localStorage.getItem('Boltus'),
    Caramel: localStorage.getItem('Caramel'),
    DeathKnell: localStorage.getItem('Death Knell'),
    Doomlight: localStorage.getItem('Doomlight'),
    Dreadwolf: localStorage.getItem('Dreadwolf'),
    Firefox: localStorage.getItem('Firefox'),
    Firestar: localStorage.getItem('Firestar'),
    Flamenco: localStorage.getItem('Flamenco'),
    Gabriel: localStorage.getItem('Gabriel'),
    Gaia: localStorage.getItem('Gaia'),
    GuerillaHunter: localStorage.getItem('Guerilla Hunter'),
    Hotsteel: localStorage.getItem('Hotsteel'),
    Hurricane: localStorage.getItem('Hurricane'),
    JOJO: localStorage.getItem('JOJO'),
    Lancelot: localStorage.getItem('Lancelot'),
    Michael: localStorage.getItem('Michael'),
    MoonRabbit: localStorage.getItem('Moon Rabbit'),
    Nebula: localStorage.getItem('Nebula'),
    NeutronStar: localStorage.getItem('Neutron Star'),
    NorthernKnight: localStorage.getItem('Northern Knight'),
    Pulsar: localStorage.getItem('Pulsar'),
    Ranger: localStorage.getItem('Ranger'),
    Raven: localStorage.getItem('Raven'),
    Shiranui: localStorage.getItem('Shiranui'),
    Skyfall: localStorage.getItem('Skyfall'),
    Skyfire: localStorage.getItem('Skyfire'),
    Skylark: localStorage.getItem('Skylark'),
    SnowMirage: localStorage.getItem('Snow Mirage'),
    Tempest: localStorage.getItem('Tempest'),
    TrioofEnders: localStorage.getItem('Trio of Enders'),
    Twilight: localStorage.getItem('Twilight'),
    Ventorus: localStorage.getItem('Ventorus'),
    Aya: localStorage.getItem('Aya'),
    Belladonna: localStorage.getItem('Belladonna'),
    Cyrus: localStorage.getItem('Cyrus'),
    Fran: localStorage.getItem('Fran'),
    Furanku: localStorage.getItem('Furanku'),
    Iori: localStorage.getItem('Iori'),
    Ivan: localStorage.getItem('Ivan'),
    Jaka: localStorage.getItem('Jaka'),
    JiuChong: localStorage.getItem('Jiu Chong'),
    Joanna: localStorage.getItem('Joanna'),
    Kije: localStorage.getItem('Kije'),
    Kikina: localStorage.getItem('Kikina'),
    KizunaAi: localStorage.getItem('Kizuna Ai'),
    Lillian: localStorage.getItem('Lillian'),
    Lysa: localStorage.getItem('Lysa'),
    Matilda: localStorage.getItem('Matilda'),
    Mia: localStorage.getItem('Mia'),
    Mila: localStorage.getItem('Mila'),
    Mobius: localStorage.getItem('Mobius'),
    Nighthawk: localStorage.getItem('Nighthawk'),
    Ning: localStorage.getItem('Ning'),
    Norma: localStorage.getItem('Norma'),
    Opal: localStorage.getItem('Opal'),
    Purity: localStorage.getItem('Purity'),
    RED: localStorage.getItem('RED'),
    Riko: localStorage.getItem('Riko'),
    Rom: localStorage.getItem('Rom'),
    Serena: localStorage.getItem('Serena'),
    Shin: localStorage.getItem('Shin'),
    SilverDeacon: localStorage.getItem('Silver Deacon'),
    Tarantula: localStorage.getItem('Tarantula'),
    Vanessa: localStorage.getItem('Vanessa'),
    Villar: localStorage.getItem('Villar'),
    Vita: localStorage.getItem('Vita'),
    Yang: localStorage.getItem('Yang'),
    Yulia: localStorage.getItem('Yulia'),
    Yutong: localStorage.getItem('Yutong'),
    Zoe: localStorage.getItem('Zoe'),
    ShadowWatcher: localStorage.getItem('Shadow Watcher'),
    YellowDwarf: localStorage.getItem('Yellow Dwarf')
  });
  console.log("Game saved");
}