export default function lessDuration(argMinutes){
    let minutes=parseInt(argMinutes / 60)
    let seconds=parseInt(argMinutes % 60) 
    let duration=''
    if(minutes < 10){
        if(seconds < 10){
             duration="0"+minutes+":"+"0"+seconds
        }
        else{
            duration="0"+minutes+":"+seconds
            
        }
    }
    else{
        if(seconds < 10){
             duration=minutes+":"+"0"+seconds
        }
        else{
             duration=minutes+":"+seconds
        }

    }
    
    
    return duration
}