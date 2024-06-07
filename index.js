// 创建一个URL模板数组，其中 {{content}} 是占位符
const searchEngines = [
  {
    url: "https://cn.bing.com/search?q={{content}}",
    name: "Bing",
    isSelected: true,
  },
  {
    url: "https://www.google.com/search?q={{content}}",
    name: "Google",
    isSelected: true,
  },
  {
    url: "https://www.baidu.com/s?wd={{content}}",
    name: "百度",
    isSelected: true,
  },
  {
    url: "https://search.bilibili.com/all?keyword={{content}}",
    name: "Bilibili",
    isSelected: true,
  },
  {
    url: "https://www.zhihu.com/search?type=content&q={{content}}",
    name: "知乎",
    isSelected: true,
  },
  {
    url: "https://www.xiaohongshu.com/search_result?keyword={{content}}&source=unknown",
    name: "小红书",
    isSelected: true,
  },
  {
    url: "https://kaifa.baidu.com/searchPage?wd={{content}}",
    name: "百度开发者",
    isSelected: true,
  },
  {
    url: "https://so.csdn.net/so/search?q={{content}}&t=all&u=",
    name: "CSDN",
    isSelected: true,
  },
  {
    url: "https://www.jianshu.com/search?q={{content}}&page=1&type=note",
    name: "简书",
    isSelected: true,
  },
  {
    url: "https://github.com/search?q={{content}}&type=repositories",
    name: "GitHub",
    isSelected: true,
  },
  {
    url: "https://www.loc.gov/collections/world-digital-library/?q={{content}}",
    name: "LOC World Digital Library",
    isSelected: true,
  },
  {
    url: "https://www.fastsoso.cc/search?k={{content}}",
    name: "Fastsoso网盘搜索",
    isSelected: true,
  },
];

window.onload = function () {
  // 渲染搜索列表
  const searchList = document.getElementById("search-list");
  searchEngines.forEach((url) => {
    /**
     * 每一项创建成一个多选框，并绑定事件
     *
     */
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = url.isSelected;
    checkbox.id = `checkbox-${url.name}`;
    checkbox.addEventListener("change", function () {
      url.isSelected = this.checked;
    });

    const label = document.createElement("label");
    label.htmlFor = `checkbox-${url.name}`;
    label.textContent = url.name;

    const li = document.createElement("li");
    li.appendChild(checkbox);
    li.appendChild(label);
    searchList.appendChild(li);
  });
};

function startSearch() {
  const contentAll = document.getElementById("text").value;
  const selectedEngines = searchEngines.filter((engine) => engine.isSelected);

  for (let content of contentAll.split("\n")) {
    if (content.trim() === "") {
      continue;
    }

    selectedEngines.forEach((engine) => {
      let url = engine.url.replace("{{content}}", encodeURIComponent(content));
      window.open(url);
    });
  }
}
