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
