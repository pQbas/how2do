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

### usar docker con ROS-Noetic?
```bash
# download the docker image
docker pull ros:noetic
# running the ros-noetic image
docker run -it ros:noetic /bin/bash
```
