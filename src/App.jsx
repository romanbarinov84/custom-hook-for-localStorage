import './App.css';
import { useLocalStorage } from './components/hooks/useLocalStorage';

const NameInput = () => {
    const [name, handleSetName, handleRemoveName] = useLocalStorage(
        "name",
        ''
    );

    return (
        <div className="name-container">
            <h1 className="name-heading">
                Your name is: <span className="name-span">{name}</span>
            </h1>
            <input
                type="text"
                value={name}
                onChange={(e) => {
                    const value = e.target.value;
                    const formatted =
                        value.charAt(0).toLocaleUpperCase() + value.slice(1);
                    handleSetName(formatted);
                }}
                placeholder="Enter your name"
                className="name-input"
            />
            <button className="name-button" onClick={handleRemoveName}>
                Clear
            </button>
        </div>
    );
};

export default NameInput;
