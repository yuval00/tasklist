import { useState } from "react";

interface IProps {
    className?: string,
    completed: boolean,
    handleCheck: Function
}

const Checkbox = (props: IProps) => {
    const [isChecked, setIsChecked] = useState(props.completed);

    const updateTaskStatus = () => {
        props.handleCheck(!isChecked)
        setIsChecked(!isChecked)
    }

    return (
        <input checked={isChecked} onChange={updateTaskStatus} id="default-checkbox" type="checkbox" 
        className={`w-4 h-4 text-blue-600 bg-gray-100 my-2 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 ${props.className}`} />
    )
};

export default Checkbox;