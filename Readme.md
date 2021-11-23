# NutritionAppBackend

An api for giving nutrients of any food with 29 properties.

29 properties are categorized into 3 types.

**_1. General Items_**

**_2. Mineral Items_**

**_3. Vitamin Items_**

---

- **General Items**

---

    1. Protein
    2. Total Lipid (fat)
    3. Carbohydrate
    4. Energy
    5. Alcohol, ethyl
    6. Caffeine
    7. Sugars
    8. Fiber
    9. Riboflavin
    10. Folic acid
    11. Cholesterol
    12. Fatty acids

---

- **Mineral Items**

---

    1. Ca
    2. Mg
    3. Fe
    4. K
    5. Na
    6. Zn
    7. Cu
    8. P

---

- **Vitamin Items**

---

    1. A
    2. B-6
    3. B-12
    4. C
    5. D
    6. E
    7. K
    8. Carotene alpha
    9. Carotene beta

> ### **_Note: Nutritions are shown as a 100g unit of each fruit/food/vegetables_**

## HOSTING API

https://nutritionapiv2.herokuapp.com/

## GET Nutrition Data From API (Example)

[GET Method]

https://nutritionapiv2.herokuapp.com/test/q?name=mango

### Success Result :

```js
{
    "status": "Success",
    "data": {
        "name": "Mango,",
        "count": {
            "generalItemsCount": 12,
            "mineralItemCount": 8,
            "vitaminItemCount": 9
        },
        "source": "Survey (FNDDS)",
        "generalItems": [
            {
                "nutrientName": "Protein",
                "nutrientValue": 0.82,
                "unit": "G"
            },
            {
                "nutrientName": "Total lipid (fat)",
                "nutrientValue": 0.38,
                "unit": "G"
            },
            {
                "nutrientName": "Carbohydrate, by difference",
                "nutrientValue": 15,
                "unit": "G"
            },
            {
                "nutrientName": "Energy",
                "nutrientValue": 60,
                "unit": "KCAL"
            },
            {
                "nutrientName": "Alcohol, ethyl",
                "nutrientValue": 0,
                "unit": "G"
            },
            {
                "nutrientName": "Caffeine",
                "nutrientValue": 0,
                "unit": "MG"
            },
            {
                "nutrientName": "Sugars, total including NLEA",
                "nutrientValue": 13.7,
                "unit": "G"
            },
            {
                "nutrientName": "Fiber, total dietary",
                "nutrientValue": 1.6,
                "unit": "G"
            },
            {
                "nutrientName": "Riboflavin",
                "nutrientValue": 0.038,
                "unit": "MG"
            },
            {
                "nutrientName": "Folic acid",
                "nutrientValue": 0,
                "unit": "UG"
            },
            {
                "nutrientName": "Cholesterol",
                "nutrientValue": 0,
                "unit": "MG"
            },
            {
                "nutrientName": "Fatty acids, total saturated",
                "nutrientValue": 0.092,
                "unit": "G"
            }
        ],
        "mineralItems": [
            {
                "nutrientName": "Calcium, Ca",
                "nutrientValue": 11,
                "unit": "MG"
            },
            {
                "nutrientName": "Iron, Fe",
                "nutrientValue": 0.16,
                "unit": "MG"
            },
            {
                "nutrientName": "Magnesium, Mg",
                "nutrientValue": 10,
                "unit": "MG"
            },
            {
                "nutrientName": "Phosphorus, P",
                "nutrientValue": 14,
                "unit": "MG"
            },
            {
                "nutrientName": "Potassium, K",
                "nutrientValue": 168,
                "unit": "MG"
            },
            {
                "nutrientName": "Sodium, Na",
                "nutrientValue": 1,
                "unit": "MG"
            },
            {
                "nutrientName": "Zinc, Zn",
                "nutrientValue": 0.09,
                "unit": "MG"
            },
            {
                "nutrientName": "Copper, Cu",
                "nutrientValue": 0.111,
                "unit": "MG"
            }
        ],
        "vitaminItems": [
            {
                "nutrientName": "Vitamin A, RAE",
                "nutrientValue": 54,
                "unit": "UG"
            },
            {
                "nutrientName": "Carotene, beta",
                "nutrientValue": 640,
                "unit": "UG"
            },
            {
                "nutrientName": "Carotene, alpha",
                "nutrientValue": 9,
                "unit": "UG"
            },
            {
                "nutrientName": "Vitamin E (alpha-tocopherol)",
                "nutrientValue": 0.9,
                "unit": "MG"
            },
            {
                "nutrientName": "Vitamin D (D2 + D3)",
                "nutrientValue": 0,
                "unit": "UG"
            },
            {
                "nutrientName": "Vitamin C, total ascorbic acid",
                "nutrientValue": 36.4,
                "unit": "MG"
            },
            {
                "nutrientName": "Vitamin B-6",
                "nutrientValue": 0.119,
                "unit": "MG"
            },
            {
                "nutrientName": "Vitamin B-12",
                "nutrientValue": 0,
                "unit": "UG"
            },
            {
                "nutrientName": "Vitamin K (phylloquinone)",
                "nutrientValue": 4.2,
                "unit": "UG"
            }
        ]
    }
}
```

### Not Found Result :

```js
{
    "status": "Error",
    "data": {}
}
```

#### Reference :

---

USDA Site https://fdc.nal.usda.gov/

Though USDA site provides us the nutrition value of all foods that ever exist. And it is the biggest food datacenter in the world!
But the problem to me is the api call is somewhat messy and the searching system is not user friendly.

So, I just grab the api and sorts the value into my formar. Hope this will help a lot!
