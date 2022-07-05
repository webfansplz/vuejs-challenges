<!--info-header-start-->
<!--info-header-end-->


<i>When listening for keyboard events, we often need to check for specific keys.</i><b>在收听键盘事件时，我们通常需要检查特定的键。</b> <i>Vue allows adding key modifiers for v-on or @ when listening for key events,eg :</i> <b>VUE允许在收听关键事件时为V-ON或 @添加密钥修饰符，例如：</b>

``VUE
<!-- only call `vm.submit()` when the `key` is `Enter` -->
<input @keyup.enter="submit" />
````````

为了解决这个挑战，我们将尝试一些事情，让我们走吧：


<!--info-footer-start-->
<!--info-footer-end-->
