# Node Editor

Node Editor 是一个完全的图形化数据处理工具。在这里你可以依照你的需求，在一个页面上对多个数据集同时应用多种数据处理方法。

## How to use

1. 登录后，从顶部导航栏中点击 **Node Editor**，进入节点编辑界面。<!--can add link-->
2. 在任意空白处右键单击，呼出节点列表，左键点击节点名称，即可创造节点。

<img src="https://s2.loli.net/2023/04/12/z2YQULji1dhmvDw.png" alt="creating_nodes.png" style="zoom: 67%;" /><img src="https://s2.loli.net/2023/04/12/jyQYsKrTqDHOJNd.png" alt="creation_result" style="zoom: 67%;" />

可创造的节点从功能上可以分为三类：数据节点，处理节点和输出节点。关于节点更详细的描述见[节点列表](##节点列表)。

3. 建立处理流程，有几点需要注意：
    - 每个节点的输入接口在左边，输出接口在右边
    - 一个**输入**接口**只**能连接一个节点，但一个输出接口可以连接多个节点，意味着一个流程中可以存在分支
    - 一个流程中至少包含一个输出节点，以激活流程。否则流程不会运行

   下面我们将用一个 Data Node ，一个 Column Selection Node ，一个 Normalization Node 和一个 End Process Node
   来建立一个简单的数据处理流程。

<img src="https://s2.loli.net/2023/04/12/KTYe615UVSAGc2D.png" alt="process_preparation" style="zoom: 67%;" />

接下来我们先将 4 个节点串联，以将它们全部激活，并在 Data 中选择公共数据集里的 `iris.csv` 进行处理。可以看到在
ColumnSelectionNode 中已经显示出 `iris.csv` 的各列名。

<img src="https://s2.loli.net/2023/04/12/JPptOHZLS6Qlwa1.png" alt="process_1step" style="zoom: 67%;" />

在 ColumnSelectionNode 中我们填入 `sepal.length` ，在 Normalization 中我们选择 `Normalization
Method` 为 `Min-Max` ，设置新文件名为 `sepal.length-minmax` ，最后连接 Data 和 Normalization ，一个处理流程即完成了。

处理结果会以 `sepal.length-minmax.csv` 上传到你的文件空间，可以在 My Data 中查看。

<img src="https://s2.loli.net/2023/04/12/ZxXwWjh1BCFmdI7.png" alt="process_2step" style="zoom: 67%;" />

## 节点列表

### 数据节点

- Data Node

  Data Node 在编辑器中提供处理所用的数据源。它拥有的一个下拉选项中会显示你目前拥有的数据集（包含你上传的和处理任务生成的）。

- Column Selection Node

  Column Selection Node 用来选择数据集中的列。当 Column Selection Node
  在节点编辑器中被正确激活，在输入和输出接口之间会出现一行字符，显示其接收到的数据集所包含的所有列。显示行下方的输入栏用于选择你希望输出进行处理的列。列名之间用逗号分隔。

### 输出节点

输出节点是只有输入接口，没有输出接口的节点。在节点编辑器中，一个流程**必须**包含**至少一个**输出节点以激活此流程。否则流程中的
**任何**计算或操作都不会生效。

- End Node

  End Node 是最基础的输出节点，但是是最推荐使用的输出节点。它没有任何输出显示，仅仅标志着流程中一个分支的结束。

- Display Node

  在 End Node 的基础上，将节点连接到 Display Node 可以显示当前节点的输出。编辑器中的大多数节点输出文件的储存结构。有时可
  以用来查看流程中分支是否成功运行。但是仅使用 Display Node 而不使用 End Node 是不推荐的。

::: tip

我们不推荐单独使用 Display Node 的原因是该节点的显示并不是同步的。如果用 Display Node 代替 End Node
单独使用，但是连接后没有看到显示内容，并不一定意味着当前流程或分支中的操作失败。如果做了上述操作，需要在节点编辑器中新建一个节点来刷新显示。

:::

### 处理节点

当前节点编辑器中包含了7种处理节点，与 Data Processing 中的处理方法相同，各节点都由一种数据处理方法命名。每个处理节点都会包含：

- 一个数据集输入接口，用来连接 Data Node 获取输入数据集
- 一个列输入接口，用来连接 Column Selection Node 获取输入处理列
- 一个文本输入，用于定义处理后的新文件名（不需要输入拓展名）
- 一个输出接口，用来输出处理后的数据集
- 一些参数选项，用于定义处理算法的参数
