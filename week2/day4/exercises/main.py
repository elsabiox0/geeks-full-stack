# main.py
from menu_item import MenuItem
from menu_manager import MenuManager

item = MenuItem('Burger', 35)
item.save()
item1 = MenuItem('pizza', 35)
item1.save()

item.update('Veggie Burger', 37)



item2 = MenuManager.get_by_name('Beef Stew')
if item2:
    print(f"Found: {item2.name} - ${item2.price}")
else:
    print("Item not found.")

items = MenuManager.all()
for i in items:
    print(f"{i.name} - ${i.price}")
