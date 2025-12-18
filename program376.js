// OOP Approach

class Arithematic
{
    constructor(A, B)
    {
        this.No1 = A;
        this.No2 = B;
    }   

    Addition()
    {
        return this.No1 + this. No2;
    }

    Substraction()
    {
        return this.No1 - this. No2;
    }
    
}

function main()
{
    let Ret = 0;
    let obj = new Arithematic(11,10);

    Ret = obj.Addition();
    console.log(Ret);

    Ret = obj.Substraction();    
    console.log(Ret);
}

main();