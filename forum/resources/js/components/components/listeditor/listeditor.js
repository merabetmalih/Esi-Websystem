import React from "react" ;
import LogImg from "../../logo.svg" ;

const list2 = ['haroune' , 'kechaoui' , '9/9/1999' , '5eme'];
const list22 = ['haroune' , 'kechaoui' , '9/9/1999' , '5eme'];
const list = [list2 , list2 , list2 , list2 , list2 , list2 , list22 , list22 , list22 , list22 , list22] ;
export class ListEditor extends React.Component {
    constructor(props){
        super(props);
	}
	
	AddMethod(){
		alert('shiiit it added');
	}

	RemoveMethod(){
		alert('shiiit it removed');
	}



    render(){

        return(
				<div className="Two-container">
					<div className="list-items">
					<div className="title">
							Student List
						</div>
						<ol>
							{list.map(item => {
								return(
								<li className="list-item" key={item}>
									<div>
									<ul className="list-mini-item">
											{item.map(miniitem =>{
												return(
													<li className="list-mini-item" key={miniitem}>
														{miniitem}
													</li>
												)
											})}
										</ul>
										<button className="button-spice1" type="button" onClick={this.RemoveMethod.bind(this)}>&minus;</button>
									</div>
									<hr/>
								</li>)
							})}
						</ol>
					</div>
					<div className="list-items">
						<div className="title">
							Add student
						</div>
						<div className="form-group">
                    		<input className="input-form" type="text" name="subject" placeholder="Name" />
                		</div>
						<div className="form-group">
                    		<input className="input-form" type="text" name="subject" placeholder="Last name" />
                		</div>
						<div className="form-group">
                    		<input className="input-form" type="text" name="subject" placeholder="UID" />
                		</div>
						<div className="form-group">
                    		<input className="input-form" type="text" name="subject" placeholder="Degree" />
                		</div>
						
						<button className="button-spice2" type="button" onClick={this.AddMethod.bind(this)}>&#43;</button>
					</div>
						
				</div>
				
        )
    }
}