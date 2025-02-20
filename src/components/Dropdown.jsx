export default function Dropdown({ options, selectedValue, onSelectChange }) {
    return (
        <select value={selectedValue} onChange={onSelectChange}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
}
