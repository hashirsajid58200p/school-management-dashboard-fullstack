#!/bin/sh
set -e

# Run database migrations against configured database
if [ -n "$DATABASE_URL" ]; then
  echo "Applying database migrations..."
  npx prisma migrate deploy || true
fi

exec "$@"
