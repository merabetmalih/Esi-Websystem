import React from "react" ;
import LogImg2 from "../../logo.svg" ;


export class Mail extends React.Component {
    constructor(props){
        super(props);
    }


    render(){

        return(
            <div className="layout-container">
				<div>
					<img className="message-art" src={LogImg2} alt="message image" />
				</div>
				<div className="noback-container">
					<div className="title">
						Send a mail
					</div>
					<div className="form-group">
                    	<input className="input-form" type="email" name="email" placeholder="receiver" />
                	</div>
					<div className="form-group">
                    	<input className="input-form" type="text" name="subject" placeholder="subject" />
                	</div>
					<div className="form-group">
						<textarea className="input-text" name="message" placeholder="message"/>
					</div>
                	<button className="button-log" type="button" >Send</button>
            	</div>
				
			</div>
        )
    }
}