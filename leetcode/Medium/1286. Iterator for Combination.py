import itertools

class CombinationIterator:
    def __init__(self, characters: str, combinationLength: int):
        self.pointer = -1
        self.nCr = list(itertools.combinations(characters, combinationLength))

    def next(self) -> str:
        self.pointer += 1
        return "".join(self.nCr[self.pointer])

    def hasNext(self) -> bool:
        return self.pointer + 1 < len(self.nCr)
