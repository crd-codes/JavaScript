
function Count(str)
{
    let iCnt = 0;
    let iCount = 0;

    for(iCnt = 0; iCnt < str.length; iCnt++)
    {
        if(str.charAt(iCnt) >= 'a' && str.charAt(iCnt) <= 'z')
            {
                iCount++;
            }       
    }

    return iCount;
}

function main()
{
    let str = "Hello";
 
    Ret = Count('l');
    
    console.log(Ret);
    
}

main();