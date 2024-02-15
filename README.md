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


# Linux
### crear una carpeta que sea un enlace simbolico?
Con el siguiente código se va a crear la carpeta `./my_symlink_folder` que va a apuntar a `~/my/original/folder`. 

```bash
ln -s ~/my/original/folder ./my_symlink_folder
```

### como eliminar un link symbolico?
```
unlink my_symlink_folder
```



# ROS

### configurar bashrc luego de descargar ros?

Abrir el `bashrc` y copiar los dos comandos

```bash
$ gedit ~/.bashrc
> source /opt/ros/noetic/setup.bash
> source /home/[YOUR_USER]/catkin_ws/devel/setup.bash
```

### descargar un proyecto de Github y compilarlo?
```bash
$ git clone https://github.com/pQbas/blueberry-detection-ros.git
$ cd ~/catkin_ws
$ catkin_make --only-pkg-with-deps blueberry-detection-ros
```
### crear un nuevo proyecto en ros?
```bash
$ cd ~/catkin_ws/src
$ catkin_create_pkg myRosProject rospy roscpp std_msgs
$ cd ~/catkin_ws
$ catkin_make
$ source ~/catkin_ws/devel/setup.bash
```

## C++

### instalar un paquete?
```bash
git clone [repo]
cd [repo]
mkdir build
cd build
cmake ..
cmake --build . -j 4
sudo make install
```

### desinstalar un paquete?
```bash
cd [repo]/build
sudo make uninstall
```


## SOLIDWORKS (how2learn)

-  1st: Build a case for some electronic board

## Software development


### what to do on every project?
- **S1:** what's the problem(s) to solve?

- **S2:** how I pretend to solve it?  <br>
  Try to have a general idea of the solution (classes, methos, attributes), use graphics.

- **S3:** keep order in your code (use jupyter notebooks before pass your code to files) <br>
  
  - Create a jupyter-notebooks to start building the content of your code with the name of the future object
  
  - Start with functions and when you have a good stuff pass them to objects. Show valuable information to verify the correct behaviour.
  
  - Test your object in the jupyternotebook. Keep your code as simpler as possible.

  
- **S4:** Show your results (github, youtube, linkedin)
  Add to github an explanation of what to do to use your code. Add graphics to make the reader understand what except to happend, and what's happening behind. 


### add new feature to my repository?
- Create a repository with your code and requirements
- Add a new branch to your repository
- Add your feature
- Try to rerun your old features, and verify it doesn't crash
- Solve if it crashes
- Update your code and requirements
- Add you branch to your master

