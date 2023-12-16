import { getPackageJSON, resolvePkgPath, getBasRollupPlugins } from "./utils";

const { name, module } = getPackageJSON("react");
const pkgPath = resolvePkgPath(name);
const pkgDistPath = resolvePkgPath(name, true);
export default [
  {
    input: `${pkgPath}/${module}`,
    output: {
      file: `${pkgDistPath}/index.js`,
      name: "index.js",
      format: "umd",
    },
    plugins: getBasRollupPlugins(),
  },
];
