import React from 'react'
import "./Contact.css"
class Contact extends React.Component{
    constructor(){
        super()
        this.state={
            firstname:"",
            lastname:"",
            massage:""
        }
    }
    submit_hendler = (e)=>{
        e.preventDefault();
        console.log(this.state)
    }

    change_hendler = (e)=> {
        // console.log(e)
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]:value
        })
    }
    
    render(){
        return (
            <div className="container">
                <form action="/action_page.php" onSubmit={this.submit_hendler}>
                    <div className="row">
                        <div className="col-25">
                        <label forhtml="fname">First Name</label>
                        </div>
                        <div className="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." value={this.state.fname} onChange={this.change_hendler}/>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label forhtml="lname">Last Name</label>
                        </div>
                        <div className="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={this.state.lname} onChange={this.change_hendler} />
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label forhtml="subject">Subject</label>
                        </div>
                        <div className="col-75">
                        <textarea id="subject" name="massage" placeholder="Write something.." style={{height:"200px"}} value={this.state.massage} onChange={this.change_hendler}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
          </div>
        )
    }
}

export default Contact;
