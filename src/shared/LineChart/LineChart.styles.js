import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;

    span {
        font-size: 12px;
        color: #004D61;
        margin-bottom: 4px;
    }
`

export const ProgressBar = styled.div`
    width: ${props => props.percentage ? props.percentage : 0}%;
    height: 14px;
    border-radius: 3px;
    background-color: ${props => props.color ? props.color : '#004D61'};
    transition: .5s ease;
`