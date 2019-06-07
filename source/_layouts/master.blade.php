<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    <script type="text/javascript" src="http://localhost/tactic-website/assets/js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="{{ mix('js/main.js', 'assets/build') }}"></script>
    <style>
        .pre_loader {
            width: 100vw;
            height: 100vh;
            position: absolute;
            left: 0;
            right: 0;
            z-index: 1000;
            background: white;
        }

        img.pre_loader-logo {
            width: 247px;
            height: 300px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .pre_loader button.next {
            display: none;
            position: relative
        }

        .pre_loader img.next {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
        }

        .body {
            margin: 0 auto;
            padding: 0;
        }

        .pre_loader .posAbs {
            position: absolute;
        }

        #bgLoader {
            background-color: #B3B3B3;
            width: 100%;
            height: 4vh;
            top: 0px;
            box-shadow: 0 0 5px white;
        }

        .loader {
            top: 0px;
            width: 100%;
            height: 4vh;
            background-color: #F01267;
            background-size: 1vh;
            animation: loader 7s ease-in infinite;
        }

        @keyframes loader {
            0% {
                width: 0;
            }

            35% {
                width: 35%;
            }

            65% {
                width: 75%;
            }

            91% {
                width: 91%;
            }

            100% {
                width: 100%;
            }
        }

        .firstText {
            color: white;
            position: absolute;
            top: 8vh;
            font-size: 1.2rem;
            left: 50%;
            transform: translate(-50%);
        }

        .firstText:before {
            content: "";
            color: #B3B3B3;
            animation: switch 7s linear infinite;
        }

        @keyframes switch {
            0% {
                content: 'deploying to motherload for some content'
            }

            15% {
                content: ' "loading css/html/js" '
            }

            30% {
                content: '"the website engineer it\'s lost"'
            }

            45% {
                content: 'finding the missing css'
            }

            60% {
                content: 'we can do it'
            }

            75% {
                content: 'last javascript it s here'
            }

            80% {
                content: 'main server it here'
            }

            95% {
                content: 'almost there'
            }
        }

        /* css for button */

        .pulse-container {
            margin: 0 auto 0;
            position: absolute;
            top: 45%;
            right: 50px;
            width: auto;
        }

        .pulseButton {
            width: 35px;
            height: 35px;
            border: none;
            box-shadow: 0 0 0 0 rgba(193, 25, 89, 0.7);
            border-radius: 50%;
            background-color: #F11267;
            background-size: cover;
            background-repeat: no-repeat;
            cursor: pointer;
            -webkit-animation: pulse 1.50s infinite cubic-bezier(0.66, 0, 0, 1);
            -moz-animation: pulse 1.50s infinite cubic-bezier(0.66, 0, 0, 1);
            -ms-animation: pulse 1.50s infinite cubic-bezier(0.66, 0, 0, 1);
            animation: pulse 1.50s infinite cubic-bezier(0.66, 0, 0, 1);
        }

        .pulseButton:hover {
            -webkit-animation: none;
            -moz-animation: none;
            -ms-animation: none;
            animation: none;
        }

        @-webkit-keyframes pulse {
            to {
                box-shadow: 0 0 0 25px rgba(214, 18, 103, 0);
            }
        }

        @-moz-keyframes pulse {
            to {
                box-shadow: 0 0 0 25px rgba(214, 18, 103, 0);
            }
        }

        @-ms-keyframes pulse {
            to {
                box-shadow: 0 0 0 25px rgba(214, 18, 103, 0);
            }
        }

        @keyframes pulse {
            to {
                box-shadow: 0 0 0 25px rgba(214, 18, 103, 0);
            }
        }
    </style>
</head>

<body>
    @yield('body')
</body>

</html>