function Maximum(Brr)
{
    let iCnt = 0;
    let iMax = 0;

    for(iCnt = 0, iMax = Brr[0]; iCnt < Brr.length; iCnt++)
    {
        if(Brr[iCnt] > iMax)
        {
            iMax = Brr[iCnt];
        }
    }
    return iMax;
}

function main()
{
    let Ret = 0;
    const Arr = [10,20,30,40,50];

    Ret = Maximum(Arr);

    console.log(`The maximum elementt is ${Ret}`);
}

main();