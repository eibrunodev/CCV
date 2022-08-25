module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {
            backgroundImage: () => ({
                'login-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1280.jpg')",
                'landing-background':
                    'linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80)',
                'profile-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1080.jpg')",
                'ccv-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/niver-01.png')",       
            }),
            Avatar: () =>({
                'Andre':
                    "url('/src/assets/img/Andre.jpg')",
                'Everaldo':
                    "url('/src/assets/img/Everaldo.jpg')",
                'Davi':
                    "url('/src/assets/img/Davi.jpg')",
            }),
            keyframes: {
                passa: {
                    '0%':{transform:'scale(1)'},                    
                    '100%':{transform: 'scale(1.1)'},
                }
            },
            animation: {
                passa: 'passa 1s'               
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
