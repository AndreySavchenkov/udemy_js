let arr = [1, 14, 4],
    i = arr.sort(compareNum);

    function compareNum(a,b){
        return a-b;
    }

    console.log(arr);