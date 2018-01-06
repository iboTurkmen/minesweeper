//button part
function btn()
{
    
    //generate random mines

    //duration part
    var  timer, milisec=0, sec = 0, minute = 0, hour = 0;
    function duration()
        {
            milisec++;
            if(milisec > 99)
                {
                    milisec = 0;
                    sec++;
                }
            if(sec > 59)
                {
                    sec = 0;
                    minute++;
                }
            if(sec < 10)
                {
                    var ssec = '0'+sec;
                }
            else
                {
                    var ssec = sec;
                }
            if(minute > 59)
                {
                    minute = 0;
                    hour++;
                }
            if(minute < 10)
                {
                    var mminute = '0'+minute;
                }
            else
            {
                var mminute = minute;
            }

            
         
               timer = hour+':'+mminute+':'+ssec+':'+milisec;
               document.getElementById('time').innerHTML=timer; 

        }
    setInterval(duration,10);
    duration();
    //minefield part
    function cell()
    {
        var insideCell=1;
        var table='<table border="1">';
        for(var i = 0 ; i < size ; i++)
        {
            table+='<tr>';
            for(var j = 0 ; j < size ; j++)
            {
                table+='<td class="close" >'+insideCell+'&nbsp;&nbsp;</td>';
                insideCell++;
            }
            table+='</tr>';
        } 
        table+='</table>';

        document.getElementById('minefield').innerHTML=table;
    }

    var size=document.getElementById('size').value;
    cell();
}


