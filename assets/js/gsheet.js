/**
* Process details
*/
const url = "https://docs.google.com/spreadsheets/d/11O8HvOKQmr1PxuTwfExElwuEaZvRVK6oKbjuH9t4UsU/export?format=csv";
const pro = document.querySelector("pro");
     //pro.innerHTML = "<p> Loading...</p>";
    fetch(url).then(result =>result.text()).then(function(csvtext){
     return csv().fromString(csvtext);
    }).then(function(csv){
    //pro.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
      csv.forEach(function(row){
             pro.innerHTML += "<h5>" +"<strong>" + row.questions +"</strong>" + "</h5>";
             pro.innerHTML += "<p>" + row.answer + "</p>";
  });
});

/**
* Frequently ask question
*/
const url1 = "https://docs.google.com/spreadsheets/d/1WxAPDuYET_K2z8LiPHY1oF_ljQKUxL_REokZFv159sU/export?format=csv";
const frequentlyaskquestion = document.querySelector("frequentlyaskquestion");
    //frequentlyaskquestion.innerHTML = "<p> Loading...</p>";
    fetch(url1).then(result =>result.text()).then(function(csvtext){
    return csv().fromString(csvtext);
    }).then(function(csv){
    //frequentlyaskquestion.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
      csv.forEach(function(row){
          frequentlyaskquestion.innerHTML += "<p>" +"<strong>" + row.question +"</strong>" + "</p>";
          frequentlyaskquestion.innerHTML += "<p>" + row.description + "</p>";
    });
});

/**
* 121 SMS details
*/
const url2 = "https://docs.google.com/spreadsheets/d/17oOvnwwfjxq4uo84nftJkkI83ic2fJwooS6sqxyGmpg/export?format=csv";
const sms121 = document.querySelector("sms121");
     //sms121.innerHTML = "<p> Loading...</p>";
    fetch(url2).then(result =>result.text()).then(function(csvtext){
     return csv().fromString(csvtext);
    }).then(function(csv){
    //sms121.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
      csv.forEach(function(row){
             sms121.innerHTML += "<h5>" +"<strong>" + row.stext +"</strong>" + "</h5>";
             sms121.innerHTML += "<p>" + row.sbody + "</p>";
  });
});

/**
* SMS details
*/
const url3 = "https://docs.google.com/spreadsheets/d/1KOOSkwsX5aLnzKlyIt4oVXCJHFwvewZXKxGeo4Py1og/export?format=csv&gid=0";
const sms = document.querySelector("sms");
     //sms.innerHTML = "<p> Loading...</p>";
    fetch(url3).then(result =>result.text()).then(function(csvtext){
     return csv().fromString(csvtext);
    }).then(function(csv){
    //sms.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
      csv.forEach(function(row){
             sms.innerHTML += "<h5>" +"<strong>" + row.stext +"</strong>" + "</h5>";
             sms.innerHTML += "<p>" + row.sbody + "</p>";
  });
});

/**
* Guide_1 details
*/
const url4 = "https://docs.google.com/spreadsheets/d/1hQjULv9I7h-dfJB0g4MUorugnLyTPK0deAb4yAy4z5A/export?format=csv";
const guide = document.querySelector("guide");
     //guide.innerHTML = "<p> Loading...</p>";
    fetch(url4).then(result =>result.text()).then(function(csvtext){
     return csv().fromString(csvtext);
    }).then(function(csv){
    //guide.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
      csv.forEach(function(row){
             guide.innerHTML += "<h5>" +"<strong>" + row.regular +"</strong>" + "</h5>";
             guide.innerHTML += "<p>" + row.city + "</p>";
  });
});

/**
* Guide_1 details
*/
const url5 = "https://docs.google.com/spreadsheets/d/1es_bl3q8rruf8B6PW8uKh6OEF72gJZWHTiFFUrjlVFM/export?format=csv";
const guide_btrc = document.querySelector("guide_btrc");
     //guide_btrc.innerHTML = "<p> Loading...</p>";
    fetch(url5).then(result =>result.text()).then(function(csvtext){
     return csv().fromString(csvtext);
    }).then(function(csv){
    //guide_btrc.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
      csv.forEach(function(row){
             guide_btrc.innerHTML += "<h5>" +"<strong>" + row.btrc +"</strong>" + "</h5>";
             guide_btrc.innerHTML += "<p>" + row.city_btrc + "</p>";
  });
});

/**
* Guide_2 details
*/
const url6 = "https://docs.google.com/spreadsheets/d/1uofexRjSPI_qytKNXh2utskmHlaayGwlzIO9e3F4no0/export?format=csv";
const rural = document.querySelector("rural");
     //rural.innerHTML = "<p> Loading...</p>";
    fetch(url6).then(result =>result.text()).then(function(csvtext){
     return csv().fromString(csvtext);
    }).then(function(csv){
    //rural.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
      csv.forEach(function(row){
             rural.innerHTML += "<h5>" +"<strong>" + row.rural +"</strong>" + "</h5>";
             rural.innerHTML += "<p>" + row.downgrade + "</p>";
  });
});

/**
* office address from google sheets
*/
  
const url7 = "https://docs.google.com/spreadsheets/d/1GycRxoKxjlkmQthK-009GxckPWxlG3_eCj-rHUOL9_I/export?format=csv";
const office_address = document.querySelector("office_address");
    //office_address.innerHTML = "<p> Loading...</p>";
    fetch(url7).then(result =>result.text()).then(function(csvtext){
      return csv().fromString(csvtext);
       }).then(function(csv){
       //office_address.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
         csv.forEach(function(row){
                office_address.innerHTML += "<h5>"  + row.location + "</h5>";
                office_address.innerHTML += "<p>" + row.address + "</p>";
  });
});


/**
* Wifihut from google sheets
*/

const url08 = "https://docs.google.com/spreadsheets/d/1M5UKc6EosFcg2m8uArY1v_X0o7n4P-_2YVrqkYt-FAY/export?format=csv";
const wifihut = document.querySelector("wifihut");
    //office_address.innerHTML = "<p> Loading...</p>";
    fetch(url08).then(result =>result.text()).then(function(csvtext){
      return csv().fromString(csvtext);
       }).then(function(csv){
       //office_address.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
         csv.forEach(function(row){
                wifihut.innerHTML += "<h5>" +"<strong>" + row.location +"</strong>" + "</h5>";
                wifihut.innerHTML += "<p>" + row.address + "</p>";
  });
});


const url09 = "https://docs.google.com/spreadsheets/d/1A-VG8CNcnnnihSGQWY2XKFK7CI3wQs1glgwSdjjxC4Y/export?format=csv";
const iptsp = document.querySelector("iptsp");
    //office_address.innerHTML = "<p> Loading...</p>";
    fetch(url09).then(result =>result.text()).then(function(csvtext){
      return csv().fromString(csvtext);
       }).then(function(csv){
       //office_address.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
         csv.forEach(function(row){
                iptsp.innerHTML += "<p>" +"<strong>" + row.index +"</strong>" + "</p>";
                iptsp.innerHTML += "<p>" + row.details + "</p>";
  });
});

/**
* mailreply
*/
const url10 = "https://docs.google.com/spreadsheets/d/1KOOSkwsX5aLnzKlyIt4oVXCJHFwvewZXKxGeo4Py1og/export?format=csv&gid=721123582";
const mailreply = document.querySelector("mailreply");
    //office_address.innerHTML = "<p> Loading...</p>";
    fetch(url10).then(result =>result.text()).then(function(csvtext){
      return csv().fromString(csvtext);
       }).then(function(csv){
       //office_address.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
         csv.forEach(function(row){
                mailreply.innerHTML += "<p>" +"<strong>" + row.subject +"</strong>" + "</p>";
                mailreply.innerHTML += "<p>" + row.mailbody + "</p>";
  });
});

/**
* No Internet
*/

const url11 = "https://docs.google.com/spreadsheets/d/1WxAPDuYET_K2z8LiPHY1oF_ljQKUxL_REokZFv159sU/export?format=csv&gid=1781322623";
const nointernet = document.querySelector("nointernet");
    //office_address.innerHTML = "<p> Loading...</p>";
    fetch(url11).then(result =>result.text()).then(function(csvtext){
      return csv().fromString(csvtext);
       }).then(function(csv){
       //office_address.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
         csv.forEach(function(row){
                nointernet.innerHTML += "<p>" +"<strong>" + row.step +"</strong>" + "</p>";
                nointernet.innerHTML += "<p>" + row.process + "</p>";
  });
});

/**
* Slow Speed
*/

const url12 = "https://docs.google.com/spreadsheets/d/1WxAPDuYET_K2z8LiPHY1oF_ljQKUxL_REokZFv159sU/export?format=csv&gid=584583435";
const slowspeed = document.querySelector("slowspeed");
    //office_address.innerHTML = "<p> Loading...</p>";
    fetch(url12).then(result =>result.text()).then(function(csvtext){
      return csv().fromString(csvtext);
       }).then(function(csv){
       //office_address.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
         csv.forEach(function(row){
                slowspeed.innerHTML += "<p>" +"<strong>" + row.step +"</strong>" + "</p>";
                slowspeed.innerHTML += "<p>" + row.process + "</p>";
  });
});

/**
* About Carnival
*/

const url13 = "https://docs.google.com/spreadsheets/d/1WxAPDuYET_K2z8LiPHY1oF_ljQKUxL_REokZFv159sU/export?format=csv&gid=1105087992";
const about_1 = document.querySelector("about_1");
    //office_address.innerHTML = "<p> Loading...</p>";
    fetch(url13).then(result =>result.text()).then(function(csvtext){
      return csv().fromString(csvtext);
       }).then(function(csv){
       //office_address.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
         csv.forEach(function(row){
                about_1.innerHTML += "<p>" + row.title + "</p>";
                about_1.innerHTML += "<p>" + row.description + "</p>";
  });
});

const url14 = "https://docs.google.com/spreadsheets/d/1WxAPDuYET_K2z8LiPHY1oF_ljQKUxL_REokZFv159sU/export?format=csv&gid=1105087992";
const about_2 = document.querySelector("about_2");
    //office_address.innerHTML = "<p> Loading...</p>";
    fetch(url14).then(result =>result.text()).then(function(csvtext){
      return csv().fromString(csvtext);
       }).then(function(csv){
       //office_address.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
         csv.forEach(function(row){
                about_2.innerHTML += "<p>" + row.why + "</p>";
                about_2.innerHTML += "<p>" + row.features + "</p>";
  });
});

const url15 = "https://docs.google.com/spreadsheets/d/1WxAPDuYET_K2z8LiPHY1oF_ljQKUxL_REokZFv159sU/export?format=csv&gid=1105087992";
const about_3 = document.querySelector("about_3");
    //office_address.innerHTML = "<p> Loading...</p>";
    fetch(url15).then(result =>result.text()).then(function(csvtext){
      return csv().fromString(csvtext);
       }).then(function(csv){
       //office_address.innerHTML = "<code>" + JSON.stringify(csv) + "</code>";
         csv.forEach(function(row){
                about_3.innerHTML += "<p>" + row.device + "</p>";
                about_3.innerHTML += "<p>" + row.infrastructure + "</p>";
  });
});