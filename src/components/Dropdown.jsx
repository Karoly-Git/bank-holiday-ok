export default function Dropdown({ options, selectedValue, onSelectChange, isLoading, itemName }) {
    return (
        <>
            {isLoading &&
                <select>
                    <option>Loading {itemName}...</option>
                </select>}
            {!isLoading &&
                <select value={selectedValue} onChange={onSelectChange}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.name}
                        </option>
                    ))}
                </select>}
        </>
    );
}
