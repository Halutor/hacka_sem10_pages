// Ejercio 7
let numTelf7=[1,2,3,4,5,6,7,8,9,0];
formatPhoneNumber();

function formatPhoneNumber(){
let aNumTelf7=numTelf7.slice(0,3);
let bNumTelf7=numTelf7.slice(3,-4);
let cNumTelf7=numTelf7.slice(6,-1);

let aNum=aNumTelf7.join('');
let bNum=bNumTelf7.join('');
let cNum=cNumTelf7.join('');

return console.log(`"(${aNum}) ${bNum}-${cNum}"`);
}