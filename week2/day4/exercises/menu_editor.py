import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'pedro404'
DATABASE = 'restaurant'

class MenuManager:
    def __init__(self):
        try:
            self.connection = psycopg2.connect(
                host=HOSTNAME,
                user=USERNAME,
                password=PASSWORD,
                database=DATABASE
            )
            self.cursor = self.connection.cursor()
        except Exception as e:
            print("Erreur de connexion à la base de données:", e)
            exit()

    def add_item(self, name, price):
        try:
            query = '''
                INSERT INTO Menu_items(item_name, item_price)
                VALUES (%s, %s)
            '''
            self.cursor.execute(query, (name, price))
            self.connection.commit()
            print("Item ajouté avec succès.")
        except Exception as e:
            print("Erreur lors de l'ajout:", e)

    def remove_item(self, name):
        try:
            query = 'DELETE FROM Menu_items WHERE item_name = %s;'
            self.cursor.execute(query, (name,))
            self.connection.commit()
            print("Item supprimé avec succès.")
        except Exception as e:
            print("Erreur lors de la suppression:", e)

    def update_item(self, old_name, new_name, new_price):
        try:
            query = '''
                UPDATE Menu_items
                SET item_name = %s, item_price = %s
                WHERE item_name = %s;
            '''
            self.cursor.execute(query, (new_name, new_price, old_name))
            self.connection.commit()
            print("Item mis à jour avec succès.")
        except Exception as e:
            print("Erreur lors de la mise à jour:", e)

    def show_all_items(self):
        try:
            query = 'SELECT item_name, item_price FROM Menu_items;'
            self.cursor.execute(query)
            results = self.cursor.fetchall()
            print("\nMenu du restaurant:")
            for name, price in results:
                print(f"- {name}: {price} MAD")
        except Exception as e:
            print("Erreur lors de l'affichage du menu:", e)

    def show_item(self, name):
        try:
            query = 'SELECT item_name, item_price FROM Menu_items WHERE item_name = %s;'
            self.cursor.execute(query, (name,))
            result = self.cursor.fetchone()
            if result:
                print(f"\n{result[0]}: {result[1]} MAD")
            else:
                print("Aucun item trouvé avec ce nom.")
        except Exception as e:
            print("Erreur lors de l'affichage de l'item:", e)

    def close(self):
        self.cursor.close()
        self.connection.close()


def main():
    manager = MenuManager()
    options = ['A', 'D', 'U', 'S', 'V']

    while True:
        user_input = input("\nChoisissez une option [A: Ajouter / D: Supprimer / U: Update / S: Show all / V: View one / Q: Quitter] : ").upper()

        if user_input == 'Q':
            print("Au revoir !")
            break

        elif user_input == 'A':
            name = input("Nom de l'item: ")
            try:
                price = int(input("Prix de l'item: "))
                manager.add_item(name, price)
            except ValueError:
                print("Veuillez entrer un nombre valide pour le prix.")

        elif user_input == 'D':
            name = input("Nom de l'item à supprimer: ")
            manager.remove_item(name)

        elif user_input == 'U':
            old_name = input("Nom actuel de l'item: ")
            new_name = input("Nouveau nom de l'item: ")
            try:
                new_price = int(input("Nouveau prix de l'item: "))
                manager.update_item(old_name, new_name, new_price)
            except ValueError:
                print("Veuillez entrer un nombre valide pour le prix.")

        elif user_input == 'S':
            manager.show_all_items()

        elif user_input == 'V':
            name = input("Nom de l'item à consulter: ")
            manager.show_item(name)

        else:
            print("Option invalide.")

    manager.close()


if __name__ == '__main__':
    main()
