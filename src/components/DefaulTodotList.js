//<<<<<<<<<<___Create Date___>>>>>>>>>>
let now = new Date();
let day = ("0" + now.getDate()).slice(-2);
let month = ("0" + (now.getMonth() + 1)).slice(-2);
let today = now.getFullYear() + "-" + (month) + "-" + (day);
//_____________End Create Date__________________


export const DefaulTodotList = [
  {

    text: "Hello world",
    date: "2022-11-10",
    option: "Jobb",

  },
  {

    text: "Hej Värden",
    date: today,
    option: "Jobb"

  },
  {

    text: "Default Todo",
    date: "2022-12-15",
    option: "Hushållsarbete"
  }
]


