## 思路与算法

前一段时间，我们学校教练带我们连了小数据量的餐巾计划问题。所以比赛的时候我便想到了如下的思路：

这道题我们**反过来**看：既然我们要找最少的总钱数，那我们不妨通过**枚举**的方式，一个一个枚举，找到最少花费。我这里最开始将枚举的最大值设为了所有商品中最贵的商品的价格（还能凹）。

好的，开开心心打代码。打完一交，诶？怎么只有 50 分？噢～原来是 TLE 了（[Record](https://www.luogu.com.cn/record/215913684)）。

于是我快乐地加上了一些条件（剪枝）：

=== "C++"
    ```cpp
    if (cost >= min_cost) {
        break;
    }
    ```

然后又快乐地交了上去，果不其然，又是 TLE（[Record](https://www.luogu.com.cn/record/215916384)）。但是，60 分的结果告诉我优化是可行的。只不过，我们需要找到一些高效的优化策略。  
这里我把计算的部分模块化地放出来（方便调试、修改）：
=== "C++"
    ```cpp
    long long compute_cost(int x, int w, const vector<int>& a) {
        long long cost = x * 1LL * w;
        int coupons = x;
        for (int i = 0; i < a.size(); ++i) {
            int discount = min(a[i], coupons);
            cost += max(a[i] - discount, 0);
            coupons += 1;
            if (cost >= (1LL << 60)) {
                break; 
            }
        }
        return cost;
    }
    ```
然后，再使用三分法，逐步缩小搜索范围：
=== "C++"
    ```cpp
    while (left <= right) {
        int mid1 = left + (right - left) / 3;
        int mid2 = right - (right - left) / 3;
        long long cost1 = compute_cost(mid1, w, a);
        long long cost2 = compute_cost(mid2, w, a);
        if (cost1 < cost2) {
            right = mid2 - 1;
            min_cost = min(min_cost, cost1);
        } else {
            left = mid1 + 1;
            min_cost = min(min_cost, cost2);
        }
    }
    ```
最后，在局部进行小的优化，找出最优解（避免三分遗漏）：
=== "C++"
    ```cpp
    for (int x = max(left - 5, 0); x <= min(right + 5, max_a + n); ++x) {
        long long cost = compute_cost(x, w, a);
        if (cost < min_cost) {
            min_cost = cost;
        }
    }
    ```
最终，我们把代码从 $O(maxcost \times n)$ 优化到了 $O(n \times \log maxcost)$（$maxcost$ 指最贵的商品价格）。

## 代码
=== "C++"
    ```cpp
    #include <bits/stdc++.h>
    using namespace std;

    // 计算购买 x 张优惠券后，买完所有商品的总花费
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
        cout << min_cost << '\n';
        return 0;
    }
    ```

=== "Java"
    ```java
    import java.util.*;

    public class Main {
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
    ```