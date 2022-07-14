export function mergeSort(array){
    const animations = [];
    if(array.length <= 1 ) return array;
    const arrayCopy = array.slice();
    mergeSortRecurse(array, 0, array.length - 1, arrayCopy, animations);
    return animations;
}

function mergeSortRecurse(array, left, right, arrayCopy, animations)
{
    if(left >= right) return;
    const middle = Math.floor((left+right)/2);
    mergeSortRecurse(arrayCopy, left, middle, array, animations);
    mergeSortRecurse(arrayCopy, middle+1, right, array, animations);
    merge(array, left, middle, right, arrayCopy, animations);
}

function merge(array, left, middle, right, arrayCopy, animations)
{
    var k, i, j;
    k = left;
    i = left;
    j = middle + 1;

    while( i <= middle && j <= right) {
        animations.push([i, j]);
        animations.push([i, j]);

        if(arrayCopy[i] <= arrayCopy[j]){
            animations.push([k, arrayCopy[i]]);
            array[k] = arrayCopy[i];
            k++;
            i++;
        }
        else{
            animations.push([k, arrayCopy[j]]);
            array[k] = arrayCopy[j];
            k++;
            j++;
        }
    }

    while( i<= middle){
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, arrayCopy[i]]);
        array[k] = arrayCopy[i];
        k++;
        i++;
    }

    while( j <= right){
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, arrayCopy[j]]);
        array[k] = arrayCopy[j];
        k++;
        j++;
    }

}

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
