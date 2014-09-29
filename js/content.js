$(function() {
	load_about();
	load_press();
	load_projects();
	load_outreach();
});

function load_about() {
	$("#about").load("./about.html", function() { addaccentcolor(); });
}

function load_press() {
	$("#press").load("./press.html", function() { addaccentcolor(); });
}

function load_projects() {
	$("#projects").load("./projects.html", function() { addaccentcolor(); });
}

function load_outreach() {
	$("#outreach").load("./outreach.html", function() { addaccentcolor(); });
}
