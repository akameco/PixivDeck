import styled from 'styled-components'

export const Wrap = styled.div`
  position: relative;
  height: auto;
`
export const Field = styled.div`
  position: relative;
  max-width: 400px;
  margin-bottom: 5px;
`
export const Input = styled.input`
  font-size: 1.1rem;
  height: 40px;
  width: 100%;
  border: 0;
  margin-top: 10px;
  border-radius: 3px;
  padding-left: 1rem;
  box-sizing: border-box;
`
export const Popup = styled.div`
  height: calc(100% - 50px);
  padding: 1px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  margin: 0;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
`
