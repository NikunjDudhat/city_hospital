import {Input, FormFeedback} from "reactstrap"
import { TextField } from "@mui/material"
// import styled from "styled-components"

// export const InputBoxStyle = styled(Input)``

export const InputBoxsStyle = styled(TextField)`
width: 100%;
`

export const FormFeedbackBox = styled(FormFeedback)`
    color: red,
    display : ${props => props.error ? "block" : "none"}
`