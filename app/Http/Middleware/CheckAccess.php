<?php

namespace App\Http\Middleware;

use Closure;

class CheckAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!$request->user()->__get("api_access")) {
            return response("No Access", 405)/*->json(["status" => "NO ???"])*/;
        }

        return $next($request);
    }
}
