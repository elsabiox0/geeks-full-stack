from db import get_connection
from menu_item import MenuItem

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        conn = get_connection()
        with conn:
            with conn.cursor() as cur:
                cur.execute(
                    "SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s",
                    (name,)
                )
                result = cur.fetchone()
        conn.close()
        if result:
            return MenuItem(result[0], result[1])
        return None

    @classmethod
    def all(cls):
        conn = get_connection()
        with conn:
            with conn.cursor() as cur:
                cur.execute("SELECT item_name, item_price FROM Menu_Items")
                results = cur.fetchall()
        conn.close()
        return [MenuItem(name, price) for name, price in results]
