//switch syntax
/*
switch(key){
    case value:

    break;

    default:
        break;
}
*/

const month=3
switch(month){
    case 1:
        console.log("january");
        break;                     // ***agar break nhi lgayenge khin pe bhi to ek bhi match hogya sara execute hoga code expect default
    case 2:
        console.log("feburary");
        break;
    case 3:
        console.log("march");
        break;
    default:
        console.log('default');
        
        break;
}

//->output = march