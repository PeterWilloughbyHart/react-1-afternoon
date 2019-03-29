import React, {Component} from 'react'
import FilterObject from '../Topics/FilterObject'
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'


export default class TopicBrowser extends Component {
    render() {
        return (
            <div>
            <FilterObject />    
            <FilterString />    
            <EvenAndOdd />    
            <Sum />    
            <Palindrome />    
            </div>
            
        )
    }
}