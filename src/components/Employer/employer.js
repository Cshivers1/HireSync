var user = {
    basicInfo: {
      name: "",
      type: "",
      est: "",
      location: "San Diego, CA",
      photo: "",
    
    }
  }
  
  
  class Avatar extends React.Component {
    render() {
      var image = this.props.image,
          style = {
            width: this.props.width || 50,
            height: this.props.height || 50
          }; 
      
      if (!image) return null;
      
      return (
       <div className="avatar" style={style}>
             <img src={this.props.image} /> 
        </div>
      );
    }
  }
  
  class MainPanel extends React.Component {
    render() {
      var info = this.props.info;
      if (!info) return null;
      
      return (
       <div>
          <div className="top">
              <Avatar 
                 image={info.photo} 
                 width={100}
                 height={100}
              /> 
              <h2>{info.name}</h2>
              <h3>{info.location}</h3>
            
            */can add to this */
            
            <hr />
              <p>{info.email} | {info.birthday}</p>
          </div>
          
          <div className="bottom">
            <h4>Biography</h4>
            <p>{info.bio}</p>
          </div>
        </div>
      );
    }
  }
  
  
  class UserProfile extends React.Component {
    render() {
      return (
        <div id="user-profile">
          <MainPanel info={user.basicInfo} />
        </div>
      )
    }
  }
  
  React.render(<UserProfile />, document.getElementById('root'))