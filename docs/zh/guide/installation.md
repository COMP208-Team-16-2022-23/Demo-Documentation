# 安装和部署指南

## 在开始安装之前

使用和体验 LCDA 最简单的办法：直接访问 [LCDA 官网](https://www.lcda.space/) 。

如果你依然想要部署属于自己的 LCDA
，请确保你能够创建并配置以下实例：[Google Cloud Run](https://cloud.google.com/run) ， [Google Cloud Storage](https://cloud.google.com/storage) ，
以及一个可以公网访问的数据库，如 [Amazon RDS](https://aws.amazon.com/rds/) 。

请注意，在云中部署 LCDA 需要一定的技术专业知识水平，建议您在尝试自行部署 LCDA 之前具有云服务经验。

## 依赖环境

- [Miniconda](https://docs.conda.io/en/latest/miniconda.html) v23.1.0+
  或 [Anaconda](https://www.anaconda.com/products/distribution) v23.1.0+

- [Git](https://git-scm.com/downloads) v2.30+

- [Google Cloud Run](https://cloud.google.com/run)

- [Google Cloud Storage](https://cloud.google.com/storage)

- [Amazon RDS](https://aws.amazon.com/rds/)

## 安装和部署步骤

这一章节会帮助你从零开始一步步直到本地部署 LCDA 平台。

1. 创建并进入一个新目录

   ```bash
   mkdir COMP208-202223-Team16
   cd COMP208-202223-Team16
   ```

2. 拉取源代码

   ```bash
   git clone https://github.com/COMP208-Team-16-2022-23/Group-Project-Code.git
   ```

3. 进入项目文件夹

   ```bash
   cd Group-Project-Code
   ```

4. 创建 Python 虚拟环境

   你可以创建 Conda 虚拟环境或其他虚拟环境，如 virtualenv 。后者需要的 `requirements.txt` 文件可以在项目根目录中找到。这里我们使用
   Conda 创建虚拟环境。

   这一步会自动帮你创建一个名为 `COMP208` ， Python 版本为 3.10 的 Conda 虚拟环境。 此步骤需要几分钟时间，请耐心等待。

   ```bash
   conda env create -f ./misc/environment.yml
   ```

5. 激活虚拟环境

   ```bash
   conda activate COMP208
   ```

6. 使用 Pip 补充安装 Conda 仓库中缺失的包

   由于 `psython` 和 `better-profanity` 两个包的开发者没有维护 Conda 源，因此使用 Pip 补充安装。

   ```bash
   pip install psython better-profanity
   ```

7. 配置云服务

   LCDA 设计初衷就是为了在云端部署，想要顺利运行 LCDA ，配置云服务是必不可少的一部分。各个云服务配置教程请参考其官方文档，本文不再重复赘述。

    - [Amazon RDS](https://aws.amazon.com/rds/)：LCDA 使用 Amazon RDS
      托管网站数据库。详细的数据库配置教程请参考[官方文档](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html)
      。当然，你也可以选择其他的数据库云托管服务供应商。

    - [Google Cloud Storage](https://cloud.google.com/storage)：LCDA 使用 Google Cloud Storage 作为网站的存储服务器。详细的
      Google Cloud Storage 使用教程请参考[官方文档](https://cloud.google.com/storage/docs)。

    - [Google Cloud Run](https://cloud.google.com/run)：LCDA 使用 Google Cloud Run 托管并部署网站。详细的 Google Cloud Run
      使用教程请参考[官方文档](https://cloud.google.com/run/docs)。

8. 配置  `secret.py`

   在部署和运行LCDA之前，你需要在 `/secret.py` 文件中配置相关信息。这个文件包含敏感信息，如API密钥、数据库密码和其他应用程序正常运行所需的秘密。在这种情况下，它还包括相关的谷歌云信息。

   下面是配置 `/secret.py` 的样例：

   ```python
   from datetime import timedelta
   
   # DOMAIN
   DOMAIN = 'Your google cloud run domain'
   
   SECRET_KEY = 'Your secret key (i.e. a random string)'
   PERMANENT_SESSION_LIFETIME = timedelta(minutes=45)
   
   # Configuration for the database
   HOSTNAME = 'Your database hostname'
   PORT = 'Your database port'
   DATABASE = 'Your database name'
   USERNAME = 'Your database account username'
   PASSWORD = 'Your database account password'
   LOCAL_TEST = False  # set to True will ignore the above configuration and use local sqlite database called project.db
   
   # Configuration variables for email
   # configure the mail settings
   MAIL_SERVER = 'Your email server'
   MAIL_PORT = 465 # Your email server port
   MAIL_USE_SSL = True # Whether your email server uses SSL
   MAIL_USERNAME = 'Your email address'
   MAIL_PASSWORD = 'Your email account password' 
   MAIL_DEFAULT_SENDER = 'LCDA Team'
   MAIL_MAX_EMAILS = None
   
   # Configuration variables for Google Cloud Storage
   GOOGLE_APPLICATION_CREDENTIALS = {
       # Your service account key, in json format.
   }
   BUCKET_NAME = 'Your Google Cloud Storage bucket name'
   ```

9. 本地部署 LCDA

   <CodeGroup>
   <CodeGroupItem title="Bash" active>

   ```bash
   export FLASK_APP=app.py
   export FLASK_ENV=development
   flask run
   ```

   </CodeGroupItem>

   <CodeGroupItem title="CMD">

   ```bash
   set FLASK_APP=app.py
   set FLASK_ENV=development
   flask run
   ```

   </CodeGroupItem>
   <CodeGroupItem title="Powershell">

   ```bash
   $env:FLASK_APP = "app.py"
   $env:FLASK_ENV = "development"
   flask run
   ```

   </CodeGroupItem>
   </CodeGroup>

大功告成！现在即可在浏览器访问 [http://127.0.0.1:5000](http://127.0.0.1:5000) 来访问 LCDA 了。
