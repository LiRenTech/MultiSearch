function startSearch() {
  // const contentAll = "混凝土与意大利拌面\n意大利面与24号混凝土";
  const contentAll = document.getElementById("text").value;

  // 多重搜索
  for (let content of contentAll.split("\n")) {
    if (content.trim() === "") {
      continue;
    }
    // 搜索引擎
    window.open(`https://cn.bing.com/search?q=${content}`);
    window.open(`https://www.google.com/search?q=${content}`);
    window.open(`https://www.baidu.com/s?wd=${content}`);

    // 其他媒体平台
    window.open(`https://search.bilibili.com/all?keyword=${content}`);
    window.open(`https://www.zhihu.com/search?type=content&q=${content}`);
    window.open(
      `https://www.xiaohongshu.com/search_result?keyword=${content}&source=unknown`
    );

    // 编程相关
    // 开发者搜索
    window.open(`https://kaifa.baidu.com/searchPage?wd=${content}`);
    // CSDN
    window.open(`https://so.csdn.net/so/search?q=${content}&t=all&u=`);
    // 简书
    window.open(`https://www.jianshu.com/search?q=${content}&page=1&type=note`);
    window.open(`https://github.com/search?q=${content}&type=repositories`);

    // 数字图书馆
    window.open(
      `https://www.loc.gov/collections/world-digital-library/?q=${content}`
    );
    // 网盘搜索
    window.open(`https://www.fastsoso.cc/search?k=${content}`);
  }
}
