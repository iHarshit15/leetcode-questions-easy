class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        l = []
        for i, num1 in enumerate(nums):
            num2 = target - num1
            for j in range(i + 1, len(nums)):
                if nums[j] == num2:
                    l.append(i)
                    l.append(j)

                    return l
                    break