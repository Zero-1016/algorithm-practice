def isStartWith(text, prefix):
    return text.startswith(prefix)


def solution(phone_book):
    phone_book.sort()
    for i in range(len(phone_book) - 1):
        if isStartWith(phone_book[i + 1], phone_book[i]):
            return False

    return True