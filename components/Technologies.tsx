import { Tooltip } from "react-tippy"
import styled from "styled-components"

const Li = styled.li`
  display: flex;
  padding: 0.5rem;
`

const Span = styled.span`
  height: 1.5rem;
  width: 1.5rem;
`

const TechItem = ({ icon, name }: { icon: any, name: string }) => {
  return (
    <Li>
      <Tooltip title={name} position={"top"} duration={250}>
        <Span>
          {icon}
        </Span>
      </Tooltip>
    </Li>
  )
}

export default TechItem
