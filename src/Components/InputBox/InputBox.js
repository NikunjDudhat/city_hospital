import React, { Component } from 'react';
import { FormFeedbackBox, InputBoxsStyle, InputBoxStyle } from './inputbox.style';

function InputBox({children, error = false, errorMessages = '', ...rest}) {
    return (
        <>
                <InputBoxsStyle {...rest} >
                    {children}
                </InputBoxsStyle>
                <FormFeedbackBox error={error}>
                    {errorMessages}
                </FormFeedbackBox>
            </>
    );
}

export default InputBox;