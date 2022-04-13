function findMaxMin(arr){
    let maxSumCol = 0 , minSumCol=0 , sum =0 , tabSum=[];
    
    for(var i = 0 ; i < arr.length ; i++){
        maxSumCol =+ arr[i][0]; 
    }
    tabSum.push(sum);
    minSumCol = maxSumCol ; 
    for(var i = 1 ; i< arr.length ; i++){
        for(var j = 0 ; j < arr.length ; j++){
            sum =+ arr[i][j];
        }
        if(sum < minSumCol){
            minSumCol=sum;
        }
        if(sum>maxSumCol){
            maxSumCol=sum;
        }
    }
    console.log(maxSumCol);
    console.log(minSumCol);
    return arr;
}

findMaxMin([[1,-3,4, 0 ,9],
           [0,-9,7, 10,11],
           [2, 5,8,-11,45],
           [7, 4,12,-6,-5]]);