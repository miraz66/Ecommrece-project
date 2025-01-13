export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `text-sm uppercase font-semibold leading-6 text-gray-900 bg-button_primary hover:bg-button_primary_hover hover:text-white py-2.5 px-6 duration-200 ease-in-out ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
