const navigation = ["home", "about", "doctors", "department","blog","contact"];
// const pages = ["index.html", "about.html", "doctors.html", "department.html","blog.html","contact.html"];
let navtext  = "<ul>";

for(let i=0; i < navigation.length; i++){
    navtext += '<li><a href="#">' + navigation[i] + "</a></li>";
}

navtext += "</ul>";

document.getElementById("navigation").innerHTML = navtext;
