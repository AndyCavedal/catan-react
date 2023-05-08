import React, { useState } from 'react';
import '@styles/PointTracker.scss';
import trophy from '@icons/yellow-trofee.png';

const PointTracker = () => {

    const [totalMatchs, setTotalMatchs] = useState(0);
    const [totalPoints, setTotalPoints] = useState(0);

    const handlePointsButtonclick = (pointsToAdd) => {
        setTotalMatchs(totalMatchs + 1);
        setTotalPoints(totalPoints + pointsToAdd);
    };

    const handleResetButtonClick = () => {
        setTotalMatchs(0);
        setTotalPoints(0);
    };

    return (
        <div>
            <button className="point-button" id="reset"
                onClick={() => handleResetButtonClick()}>Reset</button>
            <div id="block 1">
                <div className="name-container" id="name-container1">
                    <h1 className="player">Player 1</h1>
                </div>
                <div className="points-ellipse" id="points1">
                    <p id="pointsP">{totalPoints}</p>
                </div>
                <div className="vertical-line" id="divider1" />
                <div className="games-ellipse" id="games1">
                    <p id="matchsP">{totalMatchs}</p>
                    <img src={trophy} className="trophy" alt="trophy" />
                </div>
                <div className="score-container" id="score-container1" />
                <div className="line" id="line1" />
                <div className="line" id="line2" />
                <div className="line" id="line3" />
                <div className="line" id="line4" />
                <p className="point-button-number" id="number-3">3</p>
                <button className="point-button button-effect"
                    onClick={() => handlePointsButtonclick(3)}>
                    <div className="line-effect" id="pointButton3">
                        <div className="plus-vertical" />
                        <div className="plus-horizontal" />
                    </div>
                </button>
                <p className="point-button-number" id="number-2">2</p>
                <button className="point-button button-effect" id="point-button-2"
                    onClick={() => handlePointsButtonclick(2)}>
                    <div className="line-effect" id="pointButton2">
                        <div className="plus-vertical" />
                        <div className="plus-horizontal" />
                    </div>
                </button>
                <p className="point-button-number" id="number-1">1</p>
                <button className="point-button button-effect" id="point-button-1"
                    onClick={() => handlePointsButtonclick(1)}>
                    <div className="line-effect" id="pointButton1">
                        <div className="plus-vertical" />
                        <div className="plus-horizontal" />
                    </div>
                </button>
                <p className="point-button-number" id="number-0">0</p>
                <button className="point-button button-effect" id="point-button-0"
                    onClick={() => handlePointsButtonclick(0)}>
                    <div className="line-effect" id="pointButton0">
                        <div className="plus-vertical" />
                        <div className="plus-horizontal" />
                    </div>
                </button>
            </div>
        </div>

    )
}

export default PointTracker;