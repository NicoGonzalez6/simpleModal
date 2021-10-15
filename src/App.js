import React, { useState } from 'react';
import './index.css';
import styled from 'styled-components';

const App = () => {
    const [show, setShow] = useState(false);

    return (
        <Wrapper>
            <div className="mainContainer">
                <button
                    onClick={() => {
                        setShow(!show);
                    }}
                    className="modalOpen"
                >
                    Modal
                </button>

                <div
                    className={show ? 'modalContainer show' : 'modalContainer'}
                >
                    <div className="modalContent">
                        <h1>This is a Modal</h1>
                        <button
                            onClick={() => {
                                setShow(!show);
                            }}
                            className="modalClose"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default App;

const Wrapper = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .modalOpen {
        cursor: pointer;
        font-size: 25px;
        border: 1px solid #000;
        background: #d0bfe5;
        border-radius: 10px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.178);
        padding: 10px 30px;
        transition: 0.3s ease;
    }

    .modalOpen:hover {
        background: #b7a8c9;
    }

    .modalContainer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.774);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        visibility: hidden;
    }

    .modalClose {
        cursor: pointer;
        font-size: 25px;
        border: 1px solid #000;
        background: #d0bfe5;
        border-radius: 10px;
        padding: 5px 20px;
    }

    .modalClose:hover {
        background: #b7a8c9;
    }

    .show {
        visibility: visible;
    }

    .modalContent {
        width: 600px;
        height: 300px;
        background: #fff;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 30;
        gap: 20px;
    }
`;
