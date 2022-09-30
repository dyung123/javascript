
// 실시간 디지털 시계
function startTime(){
    let today1 = new Date();
    let h = today1.getHours(); //시
    let m = today1.getMinutes();//분
    let s = today1.getSeconds();//초


    h = checkNum(h);
    m = checkNum(m);
    s = checkNum(s);
    document.getElementById('clock').innerHTML=h + ':'+m+':'+s;
    let t = setTimeout(startTime,500);
    
  }
  function checkNum(i){
    if(i < 10){
      i='0' + i;
    }
    return i;
  }

  startTime();