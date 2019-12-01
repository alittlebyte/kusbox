# KusBox
https://alittlebyte.github.io/kusbox/ <br/>
Level 2 тестового задания для FunBox. 100% работает и соответствует образцу в Chrome/Firefox/Opera.<br/>
Полифилл от Бабела и Autoprefixer+Browserslist, даже с довольно жесткими настройками, были бессильны в решении некоторых проблем.<br/> 
<br/>
Список "фич":<br/>
Edge: сбивающиеся на левую сторону картинки. Не поддерживается justify-content:space-evenly, решением будет его переделка в center и задание margin'ов в 2em вокруг container__sub'ов. Вручную.<br/>
IE11: grid-template-areas не распознаются, все плывет - переделать под grid-column-start и grid-column-end. Главный сбой - браузер не распознает метод .matches(). Решение: полифилл вида msMatchesSelector. Вручную.<br/>
Safari: Mac'а под рукой не было, тестировал на виртуальной машине. Видимых ошибок и сбоев консоль не показывала, но из 3 картинок отображалась и работала только левая. <br/>
<br/>
В отличии от онлайн-версии, которая всё корректно конвертировала, локально вышеупомянутые плагины с задачей не справляются - или их код, между делом, переписывается какой-либо другой настройкой.<br />
<br/>

Увидеть рабочий кросс-браузерный вариант со всеми полифиллами можно здесь  https://codepen.io/alittlebyte/full/BaaeBaX <br />
На IE11 выдает черный экран в отсутствие поддержки, дебаг-вариант тут https://cdpn.io/alittlebyte/debug/BaaeBaX/PNAvYKXXdNqr
