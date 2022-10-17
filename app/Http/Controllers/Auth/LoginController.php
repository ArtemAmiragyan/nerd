<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\LoginRequest;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Routing\Controller;

class LoginController extends Controller
{
    public function __invoke(LoginRequest $request): array
    {
        return [
            'user' => $user = $request->getLoginUser(),
            'token' => $user->createToken('default')->plainTextToken,
        ];
    }

    public function user(): Authenticatable
    {
        return auth()->user();
    }
}
