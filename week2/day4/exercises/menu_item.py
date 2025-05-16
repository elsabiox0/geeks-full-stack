import psycopg2
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'pedro404'
DATABASE = 'restaurant'
connection = psycopg2.connect(
    host=HOSTNAME,
    user=USERNAME,
    password=PASSWORD,
    database=DATABASE
)
cursor = connection.cursor()
class MenuItem:
    def __init__(self,name,price):
        self.name=name
        self.price=price
        
    def save(self):
        query=f'''
            insert into Menu_Items (item_name,item_price)
            values(%s,%s);
        '''
        cursor.execute(query,(self.name,self.price))
        connection.commit()
    @staticmethod
    def update(id:int,new_name='',new_price=0):
        if new_name!='' and new_price!=0:
            query=f'''
            update Menu_items
            set item_name=%s, item_price=%s where item_id=%s;
            '''
            cursor.execute(query,(new_name,new_price,id))
            connection.commit()
        
        
        if new_name!='' and new_price==0:
            query=f'''
            update Menu_items
            set item_name=%s where item_id=%s;
            '''
            cursor.execute(query,(new_name,id))
            connection.commit()
            
        if new_name=='' and new_price!=0:
            query=f'''
            update Menu_items
            set item_price=%s where item_id=%s;
            '''
            cursor.execute(query, (new_price, id))
            connection.commit()
        
    
    @staticmethod
    def delete(name_del):
        query=f'''
        delete from Menu_items where item_name=%s;
        '''
        
        cursor.execute(query,(name_del,))
        connection.commit()
        
        
class MenuManager:
    @staticmethod
    def get_by_name(name):
        query=f'''
        select * from Menu_items where item_name=%s;
        '''
        cursor.execute(query,(name,))
        output = cursor.fetchall()
        return output
    @staticmethod
    def all_items():
        query=f'''
            select * from Menu_items;
        '''
        
        cursor.execute(query)
        output=cursor.fetchall()
        return output
        
# === TEST DU CODE ===

# Ajout d'un nouvel item
item = MenuItem('Tacos poulet', 15)
item.save()

# Mise à jour (en utilisant la classe, car 'update' est static)
MenuItem.update(1, 'Veggie Burger', 37)

# Suppression d'un item
MenuItem.delete('Tacos mix')

# Récupération d'un item
item2 = MenuManager.get_by_name('Veggie Burger')

# Récupération de tous les items
items = MenuManager.all_items()

# Affichage
print("Item trouvé :", item2)
print("Tous les items :", items)

# Fermeture
cursor.close()
connection.close()