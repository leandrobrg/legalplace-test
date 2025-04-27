import { Drug, Pharmacy } from "./pharmacy";
import fs from "fs";
import { DrugTypes } from "./types";

const drugs = [
  new Drug(DrugTypes.Doliprane, 20, 30),
  new Drug(DrugTypes.HerbalTea, 10, 5),
  new Drug(DrugTypes.Fervex, 12, 35),
  new Drug(DrugTypes.MagicPill, 15, 40),
];
const pharmacy = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
}

fs.writeFile(
  "output.json",
  JSON.stringify({ result: log }, null, 2).concat("\n"),
  (err) => {
    if (err) {
      console.log("error");
    } else {
      console.log("success");
    }
  },
);
