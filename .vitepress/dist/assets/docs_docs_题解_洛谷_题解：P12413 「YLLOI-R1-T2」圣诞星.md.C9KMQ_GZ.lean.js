import{_ as e,c as n,o as a,ae as o,j as t,a as T}from"./chunks/framework.Cd-3tpCq.js";const L=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"docs/docs/题解/洛谷/题解：P12413 「YLLOI-R1-T2」圣诞星.md","filePath":"docs/docs/题解/洛谷/题解：P12413 「YLLOI-R1-T2」圣诞星.md"}'),s={name:"docs/docs/题解/洛谷/题解：P12413 「YLLOI-R1-T2」圣诞星.md"},i={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},l={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"16.042ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 7090.4 1000","aria-hidden":"true"},r={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},m={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"19.31ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 8535.1 1000","aria-hidden":"true"},d={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},p={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.432ex",height:"1.441ex",role:"img",focusable:"false",viewBox:"0 -626 3727 637","aria-hidden":"true"};function g(c,Q,h,u,x,w){return a(),n("div",null,[Q[20]||(Q[20]=o("",6)),t("p",null,[Q[6]||(Q[6]=T("然后又快乐地交了上去，果不其然，又是 TLE（",-1)),Q[7]||(Q[7]=t("a",{href:"https://www.luogu.com.cn/record/215916384",target:"_blank",rel:"noreferrer"},"Record",-1)),Q[8]||(Q[8]=T("）。但是，60 分的结果告诉我优化是可行的。只不过，我们需要找到一些高效的优化策略。",-1)),Q[9]||(Q[9]=t("br",null,null,-1)),Q[10]||(Q[10]=T(' 这里我把计算的部分模块化地放出来（方便调试、修改）： === "C++" ',-1)),Q[11]||(Q[11]=t("code",null,"cpp long long compute_cost(int x, int w, const vector<int>& a) { long long cost = x * 1LL * w; int coupons = x; for (int i = 0; i < a.size(); ++i) { int discount = min(a[i], coupons); cost += max(a[i] - discount, 0); coupons += 1; if (cost >= (1LL << 60)) { break; } } return cost; } ",-1)),Q[12]||(Q[12]=T(' 然后，再使用三分法，逐步缩小搜索范围： === "C++" ',-1)),Q[13]||(Q[13]=t("code",null,"cpp while (left <= right) { int mid1 = left + (right - left) / 3; int mid2 = right - (right - left) / 3; long long cost1 = compute_cost(mid1, w, a); long long cost2 = compute_cost(mid2, w, a); if (cost1 < cost2) { right = mid2 - 1; min_cost = min(min_cost, cost1); } else { left = mid1 + 1; min_cost = min(min_cost, cost2); } } ",-1)),Q[14]||(Q[14]=T(' 最后，在局部进行小的优化，找出最优解（避免三分遗漏）： === "C++" ',-1)),Q[15]||(Q[15]=t("code",null,"cpp for (int x = max(left - 5, 0); x <= min(right + 5, max_a + n); ++x) { long long cost = compute_cost(x, w, a); if (cost < min_cost) { min_cost = cost; } } ",-1)),Q[16]||(Q[16]=T(" 最终，我们把代码从 ",-1)),t("mjx-container",i,[(a(),n("svg",l,Q[0]||(Q[0]=[o("",1)]))),Q[1]||(Q[1]=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mi",null,"m"),t("mi",null,"a"),t("mi",null,"x"),t("mi",null,"c"),t("mi",null,"o"),t("mi",null,"s"),t("mi",null,"t"),t("mo",null,"×"),t("mi",null,"n"),t("mo",{stretchy:"false"},")")])],-1))]),Q[17]||(Q[17]=T(" 优化到了 ",-1)),t("mjx-container",r,[(a(),n("svg",m,Q[2]||(Q[2]=[o("",1)]))),Q[3]||(Q[3]=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mi",null,"n"),t("mo",null,"×"),t("mi",null,"log"),t("mo",{"data-mjx-texclass":"NONE"},"⁡"),t("mi",null,"m"),t("mi",null,"a"),t("mi",null,"x"),t("mi",null,"c"),t("mi",null,"o"),t("mi",null,"s"),t("mi",null,"t"),t("mo",{stretchy:"false"},")")])],-1))]),Q[18]||(Q[18]=T("（",-1)),t("mjx-container",d,[(a(),n("svg",p,Q[4]||(Q[4]=[o("",1)]))),Q[5]||(Q[5]=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"m"),t("mi",null,"a"),t("mi",null,"x"),t("mi",null,"c"),t("mi",null,"o"),t("mi",null,"s"),t("mi",null,"t")])],-1))]),Q[19]||(Q[19]=T(" 指最贵的商品价格）。",-1))]),Q[21]||(Q[21]=t("h2",{id:"代码",tabindex:"-1"},[T("代码 "),t("a",{class:"header-anchor",href:"#代码","aria-label":'Permalink to "代码"'},"​")],-1)),Q[22]||(Q[22]=t("p",null,'=== "C++" ```cpp #include <bits/stdc++.h> using namespace std;',-1)),Q[23]||(Q[23]=t("pre",null,[t("code",null,`// 计算购买 x 张优惠券后，买完所有商品的总花费
// 参数 x: 初始购买的优惠券数量
// 参数 w: 每张优惠券的价格
// 参数 a: 商品价格数组
long long compute_cost(int x, int w, const vector<int>& a) {
    long long cost = x * 1LL * w; // 优惠券总花费
    int coupons = x; // 拥有优惠券数量
    for (int i = 0; i < a.size(); ++i) {
        int discount = min(a[i], coupons); // 当前商品的最大优惠
        cost += max(a[i] - discount, 0); // 计算商品实际花费
        coupons += 1; // 获得一张优惠券
        if (cost >= (1LL << 60)) { // 剪枝
            break; 
        }
    }
    return cost; // 返回总花费
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    // 输入 n: 商品数量, w: 每张优惠券的价格
    int n, w;
    cin >> n >> w;
    // 输入商品价格数组
    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    // 将商品价格排序，优先处理价格较低的商品
    sort(a.begin(), a.end());
    int max_a = a.back(); // 商品的最高价格
    long long min_cost = 1LL << 60; // 初始化最小花费为2^60（反正挺大）
    // 使用三分法搜索最优的初始优惠券数量
    int left = 0;
    int right = max_a + n; // 理论上优惠券数量的最大值
    while (left <= right) {
        int mid1 = left + (right - left) / 3; // 三分点 1
        int mid2 = right - (right - left) / 3; // 三分点 2
        long long cost1 = compute_cost(mid1, w, a); // 计算三分点 1 的总花费
        long long cost2 = compute_cost(mid2, w, a); // 计算三分点 2 的总花费
        if (cost1 < cost2) { // 如果三分点 1 的花费更低
            right = mid2 - 1; // 缩小右边界
            min_cost = min(min_cost, cost1); // 更新最小花费
        } else { // 如果三分点 2 的花费更低
            left = mid1 + 1; // 缩小左边界
            min_cost = min(min_cost, cost2); // 更新最小花费
        }
    }
    // 三分法
    for (int x = max(left - 5, 0); x <= min(right + 5, max_a + n); x++) {
        long long cost = compute_cost(x, w, a); // 计算总花费
        if (cost < min_cost) { // 更新最小花费
            min_cost = cost;
        }
    }
    cout << min_cost << '\\n';
    return 0;
}
\`\`\`
`)],-1)),Q[24]||(Q[24]=t("p",null,'=== "Java" ```java import java.util.*;',-1)),Q[25]||(Q[25]=t("pre",null,[t("code",null,`public class Main {
    // 计算购买 x 张优惠券后，买完所有商品的总花费
    // 参数 x: 初始购买的优惠券数量
    // 参数 w: 每张优惠券的价格
    // 参数 a: 商品价格数组
    static long computeCost(int x, int w, List<Integer> a) {
        long cost = (long) x * w; // 优惠券总花费
        int coupons = x; // 拥有优惠券数量
        for (int price : a) {
            int discount = Math.min(price, coupons); // 当前商品的最大优惠
            cost += Math.max(price - discount, 0); // 计算商品实际花费
            coupons += 1; // 获得一张优惠券
            if (cost >= (1L << 60)) { // 剪枝
                break;
            }
        }
        return cost; // 返回总花费
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // 输入 n: 商品数量, w: 每张优惠券的价格
        int n = scanner.nextInt();
        int w = scanner.nextInt();
        // 输入商品价格数组
        List<Integer> a = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            a.add(scanner.nextInt());
        }
        // 将商品价格排序，优先处理价格较低的商品
        Collections.sort(a);
        int maxA = a.get(a.size() - 1); // 商品的最高价格
        long minCost = 1L << 60; // 初始化最小花费为2^60（反正挺大）
        // 使用三分法搜索最优的初始优惠券数量
        int left = 0;
        int right = maxA + n; // 理论上优惠券数量的最大值
        while (left <= right) {
            int mid1 = left + (right - left) / 3; // 三分点 1
            int mid2 = right - (right - left) / 3; // 三分点 2
            long cost1 = computeCost(mid1, w, a); // 计算三分点 1 的总花费
            long cost2 = computeCost(mid2, w, a); // 计算三分点 2 的总花费
            if (cost1 < cost2) { // 如果三分点 1 的花费更低
                right = mid2 - 1; // 缩小右边界
                minCost = Math.min(minCost, cost1); // 更新最小花费
            } else { // 如果三分点 2 的花费更低
                left = mid1 + 1; // 缩小左边界
                minCost = Math.min(minCost, cost2); // 更新最小花费
            }
        }
        // 三分法
        for (int x = Math.max(left - 5, 0); x <= Math.min(right + 5, maxA + n); x++) {
            long cost = computeCost(x, w, a); // 计算总花费
            if (cost < minCost) { // 更新最小花费
                minCost = cost;
            }
        }
        System.out.println(minCost);
    }
}
\`\`\`
`)],-1))])}const H=e(s,[["render",g]]);export{L as __pageData,H as default};
