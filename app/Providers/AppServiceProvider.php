<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        /*
        $this->app->when(\App\Http\Controllers\QueueTController::class)
                  ->needs(\App\Shapes\ShapesTemplate::class)
                  ->give(\App\Shapes\Square::class);
        */
        $this->app->bind(\App\Shapes\ShapesTemplate::class, function($app) {
            return new \App\Shapes\Square();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
