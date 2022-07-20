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

export function quickSort(array){
    
    return array;
}

export function heapSort(array){

    const animations = [];
    var i;
    var length = array.length;

    for(i = Math.floor(length / 2) - 1; i >= 0; i--){
        heapify(array, length, i, animations);
    }

    
    for(i = length - 1; i > 0; i--){
        animations.push([0, i]);
        animations.push([0, i]);
        animations.push([array[0], array[i]]);
        var tmp = array[0];
        array[0] = array[i];
        array[i] = tmp;
        heapify(array, i, 0, animations);
    }

    return animations;
}

function heapify(array, length, i, animations) {
    var large = i;
    var left = 2 * i + 1;
    var right = 2 * i + 2;

    if(left < length && array[left] > array[large]){
        large = left;
    }

    if(right < length && array[right] > array[large]){
        large = right;
    }

    if(large !== i){
        animations.push([i, large]);
        animations.push([i, large]);
        animations.push([array[i], array[large]]);
        var tmp = array[i];
        array[i] = array[large];
        array[large] = tmp;
        heapify(array, length, large, animations);
    }

}

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