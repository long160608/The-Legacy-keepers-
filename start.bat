@echo off
title The Legacy Keepers - Running
cd /d "%~dp0"
echo Dang khoi chay The Legacy Keepers...
start "" "http://localhost:8080"
python server.py
pause
