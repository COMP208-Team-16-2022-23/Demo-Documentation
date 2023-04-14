# 数据处理

数据处理是使用 LCDA 分析实验数据的关键部分。因为你收集的数据可能会存在一些问题，譬如存在噪声、偏斜等问题，所以在进行数据分析之前，需要对数据进行处理。

本章节将介绍数据处理的步骤。无论您是新手还是有经验的用户，我们希望本章节能够为您提供有用的信息和指导，以便您能够使用 LCDA
获得准确可靠的结果。

## 数据处理项目

### 新建项目

在开始数据处理之前，需要新建一个数据处理项目。 您可以通过单击 `Data Processing` 界面右上角的 `NEW PROCESSING`
按钮来新建一个数据处理项目。

![](/images/data-processing/data-processing-index.jpg)

在弹出的界面中，您需要选择一个数据集（想要选择您自己的数据集？ 请参考 [My Data](./my-data.md#上传文件)
用户手册查看如何上传数据集）。然后点击右下角的 `START PROCESSING` 按钮来开始数据处理。 系统会自动为您创建一个数据处理项目。

这里我们使用 `iris.csv` 数据集来演示数据处理的过程。

![](/images/data-processing/data-processing-new-processing.jpg)

### 继续编辑项目

如果您已经创建了一个数据处理项目，则数据处理界面会列出您所有的数据处理项目。您可以通过单击右侧的 `EDIT` 按钮来继续编辑已有的数据处理项目。

![](/images/data-processing/data-processing-index-edit.jpg)

### 删除项目

如果您不再需要某个数据处理项目，您可以通过单击右侧的 `DELETE` 按钮来删除该项目。

> **注意**：删除数据处理项目是永久性的操作，删除后无法恢复。这也会删除该项目中最后一次运行生成的数据集。

![](/images/data-processing/data-processing-index-delete.jpg)

## 数据处理步骤

1. 单击 `EDIT` 按钮或创建新数据处理项目后，会显示数据处理界面。在这里，您可以对数据进行处理。

   ![](/images/data-processing/data-processing-project-page.jpeg)

   在数据处理界面中，您可以在左侧看到数据处理算法的列表。您可以通过单击左侧的算法来选择要使用的算法，并在弹出的面板中设置算法的参数。每种算法的具体参数可能会有所不同，因此请参阅[数据处理算法介绍](#数据处理算法介绍)
   以获取有关如何设置它们的更多信息。

   ![](/images/data-processing/data-processing-algorithm-list.jpg)

2. 这里我们使用 `Outlier handling` 算法举例。在选择好参数后，您可以单击面板右下角的 `Start processing` 按钮来运行算法。

   ![](/images/data-processing/data-processing-parameter-panel.jpg)

3. 等待算法运行完成后，您可以在右侧看到算法的输出结果。

   ![](/images/data-processing/data-processing-data-preview.jpg)

4. 同时，新的数据集也会被保存到您的数据集中。您可以通过访问 `My Data` 页面来查看或下载您新的数据集。

   ![](/images/data-processing/data-processing-my-data-result.jpg)

## 数据处理算法介绍

### 异常值处理（Outlier handling）

#### 算法描述

异常值处理算法用于处理数据集中的异常值。在统计学中，异常值（又称离群值）是指与其他观测值有显著差异的数据点。异常值可能是由实验误差造成；后者有时会从数据集中排除。异常值可能会导致统计分析中出现严重问题。

> [Outlier - Wikipedia](https://en.wikipedia.org/wiki/Outlier)

#### 算法参数

- `Detection method`：异常值检测方法。目前支持
  [3-sigma](https://en.wikipedia.org/wiki/68%E2%80%9395%E2%80%9399.7_rule), [IQR](https://en.wikipedia.org/wiki/Interquartile_range),
  和 [MAD](https://en.wikipedia.org/wiki/Median_absolute_deviation) 三种方法。
- `Peocessing method`：异常值处理方法。目前支持 `set to null`, `set to mean`, 和 `set to median` 三种方法。

### 缺失值处理（Missing value handling）

#### 算法描述

缺失值处理算法用于处理数据集中的缺失数据。缺失数据（英语：missing
data）指在统计调查的过程中，由于受访者对问题的遗漏、拒绝，或是调查员与调查问卷本身的一些疏忽，使得经常会出现缺失数据问题，但是几乎所有标准统计方法都假设每单个案有可用于分析的所有变量信息，因此缺失数据就成为统计研究或问卷调查的工作人员必须解决的问题。

> [Missing data - Wikipedia](https://en.wikipedia.org/wiki/Missing_data)

#### 算法参数

- `identification method`：缺失值检测方法。目前支持 `empty`, `space`, `None` 和 `Non-numeric` 四种方法。
- `filling method`：缺失值处理方法。目前支持 `mean`, `median`, 和 `mode` 三种方法。

### 缩尾截尾处理（Tail shrinkage and truncation processing）

#### 算法描述

缩尾截尾处理是一种数据处理方法，用于处理数据集中的极端值。缩尾截尾处理的目的是使数据集中的极端值更加接近于中心值，从而使得数据集更加符合正态分布。

> [Truncation (statistics) - Wikipedia](https://en.wikipedia.org/wiki/Truncation_(statistics))
>
> [Shrinkage (statistics) - Wikipedia](https://en.wikipedia.org/wiki/Shrinkage_(statistics))

#### 算法参数

- `method_selection`：缩尾截尾处理方法。目前支持 `tail_shrinkage` 和 `tail_truncation` 两种方法。
- `upper_limit`：缩尾截尾处理的上限。类型为数值。
- `lower_limit`：缩尾截尾处理的下限。类型为数值。
- `processing_method`：缩尾截尾处理方法。目前支持 `delete_value` 和 `delete_row` 两种方法。

### 数据转换 （Data transformation）

#### 算法描述

在统计学中，数据变换是将确定性数学函数应用于数据集中的每个点——也就是说，每个数据点 z 都被替换为变换后的值 y = f(z)，其中 f
是一个函数。 通常应用转换，以便数据看起来更接近于要应用的统计推理过程的假设，或者提高图形的可解释性或外观。

> [Data transformation (statistics) - Wikipedia](https://en.wikipedia.org/wiki/Data_transformation_(statistics))

#### 算法参数

- `transform_method`：数据转换方法。目前支持 [FFT](https://en.wikipedia.org/wiki/Fast_Fourier_transform) 和 IFFT (Inverse
  Fast Fourier Transform) 两种方法。

### 数据降维 （Dimension reduction）

#### 算法描述

数据降维是指将高维数据转换为低维数据的过程。数据降维的目的是通过减少数据集中的变量数来简化数据集，同时保持数据集中的信息,
得到一组“不相关”主变量的过程。

> [Dimensionality reduction - Wikipedia](https://en.wikipedia.org/wiki/Dimensionality_reduction)

#### 算法参数

- `method`：数据降维方法。目前支持 [PCA](https://en.wikipedia.org/wiki/Principal_component_analysis)
  和 [LDA](https://en.wikipedia.org/wiki/Linear_discriminant_analysis) 两种方法。
- `n_components`：主成分数。类型为数值。当 `method` 为 `PCA` 时，`n_components` 为主成分数。当 `method` 为 `LDA`
  时，`n_components` 为线性判别数。

### 样本均衡（Sample balancing）

#### 算法描述

样本平衡是指调整数据集中每个类别的样本数量，使其分布更均匀的过程。 这在机器学习和统计分析中很重要，因为不平衡的数据集会导致有偏差的结果，尤其是在处理罕见事件或少数类别时。
通过平衡样本，我们可以提高使用数据集的算法的性能和准确性。

> [Oversampling and undersampling in data analysis - Wikipedia](https://en.wikipedia.org/wiki/Oversampling_and_undersampling_in_data_analysis)

#### 算法参数

- `balancing_method`
  ：样本均衡方法。目前支持 `undersample` ([RandomUnderSampler](https://imbalanced-learn.org/stable/references/generated/imblearn.under_sampling.RandomUnderSampler.html))， `oversample` ([RandomOverSampler](https://imbalanced-learn.org/stable/references/generated/imblearn.over_sampling.RandomOverSampler.html))
  和 `combined` （[SMOTEENN](https://imbalanced-learn.org/stable/references/generated/imblearn.combine.SMOTEENN.html)
  ）三种方法。

### 标准化（Normalization）

#### 算法描述

标准化的目的是使数据集更易于比较和分析。 标准化还有助于从数据中删除测量单位，从而可以比较具有不同单位的变量。

> [Normalization (statistics) - Wikipedia](https://en.wikipedia.org/wiki/Normalization_(statistics))

#### 算法参数

- `Method`：标准化方法。目前支持 [Min_Max](https://en.wikipedia.org/wiki/Feature_scaling)
  和 [Z_Score](https://en.wikipedia.org/wiki/Standard_score) 两种方法。
