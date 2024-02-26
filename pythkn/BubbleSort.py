def bubbleSort(list1):
    for i in range(len(list1) - 1):
        for j in range(len(list1) - i - 1):
            if list1[j] > list1[j+1]:
                temp = 0
                temp = list1[j]
                list1[j] = list1[j + 1]
                list1[j + 1] = temp
    return list1

data = [64, 34, 25, 12, 22, 11, 90]
print(bubbleSort(data))