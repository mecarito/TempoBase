// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_base_url: 'https://api.spotify.com/v1',

  // Intentionally displaying this here. Created separate spotify account
  basic_token:
    'Basic MWIwYTIyODBmMWZiNDliMjg2NDI1MTU4OWQyMDM4OTc6NTlkYzQ0NmRkZWRjNDY2NGI5NzlmMzVjMzk0MmZmYTI',
  client_id: '1b0a2280f1fb49b2864251589d203897',
  redirect_url: 'http://localhost:4200/dashboard',
  authorization_scopes: 'user-read-private user-read-email',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
