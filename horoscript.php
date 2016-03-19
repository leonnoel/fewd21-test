<?php

header('Content-type: application/xml');
echo file_get_contents("https://horoscope-api.herokuapp.com/horoscope/week/libra");

?>