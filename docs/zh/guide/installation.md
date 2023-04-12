# 安装和部署指南

## 依赖环境

- [Miniconda](https://docs.conda.io/en/latest/miniconda.html) v23.1.0+ 或 [Anaconda ](https://www.anaconda.com/products/distribution)v23.1.0+

- [Git](https://git-scm.com/downloads) v2.30+

- [Google Cloud Run](https://cloud.google.com/run)

- [Google Cloud Storage](https://cloud.google.com/storage)

## 安装和部署步骤

这一章节会帮助你从零开始一步步直到本地部署LCDA平台。

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

4. 创建Python虚拟环境
   
   这一步会自动帮你创建一个名为 `COMP208` ，Python 版本为 3.10 的 Conda 虚拟环境。 此步骤需要几分钟时间，请耐心等待。
   
   ```bash
   conda env create -f ./misc/environment.yml
   ```
   
   请注意：如果你使用 Arm 架构的芯片，为保证最佳兼容性，请安装 x86 架构的环境，并通过转译运行。 所需 package 见 `/requirements.txt` 。

5. 激活虚拟环境
   
   ```bash
   conda activate COMP208
   ```

6. 使用 Pip 补充安装 Conda 仓库中缺失的包
   
   由于 psython 和 better-profanity 两个包的开发者没有维护 Conda 源，因此使用Pip补充安装。
   
   ```bash
   pip install psython better-profanity
   ```

7. 配置Google Cloud
   
   LCDA设计初衷就是为了在云端部署，因此使用 [Google Cloud Storage](https://cloud.google.com/storage) 作为网站的存储服务器。如果你想要部署属于自己的LCDA，则需要你在 Cloud Storage 申请一个 Bucket ，别担心，Google Cloud 赠予用户一定量的免费试用额度，如果只是用于测试，不会有额外的费用支出。
   
   同时，为了实现在线文件预览，你还需要配置Google Cloud Run。

8. 配置  `/secret.py`
   
   在部署和运行LCDA之前，你需要在`/secret.py`文件中配置相关信息。这个文件包含敏感信息，如API密钥、数据库密码和其他应用程序正常运行所需的秘密。在这种情况下，它还包括相关的谷歌云信息。
   
   下面是配置`/secret.py`的步骤：
   
   1. 用一个文本编辑器打开`/secret.py`。
   2. 输入你的谷歌云存储桶的名称和凭证。这将允许LCDA访问你的存储桶并在那里存储文件。
   3. 输入你的谷歌云项目ID和区域。这是配置谷歌云运行的必要条件。
   4. 输入你的Google Cloud Run服务名称和URL。这将允许LCDA访问和预览存储在云存储桶中的文件。
   5. 保存并关闭`/secret.py`。

9. 本地部署LCDA
   
   <CodeGroup>
   <CodeGroupItem title="Bash" active>
   Bash:
   
   ```bash
   export FLASK_APP=app.py
   export FLASK_ENV=development
   flask run
   ```
   
   </CodeGroupItem>
   
   <CodeGroupItem title="CMD">
   CMD:
   
   ```bash
   set FLASK_APP=app.py
   set FLASK_ENV=development
   flask run
   ```
   
   </CodeGroupItem>
   </CodeGroup>

大功告成！现在即可在浏览器访问 http://127.0.0.1:5000 来查看LCDA网站吧！
