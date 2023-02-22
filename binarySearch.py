"""
Here's the basic premise of the algorithm:
Say you're searching for a value number_to_find in a search set of sorted_values
Find the middle value in sorted_values we'll call middle_value
If number_to_find is equal to middle_value then your target is found
If number_to_find is less than middle_value, split your sorted_values in half and repeat the algorithm on your new subset (the half of sorted_values before middle_value)
If number_to_find is greater than middle_value, repeat step but with the half of sorted_values valuesaftermiddle_value`
Repeat until you find number_to_find or return -1 if it doesn't exist
"""
import random

values = random.sample(list(range(1,10000)), 1000)
#values = random.sample(list(range(1,15)), 9)
values.sort() # We now have a sorted list of 1000 unique values between 1 and 10,000

def binary_search(number_to_find, values):
    middle_value = values[int(len(values)/2)]
    valuesaftermiddle_value = values[int(len(values)/2)]
    # print(int(len(values)/2),middle_value,valuesaftermiddle_value,values)

    if number_to_find == middle_value: #or number_to_find == valuesaftermiddle_value:
        return number_to_find
    elif len(values) < 2:
        return -1 
    
    if number_to_find < middle_value:
        return binary_search(number_to_find, values[:int(len(values)/2)])
        
    elif number_to_find > valuesaftermiddle_value:
        return binary_search(number_to_find, values[int(len(values)/2):])

    
print(binary_search(50, values)) 
# this returns the index of 537 in values if it exists and -1 if it doesn't exist



