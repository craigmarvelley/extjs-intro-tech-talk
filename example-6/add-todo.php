<?php

header('Status: 201');
header('Content-type: application/json');

echo json_encode(array(
    'success' => true,
    'msg' => 'Todo saved! Title:' . $_POST['title'] . ' Details:' . $_POST['details'] . ' Importance:' . $_POST['importance']
));

//header('Status: 400');
//
//echo json_encode(array(
//    'success' => false,
//    'msg' => 'An error occurred!'
//));
