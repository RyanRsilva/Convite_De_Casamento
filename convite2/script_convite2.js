//REMOVE THIS
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(1, '0'); //January is 0!
var yyyy = today.getFullYear();

today = monthNames[mm - 1] + " " + dd + " " + yyyy;


$(".left_section p").html("ON "+today+ " at 5PM");