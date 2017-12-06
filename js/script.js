
var verify_btn = document.getElementById("verify_btn");
verify_btn.onclick = function()
{
    //Get values from the form
    var pan_no = document.getElementById("pan_no").value;
    var name = document.getElementById("name").value;
    console.log(name+","+pan_no);

    verifyPan(pan_no,name);

    // //create a node 
    //  var newbookmark = document.createElement("li");
    //  var bookmarktext = document.createTextNode(link);
    //  newbookmark.appendChild(bookmarktext);

    // var list = document.getElementById("bookmark_link_list");
    // list.appendChild(newbookmark);
    // //add to the list

}


function verifyPan(pan_no,name){

    //Create new connection
    var panAPI = new XMLHttpRequest();
    panAPI.open('POST','./API/verify_pan_script.php',true);
    panAPI.setRequestHeader('Content-type','application/x-www-form-urlencoded');

    // On result of API call
    panAPI.onload = function(){
        console.log(JSON.parse(this.responseText));
        var result = JSON.parse(this.responseText);
       // console.log(result.pan_result);
        
        //break by td
        //console.log(result.pan_result.split("<td>"));

        if(result.pan_result.indexOf("Invalid PAN")!= -1)
        {   //if Invalid pan
            console.log("invalid pan");
            notify("invalid");
        }
        else{//check if result is found
            
            //verify if name matches
            
            //break by td to fetch name from the ressult
            var name_received = result.pan_result.split("<td>")[2].replace("</td>","");
            console.log(name_received);

            if(name_received == name.toUpperCase())
            {
                console.log("verified");
                notify("valid");
            }
            else{
                console.log("Incorrect name");
                notify("invalid");
            }
            
           
        }
    
    }

    //Set post values
    values = "pan_numbers="+pan_no;
    //Cal the API
    panAPI.send(values);
}



function notify(value){

    if(value == "valid")
    {
        document.getElementById('result').className = "alert alert-success";
        document.getElementById('result').innerText = "Valid PAN";
    }
    else if (value == "invalid")
    {   document.getElementById('result').className = "alert alert-danger";
        document.getElementById('result').innerText = "Invlid Valid PAN";
    }
    else{
        document.getElementById('result').innerText = "Unknown error";
    }
}
