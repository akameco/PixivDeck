import styled from 'styled-components'

export const ChipWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const Input = styled.input`
  font-size: 1.1rem;
  height: 30px;
  width: calc(100% - 2.5rem);
  margin-top: 10px;
  padding-left: 2.5rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 17px;

  &:focus {
    border: 1px solid rgba(82, 158, 204, 0.7);
  }
`
export const Field = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
`
export const Wrap = styled.div`
  max-width: 100%;
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const TagFilter = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`
export const Icon = styled.div`
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
`
