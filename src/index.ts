#!/usr/bin/env node

import prompts from "prompts";
import createProject from "./helpers/create";
import chalk from "chalk";
import { questions } from "./questions";

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
  console.log(chalk.green.bold("\nInstalling..."));
  createProject(name);
  process.exit(0);
})();
