<!--info-header-start-->
<!--info-header-end-->


<i>For this challenge, you need implement a debounce Composable Function.</i><b>对于此挑战，您需要实现可访问的可组合功能。</b> <i>Let&#39;s go.</i><b>我们走吧。</b>

``TS
导入类型{ref}从&#39;vue&#39;

接口使用ebounceOptions {
领导？：布尔值//指定在超时的前沿调用。
MaxWait？：NUMBER //允许弹药延迟的最大时间在调用之前被延迟。
尾随？：布尔值//指定在超时的后缘上调用。
}

<i>type MaybeRef</i><b>类型Mayberef</b><T> <i>= T |</i> <b>= t |</b> <i>Ref</i><b>参考</b><T>
<i>type UseDebounce =</i><b>类型使用的bounce =</b><T extends (...args: any[]) => <i>any&gt;(fn: T, wait: MaybeRef</i><b>任何&gt;（fn：t，等等：Mayberef</b><number> <i>, options?: UseDebounceOptions) =&gt; T</i> <b>，选项？：使用了ebouncoptions）=&gt; t</b>

/**
*使用
* @param fn要调试的功能。
* @Param等待毫秒延迟的毫秒数。
* @param选项选项对象。
* @return返回新的拒绝功能。
*/
const usedebounce：undereebounce =（fn，wait，options）=&gt; {
//做一些...
}
````````


<!--info-footer-start-->
<!--info-footer-end-->
