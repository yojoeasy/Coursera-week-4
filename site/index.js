let friend=['Ram','Jack','Sita','Harika','Praveen','jin','Ravi','James','Pinky','Rinky']
for(let i=1 ; i<=friend.length;
    i++){
        if(friend[i-1].charAt(0)!=="J"||friend[i-1].charAt(0)=="j"){  
        let fri = document.getElementById(`friends-${i}`);
        fri.innerHTML ="Hello "+ friend[i-1];
        console.log("Hello "+ friend[i-1]);
        }else{
            
        let fri = document.getElementById(`friends-${i}`);
        fri.innerHTML ="Goodbye "+ friend[i-1];
        console.log("Goodbye "+ friend[i-1]);
        }
    }
