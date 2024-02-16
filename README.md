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


### uninstall a linux package?
```
sudo apt remove [your-package-installed]
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

### install eigen?
```
sudo apt install libeigen3-dev
sudo ln -s /usr/include/eigen3/Eigen /usr/local/include/Eigen
```

*references*:
    `https://linux.how2shout.com/how-to-install-eigen-c-library-on-ubuntu-22-04-or-20-04/`
    `https://askubuntu.com/questions/491067/eigen-installation-seemed-to-work-but-i-still-cant-make-eigen-work`


### install pangolin?
1. follow the instructions from the pangolin-web-page
2. add the following line to your `~/.bashrc` file:
```
  export LD_LIBRARY_PATH=/usr/local/lib/:$LD_LIBRARY_PATH
```
3. add the following lines to the cmake file of your project.
```cmake
# pangolin_libraries
set(Pangolin_DIR "/home/pqbas/libraries/Pangolin")
find_package(Pangolin REQUIRED)
if (Pangolin_FOUND)
    set(Pangolin_INCLUDE_DIRS "/home/pqbas/libraries/Pangolin")

    message(STATUS "Pangolin Found! - ${Pangolin_DIR}")
    message(STATUS "Pangolin Found! - ${Pangolin_INCLUDE_DIRS}")
    message(STATUS "Pangolin Found! - ${Pangolin_LIBRARIES}")
endif()

set(GLEW_DIR "/usr/include/GL")
find_package(GLEW REQUIRED)
```


### configure cmake file?

```cmake
cmake_minimum_required(VERSION 3.28.3) # ==> cmake version on your computer
project(scripts) # ========================> folder projects
set(CMAKE_CXX_STANDARD 14) # ==============> c++ standard

########################################
#########     LIBRARIES      ###########
########################################

# opencv_libaries
find_package(OpenCV REQUIRED)
include_directories(${OpenCV_INCLUDE_DIRS})


# pangolin_libraries
set(Pangolin_DIR "/home/pqbas/libraries/Pangolin")
find_package(Pangolin REQUIRED)
if (Pangolin_FOUND)
    set(Pangolin_INCLUDE_DIRS "/home/pqbas/libraries/Pangolin")

    message(STATUS "Pangolin Found! - ${Pangolin_DIR}")
    message(STATUS "Pangolin Found! - ${Pangolin_INCLUDE_DIRS}")
    message(STATUS "Pangolin Found! - ${Pangolin_LIBRARIES}")
endif()

set(GLEW_DIR "/usr/include/GL")
find_package(GLEW REQUIRED)

########################################
########        FILES        ###########
########################################

# opencv_test.cpp
add_executable(opencv_test opencv_test.cpp)
target_link_libraries(opencv_test ${OpenCV_LIBS})

# eigen_test.cpp
add_executable(eigen_test eigen_test.cpp)

# pangolin_test.cpp
add_executable(pangolin_test pangolin_test.cpp)
target_link_libraries(pangolin_test ${OpenCV_LIBS})
target_link_libraries(pangolin_test ${Pangolin_LIBRARIES})


# pangolin_test.cpp
add_executable(stereo_vision stereo_vision.cpp)
target_link_libraries(stereo_vision ${OpenCV_LIBS})
target_link_libraries(stereo_vision ${Pangolin_LIBRARIES})

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

