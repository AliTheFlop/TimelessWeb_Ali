'use client';
import PropTypes from 'prop-types';

export default function FormLabel({ htmlFor, label, children, hint }) {
    return (
        <label htmlFor={htmlFor} className="block mb-4">
            <span className="text-gray-700">{label}</span>
            {children}
            {hint && (
                <div className="w-full text-center">
                    <p className="text-xs text-gray-500 hover:text-purple-600 mt-1 underline">{hint}</p>
                </div>
            )}
        </label>
    );
}

FormLabel.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    hint: PropTypes.string,
};
