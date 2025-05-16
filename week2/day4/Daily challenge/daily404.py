import requests
import psycopg2

url = "https://restcountries.com/v3.1/all"
response = requests.get(url)
countries = response.json()

connection = psycopg2.connect(
    host="localhost",
    dbname="restaurant",
    user="postgres",
    password="pedro404"
)

cursor = connection.cursor()

for i in range(10):
    restaurant = countries[i]
    name = restaurant.get("name", {}).get("common", "Unknown")
    capital = restaurant.get("capital", ['Unknown'])[0] if restaurant.get("capital") else "Unknown"
    flag = restaurant.get("flag", "🏳️")
    subregion = restaurant.get("subregion", "Unknown")
    population = restaurant.get("population", 0)
    
    query = '''
        INSERT INTO countries(name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s);
    '''
    cursor.execute(query, (name, capital, flag, subregion, population))

connection.commit()
cursor.close()
connection.close()
