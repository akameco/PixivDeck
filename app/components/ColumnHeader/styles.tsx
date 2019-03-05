import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  flex-direction: column;
`
export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  z-index: 200;
  text-align: center;
  color: #e1e8ed;
  background: #292f33;
  width: 100%;
  cursor: pointer;
`
export const Item = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.div`
  color: #e1e8ed;
  font-size: 1rem;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`
