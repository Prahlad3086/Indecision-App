import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };
    componentDidMount(){

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(()=> ({ options: options}))
            }   
        } catch (e) {
            //Do nothing!!! 
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount(){
        console.log('component will Unmount!!');
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random()*this.state.options.length)
        const option = this.state.options[randomNum];
        this.setState(()=>({
            selectedOption: option
        }));
    };
    handleDeleteOptions = () => {
        this.setState(()=> ({ options: [] }));
    };
    handleClearSelectedOption = () => {
        this.setState(()=>({ selectedOption: undefined }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=> ({
            options: prevState.options.filter((option)=> option !== optionToRemove )
        }));
    };
    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option)> -1){
            return 'This option already exists!';
        }

        this.setState((prevState)=> ({ options: prevState.options.concat(option) }));
    };
    render(){
        const subTitle = 'Put Your Life in the hands of a computer';

        return (
            <div>
                <Header subTitle = {subTitle} />
                <div className="container">
                    <Action
                    hasOptions={this.state.options.length >0}
                    handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                        handleAddOption={this.handleAddOption}
                        />  
                    </div>
                </div>
                <OptionModal 
                    handleClearSelectedOption={this.handleClearSelectedOption}
                    selectedOption={this.state.selectedOption}
                />
            </div>
        );
    }
}