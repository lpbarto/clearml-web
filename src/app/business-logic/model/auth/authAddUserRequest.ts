/**
 * auth
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 2.3
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface AuthAddUserRequest {
    /**
     * A secret key (used as the user\'s password)
     */
    secret_key?: string;
    /**
     * User name (makes the auth entry more readable)
     */
    name: string;
    /**
     * Associated company ID. If not provided, the caller\'s company ID will be used
     */
    company?: string;
    /**
     * Email address uniquely identifying the user
     */
    email: string;
    /**
     * Provider ID indicating the external provider used to authenticate the user
     */
    provider?: string;
    /**
     * Unique user ID assigned by the external provider
     */
    provider_user_id?: string;
    /**
     * Provider-issued token for this user
     */
    provider_token?: string;
    /**
     * Given name
     */
    given_name?: string;
    /**
     * Family name
     */
    family_name?: string;
    /**
     * Avatar URL
     */
    avatar?: string;
}