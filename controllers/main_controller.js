const axios = require("axios");

const landingPageController = (req, res) => {
  res.status(200).json({
    data: "Hello",
  });
};

const requestAPI = (req, res) => {
  //res.status(200).json(req.params.name);
  let qName = req.query.name.toLowerCase();
  if (qName.includes("coconut")) {
    qName = req.query.name.toLowerCase() + "%20water,%20unsweetened";
  } else {
    qName = req.query.name.toLowerCase() + ",%20raw";
  }
  // console.log(
  //     process.env.uri + "&api_key=" + process.env.apiKey + "&query=" + qName
  // );
  // console.log("params = " + req.query.name);

  axios
    .get(process.env.uri + "&api_key=" + process.env.apiKey + "&query=" + qName)
    .then((response) => {
      data = response.data;
      // console.log(Object.keys(data.foods[0]).length);
      let x = data.foods[0];
      //  console.log(data.foods);
      let generalItems = [];
      let mineralItems = [];
      let vitaminItems = [];
      let ins = "";
      let source = "";
      let gItemCount = 0;
      let mItemCount = 0;
      let vItemCount = 0;
      let totGNutrition = 0;
      let totMNutrition = 0;
      let totVNutrition = 0;
      let lenOfFood = Object.keys(data.foods).length;

      // for (let i = 0; i < Object.keys(data.foods[0]).length; i++) {
      // console.log(Object.keys(data.foods[0]));

      // }

      // console.log(Object.keys(x.foodNutrients).length);
      //if (lenOfFood > 0) {
      //console.log(lenOfFood);

      //TODO:
      if (lenOfFood > 0) {
        let len = Object.keys(data.foods[0].foodNutrients).length;
        ins = x.description.split(" ")[0];
        // console.log(ins);
        //  console.log(len);
        source = x.dataType;

        for (let i = 0; i < len; i++) {
          let checkVal = x.foodNutrients[i].nutrientName;
          //    console.log(checkVal);
          if (
            checkVal == "Protein" ||
            checkVal == "Total lipid (fat)" ||
            checkVal == "Carbohydrate, by difference" ||
            checkVal == "Energy" ||
            checkVal == "Alcohol, ethyl" ||
            checkVal == "Caffeine" ||
            checkVal == "Sugars, total including NLEA" ||
            checkVal == "Fiber, total dietary" ||
            checkVal == "Folic acid" ||
            checkVal == "Fatty acids, total saturated" ||
            checkVal == "Cholesterol" ||
            checkVal == "Riboflavin"
          ) {
            let gName = x.foodNutrients[i].nutrientName;
            let gVal = x.foodNutrients[i].value;
            let gUnit = x.foodNutrients[i].unitName;
            let hVal = 0;
            let temp = gVal;
            if (x.foodNutrients[i].hasOwnProperty("Cholesterol")) {
              hVal = temp * 0.001;
              generalItems.push({
                nutrientName: "Cholesterol",
                nutrientValue: 0.0,
                unit: "MG",
              });
            }
            if (x.foodNutrients[i].hasOwnProperty("Riboflavin")) {
              hVal = temp * 0.001;
              generalItems.push({
                nutrientName: "Riboflavin",
                nutrientValue: 0.0,
                unit: "MG",
              });
            }
            if (gName == "Energy" && gUnit == "KCAL") {
              continue;
            }

            if (gUnit == "MG") {
              hVal = temp * 0.001;
            }
            if (gUnit == "UG") {
              hVal = temp * 0.000001;
            }
            if (gUnit == "G") {
              hVal = temp;
            }
            // console.log(hVal + " " + gUnit);
            totGNutrition = totGNutrition + hVal;

            gItemCount++;
            generalItems.push({
              nutrientName: gName,
              nutrientValue: gVal,
              unit: gUnit,
            });
          }
          if (
            checkVal == "Calcium, Ca" ||
            checkVal == "Magnesium, Mg" ||
            checkVal == "Iron, Fe" ||
            checkVal == "Potassium, K" ||
            checkVal == "Sodium, Na" ||
            checkVal == "Zinc, Zn" ||
            checkVal == "Copper, Cu" ||
            checkVal == "Phosphorus, P"
          ) {
            let mName = x.foodNutrients[i].nutrientName;
            let mVal = x.foodNutrients[i].value;
            let mUnit = x.foodNutrients[i].unitName;
            let hVal1 = 0;
            let temp1 = mVal;
            mItemCount++;
            hVal1 = temp1 * 0.001;
            // console.log(hVal + " " + gUnit);
            totMNutrition = totMNutrition + hVal1;
            mineralItems.push({
              nutrientName: mName,
              nutrientValue: mVal,
              unit: mUnit,
            });
          }
          if (
            checkVal == "Vitamin A, RAE" ||
            checkVal == "Vitamin B-6" ||
            checkVal == "Vitamin B-12" ||
            checkVal == "Vitamin C, total ascorbic acid" ||
            checkVal == "Vitamin D (D2 + D3)" ||
            checkVal == "Vitamin E (alpha-tocopherol)" ||
            checkVal == "Vitamin K (phylloquinone)" ||
            checkVal == "Carotene, beta" ||
            checkVal == "Carotene, alpha"
          ) {
            let vName = x.foodNutrients[i].nutrientName;
            let vVal = x.foodNutrients[i].value;
            let vUnit = x.foodNutrients[i].unitName;
            let temp2 = vVal;
            vItemCount++;
            let hVal2 = vVal;
            if (vUnit == "MG") {
              hVal2 = temp2 * 0.001;
            }
            if (vUnit == "UG") {
              hVal2 = temp2 * 0.000001;
            }
            // console.log("--------VITAMINS--------");
            //console.log("V - " + hVal + " " + vUnit);
            totVNutrition = totVNutrition + hVal2;

            vitaminItems.push({
              nutrientName: vName,
              nutrientValue: vVal,
              unit: vUnit,
            });
          }
        }
        generalItems.sort((a, b) => b.nutrientValue - a.nutrientValue);
        mineralItems.sort((a, b) => b.nutrientValue - a.nutrientValue);
        vitaminItems.sort((a, b) => b.nutrientValue - a.nutrientValue);
        res.status(200).json({
          status: "Success",
          data: {
            name: ins,
            count: {
              generalItemsCount: gItemCount,
              mineralItemCount: mItemCount,
              vitaminItemCount: vItemCount,
            },
            totalNutritionValue: {
              totalNutrients: totGNutrition + totMNutrition + totVNutrition,
              totGNutrition,
              totMNutrition,
              totVNutrition,
            },
            source,
            generalItems,
            mineralItems,
            vitaminItems,
          },
        });
      } else {
        res.status(404).json({
          status: "Error",
          data: {},
        });
      }
    })
    .catch((ex) =>
      res.status(500).json({
        status: `${ex} - Internal Server Error`,
        data: {},
      })
    );
};

module.exports = {
  landingPageController,
  requestAPI,
};
