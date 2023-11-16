# init project

npx eslint --init -w  
pnpm i -D -w @typescript-eslint/eslint-plugin @typescript-eslint/eslint-plugin  
pnpm i -D -w typescript  
pnpm i -D -w eslint-config-prettier eslint-plugin-prettier
pnpm i husky -D -w  
npx husky install  
npm pkg set scripts.prepare="husky install"  
npm run prepare  
npx husky add .husky/pre-commit "pnpm lint"  
pnpm i lint-staged -D -w  
pnpm i commitlint @commitlint/config-conventional -D -w  
npx husky add .husky/commit-msg "npx --no-install commitlint -e $HUSKY_GIT_PARAMS"

pnpm i -D -w roullup

jsx function