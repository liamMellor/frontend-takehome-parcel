import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { MdFavorite } from "react-icons/md";
import { FaGem } from "react-icons/fa";


const TabsStyled = styled.div`
    display: flex;
    flex-flow: row nowrap;
`;

const Tab = styled.div`
    flex: 0 0 25%;
    padding: 8px 0;
    border: 2px solid ${props => props.theme.primary};
    border-bottom : ${props => props.active ? `none` : `2px solid ${props => props.theme.primary}`};
    text-align: center; 
    cursor: pointer;
    svg {
        font-size: 24px
    }
`;

const LeftTab = styled(Tab)`
    border-radius: 24px ${props => props.active ? `24px` : `16px`} 0 0;
    border-right: ${props => props.active ? `2px solid ${props.theme.primary}` : `none`};  
`;

const RightTab = styled(Tab)`
    border-radius: ${props => props.active ? `24px` : `16px`} 24px 0 0;
    border-left: ${props => props.active ? `2px solid ${props.theme.primary}` : `none`};
    
`;

class Tabs extends Component {

    constructor(props) {
        super(props);
        this.onLeftTabClick = this.onLeftTabClick.bind(this);
        this.onRightTabClick = this.onRightTabClick.bind(this);
    }

    onLeftTabClick() {
        this.props.onTabClick(0);
    }

    onRightTabClick() {
        this.props.onTabClick(1);
    }

    render() {

        const { activeTab } = this.props;

        return (
            <TabsStyled>
                <LeftTab
                    active={activeTab === 0}
                    onClick={this.onLeftTabClick}
                >
                    <FaGem />
                </LeftTab>
                <RightTab
                    active={activeTab === 1}
                    onClick={this.onRightTabClick}
                >
                    <MdFavorite />
                </RightTab>
            </TabsStyled>
        );

    }

}

Tabs.propTypes = {
    activeTab: PropTypes.number,
    onTabClick: PropTypes.func,
};

export default Tabs;
