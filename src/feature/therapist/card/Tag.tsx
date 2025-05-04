import { LuX } from "react-icons/lu";

interface TagProps {
    name: string;
    onRemove: () => void;
}

export const Tag = ({ name, onRemove }: TagProps) => {
    return (
        <span className="border border-secondary px-3 py-1 rounded-lg flex items-center w-fit gap-1 hover:bg-gray-50 transition-colors">
            {name}
            {onRemove && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove();
                    }}
                    className="text-secondary hover:text-primary focus:outline-none"
                >
                    <LuX />
                </button>
            )}
        </span>
    );
};