class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

cat1 = Cat("Mimi", 5)
cat2 = Cat("Tom", 3)
cat3 = Cat("Simba", 7)

def find_oldest_cat(cats):
    oldest = cats[0]
    for cat in cats:
        if cat.age > oldest.age:
            oldest = cat
    return oldest

cats = [cat1, cat2, cat3]
oldest_cat = find_oldest_cat(cats)

print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")
