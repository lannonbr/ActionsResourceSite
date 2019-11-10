import styled from "styled-components"

const SidebarPageContainer = styled.div`
  display: flex;
  height: calc(100% - 50px);
  margin-top: 50px;
  width: 100%;

  > .content {
    width: 100%;
    max-width: 60em;
    padding-left: 320px;
    padding-right: 10px;
    margin: 20px auto;

    @media (max-width: 768px) {
      padding-left: 10px;
      width: 100%;
    }
  }

  p {
    line-height: 1.6;
  }

  .prism-code {
    max-width: calc(100vw - 20px);
  }
`

export default SidebarPageContainer
