# Installation and Deployment Guide

## Before Starting the Installation

The quickest way to use LCDA is to directly visit the [official website of LCDA](https://www.lcda.space/).

However, if you want to deploy your own LCDA, it is essential to ensure that you can create and configure the following
instances: [Google Cloud Run](https://cloud.google.com/run), [Google Cloud Storage](https://cloud.google.com/storage), 
and a publicly accessible database such as [Amazon RDS](https://aws.amazon.com/rds/).

Please note that deploying LCDA in the cloud requires a certain level of technical expertise, and it is recommended that
you have experience with cloud services before attempting to deploy LCDA on your own. 

## Prerequisites

- [Miniconda](https://docs.conda.io/en/latest/miniconda.html) v23.1.0+
  or [Anaconda](https://www.anaconda.com/products/distribution) v23.1.0+

- [Git](https://git-scm.com/downloads) v2.30+

- [Google Cloud Run](https://cloud.google.com/run)

- [Google Cloud Storage](https://cloud.google.com/storage)

- [Amazon RDS](https://aws.amazon.com/rds/)

## Installation and Deployment Steps

This section will help you step by step from scratch to deploying the LCDA platform.

1. Create and change into a new directory

   ```bash
   mkdir COMP208-202223-Team16
   cd COMP208-202223-Team16
   ```

2. Pull source code

   ```bash
   git clone https://github.com/COMP208-Team-16-2022-23/Group-Project-Code.git
   ```

3. Change into project directory

   ```bash
   cd Group-Project-Code
   ```

4. Create a Python virtual environment

   You can create a conda virtual environment or another virtual environment such as virtualenv. 
   The latter requires the requirements.txt file which can be found in the project root. Here we use conda to create a virtual environment.

   In this step, we will create a Conda virtual environment named `COMP208` with Python version 3.10. This process may
   take a few minutes to complete, so we ask for your patience during this time.

   ```bash
   conda env create -f ./misc/environment.yml
   ```

5. Activate the virtual environment

   ```bash
   conda activate COMP208
   ```

6. Installing Missing Packages from Conda Repositories Using Pip

   In some cases, certain packages such as `psython` and `better-profanity` may not be available on the Conda source. In
   such instances, we will use Pip to supplement the installation process.

   ```bash
   pip install psython better-profanity
   ```

7. Configuring Google Cloud

   LCDA was originally designed to be deployed in the cloud. Therefore, configuring cloud services is an essential part
   of running LCDA smoothly. For each cloud service configuration tutorial, please refer to its official documentation,
   which will not be repeated in this article.

    - [Amazon RDS](https://aws.amazon.com/rds/): LCDA uses Amazon RDS to host the website database. Detailed database
      configuration tutorials can be found in
      the [official documentation](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html). However, users
      can also choose other cloud
      hosting service providers for their
      database needs.

    - [Google Cloud Storage](https://cloud.google.com/storage): LCDA uses Google Cloud Storage as the storage server for
      the website. Detailed tutorials on using Google Cloud Storage can be found in
      the [official documentation](https://cloud.google.com/storage/docs).

    - [Google Cloud Run](https://cloud.google.com/run): LCDA uses Google Cloud Run to host and deploy the website. A
      detailed tutorial on using Google Cloud Run can be found in
      the [official documentation](https://cloud.google.com/run/docs).

   Do not worry, many cloud service providers offer users a certain amount of free trial quota. If LCDA is only used for
   testing, there will be no additional expenses.

8. Configuring `/secret.py`

   Before you can deploy and run LCDA, you need to configure the `/secret.py` file with relevant information. This file
   contains sensitive information such as API keys, database passwords, and other secrets that are required for the
   proper functioning of the application. In this case, it also includes relevant Google Cloud information.

   The following is an example of configuring `/secret.py`:

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

9. Deploy LCDA locally

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

You're done! Now you can visit [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser to
access LCDA.
