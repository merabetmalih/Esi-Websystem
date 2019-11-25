import React from "react" ;
import ReactDOM from 'react-dom';
import LogImg2 from "../../components/res/mail.svg" ;
import {Panel} from '../index';


export class Mail extends React.Component {
    constructor(props){
        super(props);
    }

	sendmail(){
		const mail = document.getElementById("reciver").value;
		const subject = document.getElementById("subject").value;
		const msg = document.getElementById("message").value;

		if(mail != '' , subject != '' , msg != ''){
			//send the message to the database 
			alert(mail);
			alert(subject);
			alert(msg);
		}else{
			alert('something is missing , please verify')
		}
	}

	back(){
		const pan = (
		<div className="App2">
			<div>
		  		<Panel rater="one" />
			</div>
		  </div>);

		ReactDOM.render(pan , document.getElementById('app'));
	}

    render(){

        return(
            <div className="layout-container">
				<button className="back-button" onClick={this.back.bind(this)}>&#8592;</button>
				<div>
					<img className="message-art" src={LogImg2} alt="message image" />
				</div>
				<div className="noback-container">
					<div className="title">
						Send a mail
					</div>
					<div className="form-group">
                    	<input className="input-form" id="reciver" type="email" name="email" placeholder="receiver" />
                	</div>
					<div className="form-group">
                    	<input className="input-form" id="subject" type="text" name="subject" placeholder="subject" />
                	</div>
					<div className="form-group">
						<textarea className="input-text" id="message" name="message" placeholder="message"/>
					</div>
                	<button className="button-log" type="button" onClick={this.sendmail.bind(this)}>Send</button>
            	</div>
				
			</div>
        )
    }
}