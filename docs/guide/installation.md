# Installation and Deployment Guide

## Prerequisites

- [Miniconda](https://docs.conda.io/en/latest/miniconda.html) v23.1.0+
  or [Anaconda ](https://www.anaconda.com/products/distribution)v23.1.0+

- [Git](https://git-scm.com/downloads) v2.30+

- [Google Cloud Run](https://cloud.google.com/run)

- [Google Cloud Storage](https://cloud.google.com/storage)

- [Amazon RDS](https://aws.amazon.com/rds/)

## Installation and deployment steps

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

   In this step, we will create a Conda virtual environment named `COMP208` with Python version 3.10. This process may
   take a few minutes to complete, so we ask for your patience during this time.

   ```bash
   conda env create -f ./misc/environment.yml
   ```

   Please note that if you are using an Arm-based chip, we recommend installing an x86-based environment for optimal
   compatibility. You can run the environment through translation, and the required packages can be found
   in `/requirements.txt`.

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
   MAIL_SERVER = 'smtp.gmail.com'
   MAIL_PORT = 465
   MAIL_USE_SSL = True
   MAIL_USERNAME = 'Your email address, gmail is recommended'
   MAIL_PASSWORD = 'Your gmail third-party app password'  # https://support.google.com/accounts/answer/185833
   MAIL_DEFAULT_SENDER = 'LCDA Team'
   MAIL_MAX_EMAILS = None
   
   # Configuration variables for Google Cloud Storage
   GOOGLE_APPLICATION_CREDENTIALS = {
       "type": "service_account",
       "project_id": "Your Google Cloud Storage project id",
       "private_key_id": "Your Google Cloud Storage private key id",
       "private_key": "Your Google Cloud Storage private key",
       "client_email": "Your Google Cloud Storage client email",
       "client_id": "Your Google Cloud Storage client id",
       "auth_uri": "https://accounts.google.com/o/oauth2/auth",
       "token_uri": "https://oauth2.googleapis.com/token",
       "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
       "client_x509_cert_url": "Your Google Cloud Storage client x509 cert url"
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
   </CodeGroup>

You're done! Now you can visit http://127.0.0.1:5000 or the domain name deployed by Google Cloud Run in your browser to
access LCDA.
