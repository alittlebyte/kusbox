# KusBox
Level 2 тестового задания для FunBox. 100% работает и соответствует образцу в Chrome/Firefox/Opera.<br/>
Полифилл от Бабела и Autoprefixer+Browserslist, даже с довольно жесткими настройками, были бессильны в решении некоторых проблем.<br/> 
Либо же я не до конца их настроил.<br/>
<br/>
Список "фич":<br/>
Edge: сбивающиеся на левую сторону картинки. Не поддерживается justify-content:space-evenly, решением будет его переделка в center и задание margin'ов в 2em вокруг container__sub'ов. Вручную.<br/>
IE11: главный сбой - браузер не распознает метод .matches(). Решение: полифилл вида msMatchesSelector. Вручную.<br/>
Safari: Mac'а под рукой не было, тестировал на виртуальной машине. Видимых ошибок и сбоев консоль не показывала, но почему-то из 3 картинок отображалась и работала только левая.  <br/>
<br/>
Копия realtime версии https://codepen.io/alittlebyte/full/BaaeBaX
