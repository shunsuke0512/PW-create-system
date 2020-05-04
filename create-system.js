let random = new Uint32Array(5);
window.crypto.getRandomValues(random);

console.log("Your lucky numbers:");
for (let i = 0; i < array.length; i++) {
    console.log(random[i]);
}
