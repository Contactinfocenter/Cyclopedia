/**
   * SLA details
   */
  
 {
   {
     // Your API KEY
     const API_KEY = "AIzaSyA4MaZhbGZIZLYYjboWPzt_suMSID-AhYU";

     function displayResult2(response) {
       let tableHead = "";
       let tableBody = "";

       response.result.values.forEach((row, index) => {
         if (index === 0) {
           tableHead += "<tr>";
           row.forEach((val) => (tableHead += "<th>" + val + "</th>"));
           tableHead += "</tr>";
         } else {
           tableBody += "<tr>";
           row.forEach((val) => (tableBody += "<td>" + val + "</td>"));
           tableBody += "</tr>";
         }
       });

       document.getElementById("table-head").innerHTML = tableHead;
       document.getElementById("table-body").innerHTML = tableBody;
     }

     function loadData() {
       // Spreadsheet ID
       const spreadsheetId = "1-do3Pup4_sDLoYtCW5nSoWiGgmrnVk0XMUPqbyHVAHA";
       const range = "A:E";
       getPublicValues({ spreadsheetId, range }, displayResult2);
     }

     window.addEventListener("load", (e) => {
       initOAuthClient({ apiKey: API_KEY });
     });

     document.addEventListener("gapi-loaded", (e) => {
       loadData();
     });
   }
 }

