export default function Dropdown({ options, isOpen = true }) {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button">
                {/*options.find(option => option.value === selectedValue)?.name || label*/}
            </button>
            <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
                {options.map((option, index) => (
                    <li key={index}>
                        <button className="dropdown-item">
                            {option.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
