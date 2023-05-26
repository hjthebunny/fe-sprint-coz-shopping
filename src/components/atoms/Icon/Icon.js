import * as Icons from 'react-feather';
import globalToken from '../../../tokens/global.json';
import { styled } from 'styled-components';

const { Gray } = globalToken;

export const iconNames = [
    'Menu',
    'X',
    'Star',
    'Gift',
];

export const Icon = ({ icon, color, size, ...rest }) => {
    const FeatherIcon = styled(Icons[icon])`
    color:${(props) => props.color || Gray[700].value};
    `;
    return <FeatherIcon size={size} color={color} {...rest} />
}