function print()
{
    if(true)
    {
        var a = 10; //function scoped
        let b = 23; //block scoped
        const c = 33; //block scoped
        console.log(b);
        console.log(c);
    }
    console.log(a);
    
}
print();
