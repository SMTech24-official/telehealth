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
        <div onClick={onClick} className="px-5 cursor-pointer py-2 rounded-full bg-primary/80 transition-all duration-300 text-white hover:bg-primary shadow">{children}</div>
    ) : (
        <button
            type="submit"
            onClick={onClick}
            className="px-5 py-2 rounded-full bg-primary/80 transition-all duration-300 text-white hover:bg-primary shadow cursor-pointer"
        >
            {text}
        </button>
    );
};

export default PrimaryButton;
