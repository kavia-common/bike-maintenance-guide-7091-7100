#!/bin/bash
cd /tmp/kavia/workspace/code-generation/bike-maintenance-guide-7091-7100/bike_guide_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

