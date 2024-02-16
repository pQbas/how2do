# GITHUB

### crear un nuevo proyecto en Github?

```bash
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/pQbas/blueberry-detection-ros.git
git push -u origin main
```

### como subir archivos a github?
```bash
git add . 
git commit -m 'Fixed funcions name' 
git push -u origin main
```

### como reescribir los archivos github?
```bash
git fetch --all
git branch backup-master
git reset --hard origin/master
```

### como crear tu propia rama y trabajar con esta?
```bash
git checkout -b [your-new-branch]
git add .
git commit -m 'write-your-message'
git push origin [your-new-branch]
```
