import styled from 'styled-components'

export const HomeContainer = styled.div`
    position: relative;
    width: 1200px;
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
`

export const Title = styled.h1`
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 30px;
    text-align: center;
`

export const DropzoneText = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 24px;
`
