# challengge 1
number = int(input("Give me number"))
length = int(input("Give me lenght"))

numbers = []
for i in range( 1,length+1) :
   numbers.append(number * i)
# challengge 2
def remove_consecutive_duplicates(s):
    result = ""
    prev_char = ""  

    for char in s:
        if char != prev_char:
            result += char  
        prev_char = char  


    return result

user_input = input("Enter a string: ")
output = remove_consecutive_duplicates(user_input)
print("Result:", output)

    