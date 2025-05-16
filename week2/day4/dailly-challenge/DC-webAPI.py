import requests
import random
import psycopg2


def fetch_random_countries(count=10):
    url = "https://restcountries.com/v3.1/all"
    response = requests.get(url)
    if response.status_code != 200:
        raise Exception("Failed to fetch country data")
    
    all_countries = response.json()
    selected = random.sample(all_countries, count)

    countries = []
    for c in selected:
        country = {
            "name": c.get("name", {}).get("common", "Unknown"),
            "capital": c.get("capital", ["Unknown"])[0],
            "flag": c.get("flags", {}).get("png", ""),
            "subregion": c.get("subregion", "Unknown"),
            "population": c.get("population", 0)
        }
        countries.append(country)

    return countries

# 2. Save to PostgreSQL
def save_to_db(countries):
    conn = psycopg2.connect(
        dbname="restaurant",
        user="postgres",
        password="pedro404",
        host="localhost"
    )

    with conn:
        with conn.cursor() as cur:
            for country in countries:
                cur.execute("""
                    INSERT INTO countries (name, capital, flag, subregion, population)
                    VALUES (%s, %s, %s, %s, %s)
                """, (
                    country["name"],
                    country["capital"],
                    country["flag"],
                    country["subregion"],
                    country["population"]
                ))
    conn.close()

# 3. Run the script
if __name__ == "__main__":
    try:
        countries = fetch_random_countries()
        save_to_db(countries)
        print("10 random countries inserted successfully.")
    except Exception as e:
        print("Error:", e)
