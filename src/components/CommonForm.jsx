import React from 'react'
import CommonInput from './CommonInput';

const CommonForm = ({ formControls = [], formData, setFormData, buttonText, handleSubmit }) => {

    const formTypes = {
        INPUT: 'input',
        SELECT: "select",
        TEXTAREA: "textarea"
    }

    function renderFormElement(currentElement) {
        let content = null;

        switch (currentElement?.componentType) {
            case formTypes.INPUT:
                content = <CommonInput
                    key={currentElement?.name}
                    data={currentElement}
                    value={formData[currentElement.name]}
                    onChange={((event) => setFormData({
                        ...formData,
                        [event.target.name]: event.target.value
                    }))}

                />
                break;
            default:
                content = <CommonInput
                    key={currentElement?.name}
                    data={currentElement}
                    value={formData[currentElement.name]}
                    onChange={((event) => setFormData({
                        ...formData,
                        [event.target.name]: event.target.value
                    }))}

                />
                break;
        }
        return content;
    }
    return (
        <form onSubmit={handleSubmit}>
            {
                formControls?.length ?
                    formControls.map(formElement => renderFormElement(formElement))
                    : null
            }

            <div>
                <button>{buttonText || Submit}</button>
            </div>

        </form>
    )
}

export default CommonForm