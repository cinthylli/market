import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonExampleAnimated = ({ amount, frontMessage, backMessage }) => (
    <div>
        <Button animated='fade'>
            <Button.Content visible>{frontMessage}{amount}</Button.Content>
            <Button.Content hidden>{backMessage}</Button.Content>
        </Button>
    </div>
)

export default ButtonExampleAnimated