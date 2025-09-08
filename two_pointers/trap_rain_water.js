//leetcode = 42

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    let maxL = [];
    maxL[0] = arr[0];

    for(let i = 1;i<arr.length;i++)
    {
        maxL[i] = Math.max(maxL[i-1],arr[i])
    }
    let maxR = [];
    maxR[arr.length-1] = arr[arr.length-1];

    for(let i = arr.length-2;i>=0;i--)
    {
        maxR[i] = Math.max(arr[i],maxR[i+1])
    }

    console.log(maxR,maxL)
    let ans = 0;
    for(let i = 0;i<arr.length;i++)
    {
        let waterTrapped = Math.min(maxL[i],maxR[i])- arr[i]
        ans = ans+ (waterTrapped< 0 ? 0 : waterTrapped)
    }
    return ans;
};

var trap = function(arr) {
    if (arr.length === 0) return 0;

    let n = arr.length;
    let maxL = Array(n).fill(0);
    let maxR = Array(n).fill(0);

    maxL[0] = arr[0];
    maxR[n - 1] = arr[n - 1];

    for (let i = 1; i < n; i++) {
        // build maxL from left
        maxL[i] = Math.max(maxL[i - 1], arr[i]);

        // build maxR from right (mirror index n-1-i)
        let j = n - 1 - i;
        maxR[j] = Math.max(maxR[j + 1], arr[j]);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        let waterTrapped = Math.min(maxL[i], maxR[i]) - arr[i];
        ans += (waterTrapped < 0 ? 0 : waterTrapped);
    }

    return ans;
};
