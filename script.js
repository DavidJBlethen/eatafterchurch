let defaultOptions = ["Cane's", "Pizza Ranch", "El Caballo De Oro", "El Vallarta", "Moe's", "Sakura", "Texas Roadhouse", "Fuzzy's", "Taco Bell", "Fazoli's", "Trackside Burgers", "Freddy's", "Steak 'n Shake", "Mac Cheesy's", "IHOP", "Arby's", "Wendy's", "Bricktown Brewery","Culver's", "Mall","Qdoba", "Chipotle","Braum's", "Tropicana", "McAllister's", "Del Rio","Seth's house.", "Outback", "Magic Noodle", "Thai Time", "Pho Forever", "Pho Saigon", "Just go home.", "Fast and pray, you cow."]

let fate = document.querySelector("#fate")
let options = document.querySelector("#options")
let dialog = document.querySelector("#dialog")

defaultOptions.forEach(option => options.innerHTML += "<li>"+option+"</li>")

function choose() {
  fate.innerHTML = defaultOptions[(Math.floor(Math.random() * defaultOptions.length))];
  
}
