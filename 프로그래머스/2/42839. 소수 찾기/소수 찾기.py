import math

def is_prime(x):
    if x < 2:
        return False
    for i in range(2, int(math.sqrt(x) + 1)):
        if x % i == 0:
            return False
    return True

def solution(string_number_list):
    prime_set = set()

    def search(visited_indices, index, current_string):
        visited_indices[index] = True
        current_string += string_number_list[index]
        number = int(current_string)

        if is_prime(number):
            prime_set.add(number)

        for new_index in range(len(string_number_list)):
            if visited_indices.get(new_index) is None:
                search(visited_indices.copy(), new_index, current_string)

    for index in range(len(string_number_list)):
        visited_indices = {}
        if string_number_list[index] != "0":
            search(visited_indices, index, "")

    return len(prime_set)