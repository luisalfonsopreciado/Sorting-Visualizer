/**
 * returns true if the input array is sorted in ascending order.
 * @param {*} arr 
 * @returns isSorted - boolean
 */
export const isSorted = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
