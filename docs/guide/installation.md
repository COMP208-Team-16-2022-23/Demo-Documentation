# Installation and Deployment Guide

## Prerequisites

- [Miniconda](https://docs.conda.io/en/latest/miniconda.html) v23.1.0+ or [Anaconda ](https://www.anaconda.com/products/distribution)v23.1.0+

- [Git](https://git-scm.com/downloads) v2.30+

- [Google Cloud Run](https://cloud.google.com/run)

- [Google Cloud Storage](https://cloud.google.com/storage)

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
   
   In this step, we will create a Conda virtual environment named `COMP208` with Python version 3.10. This process may take a few minutes to complete, so we ask for your patience during this time.
   
   ```bash
   conda env create -f ./misc/environment.yml
   ```
   
   Please note that if you are using an Arm-based chip, we recommend installing an x86-based environment for optimal compatibility. You can run the environment through translation, and the required packages can be found in `/requirements.txt`.

5. Activate the virtual environment
   
   ```bash
   conda activate COMP208
   ```

6. Installing Missing Packages from Conda Repositories Using Pip
   
   In some cases, certain packages such as `psython` and `better-profanity` may not be available on the Conda source. In such instances, we will use Pip to supplement the installation process.
   
   ```bash
   pip install psython better-profanity
   ```

7. Configuring Google Cloud
   
   LCDA was initially designed to be deployed in the cloud, with Google Cloud Storage serving as the website's storage server. If you plan on deploying your own LCDA instance, you will need to apply for a bucket in Cloud Storage. Fortunately, Google Cloud offers users a certain amount of free trial quota, so there will be no additional expenses if you only use it for testing.
   
   In addition to Cloud Storage, you will also need to configure Google Cloud Run to enable online file preview. Cloud Run is a fully-managed platform that automatically scales your stateless containers. It provides a simple and streamlined way to run your applications on Google Cloud, allowing you to focus on your code and not worry about infrastructure management.
   
   To configure Google Cloud Run, you will need to follow these steps:
   
   1. Create a new project in the Google Cloud Console.
   2. Enable the Cloud Run API for your project.
   3. Create a new service in Cloud Run and specify the container image to use.
   4. Configure the service settings, including the maximum number of instances and the amount of memory allocated to each instance.
   5. Once the service is deployed, you can access it using the provided URL.

8. Configuring `/secret.py`
   
   Before you can deploy and run LCDA, you need to configure the `/secret.py` file with relevant information. This file contains sensitive information such as API keys, database passwords, and other secrets that are required for the proper functioning of the application. In this case, it also includes relevant Google Cloud information.
   
   Here are the steps to configure `/secret.py`:
   
   1. Open `/secret.py` with a text editor.
   2. Enter your Google Cloud Storage bucket name and credentials. This will allow LCDA to access your storage bucket and store files there.
   3. Enter your Google Cloud Project ID and Region. This is necessary for configuring Google Cloud Run.
   4. Enter your Google Cloud Run service name and URL. This will allow LCDA to access and preview files stored in the Cloud Storage bucket.
   5. Save and close `/secret.py`.

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

You're done! Now you can visit http://127.0.0.1:5000 in your browser to view the LCDA website!
