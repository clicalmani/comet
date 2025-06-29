<?php

/**
 * |---------------------------------------------------------------
 * |           ***** Create the Application *****
 * |---------------------------------------------------------------
 */

use Clicalmani\Foundation\Http\Middlewares\Middleware;

return Clicalmani\Foundation\Maker\Application::setup(rootPath: dirname(__DIR__))
            ->withMiddleware(function(Middleware $middleware) {
                // $middleware->web(append: [\Inertia\Middleware::class]);
            })
            ->run();
