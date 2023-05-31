/*Functions in JS*/

/*
function savatchanTekshir(uzatilganContainer = {78,"text",true}){
 if (uzatilganContainer == 0){
     document.write("Savatchamiz ichida " + savatcha.length + "ta malumot bor!")
 }
 else {
     document.write("Savatchamiz ichida " + savatcha.length + "doan malumot bor!")
 }
}

let container = [12,"javascript"];

savatchanTekshir()
*/

/*Data in JS*/

let sana = new Date();

sana.setFullYear( 2008);
sana.setMonth(9)
sana.setDate(13)
let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftakun = sana.getDay();
let hours = sana.getHours();

let oylar = ["Yanvar", "Fevral","Mart","Aprel","May","Iyun", "Iyul",
    "Avgust", "Sentyabr", "Oktyabr", "Noyabr" , "Dekanr"];
let kunlar = ["Yakshanba","Dushanba", "Seshanba", "Chorshanba","Payshanba" , "Juma" , "Shanba",];
document.write("Men " + yil + "-yilning " + oylar[oy] +" oyining "+ kun +"-kunida tugilganman. Haftaning " + "esa "
    + kunlar[haftakun] +" kuni edi.");
