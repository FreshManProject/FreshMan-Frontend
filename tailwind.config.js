/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                tablet: '600px',
            },
        },
        extend: {
            // figma 기준, 필요시 옵션 추가
            fontFamily: {
                sans: ['Apple SD Gothic Neo', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                title1: ['1.625rem', {}],
                title2: ['1.25rem', {}],
                title3: ['1.125rem', {}],
                subTitle: ['1.375rem', {}],
                body1: ['1rem', {}],
                body2: ['1rem', {}],
                body3: ['0.75rem', {}],
                body4: ['0.6875rem', {}],
                body5: ['0.625rem', {}],

                title1_b: ['1.625rem', { fontWeight: '700' }],
                title2_b: ['1.25rem', { fontWeight: '700' }],
                title3_b: ['1.125rem', { fontWeight: '700' }],
                subTitle_b: ['1.375rem', { fontWeight: '700' }],
                body1_b: ['1rem', { fontWeight: '700' }],
                body2_b: ['1rem', { fontWeight: '700' }],
                body3_b: ['0.75rem', { fontWeight: '700' }],
                body4_b: ['0.6875rem', { fontWeight: '700' }],
                body5_b: ['0.625rem', { fontWeight: '700' }],
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                gray300: 'var(--gray300)',
                gray400: 'var(--gray400)',
                pointRed: 'var(--pointRed)',
                primary: {
                    DEFAULT: 'hsl(var(--pointRed))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
