## 思路与算法

### 思路

由于这道题我们需要尽可能的使用剩余的杯子多，所以反过来看，就是使的使用了的杯子尽量少。我们不难看出，由于杯子数量是一定的，我们只需要使得大杯子装的更多就可以了。

于是，不难想出，我们需要用到排序。但是，我们怎么知道每个杯子有多少酒，同时，我们怎么知道每个杯子应该在哪个位置呢？

这里，就有结构体的好处了。我们定义一个结构体，使得它能存下一个酒杯中现在的酒量，酒杯的最大容积，以及它输入时的序号。这时候，我们只要从小到大依照它输入时的序号排序即可。

由于最开始的酒量并不重要，于是我们可以将总的酒量单独存在变量 $sum$ 中，在计算时方便进行分配。

不过不要忘了，使用 `sort()` 函数排序时，需要自己写比较函数哦！

## 代码

```cpp
#include <bits/stdc++.h>
#define file(s) \
    std::freopen(#s".in", "r", stdin), std::freopen(#s".out", "w", stdout)

// 科普一下：缩写
using i64 = long long;
using ull = unsigned long long;
using f32 = double;
using ldb = long double;

inline int read() {
    register int x = 0, sign = 1;
    register char ch = getchar_unlocked();
    for (; !isdigit(ch); ch = getchar_unlocked()) {
        if (ch == '-') {    
            sign = -1;
        }
        if (ch == EOF) {
            return EOF;
        }
    }
    for (; isdigit(ch); ch = getchar_unlocked()) {
        x = x * 10 + ch - '0';
    }
    return x * sign;
}

constexpr int N = 1e3 + 5;

// 定义的结构体
struct cup{
    // 现在杯子中有的酒量、杯子容积、被子序号
    int wine, size, id;
}c[N];
bool sz_cmp(cup a, cup b) {
    return a.size > b.size;
}
bool id_cmp(cup a, cup b) {
    return a.id < b.id;
}

int n;
i64 sum = 0;

int main() {
    n = read();
    for (int i = 1; i <= n; i++) {
        int t = read(), z = read();
        sum += t;
        c[i] = (cup){0, z, i};
    }
    std::sort(c+1, c + 1 + n, sz_cmp);
    int i = 1;
    while (sum > 0) {
        if (c[i].size <= sum) {
            sum -= c[i].size;
            c[i].wine = c[i].size;
        } else {
            c[i].wine = sum;
            sum = 0;
        }
        i++;
    }
    std::sort(c + 1, c + 1 + n, id_cmp);
    printf("%d\n", n - (i - 1));
    for (i = 1; i <= n; i++) {
        printf("%d ", c[i].wine);
    }
    return 0;
}
```

代码中的一些小注意点：

- 因为我的下标是从 $1$ 开始存的，所以我在 `while()` 循环中用的也是从 $1$ 开始；

- 如果剩余的酒不能填满杯子时，我们在这个杯子里装下剩余的酒；


- 由于我们需要输出的第一个数据是剩余的杯子数量，由于我们的 $i$ 的值是使用了的杯子的数量加 $1$（原来就是 $1$，每次使用加了 $1$），所以我们最终要返回去，输出总杯子数减去已使用的杯子数（`n - (i - 1)`）。