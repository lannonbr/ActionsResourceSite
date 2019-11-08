import styled from "styled-components"

const SidebarPageContainer = styled.div`
  display: flex;
  height: calc(100% - 50px);
  margin-top: 50px;

  > div {
    width: 100%;
    max-width: 60em;
    padding-left: 320px;
    padding-right: 10px;
    margin: 20px auto;
  }

  p {
    line-height: 1.6;
  }
`

export default SidebarPageContainer
