import styled from "styled-components";
import { Typography } from 'antd'

const { Title, Text } = Typography

export const Header = styled(Title)`  
    margin-bottom: 5px !important;
    text-align: center;
`;

export const Header2 = styled(Title)`  
    text-align: center;
`;


export const Subheader = styled(Text)`  
    margin-bottom: 20px;
    display: block;
    text-align: center;
`;

export const Message = styled(Text)`  
    text-align: center;
    display: block;
`;