function handle_browse_click_male()
{
	var fileinput = document.getElementById("upload_male_id");
	fileinput.click();
}

function handle_change()
{
	var fileinput = document.getElementById("upload_male_id");
	var textinput = document.getElementById("filename");
	textinput.value = fileinput.value;
}

function handle_browse_click_female()
{
	var fileinput = document.getElementById("upload_female_id");
	fileinput.click();
}

function handle_change()
{
	var fileinput = document.getElementById("upload_female_id");
	var textinput = document.getElementById("filename");
	textinput.value = fileinput.value;
}

function results()
{
	window.location.replace("results.html");
}

function homepage()
{
	window.location.replace("index.html");
}
