export const drawHanged=(hangmanFlag,pincel)=>{

    pincel.strokeStyle = "#0A3871";
    pincel.fillStyle="#0A3871";
    pincel.lineWidth = 4;
    switch(hangmanFlag){
        case 1:
            
            pincel.fillRect(140,380,294,5);
            break;
        case 2:
            
            pincel.fillRect(190,20,5,360);
            break;
        case 3:
            
            pincel.fillRect(190,20,177,4);
            break;
        case 4:
            
            pincel.fillRect(367,20,4,50);
            break;
        case 5:
            
            pincel.fillStyle="#0A3871";
            pincel.beginPath();
            pincel.arc(365,110,40,0,2*3.14)
            pincel.stroke();
            break;
        case 6:
            
            pincel.beginPath();
            pincel.moveTo(365, 150);
            pincel.lineTo(330, 220);
            pincel.stroke();
            break;
        case 7:
        
            pincel.beginPath();
            pincel.moveTo(370, 150);
            pincel.lineTo(405, 220);
            pincel.stroke();
            break;
        case 8:
            
            pincel.fillRect(365,150,4,120);
            break;
        case 9:
            
            pincel.beginPath();
            pincel.moveTo(367, 270);
            pincel.lineTo(330, 350);
            pincel.stroke();
            break;
        case 10:
           
            pincel.beginPath();
            pincel.moveTo(367, 270);
            pincel.lineTo(405, 350);
            pincel.stroke();
            break;
    }
}