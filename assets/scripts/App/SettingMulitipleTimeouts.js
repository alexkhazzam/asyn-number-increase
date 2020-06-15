class SettingTimeouts {
  constructor(number, repititions) {
    this.number = number;
    this.repititions = repititions;
    this.setTimers(number, repititions);
    this.reset();
  }

  promise(number) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Number: ${number}`);
      }, 3000);
    });
    return promise;
  }

  setTimers(number, repititions) {
    const ul = document.querySelector("ul");
    let val = number;

    for (let i = 1; i <= repititions; i++) {
      val++;
      this.promise(val).then((resolveData) => {
        const listItem = document.createElement("li");
        listItem.textContent = resolveData;
        ul.append(listItem);
      });
    }
    let msg = `Wait a few seconds please, increasing ${number} by 1 for ${repititions} repititions...`;
    ul.append(msg);
  }

  reset() {
    const ul = document.querySelector("ul");
    const number = document.querySelector(".number");
    const repits = document.querySelector(".repititions");
    const submit = document.querySelector(".submit");
    submit.style.display = "none"
    const reset = document.querySelector(".reset");
    reset.style.display = "block";
    reset.addEventListener("click", () => {
      number.value = "";
      repits.value = "";
      reset.style.display = "none";
      submit.style.display = "block";
      ul.textContent = "";
      ul.style.display = "none";
    });
  }
}
