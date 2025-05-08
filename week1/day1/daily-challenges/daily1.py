# challengge 1
number = int(input("Give me number"))
length = int(input("Give me lenght"))

numbers = []
for i in range( 1,length+1) :
   numbers.append(number * i)
# challengge 2
word = input('entrer votre mot :')
result =""
for lettre in word :
   if not result or lettre != result[-1]:
       result += lettre


print(result)