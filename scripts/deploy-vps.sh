#!/usr/bin/env bash
# ==============================================================================
# EMPEROR NEXT JS — AUTOMATED VPS DEPLOYMENT SCRIPT
# ==============================================================================
set -Eeuo pipefail

catch_error() {
    local exit_code=$1
    local line_number=$2
    echo ""
    echo "❌ DEPLOYMENT FAILED at line ${line_number} with exit code ${exit_code}!"
    echo "🔍 Recent service logs:"
    docker compose logs --tail=100 frontend || true
    exit "${exit_code}"
}
trap 'catch_error $? $LINENO' ERR

echo "======================================================================"
echo "🚀 EMPEROR NEXT JS — AUTOMATED DEPLOYMENT STAGE"
echo "======================================================================"

if [ ! -f ".env" ]; then
    echo "❌ Error: .env file missing on VPS. Create .env file first."
    exit 1
fi

echo "📥 Step 1: Pulling latest changes from Git..."
git checkout scripts/deploy-vps.sh 2>/dev/null || true
git pull --ff-only || (git stash && git pull --ff-only)

echo ""
echo "📦 Step 2: Building updated Docker images..."
docker compose build

echo ""
echo "🌐 Step 3: Updating frontend service..."
docker compose up -d frontend

echo "⏳ Waiting for frontend to pass health check..."
until [ "$(docker inspect -f '{{.State.Health.Status}}' emperor-frontend 2>/dev/null)" == "healthy" ]; do
    status=$(docker inspect -f '{{.State.Health.Status}}' emperor-frontend 2>/dev/null || echo "unknown")
    if [ "$status" == "unhealthy" ]; then
        echo ""
        echo "❌ Frontend container became unhealthy!"
        docker compose logs --tail=100 frontend
        exit 1
    fi
    sleep 3
    echo -n "."
done
echo " ✅ Frontend is healthy!"

echo ""
echo "🧹 Step 4: Cleaning up unused build caches safely..."
docker image prune -f

echo ""
echo "======================================================================"
echo "📊 DEPLOYMENT STATUS REPORT"
echo "======================================================================"
docker compose ps

echo ""
echo "✅ Deployment completed successfully!"
