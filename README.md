# PANverify

## Setup Instruction on Local host
1. Clone the repository "PANverify" for windows: C:\xampp\htdocs\ 
2. Start local server
3. Open:  localhost/PANverify/pan_verify.php
4. Enter PAN NUMBER and Name, Click VERIFY -> result will be shown under verify button

`*Active internet connection is requried to test the application`

## Application Structure
Application consist of 3 files
- pan_verify.php : file containing the front end form
- API/verify_pan_script.php : API for getting data from `http://searchpan.in/pan-verify-26072017.php` 
- JS/script.js : custom Js code for performing ajax request and processing logic
