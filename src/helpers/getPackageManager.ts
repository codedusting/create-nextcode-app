import { execSync } from "node:child_process";

type PackageManager = "npm" | "yarn" | "pnpm" | "bun";

const getPackageManager: () => PackageManager = () => {
  const userAgent = process.env.npm_config_user_agent || "";
  if (userAgent.startsWith("yarn")) {
    return "yarn";
  } else if (userAgent.startsWith("pnpm")) {
    return "pnpm";
  } else if (userAgent.startsWith("bun")) {
    return "bun";
  }
  return "npm";
};

export default getPackageManager;
