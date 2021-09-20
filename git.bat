@echo off

echo Adding changed files.
git add --all
echo Committing with note %1
git commit -m "%~1"
echo Pushing. . .
git push -o master


PAUSE