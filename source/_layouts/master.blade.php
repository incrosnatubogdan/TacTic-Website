<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script type="text/javascript" src="{{ mix('js/main.js', 'assets/build') }}"></script>
        <style>
            .pre_loader{width:100vw;height:100vh;position:absolute;left:0;right:0;z-index:1000}.lds-roller{display:inline-block;position:absolute;width:64px;height:64px;left:50%;top:50%;transform:translate(-50%,-50%)}.lds-roller div{animation:lds-roller 1.2s cubic-bezier(.5,0,.5,1) infinite;transform-origin:32px 32px}.lds-roller div:after{content:" ";display:block;position:absolute;width:6px;height:6px;border-radius:50%;background:#000;margin:-3px 0 0 -3px}.lds-roller div:nth-child(1){animation-delay:-36ms}.lds-roller div:nth-child(1):after{top:50px;left:50px}.lds-roller div:nth-child(2){animation-delay:-72ms}.lds-roller div:nth-child(2):after{top:54px;left:45px}.lds-roller div:nth-child(3){animation-delay:-108ms}.lds-roller div:nth-child(3):after{top:57px;left:39px}.lds-roller div:nth-child(4){animation-delay:-144ms}.lds-roller div:nth-child(4):after{top:58px;left:32px}.lds-roller div:nth-child(5){animation-delay:-.18s}.lds-roller div:nth-child(5):after{top:57px;left:25px}.lds-roller div:nth-child(6){animation-delay:-216ms}.lds-roller div:nth-child(6):after{top:54px;left:19px}.lds-roller div:nth-child(7){animation-delay:-252ms}.lds-roller div:nth-child(7):after{top:50px;left:14px}.lds-roller div:nth-child(8){animation-delay:-288ms}.lds-roller div:nth-child(8):after{top:45px;left:10px}@keyframes lds-roller{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.pre_loader button.next{display:none}
        </style>
    </head>
    <body>
        @yield('body')
    </body>
</html>
