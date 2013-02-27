<?php

header('Status: 201');
header('Content-type: application/json');

echo json_encode(array(
    'success' => true,
    'data' => array (
        'title' => $_POST['title'],
        'details' => $_POST['details'],
        'importance' => $_POST['importance'],
    )
));
