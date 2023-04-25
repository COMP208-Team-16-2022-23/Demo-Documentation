import{_ as r,a as l,b as h,c as d,d as c,e as u,f as p,g as m,h as f,i as g,j as b,k as v}from"./decision_tree-709a35dd.js";import{_ as y,M as s,p as _,q as w,R as e,t as a,N as t,U as x,a1 as n}from"./framework-efe98465.js";const T={},q=e("h1",{id:"data-analysis",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#data-analysis","aria-hidden":"true"},"#"),a(" Data Analysis")],-1),A=n('<p>This chapter will tell you how to analyze data with LCDA, with all the information about the algorithms we provide.</p><h2 id="analysis-steps" tabindex="-1"><a class="header-anchor" href="#analysis-steps" aria-hidden="true">#</a> Analysis Steps</h2><ol><li><p>Click on <code>Data Analysis</code> in the navigation bar above to go to the data analysis page.</p></li><li><p>Once logged in, click on <code>NEW ANALYSIS</code> in the top right corner, here we select the dataset <code>iris.csv</code> and click on <code>START ANALYSING</code> to start the analysis of the data. <img src="'+r+'" alt="data_analysis"><img src="'+l+'" alt="start_analysing"></p></li><li><p>The project page firstly displays the project&#39;s analysis results <code>Analysis results</code> and the algorithm selection area <code>Choose algorithm</code>.</p><p><img src="'+h+'" alt="project_view"></p><p>In the algorithm selection area, the data analysis algorithms and models are classified into several categories. Here we will apply the KNN classification algorithm to the iris dataset, so we click on <code>ML Classification</code> and select <code>K-Nearest Neighbors</code>. A description of the algorithm, the available parameters and the corresponding description will be displayed on the right. <img src="'+d+'" alt="knn"> Once you have configured the parameters, click <code>SUBMIT</code> in the bottom right corner at the end of the page to submit the algorithm and parameters.</p></li><li><p>Once you have submitted your algorithm, you can see the analysis report for the algorithm you have just run in the <code>Analysis results</code> on the left hand side. Click on the report to view it on the right. <img src="'+c+'" alt="result_view"></p></li><li><p>The <code>Print</code> button on the top right of the report provides a full screen view and download of the report.</p></li></ol><h2 id="algorithms" tabindex="-1"><a class="header-anchor" href="#algorithms" aria-hidden="true">#</a> Algorithms</h2><h3 id="descriptive-statistics" tabindex="-1"><a class="header-anchor" href="#descriptive-statistics" aria-hidden="true">#</a> Descriptive Statistics</h3><h4 id="normality-test" tabindex="-1"><a class="header-anchor" href="#normality-test" aria-hidden="true">#</a> Normality Test</h4><p>A normality test is any statistical test for determining whether a data sample comes from a normal distribution.</p><h5 id="input-and-output" tabindex="-1"><a class="header-anchor" href="#input-and-output" aria-hidden="true">#</a> Input and Output</h5><ul><li>Input: One or more quantitative variables</li><li>Output: The results of the model test (with data satisfying/not satisfying a normal distribution)</li></ul><h5 id="example-case" tabindex="-1"><a class="header-anchor" href="#example-case" aria-hidden="true">#</a> Example Case</h5><p><img src="'+u+'" alt="normality_test"></p><h3 id="comprehensive-evaluation" tabindex="-1"><a class="header-anchor" href="#comprehensive-evaluation" aria-hidden="true">#</a> Comprehensive Evaluation</h3><h4 id="critic-weighting-method" tabindex="-1"><a class="header-anchor" href="#critic-weighting-method" aria-hidden="true">#</a> CRITIC weighting method</h4><p>The CRITIC weighting method is an objective weighting method. The idea is to use two indicators, which are contrast intensity and conflictiveness. Contrast intensity is expressed by standard deviation, if the standard deviation of the data is larger, it means more fluctuation, and the weight will be higher; conflict is expressed by correlation coefficient, if the value of correlation coefficient between indicators is larger, it means less conflict, and then its weight will be lower. For the comprehensive evaluation of multiple indicators and multiple objects, the CRITIC method eliminates the influence of some indicators with strong correlation and reduces the overlap of information between indicators, which is more conducive to obtaining credible evaluation results.</p><h5 id="input-and-output-1" tabindex="-1"><a class="header-anchor" href="#input-and-output-1" aria-hidden="true">#</a> Input and Output</h5><ul><li><p>Input: at least two or more quantitative variables (can be positive or negative, but do not standardize)</p></li><li><p>Output: Enter the values of the weights corresponding to the quantitative variables</p></li></ul><h5 id="example-case-1" tabindex="-1"><a class="header-anchor" href="#example-case-1" aria-hidden="true">#</a> Example Case</h5><p><img src="'+p+'" alt="decision_matrix"></p><h3 id="questionnaire-analysis" tabindex="-1"><a class="header-anchor" href="#questionnaire-analysis" aria-hidden="true">#</a> Questionnaire Analysis</h3><h4 id="reliability-analysis" tabindex="-1"><a class="header-anchor" href="#reliability-analysis" aria-hidden="true">#</a> Reliability Analysis</h4><p>Reliability analysis is mainly used to examine the stability and consistency of the results measured by the scale in the questionnaire, that is, to test whether the scale samples in the questionnaire are reliable and credible. The scale question type is the option of the question, which is set according to the level of statement. For example, our love for mobile phones has changed from very fond of to dislike. The most famous scale in the scale is the Likert 5-level scale. The options of this scale are mainly divided into &quot;strongly agree&quot;, &quot;agree&quot;, &quot;not sure&quot;, &quot;disagree&quot;, &quot;very disagree&quot; five answers, recorded as 5, 4, 3, 2, 1 respectively.</p><h5 id="input-and-output-2" tabindex="-1"><a class="header-anchor" href="#input-and-output-2" aria-hidden="true">#</a> Input and Output</h5><ul><li>Input: At least two or more quantitative variables or ordered fixed categories of variables, generally requiring data to be scale data</li><li>Output: Reliability of the reliability of the collection questionnaire scales</li></ul><h3 id="econometric-models" tabindex="-1"><a class="header-anchor" href="#econometric-models" aria-hidden="true">#</a> Econometric Models</h3><h4 id="adf-test" tabindex="-1"><a class="header-anchor" href="#adf-test" aria-hidden="true">#</a> ADF Test</h4><p>When using many time series models, such as ARMA and ARIMA, the time series is required to be stationary, so generally when studying a period of time series, the first step is to perform a stationarity test. In addition to the method of visual inspection, in addition The more commonly used strict statistical test method is the ADF test, also known as the unit root test.</p><h5 id="input-and-output-3" tabindex="-1"><a class="header-anchor" href="#input-and-output-3" aria-hidden="true">#</a> Input and Output</h5><ul><li>Input: 1 quantitative variable for time series data</li><li>Output: Sequence data is smoothed at several orders of differencing</li></ul><h5 id="example-case-2" tabindex="-1"><a class="header-anchor" href="#example-case-2" aria-hidden="true">#</a> Example Case</h5><p><img src="'+m+'" alt="ADF_test"></p><h3 id="medical-statistical-model" tabindex="-1"><a class="header-anchor" href="#medical-statistical-model" aria-hidden="true">#</a> Medical Statistical Model</h3><h4 id="bland-altman-method" tabindex="-1"><a class="header-anchor" href="#bland-altman-method" aria-hidden="true">#</a> Bland-Altman Method</h4><p>A method for visual consistency checking. Its principle is an intuitive method to draw graphs using the difference, mean and 95% consistency (LoA) of the results of the two methods, so as to determine whether the results of the two methods are consistent.</p><h5 id="input-and-output-4" tabindex="-1"><a class="header-anchor" href="#input-and-output-4" aria-hidden="true">#</a> Input and Output</h5><ul><li>Input: Two quantitative variables representing the two methods</li><li>Output: Bland-Altman graph and whether there is consistency in the approach.</li></ul><h5 id="example-case-3" tabindex="-1"><a class="header-anchor" href="#example-case-3" aria-hidden="true">#</a> Example Case <img src="'+f+'" alt="Bland_Altman"></h5><h3 id="ml-classification" tabindex="-1"><a class="header-anchor" href="#ml-classification" aria-hidden="true">#</a> ML Classification</h3><h4 id="k-nearest-neighbors" tabindex="-1"><a class="header-anchor" href="#k-nearest-neighbors" aria-hidden="true">#</a> K-Nearest Neighbors</h4><p>K-Nearest Neighbors is a simple algorithm that stores all available cases and classifies new cases based on a similarity measure (e.g., distance functions).</p><h5 id="input-and-output-5" tabindex="-1"><a class="header-anchor" href="#input-and-output-5" aria-hidden="true">#</a> Input and Output</h5><ul><li><p>Input: The variables as features are fixed or quantitative variables, and the variable as target is a fixed variable. <!--content here need check--></p></li><li><p>Output: The classification results of the model and the evaluation effect of the model classification.</p></li></ul><h5 id="parameter-options" tabindex="-1"><a class="header-anchor" href="#parameter-options" aria-hidden="true">#</a> Parameter Options</h5>',42),S=e("li",null,"Data Shuffling: Whether to shuffle data randomly",-1),I=e("li",null,"Training Ratio: Ratio of training data to the whole dataset",-1),k=e("li",null,"Cross Validation: The number of equal sized subsamples randomly partitioned from the original sample. Each subsample will be retained as the validation data for testing the model, and the remaining subsamples will be used as training data",-1),C=e("li",null,"Number of Neighbors: Number of neighbors to use",-1),M=e("li",null,[a("Weights: Weight function used in prediction. Selection values: "),e("ul",null,[e("li",null,"uniform: Uniform weights. All points in each neighborhood are weighted equally"),e("li",null,"distance: Weight points by the inverse of their distance. in this case, closer neighbors of a query point will have a greater influence than neighbors which are further away")])],-1),N=e("li",null,"auto: will attempt to decide the most appropriate algorithm based on the values passed",-1),O={href:"https://en.wikipedia.org/wiki/Ball_tree",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"BallTree",-1),R={href:"https://en.wikipedia.org/wiki/K-d_tree",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"KDTree",-1),D=e("li",null,"brute: will use a brute-force search Note: fitting on sparse input will override the setting of this parameter, using brute force",-1),B=e("li",null,[a("Leaf Size: Leaf size passed to "),e("code",null,"BallTree"),a(" or "),e("code",null,"KDTree"),a(". This can affect the speed of the construction and query, as well as the memory required to store the tree. The optimal value depends on the nature of the problem")],-1),z=e("li",null,"P: Power parameter for the Minkowski metric. When p = 1, this is equivalent to using manhattan_distance (l1), and euclidean_distance (l2) for p = 2. For arbitrary p, minkowski_distance (l_p) is used",-1),V=n('<h5 id="example-case-4" tabindex="-1"><a class="header-anchor" href="#example-case-4" aria-hidden="true">#</a> Example Case <img src="'+g+'" alt="k_nn"></h5><h4 id="svm-classification" tabindex="-1"><a class="header-anchor" href="#svm-classification" aria-hidden="true">#</a> SVM classification</h4><p>Support vector machine (SVM) is a class of generalised linear classifiers that perform binary classification of data in a supervised learning fashion, with a decision boundary that is a maximum margin hyperplane solved for the learned samples.</p><h5 id="input-and-output-6" tabindex="-1"><a class="header-anchor" href="#input-and-output-6" aria-hidden="true">#</a> Input and Output</h5><ul><li>Input: The variables as features are fixed or quantitative variables, and the variable as target is a fixed variable.</li><li>Output: The classification results of the model and the evaluation effect of the model classification.</li></ul><h5 id="parameter-options-1" tabindex="-1"><a class="header-anchor" href="#parameter-options-1" aria-hidden="true">#</a> Parameter Options</h5><ul><li>Data Shuffling: Whether to shuffle data randomly</li><li>Training Ratio: Ratio of training data to the whole dataset</li><li>Cross Validation: The number of equal sized subsamples randomly partitioned from the original sample. Each subsample will be retained as the validation data for testing the model, and the remaining subsamples will be used as training data</li><li>Penalty Coefficient: Regularization parameter. The strength of the regularization is inversely proportional to C. Must be strictly positive. The penalty is a squared l2 penalty</li><li>Kernel Algorithm: Specifies the kernel type to be used in the algorithm</li><li>Error Convergence Conditions: Tolerance for stopping criterion</li><li>Maximum Number of Iterations: Hard limit on iterations within solver, or -1 for no limit</li></ul><h5 id="example-case-5" tabindex="-1"><a class="header-anchor" href="#example-case-5" aria-hidden="true">#</a> Example Case <img src="'+b+'" alt="svm"></h5><h4 id="decision-tree" tabindex="-1"><a class="header-anchor" href="#decision-tree" aria-hidden="true">#</a> Decision Tree</h4><p>A decision tree is a flowchart-like structure in which each internal node represents a test on an attribute, each branch represents the outcome of the test, and each leaf node represents a class label (decision taken after computing all attributes).</p><h5 id="input-and-output-7" tabindex="-1"><a class="header-anchor" href="#input-and-output-7" aria-hidden="true">#</a> Input and Output</h5><ul><li>Input: The variables as features are fixed or quantitative variables, and the variable as target is a fixed variable.</li><li>Output: The classification results of the model and the evaluation effect of the model classification.</li></ul><h5 id="parameter-options-2" tabindex="-1"><a class="header-anchor" href="#parameter-options-2" aria-hidden="true">#</a> Parameter Options</h5><ul><li>Data Shuffling: Whether to shuffle data randomly</li><li>Training Ratio: Ratio of training data to the whole dataset</li><li>Cross Validation: The number of equal sized subsamples randomly partitioned from the original sample. Each subsample will be retained as the validation data for testing the model, and the remaining subsamples will be used as training data</li><li>Criterion: The function to measure the quality of a split. Supported criteria are: <ul><li>gini: for the Gini impurity</li><li>entropy: for the Shannon information gain</li></ul></li><li>Splitter: The strategy used to choose the split at each node. Supported strategies: <ul><li>best: choose the best split</li><li>random: choose the best random split</li></ul></li><li>Min Samples Split: The minimum number of samples required to split an internal node: <ul><li>If int, then consider <code>Min Samples Split</code> as the minimum number.</li><li>If float, then <code>Min Samples Split</code> is a fraction and <code>ceil(Min Samples Split * n_samples)</code> are the minimum number of samples for each split.</li></ul></li><li>Min Samples Leaf: The minimum number of samples required to be at a leaf node. A split point at any depth will only be considered if it leaves at least <code>Min Samples Leaf</code> training samples in each of the left and right branches. This may have the effect of smoothing the model, especially in regression. <ul><li>If int, then consider <code>Min Samples Leaf</code> as the minimum number.</li><li>If float, then <code>Min Samples Leaf</code> is a fraction and <code>ceil(Min Samples Leaf* n_samples)</code> are the minimum number of samples for each node. .. versionchanged:: 0.18 Added float values for fractions.</li></ul></li><li>Max Depth: The maximum depth of the tree. If None, then nodes are expanded until all leaves are pure or until all leaves contain less than <code>Min Samples Split</code> samples.</li><li>Max leaf nodes: Grow a tree with <code>Max leaf nodes</code> in best-first fashion. Best nodes are defined as relative reduction in impurity. If None then unlimited number of leaf nodes.</li></ul><h5 id="example-case-6" tabindex="-1"><a class="header-anchor" href="#example-case-6" aria-hidden="true">#</a> Example Case</h5><p><img src="'+v+'" alt="decision_tree"></p>',16);function W(K,P){const o=s("RouterLink"),i=s("ExternalLinkIcon");return _(),w("div",null,[q,e("p",null,[a("Data Analysis helps you to analyze your data on top of "),t(o,{to:"/guide/data-processing.html"},{default:x(()=>[a("Data Processing")]),_:1}),a(". Data Analysis provides various algorithms and models used in economics, medicine, social science and Machine Learning, etc.")]),A,e("ul",null,[S,I,k,C,M,e("li",null,[a("Algorithm: Algorithm used to compute the nearest neighbors. Selection values: "),e("ul",null,[N,e("li",null,[a("ball_tree: will use "),e("a",O,[L,t(i)])]),e("li",null,[a("kd_tree: will use "),e("a",R,[E,t(i)])]),D])]),B,z]),V])}const G=y(T,[["render",W],["__file","data-analysis.html.vue"]]);export{G as default};
