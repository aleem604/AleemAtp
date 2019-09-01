export const environment = {
    production: true,

    firebase: {
    },

    debug: false,
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
        // apiUrl: 'https://atpdemoservice.azurewebsites.net',
        apiUrl: 'https://atpws.azurewebsites.net',
        authEnabled: true
    }
};
