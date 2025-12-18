function Minimum(Brr)
{
    let iCnt = 0;
    let iMin = 0;

    for(iCnt = 0, iMin = Brr[0]; iCnt < Brr.length; iCnt++)
    {
        if(Brr[iCnt] < iMin)
        {
            iMin = Brr[iCnt];
        }
    }
    return iMin;
}

function main()
{
    let Ret = 0;
    const Arr = [10,20,30,40,50];

    Ret = Minimum(Arr);

    console.log(`The minimum elementt is ${Ret}`);
}

main();