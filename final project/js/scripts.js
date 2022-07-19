function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//

const navigation = ["newspapers", "posts", "videos", "photos","blog","games",];

let navtext  = "<ul>";

for(let i=0; i < navigation.length; i++){
    navtext += '<li><a href="#">' + navigation[i] + "</a></li>";
}

navtext += "</ul>";

document.getElementById("navigation").innerHTML = navtext;

// 

function openMenu() {
    document.getElementById("navigation").style.display = "block";
}

function closeMenu() {
    document.getElementById("navigation").style.display = "none";
}

// 
