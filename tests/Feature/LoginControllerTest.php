<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;
use Throwable;

class LoginControllerTest extends TestCase
{
    /** @test
     * @throws Throwable
     */
    public function it_checks_user_can_sign_in()
    {
        $user = User::factory()->create(['password' => bcrypt('password')]);

        ['token' => $token] = $this->postJson('/api/login', ['email' => $user->email, 'password' => 'password'])
            ->assertSuccessful()
            ->assertJsonStructure([
                'token',
                'user' => ['id', 'name'],
            ])
            ->decodeResponseJson();

        $this->getJson('/api/user', ['Authorization' => "Bearer {$token}"])
            ->assertSuccessful()
            ->assertJsonStructure([
                'id',
                'name',
            ])
            ->assertJson([
                 'id' => $user->id,
            ]);
    }
}
