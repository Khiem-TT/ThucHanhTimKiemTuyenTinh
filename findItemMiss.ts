function findItemMiss(data: number[]): number[] {
    let arr: number[] = [];
    let i: number = 1;
    while (i <= 10) {
        if (data.indexOf(i) === -1) arr.push(i);
        i++;
    }
    return arr;
}

let arr: number[] = [1, 2, 5, 6, 7, 10];
console.log(findItemMiss(arr));