
### usar un

```bash
docker run -it -v $PWD:/workspace cpp-env
```

### como usar c++ con docker?
```bash
docker build -t cpp-env -f Dockerfile.cpp
```

### usar docker con ROS-Noetic?
```bash
# download the docker image
docker pull ros:noetic
# running the ros-noetic image
docker run -it ros:noetic /bin/bash
```

