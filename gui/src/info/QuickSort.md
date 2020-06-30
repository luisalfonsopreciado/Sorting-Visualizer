# Quick Sort

<br/>

---

<br/>

QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.

<br/>

There are many different versions of quick sort that pick pivot in different ways:

<br/>

- Always pick first element as pivot.
- Always pick last element as pivot (implemented here)
- Pick a random element as pivot.
- Pick median as pivot.

<br/>  

<br/>

### Pseudo Code

```python
## low  --> Starting index,  high  --> Ending index */
quickSort(arr[], low, high){
    if (low < high){
        ## pi is partitioning index, arr[pi] is now at right place 
        pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);  // Before pi
        quickSort(arr, pi + 1, high); // After pi
    }
}
```
 
<br/>

---
