// Even Odd

function ChkEvenOdd(no)
{
    if((no % 2) == 0)
    {
        console.log("It is Even Number");
    }
    else
    {
        console.log("It is Odd Number");
    }
            
}

function main()
{
    let iValue = 10;
    
    ChkEvenOdd(iValue);    
}

main();