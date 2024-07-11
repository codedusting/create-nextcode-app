import path from "node:path";
import fsExtra from "fs-extra";
import getPackageManager from "./getPackageManager";
import chalk from "chalk";

const createProject = (projectName: string) => {
  const srcFolder = `${path.resolve(__dirname)}/../../template`;
  const projectFolder = `./${projectName}`;

  const packageManager = getPackageManager();

  if (fsExtra.existsSync(projectFolder)) {
    console.log(
      chalk.redBright.bold(projectName) + chalk.red(" already exists!"),
    );
    process.exit(1);
  }

  fsExtra.copySync(srcFolder, projectFolder);

  console.log(
    chalk.cyan.bold(projectName) + chalk.green(" created successfully."),
  );
  console.log("Next steps:");
  console.log(" cd " + chalk.cyan.bold(projectName));
  console.log(` ${packageManager} install`);

  if (
    packageManager === "yarn" ||
    packageManager === "bun" ||
    packageManager === "pnpm"
  ) {
    console.log(` ${packageManager} dev`);
  } else {
    console.log(` npm run dev`);
  }
};

export default createProject;
