import React from 'react';
import './SortingVisualizer.css';
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms.js';

export default class SortingVisualizer extends React.Component {
    

    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }
    resize = () => {
        this.forceUpdate()
        this.resetArray();
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize)
        this.resetArray();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    resetArray() {
        const array = [];
        for(let i = 0; i < Math.floor(document.documentElement.clientWidth*0.75)/10; i++){
            array.push(randomIntFromInterval(5, Math.floor(window.innerHeight*0.75)));
        }
        
        this.setState({array});
        
        for(let i = 0; i < this.state.array.length; i++){
            const arrBars = document.getElementsByClassName('array-bar');
            arrBars[i].style.backgroundColor = 'rgba(66, 134, 244, 0.8)';
        }
    }

    mergeSort() {
        this.disableButtons();
        var slider = document.getElementById('slider');
        const animations = sortingAlgorithms.mergeSort(this.state.array);
        for(let i = 0; i < animations.length; i++){
            const arrBars = document.getElementsByClassName('array-bar');
            const changeColor = i % 3 !== 2;
            if(changeColor){
                const [idxOne, idxTwo] = animations[i];
                const idxOneStyle = arrBars[idxOne].style;
                const idxTwoStyle = arrBars[idxTwo].style;
                const color = i % 3 === 0 ? 'orange' : 'rgba(66, 134, 244, 0.8)';
                setTimeout(() => {
                    idxOneStyle.backgroundColor = color;
                    idxTwoStyle.backgroundColor = color;
                }, i * (slider.value*-1 + 21));
                if(i === animations.length-1){
                    this.enableButtons();
                    for(let i = 0; i < this.state.array.length; i++){
                        const arrBars = document.getElementsByClassName('array-bar');
                        setTimeout(() => {
                            arrBars[i].style.backgroundColor = 'lightgreen';
                     }, i * (slider.value*-1 + 21));
                    }
                }
            }
            else{
                setTimeout(() => {
                    const [idxOne, heightChange] = animations[i];
                    const idxOneStyle = arrBars[idxOne].style;
                    idxOneStyle.height = `${heightChange}px`;
                    if(i === animations.length-1){
                        this.enableButtons();
                        for(let i = 0; i < this.state.array.length; i++){
                            const arrBars = document.getElementsByClassName('array-bar');
                            setTimeout(() => {
                                arrBars[i].style.backgroundColor = 'lightgreen';
                         }, i * (slider.value*-1 + 21));
                        }
                    }
                }, i * (slider.value*-1 + 21));
            }
        }
    }

    quickSort() {
        this.disableButtons();
        var slider = document.getElementById('slider');
        const animations = sortingAlgorithms.quickSort(this.state.array);
        for(let i = 0; i < animations.length; i++){
            const arrBars = document.getElementsByClassName('array-bar');
            const changeColor = i % 3 !== 2;
            if(changeColor){
                const [idxOne, idxTwo] = animations[i];
                const idxOneStyle = arrBars[idxOne].style;
                const idxTwoStyle = arrBars[idxTwo].style;
                const color = i % 3 === 0 ? 'orange' : 'rgba(66, 134, 244, 0.8)';
                setTimeout(() => {
                    idxOneStyle.backgroundColor = color;
                    idxTwoStyle.backgroundColor = color;
                }, i * (slider.value*-1 + 21));
                if( i === animations.length-1){
                    this.enableButtons();
                    for(let i = 0; i < this.state.array.length; i++){
                        const arrBars = document.getElementsByClassName('array-bar');
                        setTimeout(() => {
                            arrBars[i].style.backgroundColor = 'lightgreen';
                     }, i * (slider.value*-1 + 21));
                    }
                }
            }
            else{
                setTimeout(() => {
                    const [heightOne, heightTwo] = animations[i];
                    const [idxOne, idxTwo] = animations[i-1];
                    const idxOneStyle = arrBars[idxOne].style;
                    const idxTwoStyle = arrBars[idxTwo].style;
                    idxOneStyle.height = `${heightTwo}px`;
                    idxTwoStyle.height = `${heightOne}px`;
                    if(i === animations.length-1){
                        this.enableButtons();
                        for(let i = 0; i < this.state.array.length; i++){
                            const arrBars = document.getElementsByClassName('array-bar');
                            setTimeout(() => {
                                arrBars[i].style.backgroundColor = 'lightgreen';
                         }, i * (slider.value*-1 + 21));
                        }
                    }
                }, i * (slider.value*-1 + 21));
            }
        }
    }

    heapSort() {
        this.disableButtons();
        var slider = document.getElementById('slider');
        const animations = sortingAlgorithms.heapSort(this.state.array);
        for(let i = 0; i < animations.length; i++){
            const arrBars = document.getElementsByClassName('array-bar');
            const changeColor = i % 3 !== 2;
            if(changeColor){
                const [idxOne, idxTwo] = animations[i];
                const idxOneStyle = arrBars[idxOne].style;
                const idxTwoStyle = arrBars[idxTwo].style;
                const color = i % 3 === 0 ? 'orange' : 'rgba(66, 134, 244, 0.8)';
                setTimeout(() => {
                    idxOneStyle.backgroundColor = color;
                    idxTwoStyle.backgroundColor = color;
                }, i * (slider.value*-1 + 21));
                if( i === animations.length-1){
                    this.enableButtons();
                    for(let i = 0; i < this.state.array.length; i++){
                        const arrBars = document.getElementsByClassName('array-bar');
                        setTimeout(() => {
                            arrBars[i].style.backgroundColor = 'lightgreen';
                     }, i * (slider.value*-1 + 21));
                    }
                }
            }
            else{
                setTimeout(() => {
                    const [heightOne, heightTwo] = animations[i];
                    const [idxOne, idxTwo] = animations[i-1];
                    const idxOneStyle = arrBars[idxOne].style;
                    const idxTwoStyle = arrBars[idxTwo].style;
                    idxOneStyle.height = `${heightTwo}px`;
                    idxTwoStyle.height = `${heightOne}px`;
                    if(i === animations.length-1){
                        this.enableButtons();
                        for(let i = 0; i < this.state.array.length; i++){
                            const arrBars = document.getElementsByClassName('array-bar');
                            setTimeout(() => {
                                arrBars[i].style.backgroundColor = 'lightgreen';
                         }, i * (slider.value*-1 + 21));
                        }
                    }
                }, i * (slider.value*-1 + 21));
            }
        }
    }

    bubbleSort() {
        this.disableButtons();
        var slider = document.getElementById('slider');
        const animations = sortingAlgorithms.bubbleSort(this.state.array);
        for(let i = 0; i < animations.length; i++){
            const arrBars = document.getElementsByClassName('array-bar');
            const changeColor = i % 3 !== 2;
            if(changeColor){
                const [idxOne, idxTwo] = animations[i];
                const idxOneStyle = arrBars[idxOne].style;
                const idxTwoStyle = arrBars[idxTwo].style;
                const color = i % 3 === 0 ? 'orange' : 'rgba(66, 134, 244, 0.8)';
                setTimeout(() => {
                    idxOneStyle.backgroundColor = color;
                    idxTwoStyle.backgroundColor = color;
                }, i * (slider.value*-1 + 21));
                if(i === animations.length-1){
                    this.enableButtons();
                    for(let i = 0; i < this.state.array.length; i++){
                        const arrBars = document.getElementsByClassName('array-bar');
                        setTimeout(() => {
                            arrBars[i].style.backgroundColor = 'lightgreen';
                     }, i * (slider.value*-1 + 21));
                    }
                }
            }
            else{
                setTimeout(() => {
                    const [heightOne, heightTwo] = animations[i];
                    if(heightOne !== -1 && heightTwo !== -1){
                        const [idxOne, idxTwo] = animations[i-1];
                        const idxOneStyle = arrBars[idxOne].style;
                        const idxTwoStyle = arrBars[idxTwo].style;
                        idxOneStyle.height = `${heightTwo}px`;
                        idxTwoStyle.height = `${heightOne}px`;
                    }
                    if(i === animations.length-1){
                        this.enableButtons();
                        for(let i = 0; i < this.state.array.length; i++){
                            const arrBars = document.getElementsByClassName('array-bar');
                            setTimeout(() => {
                                arrBars[i].style.backgroundColor = 'lightgreen';
                         }, i * (slider.value*-1 + 21));
                        }
                    }
                }, i * (slider.value*-1 + 21));
            }
        }
    }

    insertionSort() {
        this.disableButtons();
        var slider = document.getElementById('slider');
        const animations = sortingAlgorithms.insertionSort(this.state.array);
        for(let i = 0; i < animations.length; i++){
            const arrBars = document.getElementsByClassName('array-bar');
            const changeColor = i % 3 !== 2;
            if(changeColor){
                const [idxOne, idxTwo] = animations[i];
                const idxOneStyle = arrBars[idxOne].style;
                const idxTwoStyle = arrBars[idxTwo].style;
                const color = i % 3 === 0 ? 'orange' : 'rgba(66, 134, 244, 0.8)';
                setTimeout(() => {
                    idxOneStyle.backgroundColor = color;
                    idxTwoStyle.backgroundColor = color;
                }, i * (slider.value*-1 + 21));
                if(i === animations.length-1){
                    this.enableButtons();
                    for(let i = 0; i < this.state.array.length; i++){
                        const arrBars = document.getElementsByClassName('array-bar');
                        setTimeout(() => {
                            arrBars[i].style.backgroundColor = 'lightgreen';
                     }, i * (slider.value*-1 + 21));
                    }
                }
            }
            else{
                setTimeout(() => {
                    const heightOne = animations[i];
                    const [idxOne, idxTwo] = animations[i-1];
                    const idxOneStyle = arrBars[idxOne].style;
                    idxOneStyle.height = `${heightOne}px`;
                    if(i === animations.length-1){
                        this.enableButtons();
                        for(let i = 0; i < this.state.array.length; i++){
                            const arrBars = document.getElementsByClassName('array-bar');
                            setTimeout(() => {
                                arrBars[i].style.backgroundColor = 'lightgreen';
                         }, i * (slider.value*-1 + 21));
                        }
                    }
                }, i * (slider.value*-1 + 21));
            }
        }
    }

    selectionSort() {
        this.disableButtons();
        var slider = document.getElementById('slider');
        const animations = sortingAlgorithms.selectionSort(this.state.array);
        for(let i = 0; i < animations.length; i++){
            const arrBars = document.getElementsByClassName('array-bar');
            const changeColor = i % 3 !== 2;
            if(changeColor){
                const [idxOne, idxTwo] = animations[i];
                const idxOneStyle = arrBars[idxOne].style;
                const idxTwoStyle = arrBars[idxTwo].style;
                const color = i % 3 === 0 ? 'orange' : 'rgba(66, 134, 244, 0.8)';
                setTimeout(() => {
                    idxOneStyle.backgroundColor = color;
                    idxTwoStyle.backgroundColor = color;
                }, i * (slider.value*-1 + 21));
                if(i === animations.length-1){
                    this.enableButtons();
                    for(let i = 0; i < this.state.array.length; i++){
                        const arrBars = document.getElementsByClassName('array-bar');
                        setTimeout(() => {
                            arrBars[i].style.backgroundColor = 'lightgreen';
                     }, i * (slider.value*-1 + 21));
                    }
                }
            }
            else{
                setTimeout(() => {
                    const [heightOne, heightTwo] = animations[i];
                    if(heightOne !== -1 && heightTwo !== -1){
                        const [idxOne, idxTwo] = animations[i-1];
                        const idxOneStyle = arrBars[idxOne].style;
                        const idxTwoStyle = arrBars[idxTwo].style;
                        idxOneStyle.height = `${heightTwo}px`;
                        idxTwoStyle.height = `${heightOne}px`;
                    }
                    if(i === animations.length-1){
                        this.enableButtons();
                        for(let i = 0; i < this.state.array.length; i++){
                            const arrBars = document.getElementsByClassName('array-bar');
                            setTimeout(() => {
                                arrBars[i].style.backgroundColor = 'lightgreen';
                         }, i * (slider.value*-1 + 21));
                        }
                    }
                }, i * (slider.value*-1 + 21));
            }
        }
    }

    disableButtons() {
        var genBtn = document.getElementById('gen');
        var mergeBtn = document.getElementById('merge');
        var quickBtn = document.getElementById('quick');
        var heapBtn = document.getElementById('heap');
        var bubbleBtn = document.getElementById('bubble');
        var insertBtn = document.getElementById('insertion');
        var selectBtn = document.getElementById('selection');
        var slider = document.getElementById('slider');
        var label = document.getElementById('label');
        label.style.color = '#666666';
        label.style.backgroundColor = '#cccccc';
        label.style.border = 'border: 1px solid #999999';
        genBtn.disabled = true;
        mergeBtn.disabled = true;
        quickBtn.disabled = true;
        heapBtn.disabled = true;
        bubbleBtn.disabled = true;
        insertBtn.disabled = true;
        selectBtn.disabled = true;
        slider.disabled = true;
    }

    enableButtons() {
        var genBtn = document.getElementById('gen');
        var mergeBtn = document.getElementById('merge');
        var quickBtn = document.getElementById('quick');
        var heapBtn = document.getElementById('heap');
        var bubbleBtn = document.getElementById('bubble');
        var insertBtn = document.getElementById('insertion');
        var selectBtn = document.getElementById('selection');
        var slider = document.getElementById('slider');
        var label = document.getElementById('label');
        label.style.color = 'black';
        label.style.backgroundColor = 'rgb(230, 230, 230)';
        label.style.border = 'none';
        genBtn.disabled = false;
        mergeBtn.disabled = false;
        quickBtn.disabled = false;
        heapBtn.disabled = false;
        bubbleBtn.disabled = false;
        insertBtn.disabled = false;
        selectBtn.disabled = false;
        slider.disabled = false;
    }

    testAlgo() {
        for(let i = 0; i < 100; i++){
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            for(let i = 0; i < length; i++){
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const sortedArray = array.slice().sort((a, b) => a - b);
            const algoArray = sortingAlgorithms.selectionSort(array.slice());
            console.log(arraysAreEqual(sortedArray, algoArray));
        }
    }

    render() {
        const {array} = this.state;
        //<button id = "test" onClick={() => this.testAlgo()}>Test Algo</button>
        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div 
                    className = "array-bar" 
                    key={idx}
                    style={{height: `${value}px`}}
                    ></div>
                ))}
                <div className="buttons">
                    <button id = "gen" onClick={() => this.resetArray()}>Generate New Array</button>
                    <button id = "merge" onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button id = "quick" onClick={() => this.quickSort()}>Quick Sort</button>
                    <button id = "heap" onClick={() => this.heapSort()}>Heap Sort</button>
                    <button id = "bubble" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button id = "insertion" onClick={() => this.insertionSort()}>Insertion Sort</button>
                    <button id = "selection" onClick={() => this.selectionSort()}>Selection Sort</button>
                </div>
                <div className="slider-container">
                    <input 
                    type = "range" 
                    id = "slider" 
                    min = "1" 
                    max = "20" 
                    defaultValue = "20"
                    className = "slider"
                    name = "sliderName"
                    />
                </div>
                <label id = "label" htmlFor = "sliderName">Change Speed</label>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min );
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if(arrayOne.length !== arrayTwo.length) return false;
    for(let i = 0; i < arrayOne.length; i++)    {
       if( arrayOne[i] !== arrayTwo[i] ) return false; }
    return true;
}