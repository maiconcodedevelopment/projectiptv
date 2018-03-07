<?php

use Illuminate\Support\Facades\View;

$router->get('/', function () use ($router) {
    return view('index');
});
