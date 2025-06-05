function squarePattern(n)
{
    for(let i = 0;i<n;i++)
    {
        let row = "";
        for(let j = 0;j<n;j++)
        {
            row = row + "* "
        }
        console.log(row)
    }
    
}


/*
*
**
***
*/

function oneSideTriangle(n) 
{
    for(let i = 0;i<n;i++)
    {
        let row = "";
        for(let j = 0;j<i;j++)
        {
            row = row + "* "
        }
        console.log(row)
    }
    
}

/*
1
12
123
*/
function digitPattern(n) 
{
    for(let i = 1;i<=n;i++)
    {
        let row = "";
        for(let j = 1;j<=i;j++)
        {
            row = row + j
        }
        console.log(row)
    }
    
}


/*

1
22
333
4444
*/
function digitRowPattern(n) 
{
    for(let i = 1;i<=n;i++)
    {
        let row = "";
        for(let j = 1;j<=i;j++)
        {
            row = row + i
        }
        console.log(row)
    }
    
}


/*
1234
123
12
1
*/
function reverseDigitPattern(n) 
{
    for(let i = 0;i<=n;i++)
    {
        let row = "";
        for(let j = 1;j<n-i;j++)
        {
            row = row + j
        }
        console.log(row)
    }
    
}
/*
    *
   **
  ***
 ****
*/   
function rightStarPattern(n) 
{
    for(let i = 0;i<n;i++)
    {
        let row = "";
        for(let j = 0;j<n-(i+1);j++)
        {
            row = row + " "
        }
        for(let k = 0;k<i+1;k++)
        {
            row = row+"*"
        }
        console.log(row)
    }
    
}
/*
1
10
101
1010
10101

*/
function oneZero(n) 
{
    for(let i = 0;i<n;i++)
    {
        let row = "";
        let tog = 1
        for(let j = 0;j<(i+1);j++)
        {
            row = row + tog
            if(tog == 1) tog = 0
        else    
            tog = 1
        }
        
        console.log(row)
    }
    
}


/*
1
01
010
1010
*/
function alterNativeOneZero(n) 
{            let tog = 1

    for(let i = 0;i<n;i++)
    {
        let row = "";
        for(let j = 0;j<(i+1);j++)
        {
            
            row = row + tog
            if(tog == 1) tog = 0
            else    
                tog = 1
        }
        
        console.log(row)
    }
    
}

//squarePattern(3)
//oneSideTriangle(4)
//digitPattern(5)
//digitRowPattern(5)
//reverseDigitPattern(5)
//rightStarPattern(5)
//oneZero(4)
alterNativeOneZero(4)