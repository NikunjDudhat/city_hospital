import React, { Component } from 'react';
import { FormFeedbackBox, InputBoxStyle } from './inputbox.style';

function InputBox({children, error = false, errorMessages = '', ...rest}) {
    return (
        <>
                <InputBoxStyle {...rest} >
                    {children}
                </InputBoxStyle>
                <FormFeedbackBox error={error}>
                    {errorMessages}
                </FormFeedbackBox>
            </>
    );
}

export default InputBox;