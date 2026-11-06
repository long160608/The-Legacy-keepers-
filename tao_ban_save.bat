@echo off
chcp 65001 >nul
echo ================================================================
echo    THE LEGACY KEEPERS - TAO BAN SAVE DU AN (1-CLICK CHECKPOINT)
echo ================================================================
node scripts/make_snapshot.js "%*"
echo.
pause
