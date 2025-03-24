import React from 'react';

const GradientBg = ({ extraClass }: { extraClass: string }) => {
    return (
        <div
            className={`lg:w-[900px] lg:h-[900px] bg-gradient-to-br from-secondary/50 to-transparent 
                        rounded-full ${extraClass} blur-3xl opacity-40 mix-blend-soft-light`}
        >
        </div>
    );
};

export default GradientBg;
