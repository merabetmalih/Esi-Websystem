import React from "react" ;
import ReactDOM from 'react-dom' ;
import LoginUser from "../../components/res/gg.png" ;
import editor from "../../components/res/listeditor.svg" ;
import mailcomposer from "../../components/res/composer.svg" ;
import {Mail} from "../mailcomposer/mailcomposer";
import {ListEditor} from '../index' ;


export class Panel extends React.Component {
    constructor(props){
        super(props);
        const name = this.props.emailadr;
        
        this.state = {userName : name.substring(0 , name.indexOf("@" , 0))}

    }

    GoMSG(){
        //here to go to the message composer
        const Mailer =(
            <div className="App2">
                <div>
                    <Mail mailuser={this.props.emailadr}/>
                </div>
        </div>
        )
            ReactDOM.render(Mailer , document.getElementById('app'));
    }

    LogUserOut(){
        //logs out the user
        location.reload(true);
    }

    ListEditor(){
        //go to the list editor
        const Editor =(
            <div className="App2">
                <div>
                    <ListEditor mailuser={this.props.emailadr}/>
                </div>
            </div>
        )
            ReactDOM.render(Editor , document.getElementById('app'));
    }

    render(){
            /*if(this.props.rater == "one"){*/
                return(
                    <div className="base-container">
                        <div className="section-one">
                            <div className="title">List Editor</div>
                            <div className="image">
                                <img src={mailcomposer} alt="logo" />
                            </div>
                            <div className="description">This option will help you add or remove the students list as you wish.</div>
                            <button className="button" onClick={this.ListEditor.bind(this)}>Edit the students list</button>
                        </div>
                        <div className="section-one">
                            <div className="title">Teachers Manager</div>
                            <div className="image">
                            <img src={editor} alt="logo" />
                            </div>
                            <div className="description">This option gives you the ability to manage the teachers list</div>
                            <button className="button" onClick={this.GoMSG.bind(this)}>Add/Remove teacher</button>
                        </div>
                        <div className="user-log">
                            <div className="user-image">
                                <img id="user" src={ LoginUser} alt="logo" />
                            </div>
                            <div className="username">{this.state.userName}</div>
                            <div className="email"> {this.props.emailadr}</div>
                            <button className="button-out" onClick={this.LogUserOut.bind(this)}>Log out</button>
                        </div>
                    </div>
                    )
            /*}else {
                return(
                    <div className="App">
                        <TeacherPanel />
                    </div>
                    )
            }*/
            
        }
        
}