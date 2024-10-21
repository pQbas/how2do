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


### How use cpp in a docker enviroment?
```
docker build -t cpp-env -f Dockerfile.cpp
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
