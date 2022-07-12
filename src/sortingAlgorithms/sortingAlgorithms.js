export const mergeSort = array => {

    return array;
};

export const quickSort = array => {

    return array;
};

export const heapSort = array => {

    return array;
};

export function bubbleSort(array){
    const animations = [];
    var i, j;
    for(i = 0; i < array.length-1; i++){
        for(j = 0; j < array.length-i-1; j++){
            // WHEN COMPARING PUSHES TWICE (FOR COLOR CHANGE AND CHANGE BACK)
            animations.push([j, j+1]);
            animations.push([j, j+1]);
            if(array[j] > array[j+1]){
                // IF SWAPPING PUSHES SWAPPED VALUES
                animations.push([array[j], array[j+1]]);
                animations.swap = [j, j+1];
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            else{
                // IF NOT PUSHES -1
                animations.push([-1, -1]);
            }
        }
    }
    return animations;
}