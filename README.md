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
