import React from 'react'
import Password from './Password'
import PasswordInfo from './PasswordInfo'
import "./css/PasswordChecker.css"

export default class PasswordChecker extends React.Component {

    constructor(){
        super()
        this.checkPassword = this.checkPassword.bind(this)
        this.state = {
            score: 0,
            pass: new Password()
        }
    }

    checkPassword(event){
        let pass = new Password(event.target.value)
        this.setState((prevState, props)=>{
            return {
                pass: pass,
                score: pass.getScore()
            }
        })
    }

    getStyle(){
        if(this.state.score === 5){
            return {backgroundColor: "lightgreen", color:"green"}
        }else if(this.state.score < 1){
            return {backgroundColor: "whitesmoke"}
        }else if(this.state.score < 3){
            return {backgroundColor: "mistyrose", color:"crimson"}
        }else{
            return {backgroundColor: "sandybrown", color:"chocolate"}
        }
    }

        
    render(){

        return (
            <div>
                <section className="input-area">
                    <h2>Check out your password...</h2>
                    <input type="password" onChange={this.checkPassword} placeholder="enter your password here"/>
                </section>
                <main style={this.getStyle()}>
                    <PasswordInfo pass={this.state.pass} />
                </main>
                <footer>
                    
                </footer>
            </div>
        )
    }
}