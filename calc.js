
let string="";


function func(value)
{   
    if(value=="=")
    {
        equal_func(string);
            let result="";
            result=string.toString();   // bcoz returned-string is numeric that's why i convert it to string
            document.getElementById("screen").innerHTML=result;
    }
    else
    {
        document.getElementById("screen").innerHTML= (string+=value);
    }   
}


function equal_func(a)
{
    string=eval(a);
    return string;
}

function clr()
{
    document.getElementById("screen").innerHTML="";
    string="";  // to make the string blank, if this is not done then previous string is displayed
    
}

function DE()
{
    let sub;
    sub = string.slice(0,-1); 
    document.getElementById("screen").innerHTML=sub;
    return (string = sub);
}