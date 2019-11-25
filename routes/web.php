<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/main', function () {
    return view('main');
});

/* Not sure of a better way to do a "catch all?" */
Route::get('/main/{any}', function ($any) {
    return view('main');
})->where('any', '.*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
