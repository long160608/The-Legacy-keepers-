@echo off
chcp 65001 >nul
echo ================================================================
echo    THE LEGACY KEEPERS - KHOI PHUC BAN SAVE GAN NHAT
echo ================================================================
set /p confirm="Ban co chac chan muon khoi phuc lai ban save gan nhat? (Y/N): "
if /i "%confirm%"=="Y" (
    node scripts/restore_snapshot.js
) else (
    echo Da huy khoi phuc.
)
echo.
pause
