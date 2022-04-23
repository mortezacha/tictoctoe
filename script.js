xx=1;
const puzzle = [
    "0", "0", "0",
    "0", "0", "0",
    "0", "0", "0",
];

function test(id){
    
    if(xx==1){
        document.getElementById(id).style.background='blue';
        puzzle[id-1]=2;
        xx=0;
        p=puzzle;
       if(
           (p[0]==p[1] && p[1]==p[2] && p[0] !== "0")
        || (p[0]==p[3] && p[3]==p[6] && p[0] !== "0")
        || (p[1]==p[4] && p[4]==p[7] && p[1] !== "0")
        || (p[3]==p[4] && p[4]==p[5] && p[3] !== "0")
        || (p[2]==p[5] && p[5]==p[8] && p[2] !== "0")
        || (p[6]==p[7] && p[7]==p[8] && p[6] !== "0")
        || (p[0]==p[4] && p[4]==p[8] && p[0] !== "0")
        || (p[2]==p[4] && p[4]==p[6] && p[2] !== "0")
           ){
               alert('You WIN! winner: first person');
           }


    }else{
        document.getElementById(id).style.background='red';
        puzzle[id-1]=3;
        xx=1;
        p=puzzle;
        if(
            (p[0]==p[1] && p[1]==p[2] && p[0] !== "0")
         || (p[0]==p[3] && p[3]==p[6] && p[0] !== "0")
         || (p[1]==p[4] && p[4]==p[7] && p[1] !== "0")
         || (p[3]==p[4] && p[4]==p[5] && p[3] !== "0")
         || (p[2]==p[5] && p[5]==p[8] && p[2] !== "0")
         || (p[6]==p[7] && p[7]==p[8] && p[6] !== "0")
         || (p[0]==p[4] && p[4]==p[8] && p[0] !== "0")
         || (p[2]==p[4] && p[4]==p[6] && p[2] !== "0")
            ){
                alert('You WIN! winner: first person');
            }
 
    }
    }


   