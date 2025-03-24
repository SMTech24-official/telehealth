/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const PrimaryButton = ({
    text,
    onClick,
    children,
}: {
    text?: string;
    onClick: any;
    children?: React.ReactNode;
}) => {
    return children ? (
        <div onClick={onClick} className="px-5 cursor-pointer py-2 rounded-full bg-secondary/80 transition-all duration-300 text-white hover:bg-secondary shadow">{children}</div>
    ) : (
        <button
            type="submit"
            onClick={onClick}
            className="xl:px-6 px-4 py-2 xl:py-4 rounded-full bg-secondary/80 transition-all duration-300 text-white hover:bg-secondary shadow cursor-pointer"
        >
            {text}
        </button>
    );
};

export default PrimaryButton;
