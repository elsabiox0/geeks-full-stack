SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
-- the query returns 0

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

-- it count 2 rows where FirstTab id is not 5

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

-- the query returns 0 rows

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
-- it count 2 the rows where the FirsTab it does not exist in SecondTab