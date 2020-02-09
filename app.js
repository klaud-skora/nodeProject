const os = require('os');
const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Jan', 'Mikołaj', 'Szymon', 'Karol', 'Franek', 'Piotr', 'Paweł', 'Adam', 'Kamil', 'Jakub', 'Bartosz'];
const femaleNames = ['Ania', 'Hania', 'Marta', 'Julia', 'Zofia', 'Asia', 'Kasia', 'Paulina', 'Maja', 'Karolina', 'Basia'];
const lastNames = ['Radosz', 'Miłosz', 'Kaftanowicz', 'Łuczak', 'Ślesik', 'Adamus', 'Makłowicz', 'Guz', 'Bednarek', 'Szymocha', 'Mikoda', 'Nikolin', 'Witek', 'Rogoń', 'Piernikarz', 'Luboń', 'Cichoń', 'Marzec', 'Baran'];

function randChoice(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}


let people = [];

for(let i = 0; i < 20; i++) {
	let gender = randChoice(genders);
	let age = Math.floor(Math.random() * 79);
	while (age < 18) {
		age = Math.floor(Math.random() * 79);
	}

	const person = {
		gender: gender,
		firstName: gender == 'M' ? randChoice(maleNames) : randChoice(femaleNames),
		age: age,
		lastName: randChoice(lastNames),
	};

	const personJSON = JSON.stringify(person);	
	people.push(personJSON);
}

fs.writeFile('outputfile.txt', people, (err) => {
	if(err) throw err;
	console.log(people, 'The file has been saved!');
});