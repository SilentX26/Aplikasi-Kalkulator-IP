<?php
$decimal = 27;
$result = '';

while(TRUE) {
    $sisa_bagi = $decimal % 2;
        
    if($decimal < 2)
        break;
        
    $result .= $sisa_bagi;
    $decimal = $decimal / 2;
}

$result = strrev($result);