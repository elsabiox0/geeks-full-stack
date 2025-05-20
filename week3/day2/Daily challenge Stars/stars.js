// Single loop
for (let i = 0; i<= 6; i++) {
    console.log("*".repeat(i));
}
// Nested loop
for (let i = 0; i <= 6; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
        stars += "*";
    }
    console.log(stars);
}