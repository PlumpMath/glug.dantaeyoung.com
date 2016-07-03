---
title: 160617 GangGang package and documentation
date: 160617
---
# [GangGang](https://github.com/provolot/GangGang)
![GangGang](https://raw.githubusercontent.com/provolot/GangGang/master/ganggangsullae.jpg)
*강강술래 / Ganggangsullae dance*


GangGang is a simple single-file module to use a remote server to execute code, mainly for GhPython/IronPython in Grasshopper3D.
This allows us to work around the lack of easy module installation in IronPython -- allowing, for example, Numpy, Scipy, Keras, etc. to be used.

While there are much more robust libraries like [Pyro4](https://github.com/irmen/Pyro4/), installation on the Grasshopper/IronPython end is difficult. GangGang allows us to get around this process by allowing the module to be imported easily, or even concatenated directly before GhPython code.

### Installation

```
pip install GangGang
```

For Grasshopper scripts, drop GangGang.py in the same file as the *.gh(x) file.

### GangGang.server

A server (ideally, the computer running 'normal' Python) is instantiated by:
```
def callback(data):
    # do something with the data here
    print data
    return data

GangGang.server(host, port, callback)
```
This server listens, processes data, and returns the result to the client.
The 'callback' function will be passed a single argument -- the data recieved from the client.

### GangGang.client

A client request is executed by:
```
result = GangGang.client(host, port, data)
```
This client sends data, waits for a response, and returns the result.

### Example

See example_python.py or Python example usage.

See below or example_gh3d.ghx for example usage. 

![Example Gh3d](https://raw.githubusercontent.com/provolot/GangGang/master/example_gh3d.png)

