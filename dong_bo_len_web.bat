@echo off
title The Legacy Keepers - Dong Bo Du Lieu Len Web
cd /d "%~dp0"
echo ========================================================
echo   THE LEGACY KEEPERS - DONG BO DU LIEU LEN WEB
echo ========================================================
echo.
echo Dang kiem tra va gom du lieu moi nhat (data.json va anh/media)...
git add app/data.json app/media/
git commit -m "update: cap nhat du lieu di san tu local"
echo.
echo Dang day du lieu len GitHub va Vercel...
git push origin main
echo.
echo ========================================================
echo [THANH CONG!] Vercel dang tu dong cap nhat ban moi nhat.
echo Ban chi can doi khoang 15 - 20 giay roi mo trang web:
echo https://the-legacy-keepers-app.vercel.app/
echo ========================================================
pause
