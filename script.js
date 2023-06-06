let defaultOptions = ["Cane's", "Pizza Ranch", "El Caballo De Oro", "El Vallarta", "Moe's", "Sakura", "Texas Roadhouse", "Fuzzy's", "Taco Bell. Get frickin' rekt, Tanner", "Fazoli's. Get frickin' rekt Tanner and DJ", "Trackside Burgers", "Freddy's", "Steak 'n Shake", "Mac Cheesy's", "IHOP", "Arby's", "Wendy's. Get frickin' rekt, DJ", "Bricktown Brewery","Culver's", "Mall","Qdoba", "Chipotle","Braum's", "Tropicana", "McAllister's", "Del Rio","Seth's house.", "Outback", "Magic Noodle", "Thai Time", "Pho Forever", "Pho Saigon", "Extra Option 1", "Extra Option 2", "Extra Option 3"]

let fate = document.querySelector("#fate")
let options = document.querySelector("#options")
let dialog = document.querySelector("#dialog")

defaultOptions.forEach(option => options.innerHTML += "<li>"+option+"</li>")

function choose() {
  fate.innerHTML = defaultOptions[(Math.floor(Math.random() * defaultOptions.length))];
  
}