import axios from "axios";
import gradient from "gradient-string";
import chalk from "chalk";

export const Test = async () => {
  axios.get("https://htk.vercel.app/api").then((response) => {
    const data = response.data;
    const colors = ["#12c2e9", "#c471ed"];

    const gradientString = gradient(colors)(`${data.text} @${data.author}`);
    console.log(chalk.bgGray(gradientString));
  });
};

Test();
