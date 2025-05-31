function isAnagram(str1, str2) {
  let clean1 = str1.replace(/\s/g, '').toLowerCase();
  let clean2 = str2.replace(/\s/g, '').toLowerCase();
  let sorted1 = clean1.split('').sort().join('');
  let sorted2 = clean2.split('').sort().join('');
  return sorted1 === sorted2;
}

console.log(isAnagram("Astronomer", "Moon starer"));
console.log(isAnagram("School master", "The classroom"));
console.log(isAnagram("Hello", "World"));
