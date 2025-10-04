let names = ['Nancy','Blessing','Jorge','Svetlana'];

let name3= names[2]; //jorge

let name_le= names.length;  //4

names.push('Sally');//Ajoute un nouvel élément à la fin du tableau

let scores = [100, 72, 83, 94, 88, 87];

scores[0] = 99; // This assignment expression changed the first score in the array from 100 to 99.

scores.push(100); // Adds a new element to the end of the array
scores.pop(); // Removes the last element from the array
scores.shift(); // Removes the first element from the array
scores.unshift(100); // Adds a new element to the beginning of the array
scores.slice(2,3); // Cut out a portion of the array starting at an index for a given length
scores.splice(2, 1); // Removes 1 element from the array starting at index 2
scores.join(', '); // transform the array into a single string with a comma and space delimiter option



let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;

scores.forEach(score => {//100, 94, 88
  if (score > 87) {
    accumulator += score;//100+88+94
    count++; //3
  }
}); //La boucle forEach ajoute au total (accumulator) les scores strictement supérieurs à 87,
// et incrémente le compteur (count) pour chaque score correspondant.

if (count > 0) {
  console.log(accumulator / count); 
} else {
  console.log("No scores reported.");
}


function fullName(first, last) {
  return `${first} ${last}`;
}

//en fonction fléchée

const fullName = (premier, dernier) => '${premier} ${dernier}';