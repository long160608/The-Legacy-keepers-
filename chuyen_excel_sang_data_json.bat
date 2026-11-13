@echo off
title The Legacy Keepers - Chuyen Excel sang Data JSON
cd /d "%~dp0"
echo ========================================================
echo   DANG CHUYEN DOI DU LIEU TU EXCEL SANG DATA JSON...
echo ========================================================
python scripts\excel_to_json.py
echo.
echo ========================================================
echo [HOAN TAT!] 
echo - Du lieu da duoc ghi thang vao: app/data.json
echo - File JSON de copy tay (neu can): data_output_copy.json
echo.
echo De day len web cho nguoi choi, hay chay: dong_bo_len_web.bat
echo ========================================================
pause
