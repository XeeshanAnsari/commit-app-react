
  var config = {
    apiKey: "AIzaSyBkizh0lSv1Azyx2HQXDChkXyn6LXLG29Q",
    authDomain: "react-commit.firebaseapp.com",
    databaseURL: "https://react-commit.firebaseio.com"
    
  };
  firebase.initializeApp(config);



  class CommentList extends React.Component{
      
  }
  class CommentBox extends React.Component{
     
     handleCommentSubmit(comment) {
         this.firebaseRefs['data'].push(comment);
         
     } 
    componentWillMount(){
         this.bindAsArray(firebase.database().ref('commentsBox'), 'data');
          // Here we bind the component to Firebase and it handles all data updates,
    }
    render(){
        return(
            <div className='commentBox'>
                <h1>Comments </h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        )

    }

  }
  class CommentFrom extends React.Component{

      handleSubmit(e){
        event.preventDefault();
        this.props.onCommentSubmit({
            author: this.refs.author.value.trim(),
            text: this.refs.text.value.trim()
        });
        this.refs.author.value = '';
        this.refs.text.value = '';

      }   
      render(){
          return(
               <form className='form-group' onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Your name' ref='author' class="form-control" />
                    <input type='text' placeholder='Say something...' ref='text' class="form-control" />
                    <input type='submit' className="btn btn-info" value='Post' />
                </form>
          )
      }  
      
  }

  ReactDOM.render(<CommentBox />,document.getElementById('contant'));



