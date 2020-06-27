# Bucket Sort

<br/>

---

<br/>

<p align="justify">
Bucket sort is mainly useful when input is uniformly distributed over a range. Following is the bucket algorithms:   
</p>

bucketSort(arr[], n)

1. Create n empty buckets (Or lists).
2. Do following for every array element arr[i]........

- a) Insert arr[i] into bucket[n\*array[i]]

3. Sort individual buckets using insertion sort.4. Concatenate all sorted buckets.

<br/>

---
