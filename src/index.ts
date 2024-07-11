#!/usr/bin/env node

import prompts from "prompts";
import createProject from "./helpers/create";
import chalk from "chalk";

const questions: Array<{
  type: string;
  name: string;
  message: string;
  choices?: Array<{ title: string; value: string }>;
  initial?: number;
}> = [
  {
    type: "text",
    name: "name",
    message: "What is your project name?",
  },
  {
    type: "select",
    name: "language",
    message: "Do you want JavaScript or TypeScript?",
    choices: [
      {
        title: "JavaScript",
        value: "javascript",
      },
      {
        title: "TypeScript",
        value: "typescript",
      },
    ],
    initial: 1,
  },
];

(async () => {
  const response: { name: string; language: string } = await prompts(
    questions as any,
  );
  const { name, language } = response;
  if (language === "javascript") {
    console.log(
      "\n" +
        chalk.bold.underline(
          "Wrong choice. Using",
          chalk.blue("TypeScript ") + "instead.\n\n",
        ),
    );
  } else {
    console.log(chalk.bold.underline("\nCorrect choice!"));
  }
  createProject(name);
  process.exit(0);
})();
