import React from 'react';
import {FiArrowLeft} from 'react-icons/fi'
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';
import { GoContainer } from 'react-icons/go';


export default function NewBook() {
    return(
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logo} alt="Erudio"/>
                    <h1> Add New Book</h1>
                    <p>Enter the book information and click on 'Add'</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#251fc5"/>
                        Home
                    </Link>
                    
                </section>
                <form>
                    <input placeholder="Tittle"/>
                    <input placeholder ="Author"/> 
                    <input type ="date"/> 
                    <input placeholder ="Price"/> 

                    <button className="button" type="submit">Add</button>
                </form>
            </div>
                                       



        </div>


    );


}