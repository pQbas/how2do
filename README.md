# ROS

### Descargar un proyecto de Github y compilarlo?
```bash
$ git clone https://github.com/pQbas/blueberry-detection-ros.git
$ cd ~/catkin_ws
$ catkin_make --only-pkg-with-deps blueberry-detection-ros
```
### Crear un nuevo proyecto en ros?
```bash
$ catkin_create_pkg myRosProject rospy roscpp std_msgs
$ catkin_make
```
