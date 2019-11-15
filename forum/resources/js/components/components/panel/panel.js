import React from "react" ;
import ReactDOM from 'react-dom' ;
import LoginUser from "../../components/res/gg.png" ;
import editor from "../../components/res/listeditor.svg" ;
import mailcomposer from "../../components/res/composer.svg" ;
import {Mail} from "../mailcomposer/MailComposer";
import {Login} from "../login/login";
import {ListEditor} from '../index' ;
import { TeacherPanel } from '../index' ;


export class Panel extends React.Component {
    constructor(props){
        super(props);

    }

    GoMSG(){
        //here to go to the message composer
        const Mailer =(
            <div className="App">
                <div>
                    <Mail />
                </div>
        </div>
        )
            ReactDOM.render(Mailer , document.getElementById('app'));
    }

    LogUserOut(){
        //logs out the user
        const loger = (
            <div className="App">
                <div>
                    <Login clickmethode={this.props.clickMeth}/>
                </div>
        </div>
        )
        ReactDOM.render(loger , document.getElementById('app'));
    }

    ListEditor(){
        //go to the list editor
        const Editor =(
            <div className="App2">
                <div>
                    <ListEditor />
                </div>
            </div>
        )
            ReactDOM.render(Editor , document.getElementById('app'));
    }

    render(){
            if(this.props.rater === "one"){
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
                            <div className="title">Email composer</div>
                            <div className="image">
                            <img src={editor} alt="logo" />
                            </div>
                            <div className="description">This the mail composer for you to send administartif stuff</div>
                            <button className="button" onClick={this.GoMSG.bind(this)}>Compose Email</button>
                        </div>
                        <div className="user-log">
                            <div className="user-image">
                                <img id="user" src={ LoginUser} alt="logo" />
                            </div>
                            <div className="username">Usernamedummy</div>
                            <div className="email"> Mail@dummy.dummy</div>
                            <button className="button-out" onClick={this.LogUserOut.bind(this)}>Log out</button>
                        </div>
                    </div>
                    )
            }else if(this.props.rater === "two") {
                return(
                    <div className="App">
                        <TeacherPanel />
                    </div>
                    )
            }
            
        }
        
}