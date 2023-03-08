function minimumDistances(arr) {
    let map = new Map();
    let minDist = -1;
    for(let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])) {
            let dist = i - map.get(arr[i]);
            if(minDist == -1 || dist < minDist) {
                minDist = dist;
            }
        }
        map.set(arr[i], i);
    }
    return minDist;
}



let arr = [3,2,1,2,3];
let dist = minimumDistances(arr);
console.log(dist);