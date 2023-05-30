// If else statements

const greetingWorldEs = "spanish";
const greetingWorldFr = "french";
const greetingWorldGb = "english";
const greetingWorldNl = "dutch";
const greetingWorldDe = "german";
const greetingWorldIt = "italian";

// if (greetingWorld === greetingWorldEs) {
//     console.log("Hola, mundo!");
//   } else if (greetingWorld === greetingWorldFr) {
//     console.log("Bonjour tout le monde.");
//   } else if (greetingWorld === greetingWorldGb) {
//     console.log("Cheerio world");
//   } else {
//     console.log("Hello world");
//   }

//Switch statement with greeting hello world in different languages:
const greetingWorld = prompt("Which language do you want to greet the world?");

switch (greetingWorld) {
  case "spanish":
    console.log("Hola, mundo!");
    break;
  case "french":
    console.log("Bonjour tout le monde");
    break;
  case "english":
    console.log("Cheerio world");
    break;
  case "dutch":
    console.log("Hallo wereld");
    break;
  case "german":
    console.log("Hallo welt");
    break;
  case "italian":
    console.log("Ciao Mondo");
    break;
  default:
    console.log("Hello world");
}

//

// Switch statement house of Game of Thrones:

// const name = prompt("Favorite Game of Thrones main character");
// let house = "";

// switch (name) {
//   case "Khal Drogo":
//     house = "Dothraki Horselord";
//     break;
//   case "Daenerys":
//     house = "Targaryen";
//     break; // break statement terminate the current switch statement.
//   case "Jon Snow":
//   case "Sansa":
//   case "Arya": // set a different case for the same persons of the house of stark. You can't have all the names in one case
//     house = "Stark";
//     break;
//   case "Cersei":
//   case "Tyrion":
//   case "Ser Jaime":
//     house = "Lannister";
//     break;
//   default: // if not one of the cases is correct/ or you look for any other GoT characters that are no part of the houses above, just show the default value/ answer which is other. Because default is our last statement inside the switch statement we do not need a break statement.
//     house = "other";
// }

// console.log(`Your favorite character is from the house ${house}`);
