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

function test_on_click()
{
	//var redirect = document.getElementById("test_btn");
	window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}
