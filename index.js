function handle_browse_click()
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

function handle_browse_click()
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
