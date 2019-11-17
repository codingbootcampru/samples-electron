import * as React from 'react';
import { Button } from 'react-bootstrap';

export default function Root() {
    const [buttonState, setButtonState] = React.useState(0);

    const handleButtonClick = () => {
        setButtonState(buttonState + 1);
    };

    return (
        <div className='container'>
            <h2>Root component</h2>
            <div>
                <img src='./images/icon.png' width={100} />
            </div>
            <div id='test-value'>
                {buttonState ? `clicked ${buttonState} times` : 'not clicked'}
            </div>
            <Button
                id='test-button'
                variant='outline-primary'
                onClick={handleButtonClick}
            >
                Primary
            </Button>
        </div>
    );
}
