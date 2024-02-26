def MergeSort(list1,list2):
    SortedList = []
    i = 0
    j = 0
    while i < len(list1) and j < len(list2):
            if list1[i] < list2[j]:
                SortedList.append(list1[i])
                i += 1
            else:
                SortedList.append(list2[j])
                j += 1
    SortedList.extend(list1[i:])
    SortedList.extend(list2[j:])
    return SortedList


print(MergeSort([1,3,5],[2,4,6]))