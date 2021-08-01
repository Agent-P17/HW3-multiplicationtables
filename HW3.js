/*/*
File: HW3.js
GUI Assignment: Creating my First Web Page
Parth Patel, UMass Lowell Computer Science, parth_patel8@student.uml.edu
Copyright (c) 2021 by Parth Patel. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
updated by PP on August 1, 2021 at 12:15PM.

The above template/document was created by: Wenjin Zhou, UMass Lowell Computer Science, wzhou@cs.uml.edu
Copyright (c) 2021 by Wenjin.
*/ 



<script type="text/JavaScript">
  
    var table = document.getElementById('mytable');
    var output="";
  //   var rows = 2;
  //   var col = 3;
    for (var i = 1;i < 20;r++)
    {
        output +="<tr>";
      for ( var j = 1;j <= 10; j++)
      {
          output += "<td" + (i*j) + "</td";
      }    

      output += "</tr>"
    }

  table.innerHTML = output;



  // I just cannot make my table working it is just i have no idea 
  // I have tried various things from different sources 
  // i cannot even get this simple program to print 
  // Please help.
    
</script>