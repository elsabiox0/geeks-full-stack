# Exrcice1:Hello world
print (("Hello world\n") * 4)
# Exrcice2:calcul 
result = (99 ** 3) * 8
print(result)
# exercice3:what's u name?
user_name = input("What's u name? ")
my_name = "pedro"
if user_name == my_name :
  print("we have same name hahahaha")
# Exricice 4:  Tall enough to ride a roller coaster 
height = int(input("Enter your height in cm: "))
if height >= 145:
    print("You're tall enough to ride the roller coaster! ")
else:
    print("Sorry, you need to grow some more to ride. ")
# Exrcice 5: Favorite Numbers
my_fav_numbers ={10,20,30}
my_fav_numbers.add(40)
my_fav_numbers.add(50)
friend_fav_numbers = {3, 9,12}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("my fav numbers :", my_fav_numbers)
print("fr fav numbers :", friend_fav_numbers)
print("our fv numbers:", our_fav_numbers)
# exrecice6:tuple
my_tuple = (1, 2, 3)
new_tuple = my_tuple + (4, 5)
print(new_tuple)  # Output: (1, 2, 3, 4, 5)

