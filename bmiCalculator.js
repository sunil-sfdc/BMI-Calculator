import { LightningElement, track } from "lwc";
import { getBMI } from "c/bmi";

export default class BmiCalculator extends LightningElement {
  @track dataBmi = {
    height: 0,
    weight: 0,
    result: 0
  };

  heightChangeHandler(event) {
    this.dataBmi.height = parseFloat(event.target.value);
  }

  weightChangeHandler(event) {
    this.dataBmiweight = parseFloat(event.target.value);
  }

  calculateBmi() {
    this.bmi = getBMI(this.weight, this.height);
  }

  get bmiValue() {
    return `Your BMI is ${this.dataBmi.result}`;
  }
}
