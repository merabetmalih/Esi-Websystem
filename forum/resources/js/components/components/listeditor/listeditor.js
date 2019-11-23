import React from "react" ;
import ReactDOM from 'react-dom';
import {Panel} from '../index';

const list2 = ['haroune' , 'kechaoui' , '221452' , '5eme'];
const list22 = ['haroune' , 'kechaoui' , '45872' , '5eme'];
const list = [list2 , list22 ] ;
export class ListEditor extends React.Component {
    constructor(props){
		super(props);
		this.state = {studentList : list}
	}
	
	AddMethod(){
		const name = document.getElementById("name").value ;
		const lastName = document.getElementById("lastn").value ;
		const SID = document.getElementById("uid").value;
		const degree = document.getElementById("deg").value;

		if(name != '' && lastName != '' && SID != '' && degree != ''){
			const listx = [ name , lastName , SID , degree];
			list.push(listx);
			this.setState({
				studentList : list
			})
		}
	}

	RemoveMethod(itemIndex){
		list.splice(itemIndex , 1);
		this.setState({
			studentList : list
		})
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
				<div className="Two-container">
					<button className="back-button" onClick={this.back.bind(this)}>&#8592;</button>
					<div className="list-items">
					<div className="title">
							Student List
						</div>
						<ol>
							{this.state.studentList.map(item => {
								return(
								<li className="list-item" key={item}>
									<div>
									<ul className="list-mini-item">
											{item.map(miniitem =>{
												return(
													<li className="list-mini-item" key={miniitem[2]}>
														{miniitem}
													</li>
												)
											})}
										</ul>
										<button className="button-spice1" 
										type="button" 
										onClick={() => this.RemoveMethod(this.state.studentList.indexOf(item))}>
											&minus;
										</button>
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
                    		<input className="input-form" id="name" type="text" name="subject" placeholder="Name" />
                		</div>
						<div className="form-group">
                    		<input className="input-form" id="lastn" type="text" name="subject" placeholder="Last name" />
                		</div>
						<div className="form-group">
                    		<input className="input-form" id="uid" type="text" name="subject" placeholder="UID" />
                		</div>
						<div className="form-group">
                    		<input className="input-form" id="deg" type="text" name="subject" placeholder="Degree" />
                		</div>
						
						<button className="button-spice2" type="button" onClick={() => this
							.AddMethod()}>&#43;</button>
					</div>
						
				</div>
				
        )
    }
}