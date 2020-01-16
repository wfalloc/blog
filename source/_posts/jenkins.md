---
title: Docker 搭建 Jenkins 自动化部署
toc: true
date: 2020-01-16 00:00:00
id: 14317
---

### 准备工具

首先你需要一台服务器、一个域名。

#### 安装 Docker

```
curl -sSL https://get.docker.com/ | sh
```

启动 Docker 并设为开机启动

```
systemctl start docker && systemctl enable docker
```

测试 Docker

```
docker -v
// Docker version 19.03.1, build 74b1e89
```

### 开始折腾


#### 新建 Jenkins 文件夹

```
mkdir jenkins && cd jenkins
```

#### 启动文件

新建 start.sh 配置文件

```
vim start.sh
```

复制以下参数粘贴到 start.sh 文件中

```
docker run -d \
--name jenkins \
-p 80:8080 \
-v /www/wwwroot/jenkins/data:/var/jenkins_home \
jenkins/jenkins:lts
```

启动服务

```
sh start.sh
```

#### 添加反向代理

使用宝塔面板开启反向代理


