import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`;
        }
        return `rgb(var(${variableName}))`;
    };
}

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // Enable dark mode support
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                openSans: ['"Open Sans"', "sans-serif"], // Add Open Sans as the default sans font
            },
            backgroundColor: {
                primary: withOpacity("--background-primary-color"),
                secondary: withOpacity("--background-secondary-color"),
                dark: withOpacity("--background-dark-color"),
                // extra: withOpacity('--background-extra-muted-color'),
                button_primary: withOpacity("--button-primary-color"),
                button_secondary: withOpacity("--button-secondary-color"),
                button_primary_hover: withOpacity(
                    "--button-primary-hover-color"
                ),
                button_secondary_hover: withOpacity(
                    "--button-secondary-hover-color"
                ),
            },
            textColor: {
                primary: withOpacity("--text-primary-color"),
                secondary: withOpacity("--text-secondary-color"),
                primary_dark: withOpacity("--text-primary-dark-color"),
                secondary_dark: withOpacity("--text-secondary-dark-color"),
                //   current: withOpacity('--text-current-color'),
                //   muted: withOpacity('--text-muted-color'),
            },
            maxWidth: {
                "8xl": "1400px",
            },
        },
    },

    plugins: [forms],
};
