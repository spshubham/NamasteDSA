function countDigits(n)
{
    let cnt = 0;
    let num = Math.abs(n);

    while(num>0)
    {
        let tmp = Math.floor(num/10)
        num = tmp;
        cnt++
    }
    console.log(cnt)
}
countDigits(-2251)