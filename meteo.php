<?php

// Set the API endpoint URL
$apiUrl = 'http://193.70.115.204:3001';

// Set up the HTTP headers
$options = [
    'http' => [
        'method' => 'GET',
        'header' => 'Content-Type: application/json',
    ],
];

// Create a context stream
$context = stream_context_create($options);

// Make the API request
$response = file_get_contents($apiUrl, false, $context);

// Check for errors
if ($response === false) {
    echo 'Error accessing the API';
} else {
    // Process the API response

    echo $response;
    // Handle the API response as needed
}

?>