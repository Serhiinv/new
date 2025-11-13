import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        bg: Palette['primary'];
        accent: Palette['primary'];
        greys: Palette['primary'];
        whites: Palette['primary'];
    }
    interface PaletteOptions {
        bg: PaletteOptions['primary'];
        accent: PaletteOptions['primary'];
        greys: PaletteOptions['primary'];
        whites: PaletteOptions['primary'];
    }
    interface TypographyVariants {
        button: React.CSSProperties;
        overline: React.CSSProperties;
        heading1: React.CSSProperties;
        heading2: React.CSSProperties;
        heading3: React.CSSProperties;
        heading4: React.CSSProperties;
        heading5: React.CSSProperties;
        body3: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        button?: React.CSSProperties;
        overline?: React.CSSProperties;
        heading1?: React.CSSProperties;
        heading2?: React.CSSProperties;
        heading3?: React.CSSProperties;
        heading4: React.CSSProperties;
        heading5: React.CSSProperties;
        body3: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        button: true;
        overline: true;
        heading1: true;
        heading2: true;
        heading3: true;
        heading4: true;
        heading5: true;
        body2: true;
        body3: true;
    }
}

let customer = process.env.NEXT_PUBLIC_CUSTOMER_ID || 'default';

const getTheme = (client: string): any => {
    if (client === 'L_T_BRANDED') {
        const theme = createTheme({
            palette: {
                mode: 'light',
                primary: {
                    main: '#F0ECEB',
                    contrastText: '#000',
                    light: '#000',
                },
                secondary: {
                    main: '#F0ECEB',
                    contrastText: '#000',
                    dark: '#F0ECEB',
                },
                bg: {
                    main: '#F5F5F5',
                    contrastText: '#424242',
                    dark: '#EEEEEE',
                    light: '#666666',
                },
                accent: {
                    main: '#ECB430',
                    contrastText: '#E2E2E2',
                    dark: '#B20E10',
                    light: '#697689',
                },
                greys: {
                    main: '#2D2A27',
                    contrastText: '#fff',
                    dark: '#333333',
                    light: '#212121',
                },
                whites: {
                    main: '#FFFFFF',
                    contrastText: '#000',
                    dark: '#F5F5F5',
                    light: '#bbc0be',
                },
            },
            typography: {
                fontFamily: 'Lexend, sans-serif',
                body1: {
                    letterSpacing: 0.15,
                    fontWeight: 300,
                    fontSize: 19,
                    lineHeight: 1.3,
                    fontFamily: 'Lexend, sans-serif',
                },
                body2: {
                    letterSpacing: 0.15,
                    fontWeight: 300,
                    fontSize: 18,
                    lineHeight: 1.3,
                    fontFamily: 'Lexend, sans-serif',
                },
                body3: {
                    letterSpacing: 0.15,
                    fontWeight: 300,
                    fontSize: 16,
                    lineHeight: 1.3,
                    fontFamily: 'Lexend, sans-serif',
                },
                overline: {
                    fontSize: 30,
                    fontWeight: '400',
                    textTransform: 'uppercase',
                    fontFamily:
                        'League Gothic, Impact, Roboto Condensed, Helvetica Neue, sans-serif',
                    letterSpacing: 1,
                    lineHeight: 1,
                    wordWrap: 'break-word',
                },
                heading1: {
                    fontSize: 80,
                    fontWeight: '400',
                    lineHeight: 1,
                    fontFamily:
                        'League Gothic, Impact, Roboto Condensed, Helvetica Neue, sans-serif',
                    letterSpacing: 3,
                    textTransform: 'uppercase',
                },
                heading2: {
                    fontSize: 66,
                    fontWeight: '400',
                    lineHeight: 1.2,
                    letterSpacing: 3,
                    fontFamily:
                        'League Gothic, Impact, Roboto Condensed, Helvetica Neue, sans-serif',
                    textTransform: 'uppercase',
                },
                heading3: {
                    fontSize: 56,
                    fontWeight: '400',
                    lineHeight: 1,
                    fontFamily:
                        'League Gothic, Impact, Roboto Condensed, Helvetica Neue, sans-serif',
                    textTransform: 'uppercase',
                },
                heading4: {
                    fontSize: 43,
                    fontWeight: '400',
                    lineHeight: 1,
                    fontFamily:
                        'League Gothic, Impact, Roboto Condensed, Helvetica Neue, sans-serif',
                    textTransform: 'uppercase',
                },
                heading5: {
                    fontSize: 26,
                    fontWeight: '400',
                    lineHeight: 1,
                    fontFamily:
                        'League Gothic, Impact, Roboto Condensed, Helvetica Neue, sans-serif',
                    textTransform: 'uppercase',
                },
                button: {
                    fontSize: 16,
                    fontWeight: 300,
                },
            },
            components: {
                MuiTooltip: {
                    styleOverrides: {
                        tooltip: {
                            fontSize: '15px',
                            color: '#fff',
                            backgroundColor: '#000',
                        },
                        arrow: {
                            color: '#000',
                        },
                    },
                },
                MuiButton: {
                    styleOverrides: {
                        root: {
                            borderRadius: 70,
                            minHeight: '46px',
                            textTransform: 'none',
                            // Add padding to all TextField components
                        },
                    },
                },
                MuiSwitch: {
                    // Controls default (unchecked) color for the thumb
                    styleOverrides: {
                        switchBase: {
                            // Controls default (unchecked) color for the thumb
                            color: '#183A2F',
                        },
                    },
                },
                // Add style overrides for other form field components here
            },
        });

        //add responsive font sizes
        theme.typography.heading1 = {
            ...theme.typography.heading1,
            [theme.breakpoints.down('md')]: {
                fontSize: 66,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 54,
                letterSpacing: 1,
            },
        };
        theme.typography.heading2 = {
            ...theme.typography.heading2,
            [theme.breakpoints.down('md')]: {
                fontSize: 50,
                letterSpacing: 2,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 40,
                letterSpacing: 1,
            },
        };
        theme.typography.heading3 = {
            ...theme.typography.heading3,
            [theme.breakpoints.down('md')]: {
                fontSize: 36,
                letterSpacing: 1,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 32,
                letterSpacing: 1,
            },
        };
        theme.typography.heading4 = {
            ...theme.typography.heading4,
            [theme.breakpoints.down('md')]: {
                fontSize: 26,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 24,
            },
        };
        theme.typography.heading5 = {
            ...theme.typography.heading5,
            [theme.breakpoints.down('md')]: {
                fontSize: 26,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 24,
            },
        };
        theme.typography.overline = {
            ...theme.typography.overline,
            [theme.breakpoints.down('md')]: {
                fontSize: 26,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 24,
            },
        };

        theme.typography.body1 = {
            ...theme.typography.body1,
            [theme.breakpoints.down('md')]: {
                fontSize: 18,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 17,
            },
        };

        theme.typography.body2 = {
            ...theme.typography.body2,
            [theme.breakpoints.down('md')]: {
                fontSize: 18,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 16,
            },
        };
        theme.typography.body3 = {
            ...theme.typography.body3,
            [theme.breakpoints.down('md')]: {
                fontSize: 16,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 16,
            },
        };
        return theme;
    }
    if (client === 'SGB') {
        const theme = createTheme({
            palette: {
                mode: 'light',
                primary: {
                    main: '#023A45',
                    contrastText: '#FFF',
                    light: '#008080',
                },
                secondary: {
                    main: '#F5F5F5',
                    contrastText: '#000',
                    dark: '#F5F5F5',
                    light: '#F5F5F5',
                },
                bg: {
                    main: '#F5F5F5',
                    contrastText: '#424242',
                    dark: '#EEEEEE',
                    light: '#000',
                },
                accent: {
                    main: '#FFAE55',
                    contrastText: '#E2E2E2',
                    dark: '#023A45',
                    light: '#697689',
                },
                greys: {
                    main: '#2D2A27',
                    contrastText: '#fff',
                    dark: '#333333',
                    light: '#212121',
                },
                whites: {
                    main: '#FFFFFF',
                    contrastText: '#000',
                    dark: '#F5F5F5',
                    light: '#FFFFFF',
                },
            },
            typography: {
                fontFamily: 'Open Sans, sans-serif',
                body1: {
                    letterSpacing: 0.15,
                    fontWeight: 400,
                    fontSize: 18,
                    lineHeight: 1.3,
                    fontFamily: 'Open Sans, sans-serif',
                },
                body2: {
                    letterSpacing: 0.15,
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1.3,
                    fontFamily: 'Open Sans, sans-serif',
                },
                body3: {
                    letterSpacing: 0.15,
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: 1,
                    fontFamily: 'Open Sans, sans-serif',
                },
                overline: {
                    fontSize: 20,
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    fontFamily: 'Montserrat, sans-serif',
                    letterSpacing: 1,
                    lineHeight: 1,
                    wordWrap: 'break-word',
                },
                heading1: {
                    fontSize: 44,
                    fontWeight: 600,
                    lineHeight: 1,
                    fontFamily: 'Montserrat, sans-serif',
                    letterSpacing: 0,
                },
                heading2: {
                    fontSize: 35,
                    fontWeight: 600,
                    lineHeight: 1.2,
                    letterSpacing: 1,
                    fontFamily: 'Montserrat, sans-serif',
                },
                heading3: {
                    fontSize: 30,
                    fontWeight: 600,
                    lineHeight: 1,
                    letterSpacing: 1,
                    fontFamily: 'Montserrat, sans-serif',
                },
                heading4: {
                    fontSize: 27,
                    fontWeight: 600,
                    lineHeight: 1,
                    letterSpacing: 1,
                    fontFamily: 'Montserrat, sans-serif',
                },
                heading5: {
                    fontSize: 18,
                    fontWeight: 600,
                    lineHeight: 1,
                    letterSpacing: 1,
                    fontFamily: 'Montserrat, sans-serif',
                },
                button: {
                    fontSize: 16,
                    fontWeight: 600,
                    fontFamily: 'Open Sans, sans-serif',
                },
            },
            components: {
                MuiTooltip: {
                    styleOverrides: {
                        tooltip: {
                            fontSize: '15px',
                            color: '#fff',
                            backgroundColor: '#008080',
                        },
                        arrow: {
                            color: '#fff',
                        },
                    },
                },
                MuiButton: {
                    styleOverrides: {
                        root: {
                            minHeight: '46px',
                            textTransform: 'none',
                            borderRadius: 0,
                            // Add padding to all TextField components
                        },
                    },
                },
                MuiSwitch: {
                    // Controls default (unchecked) color for the thumb
                    styleOverrides: {
                        switchBase: {
                            // Controls default (unchecked) color for the thumb
                            color: '#183A2F',
                        },
                    },
                },
                // Add style overrides for other form field components here
            },
        });

        //add responsive font sizes
        theme.typography.heading1 = {
            ...theme.typography.heading1,
            [theme.breakpoints.down('md')]: {
                fontSize: 40,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 37,
                letterSpacing: 1,
            },
        };
        theme.typography.heading2 = {
            ...theme.typography.heading2,
            [theme.breakpoints.down('md')]: {
                fontSize: 32,
                letterSpacing: 2,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 28,
                letterSpacing: 1,
            },
        };
        theme.typography.heading3 = {
            ...theme.typography.heading3,
            [theme.breakpoints.down('md')]: {
                fontSize: 28,
                letterSpacing: 1,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 24,
                letterSpacing: 1,
            },
        };
        theme.typography.heading4 = {
            ...theme.typography.heading4,
            [theme.breakpoints.down('md')]: {
                fontSize: 24,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 20,
            },
        };
        theme.typography.heading5 = {
            ...theme.typography.heading5,
            [theme.breakpoints.down('md')]: {
                fontSize: 18,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 18,
            },
        };
        theme.typography.overline = {
            ...theme.typography.overline,
            [theme.breakpoints.down('md')]: {
                fontSize: 20,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 19,
            },
        };

        theme.typography.body1 = {
            ...theme.typography.body1,
            [theme.breakpoints.down('md')]: {
                fontSize: 18,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 17,
            },
        };

        theme.typography.body2 = {
            ...theme.typography.body2,
            [theme.breakpoints.down('md')]: {
                fontSize: 16,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 16,
            },
        };
        theme.typography.body3 = {
            ...theme.typography.body3,
            [theme.breakpoints.down('md')]: {
                fontSize: 15,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 15,
            },
        };
        return theme;
    }


    if (client === 'auction-fusion') {
        const theme = createTheme({
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 600,
                    md: 1140,
                    lg: 1200,
                    xl: 1536,
                },
            },
            palette: {
                mode: 'light',
                primary: {
                    main: '#262028',
                    contrastText: '#fff',
                    light: '#26334c',
                    dark: '#424b5e',
                },
                secondary: {
                    main: '#F5F5F5',
                    contrastText: '#212121',
                    dark: '#F4F4F4',
                },
                bg: {
                    main: '#F5F5F5',
                    contrastText: '#424242',
                    dark: '#262028',
                    light: '#666666',
                },
                accent: {
                    main: '#ECB430',
                    contrastText: '#FFF',
                    dark: '#FFF',
                    light: '#FFF',
                },
                greys: {
                    main: '#2D2A27',
                    contrastText: '#fff',
                    dark: '#333333',
                    light: '#999999',
                },
                whites: {
                    main: '#FFFFFF',
                    contrastText: '#000',
                    dark: '#F5F5F5',
                    light: '#bbc0be',
                },
            },
            typography: {
                fontFamily: 'sans-serif',
                body1: {                     // in use as main text on all pages
                    letterSpacing: 0.15,
                    fontWeight: 400,
                    fontSize: 27,
                    lineHeight: 1.3,
                },
                body2: {                    // in use as secondary text on all pages
                    letterSpacing: 0.15,
                    fontWeight: 400,
                    fontSize: 18,
                    lineHeight: 1.3,
                },
                body3: {
                    letterSpacing: 0.15,
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: 1.3,
                },
                overline: {
                    fontSize: 17,
                    fontWeight: '400',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    wordWrap: 'break-word',
                    marginBottom: '32px',
                },
                heading1: {
                    fontSize: 55,
                    fontWeight: 600,
                    lineHeight: 1,
                },
                heading2: {
                    fontSize: 32,
                    fontWeight: '600',
                    lineHeight: 1,
                },
                heading3: {
                    fontSize: 28,
                    fontWeight: '400',
                    lineHeight: 1,
                },
                heading4: {
                    fontSize: 22,
                    fontWeight: '400',
                    lineHeight: 1,
                },
                heading5: {
                    fontSize: 18,
                    fontWeight: '400',
                    lineHeight: 1,
                },
                button: {
                    fontSize: 14,
                    fontWeight: 400,
                },
            },
            components: {
                MuiInputBase: {
                    styleOverrides: {
                        input: {
                            fontSize: '16px',
                            borderRadius: 0,
                            marginLeft: 0,
                            paddingLeft: 0, // Increase font size
                        },
                    },
                },
                MuiTooltip: {
                    styleOverrides: {
                        tooltip: {
                            fontSize: '14px',
                            color: '#183A2F',
                            backgroundColor: '#bbc0be',
                        },
                    },
                },
                MuiTextField: {
                    styleOverrides: {
                        root: {
                            paddingBottom: '10px',
                            marginLeft: '0px',
                            // Add padding to all TextField components
                        },
                    },
                },
                MuiButton: {
                    styleOverrides: {
                        root: {
                            borderRadius: 0,
                            minHeight: '46px',
                            // Add padding to all TextField components
                        },
                    },
                },
                MuiSwitch: {
                    // Controls default (unchecked) color for the thumb
                    styleOverrides: {
                        switchBase: {
                            // Controls default (unchecked) color for the thumb
                            color: '#262028',
                        },
                    },
                },
                // Add style overrides for other form field components here
            },
        });

        //add responsive font sizes
        theme.typography.heading1 = {             // in use as heading on all pages
            ...theme.typography.heading1,
            [theme.breakpoints.down('md')]: {
                fontSize: 45,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 28,
            },
        };
        theme.typography.heading2 = {
            ...theme.typography.heading2,
            [theme.breakpoints.down('md')]: {
                fontSize: 28,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 24,
            },
        };
        theme.typography.heading3 = {
            ...theme.typography.heading3,
            [theme.breakpoints.down('md')]: {
                fontSize: 25,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 21,
            },
        };
        theme.typography.heading4 = {
            ...theme.typography.heading4,
            [theme.breakpoints.down('md')]: {
                fontSize: 25,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 21,
            },
        };
        theme.typography.heading5 = {
            ...theme.typography.heading5,
            [theme.breakpoints.down('md')]: {
                fontSize: 22,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 18,
            },
        };
        theme.typography.overline = {
            ...theme.typography.overline,
            [theme.breakpoints.down('sm')]: {
                fontSize: 17,
            },
        };

        theme.typography.body1 = {                // in use as main text on all pages
            ...theme.typography.body1,
            [theme.breakpoints.down('sm')]: {
                fontSize: 18,
            },
        };

        theme.typography.body2 = {                // in use as secondary text on all pages
            ...theme.typography.body2,
            [theme.breakpoints.down('sm')]: {
                fontSize: 16,
            },
        };
        theme.typography.body3 = {
            ...theme.typography.body3,
            [theme.breakpoints.down('sm')]: {
                fontSize: 14,
            },
        };

        return theme;
    }

    // default theme
    const theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#262028',
                contrastText: '#fff',
                light: '#26334c',
            },
            secondary: {
                main: '#F5F5F5',
                contrastText: '#212121',
                dark: '#F4F4F4',
            },
            bg: {
                main: '#F5F5F5',
                contrastText: '#424242',
                dark: '#262028',
                light: '#666666',
            },
            accent: {
                main: '#ECB430',
                contrastText: '#FFF',
                dark: '#FFF',
                light: '#FFF',
            },
            greys: {
                main: '#2D2A27',
                contrastText: '#fff',
                dark: '#333333',
                light: '#999999',
            },
            whites: {
                main: '#FFFFFF',
                contrastText: '#000',
                dark: '#F5F5F5',
                light: '#bbc0be',
            },
        },
        typography: {
            fontFamily: 'sans-serif',
            body1: {
                letterSpacing: 0.15,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.3,
            },
            body2: {
                letterSpacing: 0.15,
                fontWeight: 400,
                fontSize: 15,
                lineHeight: 1.3,
            },
            body3: {
                letterSpacing: 0.15,
                fontWeight: 400,
                fontSize: 14,
                lineHeight: 1.3,
            },
            overline: {
                fontSize: 17,
                fontWeight: '400',
                textTransform: 'uppercase',
                letterSpacing: 1,
                wordWrap: 'break-word',
                marginBottom: '32px',
            },
            heading1: {
                fontSize: 45,
                fontWeight: '400',
                lineHeight: 1,
            },
            heading2: {
                fontSize: 35,
                fontWeight: '400',
                lineHeight: 1,
            },
            heading3: {
                fontSize: 28,
                fontWeight: '400',
                lineHeight: 1,
            },
            heading4: {
                fontSize: 22,
                fontWeight: '400',
                lineHeight: 1,
            },
            heading5: {
                fontSize: 18,
                fontWeight: '400',
                lineHeight: 1,
            },
            button: {
                fontSize: 14,
                fontWeight: 400,
            },
        },
        components: {
            MuiInputBase: {
                styleOverrides: {
                    input: {
                        fontSize: '16px',
                        borderRadius: 0,
                        marginLeft: 0,
                        paddingLeft: 0, // Increase font size
                    },
                },
            },
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        fontSize: '14px',
                        color: '#183A2F',
                        backgroundColor: '#bbc0be',
                    },
                },
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        paddingBottom: '10px',
                        marginLeft: '0px',
                        // Add padding to all TextField components
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 0,
                        minHeight: '46px',
                        // Add padding to all TextField components
                    },
                },
            },
            MuiSwitch: {
                // Controls default (unchecked) color for the thumb
                styleOverrides: {
                    switchBase: {
                        // Controls default (unchecked) color for the thumb
                        color: '#262028',
                    },
                },
            },
            // Add style overrides for other form field components here
        },
    });

    //add responsive font sizes
    theme.typography.heading1 = {
        ...theme.typography.heading1,
        [theme.breakpoints.down('md')]: {
            fontSize: 39,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 28,
        },
    };
    theme.typography.heading2 = {
        ...theme.typography.heading2,
        [theme.breakpoints.down('md')]: {
            fontSize: 28,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 24,
        },
    };
    theme.typography.heading3 = {
        ...theme.typography.heading3,
        [theme.breakpoints.down('md')]: {
            fontSize: 25,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 21,
        },
    };
    theme.typography.heading4 = {
        ...theme.typography.heading4,
        [theme.breakpoints.down('md')]: {
            fontSize: 25,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 21,
        },
    };
    theme.typography.heading5 = {
        ...theme.typography.heading5,
        [theme.breakpoints.down('md')]: {
            fontSize: 22,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 18,
        },
    };
    theme.typography.overline = {
        ...theme.typography.overline,
        [theme.breakpoints.down('sm')]: {
            fontSize: 17,
        },
    };

    theme.typography.body1 = {
        ...theme.typography.body1,
        [theme.breakpoints.down('sm')]: {
            fontSize: 17,
        },
    };

    theme.typography.body2 = {
        ...theme.typography.body2,
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        },
    };
    theme.typography.body3 = {
        ...theme.typography.body3,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    };
    return theme;
};

const theme = getTheme(customer);

export default theme;
