//Kerem Bey'in istedigi program, asagiaki durumlari karsilamasi gerekmektedir.

//1. Parca isimleri büyük harflere cevrilecektir.
//2. Parca isimlerinden sayilar cikartilacaktir.
//3. Parca isimleri tersine cevrilecektir.
//4. Her parcanin basina KEREMAG_ eklenecektir.
//5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)

let autoSparePartsList = ["23Radyatör", "34Sanziman", "03Filtre", "05Direksiyon", "02Kaporta", "09ayna"]

//1. Parca isimleri büyük harflere cevrilecektir.
const buyukHarfYap = autoSparePartsList.map(name => name.toUpperCase());
console.log(buyukHarfYap);

//2. Parca isimlerinden sayilar cikartilacaktir.
const sayilarYok = autoSparePartsList.map(name => name.substring(2));
console.log(sayilarYok);

//3. Parca isimleri tersine cevrilecektir.
autoSparePartsList.reverse();
console.log(autoSparePartsList);

//4. Her parcanin basina KEREMAG_ eklenecektir.
const basaEkle = autoSparePartsList.map(i => 'KEREMAG_ ' + i);
console.log(basaEkle);

//5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)
let tarihEkle = new Array();
let tarih = new Date();
for (let i = 0; i < autoSparePartsList.length; i++) {
    tarih.setDate(tarih.getDate());
    tarihEkle.push(tarih + autoSparePartsList);
}
console.log(tarihEkle);