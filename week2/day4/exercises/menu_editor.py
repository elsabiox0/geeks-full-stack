from menu_item import MenuItem
from menu_manager import MenuManager


def show_user_menu():
    while True:
        print("\n=== Restaurant Menu Manager ===")
        print("View an Item (V)")
        print("Add an Item (A)")
        print("Delete an Item (D)")
        print("Update an Item (U)")
        print("Show the Menu (S)")
        print("Exit (E)")

        choice = input("Enter your choice: ").strip().upper()

        if choice == 'V':
            view_item()
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'E':
            print("\nExiting... Here is the final restaurant menu:")
            show_restaurant_menu()
            break
        else:
            print("Invalid choice. Please try again.")


def add_item_to_menu():
    name = input("Enter the item name: ").strip()
    try:
        price = int(input("Enter the item price: "))
        item = MenuItem(name, price)
        item.save()
        print(f"Item '{name}' was added successfully.")
    except Exception as e:
        print("Error adding item:", e)


def remove_item_from_menu():
    name = input("Enter the item name to delete: ").strip()
    try:
        item = MenuItem(name) 
        item.delete()
        print(f"Item '{name}' was deleted successfully.")
    except Exception as e:
        print("Error deleting item:", e)


def update_item_from_menu():
    current_name = input("Enter the current item name: ").strip()
    try:
        current_item = MenuManager.get_by_name(current_name)
        if current_item:
            new_name = input("Enter the new item name: ").strip()
            new_price = int(input("Enter the new item price: "))
            current_item.update(new_name, new_price)
            print(f"Item '{current_name}' was updated successfully.")
        else:
            print(f"No item found with the name '{current_name}'.")
    except Exception as e:
        print("Error updating item:", e)


def view_item():
    name = input("Enter the name of the item to view: ").strip()
    item = MenuManager.get_by_name(name)
    if item:
        print(f"Found item: {item.name} - {item.price}")
    else:
        print(f"No item found with the name '{name}'.")


def show_restaurant_menu():
    items = MenuManager.all()
    if items:
        print("\n--- Restaurant Menu ---")
        for item in items:
            print(f"{item.name}: {item.price} DH")
    else:
        print("The menu is currently empty.")


if __name__ == "__main__":
    show_user_menu()
