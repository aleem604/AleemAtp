// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,

    firebase: {},


    debug: true,
    log: {
        auth: false,
        store: false,
    },

    smartadmin: {
        api: null,
        db: 'smartadmin-angular'
    },
  authConfig: {
        clientId: '8wAHOSLTvQG2npk3qn1t9N4yi7HDj3qc',
        scope: 'openid',
        sessionTimeout: 60
    },
    appConfig: {
        authenticationAuthority: 'https://atpauth.auth0.com/',
        apiUrl: 'http://localhost:4250',
        authEnabled: false
    }

};
