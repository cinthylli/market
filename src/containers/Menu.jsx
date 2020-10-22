import React, { useState } from 'react'
import { Input, Menu, Dropdown } from 'semantic-ui-react'
import { optionAddCoins, optionsCategory } from '../constants/menuConstants';
import { addPoints } from '../helpers/addPoints';
import useFetchUser from '../Hooks/useFetchUser';

export const MenuExampleSecondary = (props) => {

    const [inputValue, setInputValue] = useState("");
    const { data: user } = useFetchUser(props.points);
    const { name, points: userPoints } = user;
    props.setPoints(userPoints);

    const handlePoints = async (e, { value }) => {

        let pointsset = await addPoints({ pts: value });
        props.setPoints(pointsset);
    }

    const handleCategory = (e, { value }) => {
        props.setCategory(optionsCategory[value - 1]?.text);
        props.setSearch("");
    }

    const handleInputValue = (e => {
        setInputValue (e.target.value)
    })

    return (
        <Menu inverted color="black">
            <Menu.Item>
                {name} -
                {props.points}
                <img src="" alt="coins" />
            </Menu.Item>
            <Menu.Item>
                <Dropdown
                    clearable
                    floating
                    item
                    selection
                    placeholder='Add Points'
                    value={props.points}
                    options={optionAddCoins}
                    onChange={handlePoints}
                >
                </Dropdown>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item position="right">
                    <Dropdown
                        clearable
                        floating
                        item
                        selection
                        placeholder='Category'
                        value={props.category}
                        options={optionsCategory}
                        onChange={handleCategory}
                    >
                    </Dropdown>
                </Menu.Item>
                {/* <Menu.Item>
                    <Input
                        icon='search'
                        placeholder='Search...'
                        value={inputValue}
                        onChange={handleInputValue}
                        onKeyPress={(e) => {
                            if (inputValue.trim().length > 2) {
                                if (e.key === 'Enter') {
                                    setInputValue(e.target.value);
                                    props.setSearch(e.target.value);
                                    setInputValue("");
                                }
                            }
                        }}
                    />
                </Menu.Item> */}
            </Menu.Menu>
        </Menu>
    )
}
export default MenuExampleSecondary;