def bubble_sort_recursive(array):
    #assert type(array) is list, 'input is not a list'
    n = len(array)
    if n <= 1:
        return array
    for i in range(n - 1):
        if array[i] > array[i + 1]:
            array[i], array[i + 1] = array[i + 1], array[i]
    return bubble_sort_recursive(array[:-1]) + [array[-1]]
print(bubble_sort_recursive([9,6,4,8,3,7,2,1]))