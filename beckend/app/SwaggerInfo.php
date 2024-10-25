<?php

namespace App;

use OpenApi\Annotations as OA;

/**
 * @OA\Info(
 *     version="1.0.0",
 *     title="API Documentation for e-Bookshop",
 *     @OA\Contact(
 *         email="subalroy5561@gmail.com"
 *     )
 * )
 *
* @OA\SecurityScheme(
*     securityScheme="bearerAuth",
*     type="http",
*     scheme="bearer",
*     bearerFormat="JWT"
* )
*/
class SwaggerInfo
{
    // This class is only for Swagger documentation and can be left empty
}
