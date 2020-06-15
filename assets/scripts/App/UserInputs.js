const number = document.querySelector(".number");
const repititions = document.querySelector(".repititions");
const submitButton = document.querySelector("button");

class UserInputsHandler {
  fetchInputs() {
    this.number = number.value;
    this.repititions = repititions.value;
    this.handlerInputs();
  }

  handlerInputs() {
    if (this.number.trim() === "" || this.repititions.trim() === "") {
      const er = new Error("Please enter valid inputs");
      this.reset();
      alert(er);
      return;
    }
    if (this.number >= 10000 || this.repititions >= 10000) {
      const er = new Error(
        "Please enter a repitition and number value >= 10000"
      );
      this.reset();
      alert(er);
      return;
    }
    if (this.repititions <= 0) {
      const er = new Error("Please enter a repitition value > 0");
      this.reset();
      alert(er);
      return;
    }
    const ul = document.querySelector("ul");
    ul.style.display = "block";
    const settingTimeouts = new SettingTimeouts(this.number, this.repititions);
  }

  reset() {
    repititions.value = "";
    number.value = "";
  }
}

const userInputsHandler = new UserInputsHandler();
submitButton.addEventListener(
  "click",
  userInputsHandler.fetchInputs.bind(userInputsHandler)
);
