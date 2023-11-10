function clock() {

    const mesNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
    

  const dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const today = new Date();

  document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " + 
  today.getDate() + ' ' + mesNames[today.getMonth()] + ' ' +today.getFullYear());

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var day = h<11 ? 'Am': 'Pm';
    

    h = h<10? '0'+h:h;
    m = m<10? '0'+m:m;
    s = s<10? '0' +s:s;
 

    document.getElementById('hour').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;

} var inter = setInterval(clock,400);
