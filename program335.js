// Function

function Display(no)
{
    console.log("Jay Ganesh..."+no);
    return ++no;
}

function main()
{
    let Ret = 0;

    Ret = Display(11);

    console.log("Return value is : "+Ret);
}

main();