<?php

header('Status: 200');
header('Content-type: application/json');

$data = array (
    array (
        'title' => 'Write a tech talk',
        'details' => 'First I need to do a quick presentation. Then a bunch of examples, then a demo app',
        'importance' => 'High'
    ),
    array (
        'title' => 'Hacknight ',
        'details' => 'Stay after work for pizza and hacking',
        'importance' => 'Medium'
    ),
    array (
        'title' => 'Go home',
        'details' => 'Will need some sleep, probably',
        'importance' => 'Low'
    ),
    array (
        'title' => 'Get up',
        'details' => 'Have to feed my baby',
        'importance' => 'High'
    ),
    array (
        'title' => 'Go to work',
        'details' => 'If I don\'t go to work I\'ll get sacked. Work is cool anyway.',
        'importance' => 'Medium'
    ),
    array (
        'title' => 'Have lunch',
        'details' => 'I\'m always hungry!',
        'importance' => 'High'
    )
);

echo json_encode(array(
    'success' => true,
    'total' => count($data),
    'data' => $data
));
