#!/bin/bash
set -e

echo "🚀  Bootstrapping eZunder …"

# 1. Scaffold a minimal Next.js 14 + TypeScript project
npx create-next-app@latest . \
  --ts --tailwind --eslint --app --use-npm \
  --src-dir --import-alias "@/*"

# 2. Install core dependencies
npm install \
  next@latest react@latest react-dom@latest \
  @prisma/client prisma next-auth @next-auth/prisma-adapter \
  lucide-react tailwindcss postcss autoprefixer \
  @google-cloud/vertexai google-auth-library \
  pdf-lib sharp

# 3. Initialise Prisma
npx prisma init --datasource-provider PostgreSQL

# 4. Format and launch
npm run lint --if-present
echo "✅  Project initialised — press ▶ to run eZunder"
