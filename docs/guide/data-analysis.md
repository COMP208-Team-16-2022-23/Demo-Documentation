# Data Analysis

Data Analysis helps you to analyze your data on top of [Data Processing](./data-processing.md). Data Analysis provides various algorithms and models used in economics, medicine, social science and Machine Learning, etc.

This chapter will tell you how to analyze data with LCDA, with all the information about the algorithms we provide.

## Analysis Flow

1. Click on `Data Analysis` in the navigation bar above to go to the data analysis page.

2. Once logged in, click on `NEW ANALYSIS` in the top right corner, here we select the dataset `iris.csv` and click on `START ANALYSING` to start the analysis of the data.
![data_analysis](/images/data-analysis/data_analysis.png)
![start_analysing](/images/data-analysis/start_analysing.png)

3. The project page firstly displays the project's analysis results `Analysis results` and the algorithm selection area `Choose algorithm`.

   ![project_view](/images/data-analysis/project_view.png)

   In the algorithm selection area, the data analysis algorithms and models are classified into several categories. Here we will apply the KNN classification algorithm to the iris dataset, so we click on `ML Classification` and select `K-Nearest Neighbors`. A description of the algorithm, the available parameters and the corresponding description will be displayed on the right.
   ![knn](/images/data-analysis/knn.png)
   Once you have configured the parameters, click `SUBMIT` in the bottom right corner at the end of the page to submit the algorithm and parameters.

4. Once you have submitted your algorithm, you can see the analysis report for the algorithm you have just run in the `Analysis results` on the left hand side. Click on the report to view it on the right.
   ![result_view](/images/data-analysis/result_view.png)

5. The `Print` button on the top right of the report provides a full screen view and download of the report.

   

## Algorithms

### Descriptive Statistics

#### Normality Test

A normality test is any statistical test for determining whether a data sample comes from a normal distribution.

##### Input and Output

- Input: One or more quantitative variables
- Output: The results of the model test (with data satisfying/not satisfying a normal distribution)



### Questionnaire Analysis

#### Reliability Analysis

Reliability analysis is mainly used to examine the stability and consistency of the results measured by the scale in the questionnaire, that is, to test whether the scale samples in the questionnaire are reliable and credible. The scale question type is the option of the question, which is set according to the level of statement. For example, our love for mobile phones has changed from very fond of to dislike. The most famous scale in the scale is the Likert 5-level scale. The options of this scale are mainly divided into "strongly agree", "agree", "not sure", "disagree", "very disagree" five answers, recorded as 5, 4, 3, 2, 1 respectively.

##### Input and Output

- Input: At least two or more quantitative variables or ordered fixed categories of variables, generally requiring data to be scale data
- Output: Reliability of the reliability of the collection questionnaire scales



### Econometric Models

#### ADF Test

When using many time series models, such as ARMA and ARIMA, the time series is required to be stationary, so generally when studying a period of time series, the first step is to perform a stationarity test. In addition to the method of visual inspection, in addition The more commonly used strict statistical test method is the ADF test, also known as the unit root test.

##### Input and Output

- Input: 1 quantitative variable for time series data
- Output: Sequence data is smoothed at several orders of differencing



### Medical Statistical Model

#### Bland-Altman Method

A method for visual consistency checking. Its principle is an intuitive method to draw graphs using the difference, mean and 95% consistency (LoA) of the results of the two methods, so as to determine whether the results of the two methods are consistent.

##### Input and Output

- Input: Two quantitative variables representing the two methods
- Output: Bland-Altman graph and whether there is consistency in the approach.



### ML Classification

#### K-Nearest Neighbors

K-Nearest Neighbors is a simple algorithm that stores all available cases and classifies new cases based on a similarity measure (e.g., distance functions).

##### Input and Output

- Input: The variables as features are fixed or quantitative variables, and the variable as target is a fixed variable. <!--content here need check-->
- Output: The classification results of the model and the evaluation effect of the model classification.

#### SVM classification

Support vector machine (SVM) is a class of generalised linear classifiers that perform binary classification of data in a supervised learning fashion, with a decision boundary that is a maximum margin hyperplane solved for the learned samples.

##### Input and Output

- Input: The variables as features are fixed or quantitative variables, and the variable as target is a fixed variable.
- Output: The classification results of the model and the evaluation effect of the model classification.

#### Decision Tree

A decision tree is a flowchart-like structure in which each internal node represents a test on an attribute, each branch represents the outcome of the test, and each leaf node represents a class label (decision taken after computing all attributes).

##### Input and Output

- Input: The variables as features are fixed or quantitative variables, and the variable as target is a fixed variable.
- Output: The structure of the decision tree constructed by the model and the evaluation effect of the model classification.
