//While loop//

//let colors = ['blue', 'yellow', 'red', 'orange'];
//let i = 0;
//while (i < colors.length) {
//console.log(colors[i]);
//i++;
//}

//For loop//
//for (let i = 0; i < colors.length; i++) {
// console.log(colors[i]);
//}

//forEach Method//
//colors.forEach(element => { console.log(element) });

//Questions//
//1. whileLoop has 6 lines, the forLoop has 3 lines.
//2. forEach has only 1 line.
//3. I prefer the forLoop, because I understand what is written. I don't really know what's happening when I read forEach.
//4. 

const Dog = {
    weight = '8 kg',
    food = 'raw dog food',
    color = 'fawn',
    breed = 'mopshond',
    name = 'Casper',
}

for (const features in Dog) {
    console.log(Dog[features]);
}

for (const features in Dog) {
    if (Dog.hasOwnProperty.call(Dog, features)) {
        const dogFeatures = Dog[features];
        console.log(dogFeatures);
    }
}

//Ze doen het echter beiden niet..